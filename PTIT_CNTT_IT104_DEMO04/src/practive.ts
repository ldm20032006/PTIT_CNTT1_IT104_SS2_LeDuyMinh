class Animal{
    private name: string;
    protected age: number;
    public species: string;

    constructor(
     name: string,
     age: number,
     species: string
    ){
        this.name = name;
        this.age = age;
        this.species = species;
    }

    get getName(): string{
        return this.name;
    }

    set setName(newName: string){
        this.name = newName;
    }

    get getAge(): number{
        return this.age;
    }

    set setAge(newAge: number){
        this.age = newAge;
    }

    speak(): void{
        console.log("Animal sound");
    }
}

class Dog extends Animal{
    public breed: string;

    constructor(name: string, age: number, species: string, breed: string){
        super(name, age, breed);
        this.breed = breed;
    }
    speak() {
        console.log("Gau gau");
    }
}

class Cat extends Animal{
    public breed: string;

    constructor(name: string, age: number, species: string, breed: string){
        super(name, age, breed);
        this.breed = breed;
    }
    speak() {
        console.log("Meo meo");
    }
}

class Rabbit extends Animal{
    public breed: string;

    constructor(name: string, age: number, species: string, breed: string){
        super(name, age, breed);
        this.breed = breed;
    }
    speak() {
        console.log("He he");
    }
}

//Trien khai
const dog = new Dog("Micky", 10, "Dog", "Husky");
dog.setName = "Lu lu"; 

console.log("Dog: ", dog);

const cat = new Cat("Bong", 3, "Cat", "Mèo Tai Cụp");
cat.setName = "Bang"

console.log("Cat: ", cat);