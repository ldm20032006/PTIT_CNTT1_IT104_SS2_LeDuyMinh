import React, { useState } from "react";

type User = {
  name: string;
  email: string;
};

export default function UserProfile() {
  // State chứa thông tin người dùng
  const [user, setUser] = useState<User>({ name: "", email: "" });

  // State để lưu kết quả hiển thị (có thể null trước khi submit)
  const [submittedUser, setSubmittedUser] = useState<User | null>(null);

  // Hàm xử lý khi nhập liệu (gõ trong input)
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  // Hàm xử lý khi gửi form
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // tránh reload trang
    setSubmittedUser(user);
  };

  return (
    <div
      style={{
        maxWidth: "400px",
        margin: "20px auto",
        padding: "20px",
        borderRadius: "6px",
        backgroundColor: "#f8f9fa",
        fontFamily: "sans-serif",
      }}
    >
      <h3>Thông tin người dùng</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Nhập tên"
          value={user.name}
          onChange={handleChange}
          style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
        />
        <input
          type="email"
          name="email"
          placeholder="Nhập email"
          value={user.email}
          onChange={handleChange}
          style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
        />
        <button
          type="submit"
          style={{
            padding: "8px 16px",
            backgroundColor: "green",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          Gửi
        </button>
      </form>

      {submittedUser && (
        <div
          style={{
            marginTop: "15px",
            padding: "12px",
            backgroundColor: "#d1e7dd",
            borderRadius: "4px",
          }}
        >
          <p>
            <strong>Tên:</strong> {submittedUser.name}
          </p>
          <p>
            <strong>Email:</strong> {submittedUser.email}
          </p>
        </div>
      )}
    </div>
  );
}
