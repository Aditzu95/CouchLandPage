"use client";

const CardCouch = () => {
  return (
    <div className="flex flex-col justify-center items-center bg-gradient-to-r from-[#0e564e] to-[#b89b63] shadow-[0_0_60px_rgba(184,155,99,2.45)] rounded-full p-15 gap-4 text-sm sm:text-lg text-white">
      <div className="relative inline-block backdrop-blur-md">
        <p className="font-bold">
          Pret vechi{" "}
          <span className="text-gold font-extrabold">250 lei / sesiune</span>
        </p>
        <span className="absolute left-0 top-1/2 w-full h-0.5 bg-primary rotate-[7deg]"></span>
      </div>
      <p className="font-bold">
        Pret promotional:{" "}
        <span className="text-gold font-extrabold">0 lei</span> pentru prima
        sesiune de testare ( 30 minute)
      </p>
      <p className="font-bold">
        Locuri limitate lunar: doar 10 sesiuni gratuite disponibile
      </p>
      <a href="#contact">
        <button className="flex justify-center items-center font-bold bg-[#0e564e] text-white sm:text-sm text-sm px-8 py-3 rounded-full hover:bg-[#b89b63] cursor-pointer mt-5">
          Programeaza o sesiune gratuita !
        </button>
      </a>
    </div>
  );
};

export default CardCouch;
