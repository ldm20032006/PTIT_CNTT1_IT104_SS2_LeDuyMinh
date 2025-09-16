let firstName: string = "john";
let lastName: string = "doe";

firstName = firstName[0].toUpperCase() + firstName.slice(1);
lastName = lastName[0].toUpperCase() + lastName.slice(1);

let fullName: string = `${firstName} ${lastName}`;
console.log(fullName);