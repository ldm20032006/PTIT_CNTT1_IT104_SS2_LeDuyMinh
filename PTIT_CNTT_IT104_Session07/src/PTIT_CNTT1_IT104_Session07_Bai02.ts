class Vehicle{
    protected name: string;
    protected speed: number;
    protected id:number;

    constructor(name: string,speed: number,id:number){
        this.name = name;
        this.speed = speed;
        this.id = id;
    }
      public slowDown(amount: number): void {
        this.speed = Math.max(0, this.speed - amount); // không cho tốc độ âm
      }
    
      public speedUp(amount: number): void {
        this.speed += amount;
      }
    
      public showSpeed(): void {
        console.log(`Tốc độ hiện tại của ${this.name} là ${this.speed} km/h`);
      }
}

class Bicycle extends Vehicle {
    private gear: number;
  
    constructor(name: string, speed: number, id: number, gear: number) {
      super(name, speed, id);
      this.gear = gear;
    }
    public showInfo(): void {
        console.log(`Xe đạp: ${this.name}, ID: ${this.id}, Số bánh răng: ${this.gear}`);
        this.showSpeed();
      }
    }
    const myBike = new Bicycle("Xe đạp thể thao", 10, 1, 21);
    
    myBike.showInfo();    // Thông tin ban đầu
    myBike.speedUp(15);   // Tăng tốc 15 km/h
    myBike.showSpeed();   // Xem tốc độ sau khi tăng
    myBike.slowDown(5);   // Giảm tốc 5 km/h
    myBike.showSpeed();   // Xem tốc độ sau khi giảm

