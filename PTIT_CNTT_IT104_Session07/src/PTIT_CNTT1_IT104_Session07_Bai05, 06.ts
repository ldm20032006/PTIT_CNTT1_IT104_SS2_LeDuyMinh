// abstract class Account {
//     id:number;
//     userName: string;
//     password: string;
//     isLogin: boolean;
//     role: string;

//     constructor(
//         id:number,
//         userName: string,
//         password: string,
//         isLogin: boolean, 
//         role: string
//     ){
//         this.id = id;
//         this.userName = userName;
//         this.password = password;
//         this.isLogin = isLogin;
//         this.role = role;
//     }
//     login(): void{
//         console.log("Phương thức login mặc định của Account");
//     }
//     logout(): void{
//         if(this.isLogin){
//             console.log("Đăng xuất thành công!");
//             this.isLogin = false;
//         } else {
//             console.log("Bạn chưa đăng nhập");
//         }
//     }
// }

// class userAcc extends Account {
//     [x: string]: any; //đối tượng userAcc có thể nhận bất kỳ thuộc tính mới với kiểu khóa là string và giá trị kiểu any(index signature)
//     private status: string; 

//     constructor(
//       id: number,
//       userName: string,
//       password: string,
//       role: string,
//       status: string
//     ) {
//       super(id, userName, password, false, role); 
//       this.status = status;
//     }

//     login(): void {
//       if (this.status === "active") {
//         this.isLogin = true;
//         console.log("Đăng nhập thành công!");
//       } else if (this.status === "banned") {
//         console.log("Tài khoản đã bị khóa!");
//       }
//     }
// }

// //Bai 6
// class adminAcc extends Account {
//     constructor(
//         id: number,
//         userName: string,
//         password: string
//     ) {
//         super(id, userName, password, false, "admin");
//     }

//     banUser(user: userAcc): void {
//         user.setStatus("banned");
//         console.log(`Người dùng ${user.userName} đã bị khóa!`);
//     }
// }


// const acc1 = new userAcc(1, "nguyenvana", "123456", "user", "active");
// acc1.login();   
// acc1.logout();  

// const acc2 = new userAcc(2, "tranthib", "abcdef", "user", "active");

// const admin1 = new adminAcc(100, "admin01", "adminpass");
// admin1.banUser(acc2);
// acc2.login(); 