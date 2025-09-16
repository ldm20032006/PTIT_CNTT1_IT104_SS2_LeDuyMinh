"use strict";
class Ecommerce {
    constructor(name) {
        this.name = name;
    }
}
let customerIdCounter = 1;
class Customer extends Ecommerce {
    constructor(name, email, shippingAddress) {
        super(name); // gọi constructor lớp cha
        this.id = customerIdCounter++;
        this.email = email;
        this.shippingAddress = shippingAddress;
    }
    getDetails() {
        return `Khách hàng #${this.id} - ${this.name}
  Email: ${this.email}
  Địa chỉ giao hàng: ${this.shippingAddress}`;
    }
}
let productIdCounter = 1;
class Product extends Ecommerce {
    constructor(name, price, stock) {
        super(name); // gọi constructor lớp cha
        this.id = productIdCounter++;
        this.price = price;
        this.stock = stock;
    }
    // Giảm số lượng tồn kho khi bán
    sell(quantity) {
        if (quantity <= 0) {
            throw new Error("Số lượng bán phải lớn hơn 0.");
        }
        if (quantity > this.stock) {
            throw new Error("Không đủ hàng trong kho.");
        }
        this.stock -= quantity;
    }
    // Tăng số lượng tồn kho khi nhập hàng
    restock(quantity) {
        if (quantity <= 0) {
            throw new Error("Số lượng nhập phải lớn hơn 0.");
        }
        this.stock += quantity;
    }
}
class ElectronicsProduct extends Product {
    constructor(name, price, stock, warrantyPeriod) {
        super(name, price, stock);
        this.warrantyPeriod = warrantyPeriod;
    }
    getProductInfo() {
        return `Sản phẩm: ${this.name}
  Giá: ${this.price.toLocaleString("vi-VN")} VND
  Tồn kho: ${this.stock}
  Bảo hành: ${this.warrantyPeriod} tháng`;
    }
    getShippingCost(distance) {
        return 50000; // phí cố định
    }
    getCategory() {
        return "Electronics";
    }
}
class ClothingProduct extends Product {
    constructor(name, price, stock, size, color) {
        super(name, price, stock);
        this.size = size;
        this.color = color;
    }
    getProductInfo() {
        return `Sản phẩm: ${this.name}
  Giá: ${this.price.toLocaleString("vi-VN")} VND
  Tồn kho: ${this.stock}
  Kích cỡ: ${this.size}
  Màu sắc: ${this.color}`;
    }
    getShippingCost(distance) {
        return 25000;
    }
    getCategory() {
        return "Clothing";
    }
}
let oderIdCounter = 1;
class Order {
    constructor(customer, products) {
        this.orderId = oderIdCounter++;
        this.customer = customer;
        this.products = products;
        // Tính tổng giá trị đơn hàng
        this.totalAmount = this.products.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
    }
    getDetails() {
        let productList = this.products
            .map((item, index) => `${index + 1}. ${item.product.name} - SL: ${item.quantity} - Giá: ${item.product.price.toLocaleString("vi-VN")} VND`)
            .join("\n");
        return `Đơn hàng #${this.orderId} 
  Khách hàng: ${this.customer.getDetails()}
  Danh sách sản phẩm:
  ${productList}
  Tổng giá trị: ${this.totalAmount.toLocaleString("vi-VN")} VND`;
    }
}
class Store {
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
