"use client";

import { Fragment } from "react";
import { IconType } from "react-icons";
import { IoPeopleCircle } from "react-icons/io5";
import { GiTeacher } from "react-icons/gi";
import { FaUserDoctor } from "react-icons/fa6";
import { FaBuilding } from "react-icons/fa6";
import { FaBusinessTime } from "react-icons/fa";
import { FaHouseLaptop } from "react-icons/fa6";

type ClientType = {
  icon: IconType;
  title: string;
};

const TYPESOFCLIENTS: ClientType[] = [
  { icon: FaBuilding, title: "Angajați corporații" },
  { icon: GiTeacher, title: "Educatori" },
  { icon: FaUserDoctor, title: "Cadre medicale" },
  { icon: FaHouseLaptop, title: "Freelanceri" },
  { icon: FaBusinessTime, title: "Antreprenori" },
  { icon: IoPeopleCircle, title: "Manageri echipe" },
];

const ClientsTypeSection = () => {
  return (
    <section className="relative flex flex-col items-center justify-center text-center px-18 py-24 bg-gray-50">
      <div className="w-full px-4 md:px-20">
        <h1 className="mb-20 text-4xl text-gold font-extrabold">
          Tipuri de clienți cu care lucrez
        </h1>
        <div className="relative overflow-hidden">
          <div className="absolute left-0 top-0 h-full sm:w-10 w-16 bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 h-full sm:w-10 w-16 bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none" />
          <div className="flex items-center animate-move-left whitespace-nowrap pointer-events-none">
            {[...new Array(2)].fill(0).map((_, groupIndex) => (
              <Fragment key={groupIndex}>
                {TYPESOFCLIENTS.map((type, index) => (
                  <div
                    key={`${type.title}-${index}`}
                    className="flex flex-col items-center justify-center mx-4 min-w-[120px]"
                  >
                    <div className="bg-[#236b62] flex items-center justify-center rounded-full w-16 h-16 border-3 border-[#b89b63] mb-2 overflow-hidden">
                      {<type.icon className="w-10 h-10 text-gold" />}
                    </div>
                    <p className="text-md text-primary font-extrabold whitespace-nowrap">
                      {type.title}
                    </p>
                  </div>
                ))}
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientsTypeSection;
