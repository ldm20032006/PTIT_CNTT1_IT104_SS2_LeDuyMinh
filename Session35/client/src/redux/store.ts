import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
import numberReducer from "./numberSlice";
import themeReducer from "./themeSlice";
import viewReducer from "./viewSlice";
import menuReducer from "./menuSlice";
import languageReducer from "./languageSlice";
import favoritesReducer from "./favoritesSlice";
import authReducer from "./authSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    numbers: numberReducer,
    theme: themeReducer,
    view: viewReducer,
    menu: menuReducer,
    language: languageReducer,
    favorites: favoritesReducer,
    auth: authReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;