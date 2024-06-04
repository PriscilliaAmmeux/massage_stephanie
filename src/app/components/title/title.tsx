import React from "react";
import { IconType } from "react-icons";

interface TitleProps {
  title: string;
  Icon: IconType;
}

const Title: React.FC<TitleProps> = ({ title, Icon }) => (
  <div className="flex items-center mb-4">
    <Icon className="text-pink-500 text-3xl mr-2" />
    <h1 className="text-3xl text-pink-500 font-bold">{title}</h1>
  </div>
);

export default Title;
