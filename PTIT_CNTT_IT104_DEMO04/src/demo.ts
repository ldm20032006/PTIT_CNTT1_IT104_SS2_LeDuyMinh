// class User{
//     name: string;
//     constructor(name: string){
//         this.name = name;
//     }
// }

// const u = new User("Tom");
// console.log(u.name);

class Student{
    //Properties(thuoc tinh)
    name: string;
    dateOfBirth: string;
    email: string;

    constructor(name: string, dateOfBirth: string, email: string){
    this.name = name;
    this.dateOfBirth = dateOfBirth;
    this.email = email;
    }

    //Atributes(Phuong thuc)
    study(): string{
        return "Studying";
    }
}

const student1 = new Student("Nguyen Van A", "20/02/2000", "A@gmail.com");
console.log(student1);