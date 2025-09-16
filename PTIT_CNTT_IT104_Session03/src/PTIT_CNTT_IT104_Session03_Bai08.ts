export {}; // Đảm bảo file là module riêng

// Hàm chuyển đổi dữ liệu sang số
function toNumber(value: number | string): number | null {
  if (typeof value === "number") return value;
  const num = Number(value);
  return isNaN(num) ? null : num;
}

// Cộng
function add(a: number | string, b: number | string): number | string {
  const numA = toNumber(a);
  const numB = toNumber(b);
  return numA === null || numB === null ? "Dữ liệu không hợp lệ" : numA + numB;
}

// Trừ
function subtract(a: number | string, b: number | string): number | string {
  const numA = toNumber(a);
  const numB = toNumber(b);
  return numA === null || numB === null ? "Dữ liệu không hợp lệ" : numA - numB;
}

// Nhân
function multiply(a: number | string, b: number | string): number | string {
  const numA = toNumber(a);
  const numB = toNumber(b);
  return numA === null || numB === null ? "Dữ liệu không hợp lệ" : numA * numB;
}

// Chia
function divide(a: number | string, b: number | string): number | string {
  const numA = toNumber(a);
  const numB = toNumber(b);
  if (numA === null || numB === null) return "Dữ liệu không hợp lệ";
  if (numB === 0) return "Không thể chia cho 0";
  return numA / numB;
}

// ====== Test ======
console.log(add(5, "3"));       // 8
console.log(subtract("10", 4)); // 6
console.log(multiply("2", "5")); // 10
console.log(divide("20", "4"));  // 5
console.log(add("abc", 3));     // "Dữ liệu không hợp lệ"
console.log(divide(10, 0));     // "Không thể chia cho 0"