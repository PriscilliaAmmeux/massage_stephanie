import React from "react";
import Footer from "../footer/footer";
import Header from "../header/header";
import NavBar from "../navBar/navBar";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <section>
      <Header />
      <NavBar />
      {children}
      <Footer />
    </section>
  );
}
