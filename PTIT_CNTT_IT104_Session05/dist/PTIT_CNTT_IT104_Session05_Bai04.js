"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Vehicle {
    constructor(id, name, year, company) {
        this.id = id;
        this.name = name;
        this.year = year;
        this.company = company;
    }
    printInfo() {
        console.log(`ID: ${this.id}`);
        console.log(`Tên: ${this.name}`);
        console.log(`Năm sản xuất: ${this.year}`);
        console.log(`Hãng: ${this.company}`);
    }
}
const vehicle1 = new Vehicle("V001", "Mercedes Benz", 2022, "Mercedes");
vehicle1.printInfo();