import Burger from "../burger/burger";
import NavBar from "../navBar/navBar";

export default function navigation() {
  return (
    <div>
      <section className="lg:hidden">
        <Burger />
      </section>
      <section className="hidden lg:flex justify-center">
        <NavBar />
      </section>
    </div>
  );
}
