<<<<<<< HEAD
const THEME_TOGGLE = "THEME_TOGGLE";

const initialState = {
  darkMode: JSON.parse(localStorage.getItem("darkMode") || "false"),
};

type ActionTypes = {
  type: string;
};

const themeReducer = (state = initialState, action: ActionTypes) => {
  switch (action.type) {
    case THEME_TOGGLE:
      { const newState = { darkMode: !state.darkMode };
      localStorage.setItem("darkMode", JSON.stringify(newState.darkMode));
      return newState; }

    default:
      return state;
  }
};

export default themeReducer;
=======
const THEME_TOGGLE = "THEME_TOGGLE";

const initialState = {
  darkMode: JSON.parse(localStorage.getItem("darkMode") || "false"),
};

type ActionTypes = {
  type: string;
};

const themeReducer = (state = initialState, action: ActionTypes) => {
  switch (action.type) {
    case THEME_TOGGLE:
      { const newState = { darkMode: !state.darkMode };
      localStorage.setItem("darkMode", JSON.stringify(newState.darkMode));
      return newState; }

    default:
      return state;
  }
};

export default themeReducer;
>>>>>>> 9ff6c1a591451acca643a6e60899e7d056a54a8c
export { THEME_TOGGLE };