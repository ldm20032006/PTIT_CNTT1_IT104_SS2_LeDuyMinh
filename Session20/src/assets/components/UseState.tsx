import React, { useState } from "react";

export default function UseState() {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
    setInputValue(e.target.value);
  };

  return (
    <div style={{ maxWidth: "400px", margin: "20px auto", fontFamily: "sans-serif" }}>
      <h2>Kiểm tra độ dài chuỗi nhập vào</h2>
      <input
        type="text"
        placeholder="Nhập vào đây"
        value={inputValue}
        onChange={handleChange}
        style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
      />
      
      {inputValue.length > 5 && (
        <div style={{ color: "red", border: "1px solid #f5c2c7", background: "#f8d7da", padding: "10px", borderRadius: "4px" }}>
          Chuỗi nhập vào dài hơn 5 ký tự!
        </div>
      )}
    </div>
  );
}
