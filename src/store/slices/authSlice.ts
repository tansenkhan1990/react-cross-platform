import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
}

interface AuthState {
  user: User | null;
  accessToken: string | null;
  isAuthenticated: boolean;
}

const storedUser = localStorage.getItem("user");
const storedToken = localStorage.getItem("accessToken");

const initialState: AuthState = {
  user: storedUser ? JSON.parse(storedUser) : null,
  accessToken: storedToken || null,
  isAuthenticated: !!storedToken,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login(state, action: PayloadAction<{ user: User; accessToken: string }>) {
      state.user = action.payload.user;
      state.accessToken = action.payload.accessToken;
      state.isAuthenticated = true;

      localStorage.setItem("user", JSON.stringify(action.payload.user));
      localStorage.setItem("accessToken", action.payload.accessToken);
    },
    logout(state) {
      state.user = null;
      state.accessToken = null;
      state.isAuthenticated = false;

      localStorage.removeItem("user");
      localStorage.removeItem("accessToken");
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
