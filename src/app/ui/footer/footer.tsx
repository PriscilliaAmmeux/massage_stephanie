
import Form from "../form/form";
import InfoContact from "../infoContact/infoContact";

export default function Footer() {
  return (
    <footer className="w-full flex justify-between items-center p-4 bg-gray-200">
      <div>
        <Form />
      </div>
      <InfoContact />
    </footer>
  );
}
