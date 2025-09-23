<<<<<<< HEAD
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../store/store";

export default function Counter() {
  const count = useSelector((state: RootState) => state.counter.count);
  const dispatch = useDispatch();

  const increase = () => {
    dispatch({ type: "INCREMENT" });
  };

  return (
    <div>
      <h1>ỨNG DỤNG COUNTER!</h1>
      <p>giá trị counter: {count}</p>
      <button onClick={increase}>tăng</button>
      <button>giảm</button>
    </div>
  );
}
=======
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../store/store";

export default function Counter() {
  const count = useSelector((state: RootState) => state.counter.count);
  const dispatch = useDispatch();

  const increase = () => {
    dispatch({ type: "INCREMENT" });
  };

  return (
    <div>
      <h1>ỨNG DỤNG COUNTER!</h1>
      <p>giá trị counter: {count}</p>
      <button onClick={increase}>tăng</button>
      <button>giảm</button>
    </div>
  );
}
>>>>>>> 9ff6c1a591451acca643a6e60899e7d056a54a8c
