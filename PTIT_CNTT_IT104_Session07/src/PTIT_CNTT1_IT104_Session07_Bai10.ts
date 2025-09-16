class MenuItem {
  public id: number;
  public name: string;
  public price: number;

  constructor(id: number, name: string, price: number) {
    this.id = id;
    this.name = name;
    this.price = price;
  }
}

//Bàn trong nhà hàng
class Table {
  public id: number;
  public capacity: number;
  public available: boolean;

  constructor(id: number, capacity: number) {
    this.id = id;
    this.capacity = capacity;
    this.available = true; // mặc định bàn còn trống
  }
}

//Thông tin đặt bàn
class Reservation {
  public id: number;
  public customerName: string;
  public tableId: number;

  constructor(id: number, customerName: string, tableId: number) {
    this.id = id;
    this.customerName = customerName;
    this.tableId = tableId;
  }
}

class Order {
  public id: number;
  public tableId: number;
  public items: MenuItem[];

  constructor(id: number, tableId: number, items: MenuItem[]) {
    this.id = id;
    this.tableId = tableId;
    this.items = items;
  }

  // Tính tổng tiền các món trong đơn hàng
  getTotal(): number {
    return this.items.reduce((sum, item) => sum + item.price, 0);
  }
}

class Restaurant {
  public menu: MenuItem[] = [];
  public tables: Table[] = [];
  public reservations: Reservation[] = [];
  public orders: Order[] = [];

  addMenuItem(item: MenuItem): void {
    this.menu.push(item);
    console.log(`Đã thêm món ăn "${item.name}" vào menu.`);
  }

  addTable(table: Table): void {
    this.tables.push(table);
    console.log(`Đã thêm bàn số ${table.id} với sức chứa ${table.capacity}.`);
  }

  makeReservation(customerName: string, tableId: number): void {
    const table = this.tables.find(t => t.id === tableId);
    if (!table) {
      console.log(`Bàn số ${tableId} không tồn tại.`);
      return;
    }
    if (!table.available) {
      console.log(`Bàn số ${tableId} đã được đặt.`);
      return;
    }
    const reservationId = this.reservations.length + 1;
    this.reservations.push(new Reservation(reservationId, customerName, tableId));
    table.available = false;
    console.log(`Đặt bàn thành công cho ${customerName} tại bàn số ${tableId}.`);
  }

  placeOrder(tableId: number, items: MenuItem[]): void {
    const table = this.tables.find(t => t.id === tableId);
    if (!table) {
      console.log(`Bàn số ${tableId} không tồn tại.`);
      return;
    }
    if (table.available) {
      console.log(`Bàn số ${tableId} chưa được đặt, vui lòng đặt bàn trước.`);
      return;
    }
    const orderId = this.orders.length + 1;
    this.orders.push(new Order(orderId, tableId, items));
    console.log(`Đã tạo đơn hàng #${orderId} cho bàn số ${tableId}.`);
  }

  generateBill(tableId: number): void {
    const table = this.tables.find(t => t.id === tableId);
    if (!table) {
      console.log(`Bàn số ${tableId} không tồn tại.`);
      return;
    }

    const ordersOfTable = this.orders.filter(order => order.tableId === tableId);
    if (ordersOfTable.length === 0) {
      console.log(`Bàn số ${tableId} chưa có đơn hàng.`);
      return;
    }

    const totalAmount = ordersOfTable.reduce((sum, order) => sum + order.getTotal(), 0);
    console.log(`Tổng tiền cho bàn số ${tableId} là: ${totalAmount} VNĐ.`);

    // Thanh toán xong, bàn trở lại trống
    table.available = true;

    // Xóa đơn hàng và đặt bàn của bàn đó
    this.orders = this.orders.filter(order => order.tableId !== tableId);
    this.reservations = this.reservations.filter(res => res.tableId !== tableId);

    console.log(`Bàn số ${tableId} đã được thanh toán và trở về trạng thái trống.`);
  }
}

const restaurant = new Restaurant();

// Thêm món ăn
restaurant.addMenuItem(new MenuItem(1, "Phở bò", 50000));
restaurant.addMenuItem(new MenuItem(2, "Bún chả", 40000));
restaurant.addMenuItem(new MenuItem(3, "Cà phê đá", 20000));

// Thêm bàn
restaurant.addTable(new Table(1, 4));
restaurant.addTable(new Table(2, 2));

// Đặt bàn
restaurant.makeReservation("Anh Bách", 1);
restaurant.makeReservation("Chị Linh", 2);

// Đặt món
restaurant.placeOrder(1, [restaurant.menu[0], restaurant.menu[2]]); // Phở bò + Cà phê đá cho bàn 1
restaurant.placeOrder(2, [restaurant.menu[1]]); // Bún chả cho bàn 2

restaurant.generateBill(1);

restaurant.generateBill(2);
