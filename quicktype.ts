import fs from 'graceful-fs';
import {
  InputData,
  TypeScriptTargetLanguage,
  jsonInputForTargetLanguage,
  quicktype,
} from 'quicktype-core';

/* ------------------ */

const ENTRYPOINT =
  'https://api.rtve.es/api/agr-programas/{code}/programas.json';
const NAME = 'AgrDirectos';
const MAX_ITERATIONS = 5000;
const FILE_PATH = './example.ts';

/* ------------------ */

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
  console.info('saved to', FILE_PATH);
}

async function main() {
  const entries = generateEntries();
  const samples = await entries.reduce<Promise<string[]>>(
    reduceEntries,
    Promise.resolve([]),
  );
  const file = await quicktypeJSON(NAME, samples);
  await saveType(file);
}

main();
