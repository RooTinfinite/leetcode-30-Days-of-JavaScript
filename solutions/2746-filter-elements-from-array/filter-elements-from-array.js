var filter = function(arr, fn) {
    return arr.reduce((acc, curr, i) => {
    fn(curr,i) && acc.push(curr) 
    return acc
    } ,[])
};