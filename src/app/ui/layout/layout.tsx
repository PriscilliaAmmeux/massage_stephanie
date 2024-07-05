"use client";

import React, { useState } from "react";
import Footer from "../footer/footer";
import Header from "../header/header";
import Navigation from "../navigation/navigation";
import RgpdModal from "../rgpdModal/rgpdModal";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [isRgpdModalOpen, setRgpdModalOpen] = useState(false);

  const handleRgpdClick = () => {
    setRgpdModalOpen(true);
  };

  const closeRgpdModal = () => {
    setRgpdModalOpen(false);
  };
  return (
    <section>
      <Header className="hidden md:block" />
      <Navigation />
      {children}
      <Footer onRgpdClick={handleRgpdClick} />
      {isRgpdModalOpen && <RgpdModal onClose={closeRgpdModal} />}
    </section>
  );
}
