import { FaFacebook, FaLinkedin } from "react-icons/fa";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <header className="w-full flex justify-between items-center p-4 bg-gray-200">
        <div className="flex items-center">
          <h1>Nom Prénom</h1>
          <h2>Massage Diplômé</h2>
        </div>
        <div className="flex items-center">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer">
            <FaFacebook size={24} />
          </a>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer">
            <FaLinkedin size={24} />
          </a>
        </div>
      </header>

      <section className="w-full flex flex-col items-center justify-center p-4">
        <h2>Prestation de service massage</h2>
        <p>Description de la prestation...</p>
      </section>

      <footer className="w-full flex justify-between items-center p-4 bg-gray-200">
        <div>
          <h3>Contactez-nous</h3>
          <form>
            <input type="text" placeholder="Votre nom" />
            <input type="email" placeholder="Votre email" />
            <textarea placeholder="Votre message"></textarea>
            <button type="submit">Envoyer</button>
          </form>
        </div>
        <div>
          <h3>Infos de contact</h3>
          <p>Adresse</p>
          <p>Téléphone</p>
          <p>Email</p>
        </div>
      </footer>
    </main>
  );
}
