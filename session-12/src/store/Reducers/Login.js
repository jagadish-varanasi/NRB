import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  hasLoggedin: false,
  user: { email: "", name: "", image: "" },
};

export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    login: (state, { payload }) => {
      state.hasLoggedin = true;
      state.user = {
        email: payload.email,
        name: payload.name,
        image: URL.createObjectURL(payload.image[0]),
      };
    },
    logout: (state) => {
      state.hasLoggedin = false;
      state.user = {
        email: "",
        name: "",
        image: "",
      };
    },
  },
});

// Action creators are generated for each case reducer function
export const { login, logout } = loginSlice.actions;

export default loginSlice.reducer;
