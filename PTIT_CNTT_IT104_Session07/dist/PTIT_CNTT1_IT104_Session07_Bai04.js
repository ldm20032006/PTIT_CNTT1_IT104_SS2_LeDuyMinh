"use strict";
class Person {
    constructor(name) {
        this.name = name;
    }
}
class Student extends Person {
    constructor(name, id) {
        super(name);
        this.id = id;
    }
    displayInfo() {
        console.log(`Sinh viên: ${this.name}, Mã SV: ${this.id}`);
    }
}
class Teacher extends Person {
    constructor(name, subject) {
        super(name);
        this.subject = subject;
    }
    displayInfo() {
        console.log(`Giáo viên: ${this.name}, Môn: ${this.subject}`);
    }
}
// --- Chạy thử ---
const student = new Student("Nguyễn Văn A", 12345);
student.displayInfo();
const teacher = new Teacher("Trần Thị B", "Toán");
teacher.displayInfo();
