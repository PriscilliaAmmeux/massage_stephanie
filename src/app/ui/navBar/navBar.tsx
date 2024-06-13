import NavLink from "@/app/ui/navLink/navLink";
import SocialNetwork from "../socialNetwork/socialNetwork";

export default function navBar() {
  return (
    <section className="flex justify-between items-center bg-gray-800 text-white p-4 w-full">
      <nav className="flex space-x-4">
        <NavLink href="/" title="Accueil" />
        <NavLink href="/prestations" title="Prestations" />
        <NavLink href="/contact" title="Contact" />
      </nav>
      <SocialNetwork />
    </section>
  );
}
