"use client";

import { FaBars, FaTimes } from "react-icons/fa";
import styles from "../../styles/burger.module.css";
import { useState, useEffect } from "react";
import NavLink from "@/app/components/navLink/navLink";
import data from "../../../../api/prestations.json";
import Logo from "@/app/ui/logo/logo";
import SocialNetwork from "@/app/ui/socialNetwork/socialNetwork";

export default function Burger() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = (event: React.MouseEvent) => {
    event.stopPropagation();
    setIsOpen(!isOpen);
  };

  const handleCloseMenu = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("click", handleCloseMenu);
    } else {
      document.removeEventListener("click", handleCloseMenu);
    }

    return () => {
      document.removeEventListener("click", handleCloseMenu);
    };
  }, [isOpen]);

  return (
    <section
      style={{
        height: isOpen ? "100vh" : "auto",
      }}
      onClick={(e) => e.stopPropagation()}
      // Prevent closing when clicking inside the menu
    >
      <div className="flex justify-between items-center mt-2">
        <span className="ml-2">
          <Logo theme="dark" width={50} height={50} />
        </span>

        <div className="flex flex-col items-center ">
          <h1 className="text-2xl font-bold">Stéphanie Heudre</h1>
          <h2 className="text-xl">Praticienne bien-être certifiée</h2>
        </div>

        <button
          className="lg:hidden"
          onClick={toggleMenu}
          aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}>
          {isOpen ? <FaTimes className="mr-6" /> : <FaBars className="mr-6" />}
        </button>
      </div>

      {isOpen && (
        <nav
          className={`${styles.burgerMenu} ${
            isOpen ? styles.open : ""
          } flex flex-col items-center justify-start `}
          onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the menu
        >
          <div
            className="flex justify-around items-center mt-28
           mb-5 mr-5 ml-5 ">
            <span>
              <Logo theme="dark" width={50} height={50} />
            </span>
            <div className="flex flex-col items-center ">
              <h1 className="text-2xl font-bold items-center">
                Stéphanie Heudre
              </h1>
              <h2 className="text-xl items-center text-center">
                Praticienne bien-être certifiée
              </h2>
            </div>
            <button onClick={handleCloseMenu}>
              <FaTimes className="cursor-pointer" />
            </button>
          </div>

          <NavLink
            href="/"
            title="Accueil"
            onClick={handleCloseMenu}
            className="uppercase"
          />
          <NavLink
            href="/prestations"
            title="Prestations ▼"
            onClick={(e) => {
              e.preventDefault();
            }}
            className="uppercase mt-5"></NavLink>

          <div className="pl-4 flex flex-col items-center justify-center">
            {data.map((prestation) => (
              <NavLink
                href={`/prestations#prestation-${prestation.id}`}
                title={prestation.title}
                key={prestation.id}
                onClick={handleCloseMenu}
              />
            ))}
            <NavLink
              href={`/prestations#qvt`}
              title="Qualité de Vie au Travail"
              onClick={handleCloseMenu}
              className="uppercase mt-5"
            />
          </div>

          <NavLink
            href="/contact"
            title="Contact"
            onClick={handleCloseMenu}
            className="uppercase mt-5"
          />
          <span className="flex items-center mt-5">
            <SocialNetwork theme="dark" />
          </span>
        </nav>
      )}
    </section>
  );
}
