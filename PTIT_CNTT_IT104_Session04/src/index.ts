const numbers : number[] = [1,2,3,4,5];

const characters : Array <string> = ["A", "B", "C"];

interface User {
    id: number;
    name: string;
    age : number;
}

interface Employees extends User {
    salary : number;
}

type StudentInfo = {
    id : number;
    name : string;
    age: number;
}

const user : {name:string} = {
    name: "Nguyen Van A",
}


const score : number | string | null = 10;

const point : {x: number; y: number} = {
    x:10,
    y:20,
};

type Dog = {
    make : string;
}
type Cat = {
    id: number;
    name : string;
}
type Tiger = {
    height : number;
}
type Animal = Cat & Dog & Tiger;  