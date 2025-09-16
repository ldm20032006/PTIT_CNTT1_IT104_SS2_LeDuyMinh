//B1
// abstract class Shape {
//     protected name: string;
//     constructor(name: string) {
//       this.name = name;
//     }
//     getName(): string {
//       return this.name;
//     }
  
//     abstract getSize(): void;
//   }
  
//   class Rectangle extends Shape {
//     private width: number;
//     private height: number;
//     constructor(name: string, width: number, height: number) {
//       super(name);
//       this.width = width;
//       this.height = height;
//     }
//     getSize(): void {
//       console.log(
//         `Hình: ${this.getName()}
//          Chiều rộng: ${this.width}
//          Chiều cao: ${this.height}
//         `
//       );
//     }
//   }
  
//   const rect = new Rectangle("Hình chữ nhật", 10, 5);
//   rect.getSize();


//Bai 3
// abstract class Shape {
//     abstract getArea(): number;
//     getInfo(): void {
//       console.log(`Diện tích: ${this.getArea()}`);
//     }
//   }
  
//   class Square extends Shape {
//     private size: number;
//     constructor(size: number) {
//       super();
//       this.size = size;
//     }
//     getArea(): number {
//       return this.size ** 2;
//     }
//   }
  
//   class Circle extends Shape {
//     constructor(private radius: number) {
//       super();
//     }
//     getArea(): number {
//       return Math.PI * this.radius ** 2;
//     }
//   }
  
//   const s = new Square(5);
//   const c = new Circle(3);
  
//   s.getInfo();
//   c.getInfo();

  //Bai 4
  interface Geometry {
  calculateArea(): number;
  calculatePerimeter(): number;
  printInfo(): void;
}

class Circle implements Geometry {
  constructor(private radius: number) {}
  calculateArea(): number {
    return Math.PI * this.radius ** 2;
  }
  calculatePerimeter(): number {
    return 2 * Math.PI * this.radius;
  }
  printInfo(): void {
    console.log(
      `Diện tích ${this.calculateArea()} - Chu vi: ${this.calculatePerimeter()}`
    );
  }
}

class Rectangle implements Geometry {
  constructor(private width: number, private height: number) {}
  calculateArea(): number {
    return this.width * this.height;
  }
  calculatePerimeter(): number {
    return (this.width + this.height) * 2;
  }
  printInfo(): void {
    console.log(
      `Diện tích ${this.calculateArea()} - Chu vi: ${this.calculatePerimeter()}`
    );
  }
}

const c = new Circle(5);
const s = new Rectangle(10, 5);

c.printInfo();
s.printInfo();