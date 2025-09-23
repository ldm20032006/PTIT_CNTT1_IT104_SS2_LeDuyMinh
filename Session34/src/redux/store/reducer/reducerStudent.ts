import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export interface Student {
  id: number;
  name: string;
}

const initialState: Student[] = [
  { id: 1, name: "Quach Bach" },
  { id: 2, name: "Phuong Linh" },
  { id: 3, name: "Nhat Minh" },
];

const studentsSlice = createSlice({
  name: "students",
  initialState,
  reducers: {
    addStudent: (state, action: PayloadAction<Student>) => {
      state.push(action.payload);
    },
    editStudent: (state, action: PayloadAction<Student>) => {
      const index = state.findIndex(s => s.id === action.payload.id);
      if (index !== -1) state[index] = action.payload;
    },
    deleteStudent: (state, action: PayloadAction<number>) => {
      return state.filter(s => s.id !== action.payload);
    },
  },
});

export const { addStudent, editStudent, deleteStudent } = studentsSlice.actions;
export default studentsSlice.reducer;
