import React from "react";
import Footer from './components/footer';
import Header from './components/header';
import HomeMaps from './components/googlemap_hp';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <HomeMaps/>
      <Footer />
    </div>
  );
}
