type Fn = (x: number) => number;

const compose = (functions: Fn[]): Fn => {
  if (functions.length === 0) {
    return (x: number) => x;
  } else {
    return (x: number) => {
      let result = functions[functions.length - 1](x);
      for (let i = functions.length - 2; i >= 0; i--) {
        result = functions[i](result);
      }
      return result;
    };
  }
};