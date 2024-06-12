"use client";

import { FaBars, FaTimes } from "react-icons/fa";

import styles from "../../styles/burger.module.css";
import { useState } from "react";
import NavLink from "@/app/components/navLink/navLink";

export default function Burger() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <section>
      <div className="flex justify-end items-center">
        <button className="lg:hidden" onClick={toggleMenu}>
          {isOpen ? <FaTimes className="mr-6" /> : <FaBars className="mr-6" />}
        </button>
      </div>

      <div className={`${styles.burgerMenu} ${isOpen ? styles.open : ""}`}>
        <NavLink href="/" title="Accueil" />
        <NavLink href="/prestations" title="Prestations" />
        <NavLink href="/contact" title="Contact" />
      </div>
    </section>
  );
}
