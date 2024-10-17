import React from "react";
import Footer from './footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="flex justify-between items-center p-4 bg-gray-100 shadow-md">
        <div className="logo">
          <img src="/logo.png" alt="Logo" className="h-10" />
        </div>
        <div>
          <button className="border-2 border-green-800 text-black px-4 py-2 rounded  transition duration-300 ease-in-out hover:bg-green-100">
            Get Started
          </button>
        </div>
      </header>
      <Footer />
    </div>
  );
}
