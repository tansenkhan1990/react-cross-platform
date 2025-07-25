// src/routes/AppRoutes.tsx
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import Profile from "../pages/Profile";
import Dashboard from "../pages/Dashboard";
import Logout from "../pages/Logout";
import PrivateRoute from "./PrivateRoute";
import PublicLayout from "../layouts/PublicLayout";
import PrivateLayout from "../layouts/PrivateLayout";

const AppRoutes = () => {
  return (
    <Routes>
      {/* Public Routes */}
      <Route
        path="/"
        element={
          <PublicLayout>
            <Home />
          </PublicLayout>
        }
      />
      <Route
        path="/signin"
        element={
          <PublicLayout>
            <SignIn />
          </PublicLayout>
        }
      />
      <Route
        path="/signup"
        element={
          <PublicLayout>
            <SignUp />
          </PublicLayout>
        }
      />

      {/* Grouped Private Routes */}
      <Route
        element={
          <PrivateRoute>
            <PrivateLayout />
          </PrivateRoute>
        }
      >
        <Route path="/profile" element={<Profile />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/logout" element={<Logout />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
