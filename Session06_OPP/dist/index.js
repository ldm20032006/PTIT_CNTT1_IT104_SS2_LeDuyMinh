"use strict";
class User {
    getName() {
        console.log("Nguyen Van A");
    }
}
class Employee extends User {
    run() {
        throw new Error("Method not implemented.");
    }
    study() {
        throw new Error("Method not implemented.");
    }
    //Ghi de lai cac phuong thuc co san trong User
    getName() {
        console.log("Employee name");
    }
}
// interface Animal{
//     name: string;
//     makeSound(): void;
// }
// class Dog implements Animal{
//     name: string;
//     constructor(name: string){
//         // name = Kiki
//         this.name = name;
//     }
//     makeSound(): void {
//         throw new Error("Method not implemented.");
//     }
// }
// const dog = new Dog("Kiki");
// console.log(dog);
