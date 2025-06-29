import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
  isAuthenticated: boolean;
  email: string | null;
}

// ✅ Load from localStorage if available
const storedAuth = localStorage.getItem("auth");
const initialState: AuthState = storedAuth
  ? JSON.parse(storedAuth)
  : { isAuthenticated: false, email: null };

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login(state, action: PayloadAction<string>) {
      state.isAuthenticated = true;
      state.email = action.payload;
      localStorage.setItem("auth", JSON.stringify(state)); // ✅ persist
    },
    logout(state) {
      state.isAuthenticated = false;
      state.email = null;
      localStorage.removeItem("auth"); // ✅ clear
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
