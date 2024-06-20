import NavLink from "@/app/ui/navLink/navLink";
import SocialNetwork from "../socialNetwork/socialNetwork";

export default function navBar() {
  return (
    <section className="flex justify-between items-center bg-gray-800 text-white p-4 w-full">
      <nav className="flex space-x-4">
        <NavLink href="/" title="Accueil" />
        <div className="relative group">
          <NavLink
            href="/prestations"
            title="Prestations"
            className="inline-flex items-center group-hover:underline"
            showArrow={true}
          />
          <div className="absolute hidden group-hover:block bg-white text-black ">
            <NavLink
              href="/prestations#{id}"
              title="Massage Assis ou AMMA"
              className="pl-2"
            />
            <NavLink
              href="/prestations#b"
              title="Chi Nei Tsang"
              className="pl-2"
            />
            <NavLink
              href="/prestations#c"
              title="Réfléxologie crânienne"
              className="pl-2"
            />
          </div>
        </div>
        <NavLink href="/contact" title="Contact" />
      </nav>
      <SocialNetwork />
    </section>
  );
}
