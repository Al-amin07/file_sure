import { RootState } from "@/redux/store";
import { createSlice } from "@reduxjs/toolkit";

interface IUser {
  id: string;
  name: string;
  email: string;
  referalCode: string;
  iat: number;
  exp: number;
}
interface IInitialState {
  user: IUser | null;
  accessToken: string;
}

const initialState: IInitialState = {
  user: null,
  accessToken: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload.user;
      state.accessToken = action.payload.accessToken;
    },
    logout: (state) => {
      state.accessToken = "";
      state.user = null;
    },
  },
});

export const { login, logout } = userSlice.actions;

export const selectUser = (state: RootState) => state.user.user;

export default userSlice.reducer;
