var timeLimit = function(fn, t) {
  return async function(...args) {
    const timeLimitPromise = new Promise((resolve, reject) => {
      setTimeout(() => reject("Time Limit Exceeded"), t)
    });
    const returnedPromise = fn(...args);
    return Promise.race([timeLimitPromise, returnedPromise]);
  }
};