import fs from 'graceful-fs';
import nodePath from 'node:path';
import {
  InputData,
  TypeScriptTargetLanguage,
  jsonInputForTargetLanguage,
  quicktype,
} from 'quicktype-core';

/* ------------------ */

const ENTRYPOINT: string = '';
const ENTRYPOINT_FILE: string = './samples-flat/api_tematicas_{%%}.json';
const NAME = 'Topics';
const MAX_ITERATIONS = 237;
const FILE_PATH = './src/types/Topics.d.ts';

/* ------------------ */

async function delay(del: number = 1000) {
  return await new Promise((resolve) => setTimeout(resolve, del));
}

async function generateEntries() {
  const entries: string[] = [];

  if (ENTRYPOINT_FILE) {
    const path = ENTRYPOINT_FILE.split('/').slice(0, -1).join('/');
    const fullPath = nodePath.resolve(path);
    const [fileTemplate] = ENTRYPOINT_FILE.split('/').slice(-1);
    const [beginning, end] = fileTemplate.split('{%%}');

    const files = await fs.promises.readdir(path);

    for (const file of files) {
      const begins = file.startsWith(beginning);
      const ends = file.endsWith(end);
      const middle =
        (file.split(beginning).at(-1) || '').split(end).at(0) || '';

      if (begins && ends && !Number.isNaN(+middle)) {
        entries.push(`${fullPath}/${file}`);
      }
    }
  } else if (ENTRYPOINT) {
    if (ENTRYPOINT.includes('{code}')) {
      let counter = MAX_ITERATIONS;

      while (counter) {
        entries.unshift(ENTRYPOINT.replace('{code}', counter.toString()));
        counter--;
      }
    } else {
      entries.push(ENTRYPOINT);
    }
  }

  return entries;
}

async function fetchJSON(url: string) {
  try {
    const response = await fetch(url);
    const responseContentType = response.headers.get('Content-Type');
    const isResponseJson =
      responseContentType?.includes('application/json') || false;

    if (isResponseJson) {
      return JSON.stringify(await response.json());
    } else {
      return undefined;
    }
  } catch (error) {
    console.log('error while fetching', url, error);
    return undefined;
  }
}

async function reduceEntries(accP: Promise<string[]>, val: string) {
  const acc = await accP;

  await delay();
  console.log('fetching', val);
  let json: string | undefined;

  if (val.startsWith('http')) {
    json = await fetchJSON(val);
  } else {
    json = await fs.promises.readFile(val).then((bf) => bf.toString());
  }

  if (json) {
    acc.push(json);
  }

  return acc;
}

async function quicktypeJSON(name: string, samples: string[]) {
  const lang = new TypeScriptTargetLanguage();

  const jsonInput = jsonInputForTargetLanguage(lang);
  await jsonInput.addSource({ name, samples });

  const inputData = new InputData();
  inputData.addInput(jsonInput);

  return await quicktype({
    inputData,
    lang,
    rendererOptions: {
      'just-types': true,
      'prefer-unions': true,
      'prefer-const-values': true,
    },
  });
}

async function saveType(type: Awaited<ReturnType<typeof quicktypeJSON>>) {
  await fs.promises.writeFile(FILE_PATH, type.lines.join('\n'));
  console.info('Saved to', FILE_PATH, '. Exiting...');
}

async function main() {
  const entries = await generateEntries();
  console.log('Generated', entries.length, 'entries');
  const samples = await entries.reduce<Promise<string[]>>(
    reduceEntries,
    Promise.resolve([]),
  );
  console.log('Fetched', samples.length, 'samples');
  const file = await quicktypeJSON(NAME, samples);
  console.log('Type generated');
  await saveType(file);
}

main();
