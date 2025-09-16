"use strict";
const sochan = (obj1) => {
    //T phai la 1 kieu number / union chua number
    // ( :T | undefined ) : kieu tra ve
    return obj1.find(num => num % 2 === 0);
};
console.log(sochan([1, 2, 3, 4]));
console.log(sochan([1, 3, 5]));
