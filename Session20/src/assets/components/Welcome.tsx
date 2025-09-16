import { useEffect } from "react";

export default function Welcome() {
  useEffect(() => {
    console.log("Component đã được render lần đầu!");
  }, []); // [] => chỉ chạy 1 lần khi mount

  return (
    <div>
      <h2>Chào mừng bạn đến với ứng dụng của chúng tôi!</h2>
    </div>
  );
}
