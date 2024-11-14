function chunk(arr: any[], size: number): any[][] {
    const ans = [];

    while (arr.length > 0)
        ans.push(arr.splice(0, size));

    return ans;
}