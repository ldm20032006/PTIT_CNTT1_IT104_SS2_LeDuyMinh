import { useState, useEffect } from "react";

export default function PageTitle() {
  const [title, setTitle] = useState("");

  useEffect(() => {
    if (title) {
      document.title = `Chào, ${title}!`;
    } else {
      document.title = "Trang web của bạn";
    }
  }, [title]);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        backgroundColor: "#f9fafb",
      }}
    >
      <div
        style={{
          background: "#fff",
          padding: "30px",
          borderRadius: "10px",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
          textAlign: "center",
          width: "400px",
        }}
      >
        <h2 style={{ marginBottom: "20px" }}>
          Chào mừng bạn đến với trang của chúng tôi!
        </h2>
        <input
          type="text"
          placeholder="Tiêu đề của trang"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          style={{
            width: "100%",
            padding: "10px",
            fontSize: "16px",
            borderRadius: "6px",
            border: "1px solid #ccc",
            marginBottom: "10px",
          }}
        />
        <p style={{ fontSize: "14px", color: "#555" }}>
          Tiêu đề trang sẽ thay đổi khi bạn nhập tên vào trường trên.
        </p>
      </div>
    </div>
  );
}
