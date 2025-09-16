"use strict";
const introduction = (student) => {
    console.log(`Ten toi la ${student.name}, toi ${student.age} tuoi, va email cua toi la ${student.email}`);
};
const studentIntroduction = {
    name: "Nguyen Nhat Minh",
    age: 19,
    email: "nguyennhatminh@gmail.com",
};
introduction(studentIntroduction);