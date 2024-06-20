export default function Footer() {
  return (
    <footer className="flex flex-col items-center gap-6 w-full bg-gray-800 text-white sm:p-6 md:p-10 flex flex-col items-center justify-center pt-4 pb-4 px-4 gap-2 text-center md:text-left text-sm">
      <section className="flex flex-col  items-center space-y-2">
        <p>© 2024 Stéphanie Heudre. Tous droits réservés. </p>
        <p className="underline">Mentions légales: </p>
        <p>Siret de l&apos;établissement: 85127227800041</p>
      </section>
      <div className="text-2xl">~</div>
      <section>
        <p className="flex flex-col space-y-2 items-center">
          Créé par <span className="font-bold ">Priscillia Ammeux</span>
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
      </section>
    </footer>
  );
}
