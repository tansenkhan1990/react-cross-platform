import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-gray-800 text-white shadow">
      <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col sm:flex-row justify-between items-center">
        <div className="flex items-center space-x-2">
          <Link to="/" className="text-xl font-semibold text-blue-500">
            MyDemoProject
          </Link>
        </div>
        <nav className="flex flex-col sm:flex-row items-center gap-4 mt-4 sm:mt-0">
          <Link
            to="/"
            className="hover:text-blue-300 transition-colors font-medium"
          >
            Home
          </Link>
          <Link
            to="/signin"
            className="hover:text-blue-300 transition-colors font-medium"
          >
            Sign In
          </Link>
          <Link
            to="/signup"
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md font-medium transition-colors"
          >
            Sign Up
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
