import React from "react";
import Footer from './components/footer';
import Header from './components/header'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Footer />
    </div>
  );
}
