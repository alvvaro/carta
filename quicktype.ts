import fs from 'graceful-fs';
import {
  InputData,
  TypeScriptTargetLanguage,
  jsonInputForTargetLanguage,
  quicktype,
} from 'quicktype-core';

/* ------------------ */

const ENTRYPOINT = 'https://www.rtve.es/api/programas.json?page={code}';
const NAME = 'Programas';
const MAX_ITERATIONS = 237;
const FILE_PATH = './src/types/Program.d.ts';

/* ------------------ */

async function delay(del: number = 1000) {
  return await new Promise((resolve) => setTimeout(resolve, del));
}

function generateEntries() {
  const entries: string[] = [];

  if (ENTRYPOINT.includes('{codeA}') && ENTRYPOINT.includes('{codeB}')) {
    //
  } else if (ENTRYPOINT.includes('{code}')) {
    let counter = MAX_ITERATIONS;

    while (counter) {
      entries.unshift(ENTRYPOINT.replace('{code}', counter.toString()));
      counter--;
    }
  } else {
    entries.push(ENTRYPOINT);
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
  const json = await fetchJSON(val);
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
  const entries = generateEntries();
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
