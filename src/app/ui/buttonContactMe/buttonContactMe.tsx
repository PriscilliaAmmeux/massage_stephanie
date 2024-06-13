import Link from "next/link";
import Button from "../button/button";

export default function ButtonContactMe() {
  return (
    <Link href="/contact">
      <Button type={"button"} text={"Envoyer un email"} className="mt-5" />
    </Link>
  );
}
