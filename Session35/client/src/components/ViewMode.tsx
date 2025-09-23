import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../redux/store";
import { toggleView } from "../redux/viewSlice";

function ViewMode() {
  const mode = useSelector((state: RootState) => state.view.mode);
  const dispatch = useDispatch();

  const data = [1, 2, 3, 4];

  return (
    <div>
      <button onClick={() => dispatch(toggleView())}>
        {mode === "list" ? "List mode" : "Grid mode"}
      </button>

      <div
        style={{
          display: mode === "grid" ? "flex" : "block",
          gap: "10px",
          marginTop: "20px",
        }}
      >
        {data.map((item) => (
          <div
            key={item}
            style={{
              backgroundColor: "tomato",
              color: "black",
              padding: "20px",
              margin: mode === "list" ? "10px 0" : "0",
              textAlign: "center",
              flex: mode === "grid" ? "1" : "none",
            }}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ViewMode;