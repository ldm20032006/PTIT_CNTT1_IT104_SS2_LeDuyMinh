interface IAnimal{
    name: string;
    age: number;
    category: string;

    sound(): string;
    getDetails(): string;
    move(): void;
    feed(): void;
}

abstract class Animal implements IAnimal {
    name: string;
    age: number;
    category: string;
    foodType: string;

    constructor(name: string, age: number, category: string, foodType: string){
        this.name = name;
        this.age = age;
        this.category = category;
        this.foodType = foodType;
    }

    getDetails(): string {
        return `Name: ${this.name} - Age: ${this.age} - Category: ${this.category} - foodType: ${this.foodType}`;
    }

    abstract sound(): string;
    abstract move(): void;
    abstract feed(): void;
}


class Mammal extends Animal {
    private furColor: string;



    sound(): string {
        throw new Error("Method not implemented.");
    }

    constructor(name: string, age: number, category: string, foodType: string , furColor: string){
        super(name, age, "Mammal", "Mammal Food");
        this.furColor = furColor;
    }
    feed(): void {
        throw new Error("Method not implemented.");
    }

    move(): void{
        console.log("Phach Phach")
    }
}
class Bird extends Animal{
    sound(): string {
        throw new Error("Method not implemented.");
    }
    
    wingSpan: string;
    
    constructor(name: string, age: number, category: string, foodType: string , furColor: string, wingSpan: string){
        super(name, age, "Bird", "Bird Food");
        this.wingSpan = wingSpan;
    }
    feed(): void {
        throw new Error("Method not implemented.");
    }
    move(): void{
        console.log("Flying...");
    }
}

class RepTile extends Animal{
    sound(): string {
        throw new Error("Method not implemented.");
    }
    
    venomous: boolean;

    constructor(name: string, age: number, category: string, foodType: string , venomous: boolean){
        super(name, age, "RepTile", "Reptile Food");
        this.venomous = venomous;
    }
    feed(): void {
        throw new Error("Method not implemented.");
    }
    move(): void{
        console.log("Dang bo");
    }
}

// const animals: Animal[]=[
//     new Mammal("Lion", 10, "white");
//     new Bird("Chicken", 1, 100);
//     new RepTile("Snake", 1, true);
// ]

