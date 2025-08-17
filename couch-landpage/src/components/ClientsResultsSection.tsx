"use client";

import { IconType } from "react-icons";
import { BsGraphUpArrow } from "react-icons/bs";
import { MdOutlinePublishedWithChanges } from "react-icons/md";
import { FaPersonCirclePlus } from "react-icons/fa6";
import { FaBalanceScale } from "react-icons/fa";
import { BsBricks } from "react-icons/bs";
import { TbMapCheck } from "react-icons/tb";

type Result = {
  icon: IconType;
  title: string;
  info: string;
};

const RESULTS: Result[] = [
  {
    icon: BsGraphUpArrow,
    title: "Obiective atinse mai rapid",
    info: "Până la 40% mai devreme",
  },
  {
    icon: FaPersonCirclePlus,
    title: "Încredere crescută",
    info: "În luarea deciziilor importante",
  },
  {
    icon: MdOutlinePublishedWithChanges,
    title: "Schimbări de carieră",
    info: "În mai puțin de 6 luni",
  },
  {
    icon: FaBalanceScale,
    title: "Echilibru real",
    info: "Viața personală și profesională",
  },
  {
    icon: BsBricks,
    title: "Depășirea blocajelor",
    info: "Eliminarea procrastinării",
  },
  {
    icon: TbMapCheck,
    title: "Planuri clare",
    info: "Pentru proiecte majore",
  },
];

const ClientsResultsSection = () => {
  return (
    <section className="flex flex-col items-center justify-center text-center px-6 py-24 bg-gray-50">
      <div className="px-20">
        <h1 className="text-4xl mb-18 text-gold font-extrabold">
          Rezultate obținute de clienții mei
        </h1>
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {RESULTS.map((result, index) => (
            <div
              key={index}
              className="px-8 py-6 rounded-xl backdrop-blur-md bg-gradient-to-r from-[#0e564e] to-[#75623e] shadow-[0_0_15px_rgba(184,155,99,2.45)] text-white flex flex-col"
            >
              {<result.icon className="text-gold w-12 h-12 mb-3" />}
              <p className="text-left text-sm text-gold font-extrabold">
                {result.title}
              </p>
              <p className="text-left text-xs text-white font-bold">
                {result.info}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsResultsSection;
