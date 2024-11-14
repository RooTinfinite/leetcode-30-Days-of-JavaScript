const flat = function (arr: any[], n: number): any[] {
    if (n === 0) {
        return arr;
    }
    
    let answer: any[] = [];
    
    arr.forEach(element => {
        if (n > 0 && Array.isArray(element)) {
            answer.push(...flat(element, n - 1));
        } else {
            answer.push(element);
        }
    });
    
    return answer;
};