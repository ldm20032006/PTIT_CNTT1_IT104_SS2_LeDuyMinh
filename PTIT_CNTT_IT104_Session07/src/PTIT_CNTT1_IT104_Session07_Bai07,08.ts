class Account {
    public accountNumber: string;
    protected balance: number;
    protected history: string[];
    protected status: string;
  
    constructor(accountNumber: string, initialBalance: number = 0, status: string = "active") {
      this.accountNumber = accountNumber;
      this.balance = initialBalance;
      this.status = status;
      this.history = [];
    }
  
    deposit(amount: number): void {
      if (amount <= 0) {
        console.log("Số tiền nạp phải lớn hơn 0");
        return;
      }
      this.balance += amount;
      this.history.push(`Nạp tiền: +${amount}, số dư hiện tại: ${this.balance}`);
      console.log(`Nạp tiền thành công: +${amount}`);
    }
  
    withdraw(amount: number): void {
      if (amount <= 0) {
        console.log("Số tiền rút phải lớn hơn 0");
        return;
      }
      if (amount > this.balance) {
        console.log("Số dư không đủ để rút");
        return;
      }
      this.balance -= amount;
      this.history.push(`Rút tiền: -${amount}, số dư hiện tại: ${this.balance}`);
      console.log(`Rút tiền thành công: -${amount}`);
    }
  
    showHistory(): void {
      console.log(`Lịch sử giao dịch tài khoản ${this.accountNumber}:`);
      this.history.forEach((entry, index) => {
        console.log(`${index + 1}. ${entry}`);
      });
    }
  }

  class SavingAccount extends Account {
    public interestRate: number;
  
    constructor(accountNumber: string, initialBalance: number, interestRate: number, status: string = "active") {
      super(accountNumber, initialBalance, status);
      this.interestRate = interestRate;
    }

    withdraw(amount: number): void {
      if (amount <= 0) {
        console.log("Số tiền rút phải lớn hơn 0");
        return;
      }
      if (amount > this.balance) {
        console.log("Không thể rút vượt quá số dư hiện tại");
        return;
      }
      this.balance -= amount;
      this.history.push(`Rút tiền: -${amount}, số dư hiện tại: ${this.balance}`);
      console.log(`Rút tiền thành công: -${amount}`);
    }
  }

  const savingAcc = new SavingAccount("SA001", 1000, 0.05);
  
  savingAcc.deposit(500);    // Nạp 500
  savingAcc.withdraw(300);   // Rút 300
  savingAcc.withdraw(1500);  // Rút quá số dư, không thành công
  savingAcc.showHistory();   // In lịch sử giao dịch
  
// Bai 8
  class CheckingAccount extends Account {
    public overdraftLimit: number;
  
    constructor(
      accountNumber: string,
      initialBalance: number,
      overdraftLimit: number,
      status: string = "active"
    ) {
      super(accountNumber, initialBalance, status);
      this.overdraftLimit = overdraftLimit;
    }
  
    withdraw(amount: number): void {
      if (amount <= 0) {
        console.log("Số tiền rút phải lớn hơn 0");
        return;
      }
      if (amount > this.balance + this.overdraftLimit) {
        console.log("Vượt quá giới hạn cho phép rút (overdraft limit)");
        return;
      }
      this.balance -= amount;
      this.history.push(
        `Rút tiền: -${amount}, số dư hiện tại: ${this.balance} (Overdraft limit: ${this.overdraftLimit})`
      );
      console.log(`Rút tiền thành công: -${amount}`);
    }
  }
  const checkingAcc = new CheckingAccount("CA001", 500, 200);
  
  checkingAcc.deposit(300);   // Nạp 300, số dư hiện tại 800
  checkingAcc.withdraw(1000); // Rút 1000, vượt quá số dư 800 nhưng trong overdraftLimit 200 => thành công, số dư âm -200
  checkingAcc.withdraw(100);  // Rút thêm 100, vượt quá hạn mức chi tiêu => thất bại
  checkingAcc.showHistory();
  