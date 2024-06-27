import NavLink from "@/app/ui/navLink/navLink";
import SocialNetwork from "../socialNetwork/socialNetwork";
import data from "../../../../api/prestations.json";
import Logo from "../logo/logo";

export default function navBar() {
  return (
    <section className="flex justify-between items-center bg-gray-400 p-4 w-full">
      <Logo width={50} height={50} />
      <nav className="flex space-x-4">
        <NavLink href="/" title="Accueil" className="uppercase ml-6" />
        <div className="relative group">
          <NavLink
            href="/prestations"
            title="Prestations"
            className="inline-flex items-center group-hover:underline uppercase"
            showArrow={true}
          />
          <div className="absolute hidden group-hover:block bg-white text-black">
            {data.map((prestation) => (
              <NavLink
                href={`/prestations#prestation-${prestation.id}`}
                title={prestation.title}
                className="pl-2"
                key={prestation.id}
              />
            ))}
            <NavLink
              href={`/prestations#qvt`}
              title="Qualité de Vie au Travail"
              className="pl-2"
            />
          </div>
        </div>
        <NavLink href="/contact" title="Contact" className="uppercase" />
      </nav>
      <SocialNetwork />
    </section>
  );
}
