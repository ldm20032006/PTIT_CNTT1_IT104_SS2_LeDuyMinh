"use strict";
class Vehicle {
    constructor(name, speed, id) {
        this.name = name;
        this.speed = speed;
        this.id = id;
    }
    slowDown(amount) {
        this.speed = Math.max(0, this.speed - amount); // không cho tốc độ âm
    }
    speedUp(amount) {
        this.speed += amount;
    }
    showSpeed() {
        console.log(`Tốc độ hiện tại của ${this.name} là ${this.speed} km/h`);
    }
}
class Bicycle extends Vehicle {
    constructor(name, speed, id, gear) {
        super(name, speed, id);
        this.gear = gear;
    }
    showInfo() {
        console.log(`Xe đạp: ${this.name}, ID: ${this.id}, Số bánh răng: ${this.gear}`);
        this.showSpeed();
    }
}
const myBike = new Bicycle("Xe đạp thể thao", 10, 1, 21);
myBike.showInfo(); // Thông tin ban đầu
myBike.speedUp(15); // Tăng tốc 15 km/h
myBike.showSpeed(); // Xem tốc độ sau khi tăng
myBike.slowDown(5); // Giảm tốc 5 km/h
myBike.showSpeed(); // Xem tốc độ sau khi giảm
