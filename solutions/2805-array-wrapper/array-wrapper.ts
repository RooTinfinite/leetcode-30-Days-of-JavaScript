interface ArrayWrapper {
    nums: number[];
    valueOf: () => number;
    toString: () => string;
}

function ArrayWrapper(this: ArrayWrapper, nums: number[]): void {
    this.nums = nums;
}

ArrayWrapper.prototype.valueOf = function(this: ArrayWrapper): number {
    return this.nums.reduce((a, b) => a + b, 0);
};

ArrayWrapper.prototype.toString = function(this: ArrayWrapper): string {
    return '[' + this.nums.toString() + ']';
};
