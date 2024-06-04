import { FaFacebook, FaLinkedin } from "react-icons/fa";
import BackgroundImageRotator from "@/app/components/backgroundImageRotator/backgroundImageRotator";
import Items from "@/app/components/items/items";

export default function Header() {
  const images = [
    "/header.jpg",
    "/header2.jpg",
    "/header3.jpg",
    "/header4.jpg",
    "/header5.jpg",
  ];
  const intervalTime = 6000;

  return (
    <header
      className="w-full flex justify-around items-center p-4 relative"
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
          rel="noopener noreferrer">
          <FaFacebook size={24} />
        </a>
        <a
          href="https://www.linkedin.com/in/st%C3%A9phanieheudre/"
          target="_blank"
          rel="noopener noreferrer">
          <FaLinkedin size={24} />
        </a>
      </div>
    </header>
  );
}
