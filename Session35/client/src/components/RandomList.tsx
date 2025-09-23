import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../redux/store";
import { addRandomNumber, clearNumbers } from "../redux/numberSlice";

function RandomList() {
  const numbers = useSelector((state: RootState) => state.numbers.list);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>List number: [{numbers.join(",")}]</h2>
      <button onClick={() => dispatch(addRandomNumber())}>Random number</button>
      <button
        onClick={() => dispatch(clearNumbers())}
        style={{ marginLeft: "10px" }}
      >
        Clear
      </button>
    </div>
  );
}

export default RandomList;