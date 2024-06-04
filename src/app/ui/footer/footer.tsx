import Form from "../form/form";
import InfoContact from "../infoContact/infoContact";
import Pub from "../pub/pub";

export default function Footer() {
  return (
    <footer className="w-full bg-pink-100 p-10">
      <div className="flex justify-around">
        <div className="w-2/4">
          <Form />
        </div>
        <div className="w-1/4">
          <InfoContact />
        </div>
      </div>
      <Pub />
    </footer>
  );
}
