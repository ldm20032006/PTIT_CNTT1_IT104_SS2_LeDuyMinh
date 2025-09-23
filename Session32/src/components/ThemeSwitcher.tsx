<<<<<<< HEAD
import { useDispatch, useSelector } from "react-redux";
import { THEME_TOGGLE } from "../redux/reducers/theme.reducer";

export default function ThemeSwitcher() {
  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.theme.darkMode);

  const handleToggle = () => {
    dispatch({ type: THEME_TOGGLE });
  };

  return (
    <div
      style={{
        backgroundColor: darkMode ? "#333" : "#fff",
        color: darkMode ? "#fff" : "#000",
        height: "150px",
        padding: "20px",
        transition: "all 0.3s ease",
        marginTop: "20px",
      }}
    >
      <h2>Chế độ hiện tại: {darkMode ? "Tối" : "Sáng"}</h2>
      <label>
        <input type="checkbox" checked={darkMode} onChange={handleToggle} /> Bật
        chế độ tối
      </label>
    </div>
  );
=======
import { useDispatch, useSelector } from "react-redux";
import { THEME_TOGGLE } from "../redux/reducers/theme.reducer";

export default function ThemeSwitcher() {
  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.theme.darkMode);

  const handleToggle = () => {
    dispatch({ type: THEME_TOGGLE });
  };

  return (
    <div
      style={{
        backgroundColor: darkMode ? "#333" : "#fff",
        color: darkMode ? "#fff" : "#000",
        height: "150px",
        padding: "20px",
        transition: "all 0.3s ease",
        marginTop: "20px",
      }}
    >
      <h2>Chế độ hiện tại: {darkMode ? "Tối" : "Sáng"}</h2>
      <label>
        <input type="checkbox" checked={darkMode} onChange={handleToggle} /> Bật
        chế độ tối
      </label>
    </div>
  );
>>>>>>> 9ff6c1a591451acca643a6e60899e7d056a54a8c
}