import { FaFacebook, FaLinkedin } from "react-icons/fa";

export default function SocialNetwork() {
  return (
    <section className="flex items-center gap-2 text-white">
      <a
        href="https://www.facebook.com/profile.php?id=100001999839594&locale=fr_FR"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Link to Facebook profile"
        className="cursor-pointer hover:text-pink-700">
        <FaFacebook size={24} className="text-current" />
      </a>
      <a
        href="https://www.linkedin.com/in/st%C3%A9phanieheudre/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Link to LinkedIn profile"
        className="cursor-pointer hover:text-pink-700">
        <FaLinkedin size={24} className="text-current" />
      </a>
    </section>
  );
}
