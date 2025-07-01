import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define the shape of a user
interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
}

// Define the shape of the auth state
interface AuthState {
  user: User | null;
  accessToken: string | null;
  isAuthenticated: boolean;
}

// Load access token from localStorage
const storedToken = localStorage.getItem("accessToken");

const initialState: AuthState = {
  user: null, // will be set after login
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

      localStorage.setItem("accessToken", action.payload.accessToken);
    },
    logout(state) {
      state.user = null;
      state.accessToken = null;
      state.isAuthenticated = false;

      localStorage.removeItem("accessToken");
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
