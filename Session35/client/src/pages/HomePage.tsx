// src/pages/HomePage.tsx
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../redux/store";
import { logout } from "../redux/authSlice";
import { useNavigate } from "react-router-dom";

function HomePage() {
  const currentUser = useSelector((state: RootState) => state.auth.currentUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  if (!currentUser) {
    navigate("/login");
    return null;
  }

  return (
    <div
      style={{
        maxWidth: "400px",
        margin: "50px auto",
        padding: "20px",
        border: "1px solid #ccc",
      }}
    >
      <h3>User Name: {currentUser.userName}</h3>
      <p>Email: {currentUser.email}</p>
      <button
        onClick={handleLogout}
        style={{ width: "100%", padding: "10px", marginTop: "15px" }}
      >
        Đăng xuất
      </button>
    </div>
  );
}

export default HomePage;