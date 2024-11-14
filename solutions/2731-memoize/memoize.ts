type Args = any[];
type MemoizedFn<T> = (...args: Args) => T;

function memoize<T>(fn: MemoizedFn<T>): MemoizedFn<T> {
  const cache: Record<string, T> = {};
  return function (...args: Args) {
    const key = JSON.stringify(args);
    if (key in cache) {
      return cache[key];
    }
    const result = fn(...args);
    cache[key] = result;
    return result;
  }
}