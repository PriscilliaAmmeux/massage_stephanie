import { BsQuestionSquare } from "react-icons/bs";
import Title from "../title/title";
import ButtonContactMe from "../buttonContactMe/buttonContactMe";

export default function Functioning() {
  return (
    <section className="bg-pink-100 rounded p-10 space-y-4">
      <Title title={"Comment prendre rendez vous ?"} Icon={BsQuestionSquare} />
      <p>
        Pour prendre rendez-vous, veuillez m&apos;envoyer un email avec votre
        nom, votre numéro de téléphone, votre adresse et vos disponibilités. Je
        vous recontacterai dans les plus brefs délais pour convenir d&apos;un
        rendez-vous.
      </p>
      <ButtonContactMe />
    </section>
  );
}
