"use strict";
// class User{
//     name: string;
//     constructor(name: string){
//         this.name = name;
//     }
// }
// const u = new User("Tom");
// console.log(u.name);
class Student {
    constructor(name, dateOfBirth, email) {
        this.name = name;
        this.dateOfBirth = dateOfBirth;
        this.email = email;
    }
    //Atributes(Phuong thuc)
    study() {
        return "Studying";
    }
}
const student1 = new Student("Nguyen Van A", "20/02/2000", "A@gmail.com");
console.log(student1);
