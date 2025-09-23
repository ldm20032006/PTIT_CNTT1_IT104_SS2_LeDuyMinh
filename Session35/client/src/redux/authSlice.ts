import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface User {
  id: number;
  userName: string;
  email: string;
  password: string;
}

interface AuthState {
  currentUser: Omit<User, "password"> | null;
  users: User[];
}

const initialState: AuthState = {
  currentUser: null,
  users: [
    {
      id: 1,
      userName: "Nguyễn Văn A",
      email: "nva@gmail.com",
      password: "123456",
    },
    {
      id: 2,
      userName: "Nguyễn Văn B",
      email: "nvb@gmail.com",
      password: "123456",
    },
  ],
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (
      state,
      action: PayloadAction<{ email: string; password: string }>
    ) => {
      const user = state.users.find(
        (u) =>
          u.email === action.payload.email &&
          u.password === action.payload.password
      );
      if (user) {
        state.currentUser = {
          id: user.id,
          userName: user.userName,
          email: user.email,
        };
      } else {
        state.currentUser = null;
      }
    },
    logout: (state) => {
      state.currentUser = null;
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;