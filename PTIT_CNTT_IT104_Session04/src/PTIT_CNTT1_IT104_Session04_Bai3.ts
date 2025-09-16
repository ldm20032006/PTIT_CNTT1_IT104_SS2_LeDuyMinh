interface Students {
    name : string;
    age : number;
    email : string;
}

const introduction = (student : Students): void => {
    console.log(`Ten toi la ${student.name}, toi ${student.age} tuoi, va email cua toi la ${student.email}`);
}

const studentIntroduction : Students = {
    name: "Nguyen Nhat Minh",
    age: 19,
    email: "nguyennhatminh@gmail.com",
}
introduction(studentIntroduction);