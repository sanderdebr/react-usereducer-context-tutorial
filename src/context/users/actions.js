export const getUsers = async (dispatch) => {
  dispatch({ type: "REQUEST_USERS" });
  try {
    // Fetch server
    const response = await fetch(`https://jsonplaceholder.typicode.com/users`);

    if (!response.ok) {
      throw Error(response.statusText);
    }

    let data = await response.json();

    // Received users from server
    if (data.length) {
      dispatch({ type: "USERS_SUCCESS", payload: data });
      return data;
    }

    // No match found on server
    dispatch({
      type: "USERS_FAIL",
      error: { message: "Could not fetch users" },
    });

    return null;
  } catch (error) {
    dispatch({ type: "USERS_FAIL", error });
  }
};
