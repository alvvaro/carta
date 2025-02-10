export function strBetween(str: string, beginning: string, end: string) {
  return (str.split(beginning).at(-1) || '').split(end).at(0) || '';
}

export function strConcat(...strs: string[]) {
  return strs.join(' ').trim();
}
