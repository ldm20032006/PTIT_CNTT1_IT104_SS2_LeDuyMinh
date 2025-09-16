import { useState, useEffect } from "react";

export default function Timer() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Timer started!");

    // Tạo interval tăng count mỗi giây
    const interval = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);

    // Cleanup khi component unmount
    return () => {
      clearInterval(interval);
      console.log("Timer stopped!");
    };
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Bộ đếm thời gian</h2>
      <p>Giá trị: {count}</p>
    </div>
  );
}
