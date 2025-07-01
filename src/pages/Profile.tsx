import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import { UserCircleIcon, UserIcon } from "@heroicons/react/24/solid";

const Profile = () => {
  const user = useSelector((state: RootState) => state.auth.user);

  return (
    <div className="bg-gray-100 flex items-center justify-center px-4 py-10">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
        {/* Avatar */}
        <div className="flex justify-center mb-6">
          <UserCircleIcon className="w-24 h-24 text-blue-500" />
        </div>

        {/* User Info */}
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-1">
            {user?.firstName} {user?.lastName}
          </h1>
          <p className="text-sm text-gray-500 mb-4">
            Manage your account information
          </p>
        </div>

        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <UserIcon className="w-5 h-5 text-gray-500" />
            <span className="text-gray-700 text-sm">User</span>
          </div>

          <div className="flex items-center gap-3">
            <span className="w-5 h-5 rounded-full bg-green-500 inline-block"></span>
            <span className="text-gray-700 text-sm">Status: Active</span>
          </div>

          <div className="flex items-center gap-3">
            <span className="w-5 h-5 rounded-full bg-yellow-400 inline-block"></span>
            <span className="text-gray-700 text-sm">Role: User</span>
          </div>
        </div>

        {/* Actions */}
        <div className="mt-6 flex justify-center">
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
            Edit Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
