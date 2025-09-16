"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Student {
    constructor(id, age, email) {
        this.id = id;
        this.age = age;
        this.email = email;
    }
    displayInfo() {
        console.log(`ID: ${this.id}, Tuổi: ${this.age}, Email: ${this.email}`);
    }
}
const students = [];
students.push(new Student(1, 20, "sv1@example.com"));
students.push(new Student(2, 21, "sv2@example.com"));
students.push(new Student(3, 19, "sv3@example.com"));
students.forEach(student => student.displayInfo());