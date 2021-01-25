import React from "react";
import LinkButton from "../components/link-button";
import data from "../data/index.json";

const Index = () => {
  return (
    <div className="text-center mx-auto py-12">
      <h1 className="text-5xl font-extrabold text-black leading-relaxed">
        <div>{data.cta.title}</div>
        <div className="text-pink-400">{data.cta.titleBright}</div>
      </h1>
      <p className="my-8 text-lg text-gray-700 max-w-2xl mx-auto">
        {data.cta.subtitle}
      </p>
      <div className="my-16">
        <LinkButton text={data.cta.btnSecondary} type="secondary" link="/" />
        <LinkButton text={data.cta.btnPrimary} type="primary" link="/" />
      </div>
    </div>
  );
};

export default Index;
