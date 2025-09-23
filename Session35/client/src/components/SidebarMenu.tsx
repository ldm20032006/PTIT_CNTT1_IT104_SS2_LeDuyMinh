// src/components/SidebarMenu.tsx
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../redux/store";
import { toggleMenu } from "../redux/menuSlice";
import {
  DashboardOutlined,
  UserOutlined,
  DollarOutlined,
  LineChartOutlined,
  FileTextOutlined,
  LeftOutlined,
  RightOutlined,
} from "@ant-design/icons";

function SidebarMenu() {
  const collapsed = useSelector((state: RootState) => state.menu.collapsed);
  const dispatch = useDispatch();

  const menuItems = [
    { icon: <DashboardOutlined />, label: "Bảng điều khiển" },
    { icon: <UserOutlined />, label: "Tài khoản" },
    { icon: <DollarOutlined />, label: "Tài sản" },
    { icon: <LineChartOutlined />, label: "Thống kê" },
    { icon: <FileTextOutlined />, label: "Tài liệu" },
  ];

  return (
    <div
      style={{
        width: collapsed ? "60px" : "200px",
        backgroundColor: "#001f3f",
        color: "white",
        minHeight: "100vh",
        transition: "0.3s",
        paddingTop: "20px",
      }}
    >
      {menuItems.map((item, index) => (
        <div
          key={index}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            padding: "10px",
            cursor: "pointer",
          }}
        >
          {item.icon}
          {!collapsed && <span>{item.label}</span>}
        </div>
      ))}

      {/* Nút thu gọn/mở rộng */}
      <div
        style={{
          marginTop: "20px",
          padding: "10px",
          cursor: "pointer",
        }}
        onClick={() => dispatch(toggleMenu())}
      >
        {collapsed ? <RightOutlined /> : <LeftOutlined />}{" "}
        {collapsed ? "" : "Thu gọn"}
      </div>
    </div>
  );
}

export default SidebarMenu;