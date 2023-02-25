import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PersistPartial } from "redux-persist/es/persistReducer";
const { REACT_APP_USERNAME, REACT_APP_PASSWORD } = process.env;

interface IInitialState {
  username: string;
  isLoggedIn: boolean;
  error: string | undefined;
  isLoading: boolean;
}

interface ILoginAction {
  username: string;
  password: string;
}

const initialState: IInitialState = {
  username: "",
  isLoggedIn: false,
  error: undefined,
  isLoading: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login(state, action: PayloadAction<ILoginAction>) {
      state.isLoading = true;
      state.error = undefined;

      const { username, password } = action.payload;
      const isUsername = username === REACT_APP_USERNAME;
      const isPassword = password === REACT_APP_PASSWORD;

      if (isPassword && isUsername) {
        state.username = username;
        state.isLoggedIn = true;
      } else {
        state.error = "Invalid email or password";
      }

      state.isLoading = false;
    },
    logout(state) {
      state.isLoading = true;
      state.error = undefined;
      state.username = "";
      state.isLoggedIn = false;
      state.isLoading = false;
    },
  },
});

export const authReducer = authSlice.reducer;
export const { login, logout } = authSlice.actions;
