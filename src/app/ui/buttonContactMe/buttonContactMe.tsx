interface ButtonContactMeProps {
  type: "contact" | "call";
  className?: string;
}

export default function ButtonContactMe({
  type,
  className = "",
}: ButtonContactMeProps) {
  if (type === "call") {
    return (
      <a
        href="tel:0676397406"
        className={`bg-pink-700 text-white text-center px-4 py-2 rounded hover:bg-pink-800 transition-colors font-semibold ${className}`}
        aria-label="Cliquez sur le bouton pour appeler et prendre rendez-vous">
        Prendre rendez-vous
      </a>
    );
  }

  // type === "contact"
  return (
    <a
      href="/contact"
      className={`bg-pink-700 text-white text-center px-4 py-2 rounded hover:bg-pink-800 transition-colors font-semibold ${className}`}
      aria-label="Cliquez sur le bouton pour aller sur la page Contact afin d'envoyer un email">
      Envoyer un email
    </a>
  );
}
