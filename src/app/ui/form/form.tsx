"use client";

import Button from "@/app/ui/button/button";
import Title from "@/app/components/title/title";
import { useState, useRef } from "react";
import { CiMail } from "react-icons/ci";

export default function Form() {
  /*const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { type, name, value } = e.target;
    setFormData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
  };*/

  const form = useRef();

  const sendEmail = () => {};

  return (
    <form ref={form} onSubmit={sendEmail} className="flex-1 flex flex-col">
      <div className="flex justify-center items-center">
        <Title title="Contactez-moi" Icon={CiMail} />
      </div>
      <label htmlFor="name" className="sr-only">
        Votre nom
      </label>
      <input
        type="text"
        name="name"
        placeholder="Votre nom"
        value={formData.name}
        onChange={handleChange}
        required
        aria-required="true"
        className="mb-4 p-2 border border-gray-300 rounded"
      />
      <label htmlFor="email" className="sr-only">
        Votre email
      </label>
      <input
        type="email"
        name="email"
        placeholder="Votre email"
        value={formData.email}
        onChange={handleChange}
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
        value={formData.message}
        onChange={handleChange}
        required
        aria-required="true"
        className="mb-4 p-2 border border-gray-300 rounded h-32"
      />
      <Button type="submit" text="Envoyer mon message" />
    </form>
  );
}
