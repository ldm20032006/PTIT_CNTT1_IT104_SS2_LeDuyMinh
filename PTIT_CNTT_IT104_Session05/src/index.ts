class Student {
    name : string;
    dateOfBirth : string;
    email : string;

    constructor(name:string,dateOfBirth:string,email:string){
        this.name=name;
        this.email=email;
        this.dateOfBirth=dateOfBirth;
    }
    study():string {
        return "Studying";
    }
}