import React from "react";
import PublicHeader from "../components/PublicHeader";
import Footer from "../components/Footer";

const PublicLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex min-h-screen flex-col bg-white text-gray-800">
      <PublicHeader />
      <main className="flex-grow flex flex-col justify-center">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default PublicLayout;
