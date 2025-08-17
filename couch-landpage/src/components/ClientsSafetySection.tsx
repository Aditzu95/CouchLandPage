"use client";

import { BsShieldFillCheck } from "react-icons/bs";

const ClientsSafetySection = () => {
  return (
    <section className="flex flex-col items-center justify-center text-center sm:px-44 px-20 py-24 bg-gray-50">
      <div className="flex flex-col justify-center items-center mb-8">
        <BsShieldFillCheck className="w-16 h-16 text-gold mb-4" />
        <h1 className="text-4xl text-gold font-extrabold">
          Garanția satisfacției
        </h1>
      </div>
      <div className="bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-gold)] p-[2px] rounded-xl shadow-xl">
        <div className="bg-white backdrop-blur-md rounded-xl p-6 sm:px-20 px-0">
          <p className="text-primary sm:text-lg text-sm font-bold px-8">
            Scopul meu este ca tu să pleci cu claritate. Dacă nu se întâmplă
            asta, îți ofer din partea mea o a doua sesiune sau un ghid PDF
            personalizat.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ClientsSafetySection;
