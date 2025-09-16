class Employee {
    public name: string;
    protected company: string;
    private phone: string;
  
    constructor(name: string, company: string, phone: string) {
      this.name = name;
      this.company = company;
      this.phone = phone;
    }
  
    public printInfo(): void {
      console.log(`Tên: ${this.name}`);
      console.log(`Công ty: ${this.company}`);
      console.log(`Số điện thoại: ${this.phone}`);
    }
  }
  
  const emp = new Employee("Nguyễn Văn A", "ABC", "0123456789");
  emp.printInfo();