function curry(fn: Function): Function {
  return function curried(...args: any[]) {
    if (args.length >= fn.length) {
      return fn.apply(this, args);
    }
    return function (...innerArgs: any[]) {
      return curried.apply(this, args.concat(innerArgs));
    };
  };
};