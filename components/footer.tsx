import React from "react";
import data from "../data/footer.json";
import { FormatString } from "../lib/formatString";

const Footer = () => {
  return (
    <footer className="w-full py-8">
      <div className="max-w-7xl mx-auto px-4 border-gray-900 border-t-4"></div>
      <div className="text-center my-4 text-sm">
        <p>
          {FormatString(data.copyrights, new Date().getFullYear().toString())}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
