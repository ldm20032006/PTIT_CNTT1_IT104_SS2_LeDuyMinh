function flattern<T>(obj1: T[][]): T[]{
    let result: T[] = [];
    for (const newArr of obj1) {
        result = result.concat(newArr);
    }
    return result;
}
console.log(flattern([
    [1, 2], 
    [3, 4], 
    [5, 6],
]));