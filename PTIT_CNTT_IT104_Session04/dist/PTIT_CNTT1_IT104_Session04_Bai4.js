"use strict";
const unionType = (input) => {
    if (typeof input === "string") {
        console.log(`${input.length}`);
    }
    else if (typeof input === "number") {
        if (input % 2 === 0) {
            console.log("Day la so chan");
        }
        else {
            console.log("Day la so le");
        }
    }
    else {
        console.log("Khong hop le");
    }
};
unionType("demo123");
unionType(10);