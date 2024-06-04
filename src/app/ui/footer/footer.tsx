import { GiLadybug } from "react-icons/gi";
import Form from "../form/form";
import InfoContact from "../infoContact/infoContact";

export default function Footer() {
  return (
    <footer className="w-full bg-pink-100 mt-10">
      <div className=" flex justify-between gap-40 p-10">
        <Form />
        <InfoContact />
      </div>

      <p className="flex items-center justify-center h-40 pt-5 italic text-white bg-gray-600 gap-2">
        Créée par Priscillia Ammeux <GiLadybug /> - Conceptrice et Développeuse
        d'Applications:
        <a
          href="http://www.priscillia-ammeux-portfolio.fr"
          className="hover:text-pink-500"
          target="_blank"
          rel="noopener noreferrer">
          www.priscillia-ammeux-portfolio.fr
        </a>
      </p>
    </footer>
  );
}
