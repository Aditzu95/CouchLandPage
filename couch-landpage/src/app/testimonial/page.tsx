"use client";
import { IconType } from "react-icons";
import { SiCodefresh } from "react-icons/si";
import { VscFeedback } from "react-icons/vsc";
import { FcBusinesswoman } from "react-icons/fc";
import { FcBusinessman } from "react-icons/fc";

type ClientData = {
  icon: IconType;
  testimonialText: string;
  clientName: string;
  clientTitle: string;
  genderIcon: IconType;
};

const CLIENTS: ClientData[] = [
  {
    icon: SiCodefresh,
    testimonialText:
      "Am găsit claritate într-o perioadă în care mă simțeam blocat. Recomand cu încredere.",
    clientName: "Client 1",
    clientTitle: "Antreprenor",
    genderIcon: FcBusinesswoman,
  },
  {
    icon: VscFeedback,
    testimonialText:
      "Am găsit claritate într-o perioadă în care mă simțeam blocat. Recomand cu încredere.",
    clientName: "Client 1",
    clientTitle: "Antreprenor",
    genderIcon: FcBusinessman,
  },
  {
    icon: SiCodefresh,
    testimonialText:
      "Am găsit claritate într-o perioadă în care mă simțeam blocat. Recomand cu încredere.",
    clientName: "Client 1",
    clientTitle: "Antreprenor",
    genderIcon: FcBusinesswoman,
  },
  {
    icon: VscFeedback,
    testimonialText:
      "Am găsit claritate într-o perioadă în care mă simțeam blocat. Recomand cu încredere.",
    clientName: "Client 1",
    clientTitle: "Antreprenor",
    genderIcon: FcBusinessman,
  },
  {
    icon: SiCodefresh,
    testimonialText:
      "Am găsit claritate într-o perioadă în care mă simțeam blocat. Recomand cu încredere.",
    clientName: "Client 1",
    clientTitle: "Antreprenor",
    genderIcon: FcBusinesswoman,
  },
  {
    icon: VscFeedback,
    testimonialText:
      "Am găsit claritate într-o perioadă în care mă simțeam blocat. Recomand cu încredere.",
    clientName: "Client 1",
    clientTitle: "Antreprenor",
    genderIcon: FcBusinessman,
  },
];

const Testimonial = () => {
  return (
    <section
      id="testimonial"
      className="flex flex-col items-center justify-center text-center px-6 py-24 bg-gray-50"
    >
      <div className="px-20">
        <h1 className="text-4xl mb-18 text-gold font-extrabold">
          Ce spun clienții despre experiența cu mine
        </h1>
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {CLIENTS.map((client, index) => (
            <div
              key={index}
              className="px-8 py-6 rounded-xl backdrop-blur-md bg-gradient-to-r from-[#0e564e] to-[#a8956f] shadow-[0_0_15px_rgba(184,155,99,2.45)] text-white flex flex-col"
            >
              {<client.icon className="text-gold w-12 h-12 mb-3" />}
              <p className="text-left text-sm text-white font-bold">
                {client.testimonialText}
              </p>
              <div className="flex items-center w-full gap-4 mt-4">
                <div className="overflow-hidden flex items-center justify-center rounded-full w-12 h-10 border-2 border-[#b89b63]">
                  {<client.genderIcon className="w-20 h-20 pt-2" />}
                </div>
                <div className="flex flex-col items-start w-full font-bold">
                  <p className="text-gold text-xs">{client.clientName}</p>
                  <p className="text-white text-xs">{client.clientTitle}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
