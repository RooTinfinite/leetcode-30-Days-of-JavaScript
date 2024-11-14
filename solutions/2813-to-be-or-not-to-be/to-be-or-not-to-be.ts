const expect = (val) => {
    const throwError = (error) => { throw new Error(error)};

    return {
        toBe: (val2)=> val2 === val || throwError("Not Equal"),
        notToBe: (val2)=> val2 !== val || throwError("Equal"),
    };
}
