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
      return "text-gray-900 bg-white hover:text-black hover:bg-grey-200  ";
    case "secondary":
      return "text-gray-900 bg-green-200 hover:bg-green-400 hover:text-white ";
    case "primary":
    default:
      return "text-gray-900 bg-pink-200 hover:bg-pink-400 hover:text-white ";
  }
};

const LinkButton = ({ text, type, link }: Props) => {
  const cssColors =
    "relative inline-block px-5 py-2 text-xl font-bold text-center no-underline whitespace-no-wrap align-middle border-2 border-gray-900 border-solid rounded-md shadow-xs cursor-pointer select-none hover:shadow-xs focus:shadow-xs " +
    setType(type);

  return (
    <Link href={link}>
      <a className="relative inline-block m-2">
        <div className="w-full h-full bg-black ml-0.5 mt-0.5 rounded-lg absolute left-0 top-0" />
        <span className={cssColors}>{text}</span>
      </a>
    </Link>
  );
};

export default LinkButton;
