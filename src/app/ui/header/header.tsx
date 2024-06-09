import { FaFacebook, FaLinkedin } from "react-icons/fa";
import BackgroundImageRotator from "@/app/components/backgroundImageRotator/backgroundImageRotator";
import Items from "@/app/components/items/items";
import { AiOutlineMail } from "react-icons/ai";

export default function Header() {
  const images = [
    {
      src: "/header.jpg",
      alt: "Fond d'écran représentant des fleurs séchés dans un pot en verre ainsi qu'un récipient contenant de l'huile",
    },
    {
      src: "/header2.jpg",
      alt: "Fond d'écran représentant des bougies, des fleurs séchés.",
    },
    {
      src: "/header3.jpg",
      alt: "Fond d'écran représentant une page, avec une pile de galets superposés les un aux autres au 1er plan, plage de sable fin au second plan, la mer et un ciel bleu.",
    },
    { src: "/header4.jpg", alt: "Fond d'écran représentant des fleurs roses" },
    {
      src: "/header5.jpg",
      alt: "Fond d'écran représentant des fleurs blanches et orange sur un fond vert.",
    },
  ];
  const intervalTime = 10000;

  return (
    <header
      className="w-full flex flex-col md:flex-row justify-around items-center p-4 relative"
      style={{ width: "100%", height: "300px" }}>
      <BackgroundImageRotator
        images={images}
        intervalTime={intervalTime}
        className="opacity-50"
      />

      <div className="left-0 right-10 absolute p-4 flex-col items-center">
        <h1 className="text-2xl font-bold">Stéphanie HEUDRE</h1>
        <h2>Spécialiste du massage diplômé</h2>
      </div>

      <Items />

      <div className="right-10 absolute p-4 flex items-center gap-2">
        <a
          href="https://www.facebook.com/profile.php?id=100001999839594&locale=fr_FR"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Link to Facebook profile">
          <FaFacebook size={24} />
        </a>
        <a
          href="https://www.linkedin.com/in/st%C3%A9phanieheudre/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Link to LinkedIn profile">
          <FaLinkedin size={24} />
        </a>
      </div>
    </header>
  );
}
