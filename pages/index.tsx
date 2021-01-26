import Image from "next/image";
import React from "react";
import LinkButton from "../components/link-button";
import data from "../data/index.json";

const Index = () => {
  return (
    <section>
      <div className="flex px-5 py-24 items-center justify-center flex-col">
        <Image
          className="lg:w-2/6 md:w-3/6 mb-24 object-cover object-center"
          src={data.cta.image}
          width={200}
          height={200}
          alt={data.cta.imageAlt}
          objectFit="cover"
        />
        <div className="text-center lg:w-2/3 w-full">
          <h1 className="title-font text-5xl mb-4 font-extrabold leading-normal text-black my-12">
            <div>{data.cta.title}</div>
            <div className="text-pink-400">{data.cta.titleBright}</div>
          </h1>
          <p className="my-8 leading-relaxed text-xl">{data.cta.subtitle}</p>
          <div className="flex justify-center flex-wrap-reverse">
            <LinkButton
              text={data.cta.btnSecondary}
              type="secondary"
              link="/"
            />
            <LinkButton text={data.cta.btnPrimary} type="primary" link="/" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Index;
