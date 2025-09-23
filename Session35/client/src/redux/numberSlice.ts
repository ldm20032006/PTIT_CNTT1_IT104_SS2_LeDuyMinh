import { createSlice } from "@reduxjs/toolkit";

interface NumberState {
  list: number[];
}

const initialState: NumberState = {
  list: [],
};

const numberSlice = createSlice({
  name: "numbers",
  initialState,
  reducers: {
    addRandomNumber: (state) => {
      const randomNum = Math.floor(Math.random() * 20) + 1; // số ngẫu nhiên 1-20
      state.list.push(randomNum);
    },
    clearNumbers: (state) => {
      state.list = [];
    },
  },
});

export const { addRandomNumber, clearNumbers } = numberSlice.actions;
export default numberSlice.reducer;