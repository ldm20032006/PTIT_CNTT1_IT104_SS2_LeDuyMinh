import { useReducer } from "react";

// Định nghĩa reducer
function counterReducer(state: number, action: { type: string }): number {
  switch (action.type) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    default:
      return state;
  }
}

export default function Counter() {
  // useReducer nhận reducer và giá trị khởi tạo = 0
  const [count, dispatch] = useReducer(counterReducer, 0);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Số đếm: {count}</h1>
      <button
        onClick={() => dispatch({ type: "increment" })}
        style={{
          padding: "10px 20px",
          marginRight: "10px",
          fontSize: "18px",
          border: "2px solid gray",
          borderRadius: "5px",
        }}
      >
        Tăng
      </button>
      <button
        onClick={() => dispatch({ type: "decrement" })}
        style={{
          padding: "10px 20px",
          fontSize: "18px",
          border: "2px solid gray",
          borderRadius: "5px",
        }}
      >
        Giảm
      </button>
    </div>
  );
}
