import React from "react";
import { Outlet } from "react-router-dom";
import PrivateHeader from "../components/PrivateHeader";
import Footer from "../components/Footer";

const PrivateLayout = () => {
  return (
    <div className="flex min-h-screen flex-col bg-white text-gray-800">
      <PrivateHeader />
      <main className="flex-grow flex flex-col justify-center">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default PrivateLayout;
