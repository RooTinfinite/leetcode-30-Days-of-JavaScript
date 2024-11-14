declare global {
    interface Array<T> {
        groupBy(fn: (item: T) => string): Record<string, T[]>
    }
}

Array.prototype.groupBy = function(fn) {
    const hash = {}
    for (let item of this){
        const key = fn(item)
        hash[key] ||= []
        hash[key].push(item)
    }
    return hash
}