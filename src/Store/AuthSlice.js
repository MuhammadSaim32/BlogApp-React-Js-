import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  Status: false,
  UserData: null,
};

export const AuthSlice = createSlice({
  name: "Auth",
  initialState,
  reducers: {
    Login: (state, action) => {
      state.Status = true;
      state.UserData = action.payload;
    },
    Logout: (state) => {
      state.Status = false;
      state.UserData = null;
    },
  },
});

export const { Login, Logout } = AuthSlice.actions;

export default AuthSlice.reducer;
