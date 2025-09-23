import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../redux/store";
import { toggleTheme } from "../redux/themeSlice";

function ThemeBox() {
  const theme = useSelector((state: RootState) => state.theme.mode);
  const dispatch = useDispatch();

  const styles = {
    light: {
      backgroundColor: "#fff",
      color: "#000",
      height: "200px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      border: "1px solid #ccc",
    },
    dark: {
      backgroundColor: "#333",
      color: "#fff",
      height: "200px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      border: "1px solid #ccc",
    },
  };

  return (
    <div style={theme === "light" ? styles.light : styles.dark}>
      <button onClick={() => dispatch(toggleTheme())}>
        {theme === "light" ? "Light" : "Dark"}
      </button>
    </div>
  );
}

export default ThemeBox;