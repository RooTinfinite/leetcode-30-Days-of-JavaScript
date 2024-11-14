type Func<T, U> = (...args: T[]) => U;

function once<T, U>(fn: Func<T, U>): Func<T, U | undefined> {
  let hasBeenCalled = false;
  let result: U;

  return function (...args: T[]): U | undefined {
    if (!hasBeenCalled) {
      result = fn(...args);
      hasBeenCalled = true;
      return result;
    } else {
      return undefined;
    }
  }
}

// Example usage:
let fn = (a: number, b: number, c: number) => (a + b + c);
let onceFn = once(fn);

console.log(onceFn(1, 2, 3)); // 6
console.log(onceFn(2, 3, 6)); // undefined