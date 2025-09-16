let strNumber: string = "2";
let numNumber: number = 2;

let val1: unknown = strNumber;
let val2: unknown = numNumber;

console.log(val1 == val2);  // true
console.log(val1 === val2); // false