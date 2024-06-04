"use client";

import Title from "@/app/components/title/title";
import { useState } from "react";
import { CiMail } from "react-icons/ci";

export default function Form() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    e.preventDefault();
    console.log(formData);
  };
  return (
    <form>
      <Title title="Contactez moi" Icon={CiMail} />
      <input type="text" placeholder="Votre nom" />
      <input type="email" placeholder="Votre email" />
      <textarea placeholder="Votre message"></textarea>
      <button type="submit">Envoyer</button>
    </form>
  );
}
