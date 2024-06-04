import Form from "../form/form";
import InfoContact from "../infoContact/infoContact";
import Pub from "../pub/pub";

export default function Footer() {
  return (
    <footer className="w-full bg-pink-100 p-4 sm:p-6 md:p-10">
      <div className="flex flex-col md:flex-row justify-around items-center md:items-start space-y-6 md:space-y-0">
        <div className="w-full md:w-2/4">
          <Form />
        </div>
        <div className="w-full md:w-1/4">
          <InfoContact />
        </div>
      </div>
      <Pub />
    </footer>
  );
}
