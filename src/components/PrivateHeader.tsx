// src/components/PrivateHeader.tsx
import React from "react";
import { Link } from "react-router-dom";

const PrivateHeader = () => {
  return (
    <header className="bg-gray-900 text-white shadow">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/dashboard" className="text-xl font-semibold text-green-400">
          Dashboard
        </Link>
        <nav className="flex gap-4">
          <Link to="/profile" className="hover:text-green-300 font-medium">
            Profile
          </Link>
          <Link to="/logout" className="text-red-400 hover:text-red-500 font-medium">
            Logout
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default PrivateHeader;
