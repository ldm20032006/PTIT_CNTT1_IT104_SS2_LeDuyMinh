import React, { useState } from "react";
import "./UserForm.css";

export default function UserForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: ""
  });

  const [error, setError] = useState("");
  const [submittedData, setSubmittedData] = useState<null | typeof formData>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.email.includes("@")) {
      setError("⚠️ Email không hợp lệ");
      setSubmittedData(null);
      return;
    }

    if (Number(formData.age) < 0) {
      setError("⚠️ Tuổi không được âm");
      setSubmittedData(null);
      return;
    }

    setError("");
    setSubmittedData(formData);
  };

  const handleReset = () => {
    setFormData({ name: "", email: "", age: "" });
    setSubmittedData(null);
    setError("");
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className="user-form">
        <h2>📝 Nhập thông tin người dùng</h2>
        <input
          type="text"
          name="name"
          placeholder="Họ tên"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="text"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />
        <input
          type="number"
          name="age"
          placeholder="Tuổi"
          value={formData.age}
          onChange={handleChange}
        />

        <div className="button-group">
          <button type="submit">Gửi</button>
          <button type="button" onClick={handleReset}>
            Xóa tất cả
          </button>
        </div>

        {error && <p className="error">{error}</p>}
      </form>

      {submittedData && (
        <div className="result">
          <h3>✅ Thông tin đã nhập:</h3>
          <p><b>Họ tên:</b> {submittedData.name}</p>
          <p><b>Email:</b> {submittedData.email}</p>
          <p><b>Tuổi:</b> {submittedData.age}</p>
        </div>
      )}
    </div>
  );
}
