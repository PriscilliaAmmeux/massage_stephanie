import { FaFacebook, FaLinkedin } from "react-icons/fa";
import headerImage from "../../../../public/header.jpg";
import Image from "next/image";

export default function Header() {
  return (
    <header
      className="w-full flex justify-around items-center p-4 relative"
      style={{ width: "100%", height: "200px" }}>
      <Image
        src={headerImage}
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        alt="background header showing dried flowers"
        className="opacity-50"
      />

      <div className="left-0 right-10 absolute p-4 flex-col items-center">
        <h1 className="text-2xl font-bold">Stéphanie HEUDRE</h1>
        <h2>Spécialiste du massage diplômé</h2>
      </div>

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
