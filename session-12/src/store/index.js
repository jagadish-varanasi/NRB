import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./Reducers/Login";

export const store = configureStore({
  reducer: {
    login: loginReducer,
  },
});
