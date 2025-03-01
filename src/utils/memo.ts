// https://retz.dev/blog/typescript-memoization
export default function memoFn<T extends unknown[], A>(fn: (...args: T) => A) {
  const cache = new Map<string, A>();

  return function (...args: T) {
    console.log(cache);

    const key = args.map((arg) => `${arg}_${typeof arg}`).join('|');

    if (cache.has(key)) {
      return cache.get(key) as A;
    }
    const result = fn(...args);

    cache.set(key, result);
    return result;
  };
}
