import { useState } from "react";
import Link from "next/link";
import NavLink from "@/app/ui/navLink/navLink";

export default function BurgerMenu() {
  const [isSubMenuVisible, setIsSubMenuVisible] = useState(false);

  const toggleSubMenu = () => {
    setIsSubMenuVisible(!isSubMenuVisible);
  };

  return (
    <div>
      <button onClick={toggleSubMenu} className="text-white p-4">
        Prestations
      </button>
      {isSubMenuVisible && (
        <div>
          <Link href="/prestations#prestation-1" passHref>
            <NavLink className="text-white p-4" title="Massage Amma" href={""}>
              Massage Amma
            </NavLink>
          </Link>
          <Link href="/prestations#prestation-2" passHref>
            <NavLink className="text-white p-4" title="Chi Nei Tsang" href={""}>
              Chi Nei Tsang
            </NavLink>
          </Link>
          <Link href="/prestations#prestation-3" passHref>
            <NavLink
              className="text-white p-4"
              title="Réfléxologie crânienne"
              href={""}>
              Réfléxologie crânienne
            </NavLink>
          </Link>
          <Link href="/prestations#prestation-4" passHref>
            <NavLink className="text-white p-4" title="QVT" href={""}>
              QVT
            </NavLink>
          </Link>
        </div>
      )}
    </div>
  );
}
