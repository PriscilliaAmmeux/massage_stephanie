import Footer from "../ui/footer/footer";
import Form from "../ui/form/form";
import InfoContact from "../ui/infoContact/infoContact";

export default function Page() {
  return (
    <section>
      <div className="flex flex-col md:flex-row justify-around items-center md:items-start space-y-6 md:space-y-0">
        <div className="w-full md:w-2/4">
          <Form />
        </div>
        <div className="w-full md:w-1/4">
          <InfoContact />
        </div>
      </div>
      <Footer />
    </section>
  );
}
