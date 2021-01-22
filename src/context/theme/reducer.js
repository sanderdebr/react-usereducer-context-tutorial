export const themeReducer = (state, { type }) => {
  switch (type) {
    case "TOGGLE_THEME":
      return {
        ...state,
        switched: state.switched + 1,
        theme: state.theme === "light" ? "dark" : "light",
      };
    default:
      throw new Error(`Unhandled action type: ${type}`);
  }
};
