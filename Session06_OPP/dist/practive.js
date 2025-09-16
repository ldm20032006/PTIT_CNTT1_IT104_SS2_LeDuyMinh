"use strict";
class Animal {
    constructor(name, age, category, foodType) {
        this.name = name;
        this.age = age;
        this.category = category;
        this.foodType = foodType;
    }
    getDetails() {
        return `Name: ${this.name} - Age: ${this.age} - Category: ${this.category} - foodType: ${this.foodType}`;
    }
}
class Mammal extends Animal {
    sound() {
        throw new Error("Method not implemented.");
    }
    constructor(name, age, category, foodType, furColor) {
        super(name, age, "Mammal", "Mammal Food");
        this.furColor = furColor;
    }
    feed() {
        throw new Error("Method not implemented.");
    }
    move() {
        console.log("Phach Phach");
    }
}
class Bird extends Animal {
    sound() {
        throw new Error("Method not implemented.");
    }
    constructor(name, age, category, foodType, furColor, wingSpan) {
        super(name, age, "Bird", "Bird Food");
        this.wingSpan = wingSpan;
    }
    feed() {
        throw new Error("Method not implemented.");
    }
    move() {
        console.log("Flying...");
    }
}
class RepTile extends Animal {
    sound() {
        throw new Error("Method not implemented.");
    }
    constructor(name, age, category, foodType, venomous) {
        super(name, age, "RepTile", "Reptile Food");
        this.venomous = venomous;
    }
    feed() {
        throw new Error("Method not implemented.");
    }
    move() {
        console.log("Dang bo");
    }
}
// const animals: Animal[]=[
//     new Mammal("Lion", 10, "white");
//     new Bird("Chicken", 1, 100);
//     new RepTile("Snake", 1, true);
// ]
