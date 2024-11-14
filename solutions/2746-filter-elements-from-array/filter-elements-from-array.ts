function filter(arr: number[], fn: (n: number, i: number) => any): number[] {
    const filteredArr: number[] = [];
    for (let i = 0; i < arr.length; i++) {
        if (fn(arr[i], i)) {
            filteredArr.push(arr[i]);
        }
    }
    return filteredArr;
};