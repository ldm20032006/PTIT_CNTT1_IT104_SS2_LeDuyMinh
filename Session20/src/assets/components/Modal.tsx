import { useState, useRef, useEffect, type JSX } from "react";

export default function ModalExample(): JSX.Element {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  // <-- khai báo đúng kiểu cho input ref
  const inputRef = useRef<HTMLInputElement | null>(null);

  // Khi modal mở => focus vào input
  useEffect(() => {
    if (isOpen) {
      // optional chaining an toàn với null
      inputRef.current?.focus();
    }
  }, [isOpen]);

  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <h1>Ứng dụng React với Modal và Focus Input</h1>
      <button
        onClick={() => setIsOpen(true)}
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          background: "green",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Mở Modal
      </button>

      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0,0,0,0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              background: "white",
              padding: "30px",
              borderRadius: "10px",
              width: "300px",
              textAlign: "center",
            }}
          >
            <h2>Đăng nhập</h2>
            <input
              ref={inputRef}
              type="text"
              placeholder="Nhập tên người dùng"
              style={{
                padding: "10px",
                fontSize: "16px",
                width: "90%",
                marginBottom: "20px",
              }}
            />
            <br />
            <button
              onClick={() => setIsOpen(false)}
              style={{
                padding: "10px 20px",
                fontSize: "16px",
                background: "red",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              Đóng
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
