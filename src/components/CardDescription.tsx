"use client";
import { FaCheck } from "react-icons/fa";

const CardDescription = ({
  title,
  objectives,
}: {
  title: string;
  objectives: string[];
}) => {
  return (
    <div
      className="relative sm:w-[50%] w-[75%] p-12 rounded-xl bg-gradient-to-r from-[#0e564e] to-[#79653e] shadow-[0_0_30px_rgba(184,155,99,2.45)] backdrop-blur-md text-white mt-10 mb-5"
      key={title}
    >
      <div className="absolute top-7 left-11 w-6 h-6 rotate-45 bg-gold border-3 border-[#80825D] shadow-md" />
      <h2 className="flex text-left flex-start text-xl font-extrabold mb-4 text-gold pt-6">
        {title}
      </h2>

      <ul className="space-y-3 text-sm font-bold">
        {objectives.map((object, index) => (
          <li
            className="flex text-left items-start justify-start gap-3 text-white"
            key={object + index}
          >
            <span className="text-gold">
              <FaCheck className="mt-1" />
            </span>{" "}
            {object}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CardDescription;
