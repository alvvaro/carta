function* intersperse<T>(arr: T[], delim: string) {
  let first = true;
  for (const x of arr) {
    if (!first) yield delim;
    first = false;
    yield x;
  }
}

export default function intersperseArr<T>(arr: T[], delim: string) {
  return [...intersperse(arr, delim)];
}
