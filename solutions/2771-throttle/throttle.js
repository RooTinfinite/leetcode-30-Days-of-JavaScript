var throttle = function(fn, t) {
  let timeoutInProgress = null;
  let argsToProcess = null;
  
  const timeoutFunction = () => {
    if (argsToProcess === null) {
      timeoutInProgress = null; // enter the waiting phase
    } else {
      fn(...argsToProcess);
      argsToProcess = null;
      timeoutInProgress = setTimeout(timeoutFunction, t);
    }
  };

  return function throttled(...args) {
    if (timeoutInProgress) {
      argsToProcess = args;
    } else {
      fn(...args); // enter the looping phase
      timeoutInProgress = setTimeout(timeoutFunction, t);
    }
  }
};