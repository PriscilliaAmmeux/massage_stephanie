import { BsQuestionSquare } from "react-icons/bs";
import Title from "../title/title";
import Link from "next/link";
import Button from "../button/button";

export default function Functioning() {
  return (
    <section className="pl-10 pr-10 space-y-4">
      <Title title={"Comment prendre rendez vous ?"} Icon={BsQuestionSquare} />
      <p>
        Pour prendre rendez-vous, veuillez m&apos;envoyer un email avec votre
        nom, votre numéro de téléphone, votre adresse et vos disponibilités. Je
        vous recontacterai dans les plus brefs délais pour convenir d'un
        rendez-vous.
      </p>
      <Link href="/contact">
        <Button
          type={"button"}
          text={"Envoyer un email"}
          className="mt-5 mb-10"
        />
      </Link>
    </section>
  );
}
