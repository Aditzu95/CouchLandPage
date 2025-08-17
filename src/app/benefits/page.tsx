"use client";

import { IconType } from "react-icons";
import { FaGift } from "react-icons/fa";
import { FaUserFriends } from "react-icons/fa";
import { IoIosPaper } from "react-icons/io";
import { GiBrain } from "react-icons/gi";
import { MdMarkEmailRead } from "react-icons/md";
import { FaBook } from "react-icons/fa";

type BenefitsData = {
  title: string;
  info: string;
  icon: IconType;
};

const DATA: BenefitsData[] = [
  {
    title: "Prima sesiune gratuită",
    info: "30 minute – discuție liberă",
    icon: FaGift,
  },
  {
    title: "Sesiuni 1 la 1",
    info: "Online sau față în față",
    icon: FaUserFriends,
  },
  {
    title: "Plan personalizat de acțiune",
    info: "Pas cu pas",
    icon: IoIosPaper,
  },
  {
    title: "Exerciții și teme de lucru",
    info: "Între sesiuni",
    icon: GiBrain,
  },
  {
    title: "Feedback și suport",
    info: "Între întâlniri (e-mail sau mesaje)",
    icon: MdMarkEmailRead,
  },
  {
    title: "Acces la resurse bonus",
    info: "Fișe de lucru, ghiduri și resurse",
    icon: FaBook,
  },
];

const Benefits = () => {
  return (
    <section
      id="benefits"
      className="flex flex-col items-center justify-center text-center px-6 py-24 bg-gray-50"
    >
      <div className="px-16">
        <h1 className="text-4xl mb-18 text-gold font-extrabold">
          Ce primesti cu pachetul meu de coaching
        </h1>
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {DATA.map((data, index) => (
            <div
              key={index}
              className="px-8 py-6 rounded-xl backdrop-blur-md bg-gradient-to-r from-[#0e564e] to-[#a8956f] shadow-[0_0_15px_rgba(184,155,99,2.45)] text-white flex flex-col items-start text-left"
            >
              {<data.icon className="text-gold w-12 h-12 mb-3" />}
              <h3 className="text-lg font-extrabold mb-1 text-gold">
                {data.title}
              </h3>
              <p className="text-sm text-white font-bold">{data.info}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
