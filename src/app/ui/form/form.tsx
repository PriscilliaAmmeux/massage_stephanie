"use client";

import Button from "@/app/ui/button/button";
import Title from "@/app/components/title/title";
import InputField from "@/app/components/inputField/inputField";
import TextAreaField from "@/app/components/textAreaField/textAreaField";
import { useRef, useState } from "react";
import { CiMail } from "react-icons/ci";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import ReCAPTCHA from "react-google-recaptcha";

export default function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const isFormValid =
    name !== "" && phone !== "" && email !== "" && message !== "";

  const form = useRef<HTMLFormElement>(null);

  const [captchaValue, setCaptchaValue] = useState(null);

  const handleCaptchaResponseChange = (value: any) => {
    setCaptchaValue(value);
  };
  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!isFormValid) {
      alert("Veuillez remplir tous les champs");
      return;
    }

    const SERVICE_ID = process.env.NEXT_PUBLIC_SERVICE_ID;
    const TEMPLATE_ID = process.env.NEXT_PUBLIC_TEMPLATE_ID;
    const PUBLIC_KEY = process.env.NEXT_PUBLIC_PUBLIC_KEY;
    
    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      throw new Error("Environment variables are not defined");
    }

    if (!form.current) {
      throw new Error("Form is not rendered yet");
    }

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY).then(
      (result) => {
        Swal.fire({
          title: "Succès!",
          text: "Votre message a bien été envoyé.",
          icon: "success",
        });
      },
      (error) => {
        if (!captchaValue) {
          Swal.fire({
            title: "Erreur!",
            text: "Veuillez vérifier le CAPTCHA.",
            icon: "error",
          });
          return;
        }
      }
    );
    (e.target as HTMLFormElement).reset();
  };

  return (
    <form ref={form} onSubmit={sendEmail} className="flex-1 flex flex-col">
      <div className="flex justify-center items-center">
        <Title title="Formulaire de contact" Icon={CiMail} />
      </div>
      <InputField
        type="text"
        name="user_name"
        placeholder="Votre nom"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <InputField
        type="email"
        name="user_email"
        placeholder="Votre email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <InputField
        type="tel"
        name="user_phone"
        placeholder="Votre téléphone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <TextAreaField
        name="message"
        placeholder="Votre message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      {process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY ? (
        <ReCAPTCHA
          sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
          onChange={handleCaptchaResponseChange}
        />
      ) : (
        <div></div>
      )}
      <Button
        type="submit"
        text="Envoyer mon message"
        disabled={!isFormValid}
      />
    </form>
  );
}
