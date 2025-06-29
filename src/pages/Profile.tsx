import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store";

const Profile = () => {
  const email = useSelector((state: RootState) => state.auth.email);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <h1 className="text-2xl font-bold text-blue-600">Welcome, {email}!</h1>
    </div>
  );
};

export default Profile;
