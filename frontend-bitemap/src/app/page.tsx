import React from "react";
import Footer from './footer';
import Header from './header'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Footer />
    </div>
  );
}
