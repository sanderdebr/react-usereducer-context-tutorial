export const usersReducer = (state, { type, payload, error }) => {
  switch (type) {
    case "REQUEST_USERS":
      return {
        ...state,
        loading: true,
      };
    case "USERS_SUCCESS":
      return {
        ...state,
        loading: false,
        users: payload,
      };
    case "USERS_FAIL":
      return {
        ...state,
        loading: false,
        error,
      };
    case "DELETE_USER":
      return {
        ...state,
        users: state.users.filter((user) => user.id !== payload),
      };
    default:
      throw new Error(`Unhandled action type: ${type}`);
  }
};
