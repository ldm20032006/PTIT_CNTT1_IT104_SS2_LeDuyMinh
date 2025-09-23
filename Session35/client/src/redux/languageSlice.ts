import { createSlice } from "@reduxjs/toolkit";

interface LanguageState {
  lang: "en" | "vi";
}

const initialState: LanguageState = { lang: "en" };

const languageSlice = createSlice({
  name: "language",
  initialState,
  reducers: {
    setEnglish: (state) => {
      state.lang = "en";
    },
    setVietnamese: (state) => {
      state.lang = "vi";
    },
  },
});

export const { setEnglish, setVietnamese } = languageSlice.actions;
export default languageSlice.reducer;