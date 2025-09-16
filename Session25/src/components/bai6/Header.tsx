import { NavLink } from "react-router-dom";
import "./Header.css"; // tạo file CSS riêng

const Header = () => {
  return (
    <nav style={{ display: "flex", gap: "20px", marginBottom: "20px" }}>
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? "active-link" : "")}
        end
      >
        Home
      </NavLink>
      <NavLink
        to="/product"
        className={({ isActive }) => (isActive ? "active-link" : "")}
      >
        Product
      </NavLink>
      <NavLink
        to="/detail"
        className={({ isActive }) => (isActive ? "active-link" : "")}
      >
        Detail
      </NavLink>
    </nav>
  );
};

export default Header;