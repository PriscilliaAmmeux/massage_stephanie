"use client";

import { FaBars, FaTimes } from "react-icons/fa";
import styles from "../../styles/burger.module.css";
import { useState } from "react";
import NavLink from "@/app/ui/navLink/navLink";
import data from "../../../../api/prestations.json";

export default function Burger() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleCloseMenu = () => {
    setIsOpen(false);
  };

  return (
    <section>
      <div className="flex justify-between items-center pt-4 pb-4">
        <h1 className="text-2xl font-bold uppercase pl-2">Stéphanie HEUDRE</h1>
        <button
          className="lg:hidden"
          onClick={toggleMenu}
          aria-label={isOpen ? "Fermé le menu" : "Ouvrir le menu"}>
          {isOpen ? <FaTimes className="mr-6" /> : <FaBars className="mr-6" />}
        </button>
      </div>

      <div className={`${styles.burgerMenu} ${isOpen ? styles.open : ""}`}>
        <NavLink
          className="text-white p-4 uppercase"
          href="/"
          title="Accueil"
          onClick={handleCloseMenu}
        />
        <NavLink
          className="text-white p-4 uppercase"
          href="/prestations"
          title="Prestations"
          onClick={handleCloseMenu}
        />

        <div className="pl-4">
          {data.map((prestation) => (
            <NavLink
              href={`/prestations#prestation-${prestation.id}`}
              title={prestation.title}
              className="text-white p-2 "
              key={prestation.id}
              onClick={handleCloseMenu}
            />
          ))}
          <NavLink
            href={`/prestations#qvt`}
            title="Qualité de Vie au Travail"
            className="text-white p-2"
            onClick={handleCloseMenu}
          />
        </div>
        <NavLink
          className="text-white p-4 uppercase"
          href="/contact"
          title="Contact"
          onClick={handleCloseMenu}
        />
      </div>
    </section>
  );
}
