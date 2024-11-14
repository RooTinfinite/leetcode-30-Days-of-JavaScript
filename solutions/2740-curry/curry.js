var curry = function(fn) {
 return function curried(...args) {
    if (args.length < fn.length) {
      return function(...args2) {
        return curried(...args, ...args2);
      }
    }
    return fn(...args);
  };
};