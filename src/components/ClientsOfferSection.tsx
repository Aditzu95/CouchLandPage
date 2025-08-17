"use client";

const ClientsOfferSection = () => {
  return (
    <section className="flex flex-col items-center justify-center px-18 py-24 bg-gray-50 sm:text-center text-left">
      <h1 className="text-4xl text-gold mb-20 font-extrabold">
        Transformă-ți viața astăzi!
      </h1>
      <div className="flex flex-col justify-center items-center bg-gradient-to-r from-[#0e564e] to-[#b89b63] shadow-[0_0_60px_rgba(184,155,99,2.45)] rounded-xl py-10 px-15 gap-4 text-sm sm:text-lg text-white">
        <p className="font-bold">
          Prima sesiune:
          <span className="px-1 text-gold font-extrabold">Gratuită </span> (în
          loc de 400 lei)
        </p>
        <p className="font-bold">
          <span className="text-gold font-extrabold">Bonus special:</span> Ghid
          PDF gratuit – 10 exerciții pentru claritate personală
        </p>
        <p className="font-bold">
          Doar{" "}
          <span className="text-gold font-extrabold">10 locuri gratuite</span>{" "}
          disponibile lunar{" "}
        </p>
        <a href="#contact">
          <button className="flex justify-center items-center font-bold bg-[#0e564e] text-white sm:text-sm text-sm px-8 py-3 rounded-full hover:bg-[#b89b63] cursor-pointer mt-5">
            Programeaza o sesiune gratuita !
          </button>
        </a>
      </div>
    </section>
  );
};

export default ClientsOfferSection;
