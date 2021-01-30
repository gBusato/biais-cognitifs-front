import Image from "next/image";
import React from "react";
import LinkButton from "../components/link-button";
import data from "../data/index.json";

const generateCards = (card: any) => {
  return (
    <div className="xl:w-1/4 md:w-1/2 relative m-2">
      <div className="w-full h-full bg-black ml-0.5 mt-0.5 rounded-lg absolute left-0 top-0 -z-1" />
      <div className="p-6 bg-white  border-2 border-gray-900 border-solid rounded-md shadow-xs inline-block z-10">
        <h3 className="tracking-widest text-pink-400 text-xs font-medium title-font">
          {card.subtitle}
        </h3>
        <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
          {card.title}
        </h2>
        <p className="leading-relaxed text-base">{card.text}</p>
      </div>
    </div>
  );
};

const Index = () => {
  return (
    <>
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
      <section>
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap w-full mb-20">
            <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
              <h2 className="sm:text-3xl font-bold text-3xl mb-2 text-gray-900">
                {data.laPsychologie.title}
              </h2>
              <div className="h-1 w-20 bg-pink-400 rounded"></div>
            </div>
            <p className="lg:w-1/2 w-full leading-relaxed text-gray-800 text-xl">
              {data.laPsychologie.text}
            </p>
          </div>
          <div className="flex flex-wrap -m-4 justify-around">
            {data.laPsychologie.cards.map((card) => generateCards(card))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
