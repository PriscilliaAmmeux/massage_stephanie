"use client";

import Button from "@/app/ui/button/button";
import Title from "@/app/components/title/title";
import { useRef } from "react";
import { CiMail } from "react-icons/ci";
import emailjs from "@emailjs/browser";

export default function Form() {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
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
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
    (e.target as HTMLFormElement).reset();
  };

  return (
    <form ref={form} onSubmit={sendEmail} className="flex-1 flex flex-col">
      <div className="flex justify-center items-center">
        <Title title="Formulaire de contact" Icon={CiMail} />
      </div>
      <label htmlFor="name" className="sr-only">
        Votre nom
      </label>
      <input
        type="text"
        name="user_name"
        placeholder="Votre nom"
        required
        aria-required="true"
        className="mb-4 p-2 border border-gray-300 rounded"
      />
      <label htmlFor="email" className="sr-only">
        Votre email
      </label>
      <input
        type="email"
        name="user_email"
        placeholder="Votre email"
        required
        aria-required="true"
        className="mb-4 p-2 border border-gray-300 rounded"
      />
      <label htmlFor="message" className="sr-only">
        Tapez ici votre message
      </label>
      <textarea
        name="message"
        placeholder="Votre message"
        required
        aria-required="true"
        className="mb-4 p-2 border border-gray-300 rounded h-32"
      />
      <Button type="submit" text="Envoyer mon message" />
    </form>
  );
}
