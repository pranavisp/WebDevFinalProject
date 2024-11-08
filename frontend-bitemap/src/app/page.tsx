import React from "react";
import Footer from './components/footer';
import Header from './components/header';
import Body from './components/body_hp';
import SearchBar from './components/SearchBar';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <Body/>
      <Footer />
    </div>
  );
}
