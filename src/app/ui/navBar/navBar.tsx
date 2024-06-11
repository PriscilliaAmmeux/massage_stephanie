import NavLink from "@/app/components/navLink/navLink";
import { FaFacebook, FaLinkedin } from "react-icons/fa";

export default function navBar() {
  return (
    <section className="flex justify-between items-center bg-gray-800 text-white p-4 w-full">
      <div className="flex space-x-4">
        <NavLink href="/" title="Accueil" />
        <NavLink href="/prestations" title="Prestations" />
        <NavLink href="/contact" title="Contact" />
      </div>
      <div className="flex items-center gap-2">
        <a
          href="https://www.facebook.com/profile.php?id=100001999839594&locale=fr_FR"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Link to Facebook profile"
          className="cursor-pointer hover:text-pink-300">
          <FaFacebook size={24} className="text-current" />
        </a>
        <a
          href="https://www.linkedin.com/in/st%C3%A9phanieheudre/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Link to LinkedIn profile"
          className="cursor-pointer hover:text-pink-300">
          <FaLinkedin size={24} className="text-current" />
        </a>
      </div>
    </section>
  );
}
