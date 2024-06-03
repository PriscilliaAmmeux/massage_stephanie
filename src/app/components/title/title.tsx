import React from "react";
import { IconType } from "react-icons";

interface TitleProps {
  title: string;
  Icon: IconType;
}

const Title: React.FC<TitleProps> = ({ title, Icon }) => (
  <div className="flex items-center mb-4">
    <Icon className="text-green-700 text-3xl mr-2" />
    <h1 className="text-3xl text-green-700 font-bold">{title}</h1>
  </div>
);

export default Title;
