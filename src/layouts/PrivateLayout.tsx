import React from "react";
import PrivateHeader from "../components/PrivateHeader";
import Footer from "../components/Footer";

const PrivateLayout = ({ children }: { children: React.ReactNode }) => (
  <div className="min-h-screen flex flex-col bg-white text-gray-800">
    <PrivateHeader />
    <main className="flex-grow">{children}</main>
    <Footer />
  </div>
);

export default PrivateLayout;
