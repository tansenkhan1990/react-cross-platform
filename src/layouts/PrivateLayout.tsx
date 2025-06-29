// src/layouts/PrivateLayout.tsx
import React from "react";
import { Outlet } from "react-router-dom";
import PrivateHeader from "../components/PrivateHeader";
import Footer from "../components/Footer";

const PrivateLayout = () => (
  <div className="min-h-screen flex flex-col bg-white text-gray-800">
    <PrivateHeader />
    <main className="flex-grow">
      <Outlet />
    </main>
    <Footer />
  </div>
);

export default PrivateLayout;
