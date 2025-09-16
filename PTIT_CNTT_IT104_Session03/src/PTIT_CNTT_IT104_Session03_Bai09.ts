export {}; // Đảm bảo file là module riêng, tránh xung đột tên

// ====== Các hàm tính toán cơ bản ======
function add(a: number, b: number): number {
  return a + b;
}

function subtract(a: number, b: number): number {
  return a - b;
}

function multiply(a: number, b: number): number {
  return a * b;
}

function divide(a: number, b: number): number | string {
  return b === 0 ? "Không thể chia cho 0" : a / b;
}

// ====== Hàm nâng cao ======
function power(base: number, exponent: number): number {
  return Math.pow(base, exponent);
}

function sqrt(base: number, root: number): number | string {
  return root === 0 ? "Căn bậc 0 không hợp lệ" : Math.pow(base, 1 / root);
}

function factorial(n: number): number | string {
  if (n < 0) return "Không tính giai thừa số âm";
  if (n === 0 || n === 1) return 1;
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}

// ====== Tạo giao diện (UI) ======
const title = document.createElement("h1");
title.innerText = "Máy tính TypeScript - Bài 8";
document.body.appendChild(title);

const input1 = document.createElement("input");
input1.placeholder = "Nhập số 1";
document.body.appendChild(input1);

const input2 = document.createElement("input");
input2.placeholder = "Nhập số 2";
document.body.appendChild(input2);

const buttonContainer = document.createElement("div");
document.body.appendChild(buttonContainer);

const buttons = ["+", "-", "*", "/", "^", "√", "!"];
buttons.forEach(op => {
  const btn = document.createElement("button");
  btn.innerText = op;
  btn.onclick = () => onCalculate(op);
  buttonContainer.appendChild(btn);
});

const resultDisplay = document.createElement("h3");
resultDisplay.innerText = "Kết quả: ";
document.body.appendChild(resultDisplay);

// ====== Xử lý tính toán ======
function onCalculate(op: string): void {
  const num1 = Number(input1.value);
  const num2 = Number(input2.value);
  let result: string | number;

  if (op === "!") {
    result = isNaN(num1) ? "Dữ liệu không hợp lệ" : factorial(num1);
  } else {
    if (isNaN(num1) || isNaN(num2)) {
      result = "Dữ liệu không hợp lệ";
    } else {
      switch (op) {
        case "+": result = add(num1, num2); break;
        case "-": result = subtract(num1, num2); break;
        case "*": result = multiply(num1, num2); break;
        case "/": result = divide(num1, num2); break;
        case "^": result = power(num1, num2); break;
        case "√": result = sqrt(num1, num2); break;
        default: result = "Toán tử không hợp lệ";
      }
    }
  }

  resultDisplay.innerText = "Kết quả: " + result;
}