import { useState, useEffect } from "react";

export default function KeyTracker() {
  const [keyPressed, setKeyPressed] = useState<string>("");

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      setKeyPressed(e.key.toUpperCase());
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        fontFamily: "Arial",
      }}
    >
      <h2 style={{ marginBottom: "20px" }}>⌨️ Phím bạn vừa nhấn:</h2>
      <div
        style={{
          border: "2px dashed #333",
          padding: "20px 40px",
          borderRadius: "8px",
          fontSize: "40px",
          fontWeight: "bold",
          color: "#333",
          backgroundColor: "#f9f9f9",
        }}
      >
        {keyPressed ? `[ ${keyPressed} ]` : "Chưa có phím nào"}
      </div>
    </div>
  );
}