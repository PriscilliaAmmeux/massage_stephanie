"use client";

import Button from "@/app/components/button/button";
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

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="flex-1 flex flex-col">
      <Title title="Contactez-nous" Icon={CiMail} />
      <input
        type="text"
        name="name"
        placeholder="Votre nom"
        value={formData.name}
        onChange={handleChange}
        required
        className="mb-4 p-2 border border-gray-300 rounded"
      />
      <input
        type="email"
        name="email"
        placeholder="Votre email"
        value={formData.email}
        onChange={handleChange}
        required
        className="mb-4 p-2 border border-gray-300 rounded"
      />
      <textarea
        name="message"
        placeholder="Votre message"
        value={formData.message}
        onChange={handleChange}
        required
        className="mb-4 p-2 border border-gray-300 rounded h-32"
      />
      <Button type="submit" text="Envoyer" />
    </form>
  );
}
