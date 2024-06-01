import { FaFacebook, FaLinkedin } from "react-icons/fa";
import headerImage from "../../../../public/header.jpg";

export default function Header() {
  return (
    <header
      className="w-full flex justify-around items-center p-4"
      style={{
        backgroundImage: `url(${headerImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100%",
        height: "200px",
      }}>
      <h1>Stéphanie HEUDRE</h1>
      <h2>Spécialiste du massage diplômé</h2>

      <div className="flex items-center gap-2">
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
