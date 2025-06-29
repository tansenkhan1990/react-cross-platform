// src/layouts/PublicLayout.tsx
import React from "react";
import PublicHeader from "../components/PublicHeader";
import Footer from "../components/Footer";

const PublicLayout = ({ children }: { children: React.ReactNode }) => (
  <div className="min-h-screen flex flex-col bg-white text-gray-800">
    <PublicHeader />
    <main className="flex-grow">{children}</main>
    <Footer />
  </div>
);

export default PublicLayout;
