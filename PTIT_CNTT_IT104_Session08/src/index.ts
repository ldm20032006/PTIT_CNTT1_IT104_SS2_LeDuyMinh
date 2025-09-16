const numbers: number[] = [];
const studentName: Array<string> = [];


const user: Record<string, string | number> = {
    id: "1",
    name: "A",
    age: "1"
}


interface CreateUserDto{
    id: number;
    name: string;
    age: number
}


const partialCreateUser: Partial<CreateUserDto> = {};

interface Point{
    x: number;
    y: number;
}

const point: Readonly<Point> = {
    x: 10,
    y: 20,
};


interface User {
    id: number;
    name: string;
    age: number;
    email: string;
    dateOfBirth: string;
    address: string;
}


const cloneUser: Pick<User, "id" | "name" | "age" > = {
    id: 1,
    name: "A",
    age: 20
};

const OmitUser: Omit<User, "id"> = {
    address: "Ha Noi",
    name: "A",
    age: 20,
    email: "A@gmail.com",
    dateOfBirth: "20/02/2005"
}