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

// Safely load user from localStorage
let parsedUser: User | null = null;
const storedUser = localStorage.getItem("user");

try {
  if (storedUser && storedUser !== "undefined") {
    parsedUser = JSON.parse(storedUser);
  }
} catch (error) {
  console.warn("Failed to parse user from localStorage:", error);
  localStorage.removeItem("user");
}

// Load access token
const storedToken = localStorage.getItem("accessToken");

// Initial state
const initialState: AuthState = {
  user: parsedUser,
  accessToken: storedToken || null,
  isAuthenticated: !!storedToken,
};

// Create the slice
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

// Export actions and reducer
export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
