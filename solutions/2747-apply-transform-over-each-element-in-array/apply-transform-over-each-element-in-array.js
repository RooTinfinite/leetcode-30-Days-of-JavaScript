const map = (arr, fn) => {
    for (let i = 0, len = arr.length; i < len; i++) arr[i] = fn(arr[i], i);
    return arr;
};