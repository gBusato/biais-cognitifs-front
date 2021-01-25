import Link from "next/link";
import React from "react";

type Props = {
  text: string;
  type?: "primary" | "secondary" | "info" | "light";
  link: string;
};

const setType = (type) => {
  switch (type) {
    case "light":
      return "bg-white hover:text-black hover:bg-grey-200";
    case "secondary":
      return "bg-green-200 hover:bg-green-400 hover:text-white";
    case "primary":
    default:
      return "bg-pink-200 hover:bg-pink-400 hover:text-white";
  }
};

const LinkButton = ({ text, type, link }: Props) => {
  const cssColors = setType(type);

  return (
    <Link href={link}>
      <a
        className={
          "relative z-10 text-lg mx-4 px-5 py-2 font-bold leading-tight text-black border-4 border-gray-900 rounded-lg  " +
          cssColors
        }
      >
        {text}
        <span className="absolute h-full w-full bg-gray-900 rounded-lg inset-2 -z-1"></span>
      </a>
    </Link>
  );
};

export default LinkButton;
