import React from "react";
import Footer from "../footer/footer";
import Header from "../header/header";
import Navigation from "../navigation/navigation";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <section>
      <Header />
      <Navigation />
      {children}
      <Footer />
    </section>
  );
}
