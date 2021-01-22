import React, { useContext, useEffect, useReducer } from "react";

import { themeReducer } from "./reducer";

const { createContext } = require("react");

const initialState = {
  switched: 0,
  theme: "light",
};

const initializer = localStorage.getItem("theme")
  ? JSON.parse(localStorage.getItem("theme"))
  : initialState;

const ThemeStateContext = createContext();
const ThemeDispatchContext = createContext();

export const useThemeState = () => useContext(ThemeStateContext);
export const useThemeDispatch = () => useContext(ThemeDispatchContext);

export const ThemeProvider = ({ children }) => {
  const [theme, dispatch] = useReducer(themeReducer, initializer);

  // Persist state on each update
  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(theme));
  }, [theme]);

  return (
    <ThemeStateContext.Provider value={theme}>
      <ThemeDispatchContext.Provider value={dispatch}>
        {children}
      </ThemeDispatchContext.Provider>
    </ThemeStateContext.Provider>
  );
};
