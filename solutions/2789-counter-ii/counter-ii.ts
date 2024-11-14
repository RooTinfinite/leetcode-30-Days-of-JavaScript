type ReturnObj = {
    increment: () => number,
    decrement: () => number,
    reset: () => number,
}

function createCounter(init: number): ReturnObj {
    let cnt = init;
    return{
        increment: () => cnt+=1, decrement: () => cnt-=1, reset: () => (cnt=init),
    }
};
