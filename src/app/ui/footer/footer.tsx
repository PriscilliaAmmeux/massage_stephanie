import Logo from "../logo/logo";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="flex flex-col md:flex-row items-center gap-6 w-full bg-gray-700 text-white sm:p-6 md:p-10 pt-4 pb-4 px-4 gap-2 text-center md:text-left text-sm justify-center">
      <Logo width={200} height={200} theme={"light"} />
      <section>
        <div className="flex flex-col items-center space-y-2">
          <p className="font-bold">
            © {currentYear} Stéphanie Heudre. Tous droits réservés.
          </p>
          <a
            href="/legalNotices"
            className="hover:text-pink-700 hover:font-bold cursor-pointer">
            Mentions légales
          </a>
          <a
            href="/privacy"
            className="hover:text-pink-700 hover:font-bold cursor-pointer">
            Politique de confidentialité
          </a>
        </div>
        <div className="flex justify-center text-xl">~</div>
        <div className="flex justify-center space-y-1 mt-2">
          <span>
            Créé par{" "}
            <a
              href="https://www.pixelia-and-co.fr/"
              className="font-bold hover:underline hover:font-semibold text-pink-300"
              target="_blank"
              rel="noopener noreferrer">
              Pixelia & Co
            </a>{" "}
            – Agence web
          </span>
        </div>
      </section>
    </footer>
  );
}
