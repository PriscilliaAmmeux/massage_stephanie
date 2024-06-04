import { GiLadybug } from "react-icons/gi";

export default function Pub() {
  return (
    <div className="flex flex-col items-center justify-center pt-10 gap-2">
      <hr className="w-full border-t-2 border-pink-500 mb-5" />
      <p className="italic flex gap-2 items-center">
        Créée par{" "}
        <span className="font-bold text-pink-500">Priscillia Ammeux</span>{" "}
        <GiLadybug className="text-pink-500" />
      </p>
      <p className="italic">
        Conceptrice et Développeuse d&apos;Applications:{" "}
        <a
          href="http://www.priscillia-ammeux-portfolio.fr"
          className="text-pink-500 hover:underline"
          target="_blank"
          rel="noopener noreferrer">
          www.priscillia-ammeux-portfolio.fr
        </a>
      </p>
    </div>
  );
}
