"use strict";
class Vehicle {
    constructor(name, year, company) {
        this.name = name;
        this.year = year;
        this.company = company;
    }
    displayInfo() {
        console.log(`Tên xe: ${this.name}`);
        console.log(`Năm sản xuất: ${this.year}`);
        console.log(`Hãng xe: ${this.company}`);
        console.log("--------------------------");
    }
}
const vehicle1 = new Vehicle("Camry", 2020, "Toyota");
const vehicle2 = new Vehicle("Civic", 2022, "Honda");
vehicle1.displayInfo();
vehicle2.displayInfo();