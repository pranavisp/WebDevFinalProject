"use client";

import React, { useState } from "react";
import Footer from './components/footer';
import Header from './components/header';
import Body from './components/body_hp';
import NewHeader from "./components/newheader";
import NewBody from "./components/newbody_hp";

export default function Home() {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [isGuest, setIsGuest] = useState(false);

  const handleSignIn = () => {
    setIsSignedIn(true);
  };

  const handleContinueAsGuest = () => {
    setIsGuest(true);
  };

  const handleLogOut = () => {
    setIsSignedIn(false);
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header remains the same if the user is a guest; changes only when signed in */}
      {isSignedIn ? <NewHeader onLogOut={handleLogOut} /> : <Header onSignIn={handleSignIn} onContinueAsGuest={handleContinueAsGuest} />}
      

      {/* Render NewBody if user is signed in or a guest */}
      {(isSignedIn || isGuest) ? <NewBody /> : <Body />}

      {/* Footer remains constant */}
      <Footer />
    </div>
  );
}
