"use strict";
//B1
// abstract class Shape {
//     protected name: string;
//     constructor(name: string) {
//       this.name = name;
//     }
//     getName(): string {
//       return this.name;
//     }
class Circle {
    constructor(radius) {
        this.radius = radius;
    }
    calculateArea() {
        return Math.PI * Math.pow(this.radius, 2);
    }
    calculatePerimeter() {
        return 2 * Math.PI * this.radius;
    }
    printInfo() {
        console.log(`Diện tích ${this.calculateArea()} - Chu vi: ${this.calculatePerimeter()}`);
    }
}
class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    calculateArea() {
        return this.width * this.height;
    }
    calculatePerimeter() {
        return (this.width + this.height) * 2;
    }
    printInfo() {
        console.log(`Diện tích ${this.calculateArea()} - Chu vi: ${this.calculatePerimeter()}`);
    }
}
const c = new Circle(5);
const s = new Rectangle(10, 5);
c.printInfo();
s.printInfo();
