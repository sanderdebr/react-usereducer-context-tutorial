import React, { useContext, useEffect, useReducer } from "react";

import { usersReducer } from "./reducer";

const { createContext } = require("react");

const initialState = {
  loading: false,
  error: null,
  users: [],
};

const initializer = localStorage.getItem("users")
  ? JSON.parse(localStorage.getItem("users"))
  : initialState;

const UsersStateContext = createContext();
const UsersDispatchContext = createContext();

export const useUsersState = () => useContext(UsersStateContext);
export const useUsersDispatch = () => useContext(UsersDispatchContext);

export const UsersProvider = ({ children }) => {
  const [state, dispatch] = useReducer(usersReducer, initializer);

  // Persist state on each update
  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(state));
  }, [state]);

  return (
    <UsersStateContext.Provider value={state}>
      <UsersDispatchContext.Provider value={dispatch}>
        {children}
      </UsersDispatchContext.Provider>
    </UsersStateContext.Provider>
  );
};
