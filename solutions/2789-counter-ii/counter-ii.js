var createCounter = function(init) {
    let cnt = init;
    return{
        increment: () => cnt+=1, decrement: () => cnt-=1, reset: () => (cnt=init),
    }
};