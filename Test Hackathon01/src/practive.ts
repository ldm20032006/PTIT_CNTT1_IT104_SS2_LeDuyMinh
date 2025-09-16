abstract class Ecommerce {
    public name: string;

    constructor(name: string) {
        this.name = name;
    }
}

let customerIdCounter = 1;
class Customer extends Ecommerce {

    public readonly id: number;
    public email: string;
    public shippingAddress: string; // Địa chỉ vận chuyển

    constructor(name: string, email: string, shippingAddress: string) {
        super(name); // gọi constructor lớp cha
        this.id = customerIdCounter++;
        this.email = email;
        this.shippingAddress = shippingAddress;
    }

    getDetails(): string {
        return `Khách hàng #${this.id} - ${this.name}
  Email: ${this.email}
  Địa chỉ giao hàng: ${this.shippingAddress}`;
    }
}

let productIdCounter = 1;
abstract class Product extends Ecommerce {

    public readonly id: number;
    public price: number;
    public stock: number;

    constructor(name: string, price: number, stock: number) {
        super(name); // gọi constructor lớp cha
        this.id = productIdCounter++;
        this.price = price;
        this.stock = stock;
    }

    // Giảm số lượng tồn kho khi bán
    sell(quantity: number): void {
        if (quantity <= 0) {
            throw new Error("Số lượng bán phải lớn hơn 0.");
        }
        if (quantity > this.stock) {
            throw new Error("Không đủ hàng trong kho.");
        }
        this.stock -= quantity;
    }

    // Tăng số lượng tồn kho khi nhập hàng
    restock(quantity: number): void {
        if (quantity <= 0) {
            throw new Error("Số lượng nhập phải lớn hơn 0.");
        }
        this.stock += quantity;
    }

    abstract getProductInfo(): string; // Trả về thông tin đặc thù của sản phẩm
    abstract getShippingCost(distance: number): number; // Tính chi phí vận chuyển
    abstract getCategory(): string; // Trả về danh mục sản phẩm
}

class ElectronicsProduct extends Product {
    public warrantyPeriod: number; // tháng

    constructor(name: string, price: number, stock: number, warrantyPeriod: number) {
        super(name, price, stock);
        this.warrantyPeriod = warrantyPeriod;
    }

    getProductInfo(): string {
        return `Sản phẩm: ${this.name}
  Giá: ${this.price.toLocaleString("vi-VN")} VND
  Tồn kho: ${this.stock}
  Bảo hành: ${this.warrantyPeriod} tháng`;
    }

    getShippingCost(distance: number): number {
        return 50000; // phí cố định
    }

    getCategory(): string {
        return "Electronics";
    }
}

class ClothingProduct extends Product {
    public size: string;
    public color: string;

    constructor(name: string, price: number, stock: number, size: string, color: string) {
        super(name, price, stock);
        this.size = size;
        this.color = color;
    }

    getProductInfo(): string {
        return `Sản phẩm: ${this.name}
  Giá: ${this.price.toLocaleString("vi-VN")} VND
  Tồn kho: ${this.stock}
  Kích cỡ: ${this.size}
  Màu sắc: ${this.color}`;
    }

    getShippingCost(distance: number): number {
        return 25000; 
    }

    getCategory(): string {
        return "Clothing";
    }
}

let oderIdCounter = 1;
class Order {
  
    public readonly orderId: number;
    public customer: Customer;
    public products: { product: Product; quantity: number }[];
    public totalAmount: number;
  
    constructor(customer: Customer, products: { product: Product; quantity: number }[]) {
      this.orderId = oderIdCounter++;
      this.customer = customer;
      this.products = products;
  
      // Tính tổng giá trị đơn hàng
      this.totalAmount = this.products.reduce(
        (sum, item) => sum + item.product.price * item.quantity,
        0
      );
    }
  
    getDetails(): string {
      let productList = this.products
        .map(
          (item, index) =>
            `${index + 1}. ${item.product.name} - SL: ${item.quantity} - Giá: ${item.product.price.toLocaleString("vi-VN")} VND`
        )
        .join("\n");
  
      return `Đơn hàng #${this.orderId} 
  Khách hàng: ${this.customer.getDetails()}
  Danh sách sản phẩm:
  ${productList}
  Tổng giá trị: ${this.totalAmount.toLocaleString("vi-VN")} VND`;
    }
  }
  class Store{
    
  }

const e1 = new ElectronicsProduct("Tai nghe Bluetooth", 500000, 20, 12);
console.log(e1.getProductInfo());
console.log("Phí vận chuyển:", e1.getShippingCost(10).toLocaleString("vi-VN"), "VND");
console.log("Danh mục:", e1.getCategory());

const cP1 = new ClothingProduct("Áo thun nam", 150000, 50, "L", "Đen");
console.log(cP1.getProductInfo());
console.log("Phí vận chuyển:", cP1.getShippingCost(5).toLocaleString("vi-VN"), "VND");
console.log("Danh mục:", cP1.getCategory());

const c1 = new Customer("Nguyễn An", "an@example.com", "123 Lê Lợi, Hà Nội");
console.log(c1.getDetails());

const c2 = new Customer("Trần Bình", "binh@example.com", "45 Nguyễn Huệ, TP.HCM");
console.log(c2.getDetails());
