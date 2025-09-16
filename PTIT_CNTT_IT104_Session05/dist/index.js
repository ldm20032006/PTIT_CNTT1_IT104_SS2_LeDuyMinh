"use strict";
class Student {
    constructor(name, dateOfBirth, email) {
        this.name = name;
        this.email = email;
        this.dateOfBirth = dateOfBirth;
    }
    study() {
        return "Studying";
    }
}