import { GiLadybug } from "react-icons/gi";

export default function Footer() {
  return (
    <footer className="w-full bg-gray-800 text-white sm:p-6 md:p-10 flex flex-col items-center justify-center pt-4 pb-4 px-4 gap-2 text-center md:text-left text-sm">
      <p className="italic flex flex-col md:flex-row gap-2 items-center">
        Créé par{" "}
        <span className="font-bold text-pink-100">Priscillia Ammeux</span>
        <GiLadybug className="text-pink-100" />
      </p>
      <p>
        Conceptrice et Développeuse d&apos;Applications:
        <a
          href="http://www.priscillia-ammeux-portfolio.fr"
          className="pl-2 text-pink-100 hover:underline hover:font-semibold"
          target="_blank"
          rel="noopener noreferrer">
          www.priscillia-ammeux-portfolio.fr
        </a>
      </p>
    </footer>
  );
}
