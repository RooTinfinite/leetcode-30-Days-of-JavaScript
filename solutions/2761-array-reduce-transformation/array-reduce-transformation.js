var reduce = function(nums, fn, init) {
    let val=init;
    for(var x of nums)
    {
        val=fn(val,x);
    }
    return val;
};