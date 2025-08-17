"use client";

import CardCouch from "./CardCouch";

const Hero = () => {
  return (
    <section className="flex flex-col items-center justify-center text-center py-12 px-20 bg-gray-50">
      <h1 className="text-4xl mb-4 text-gold font-extrabold">
        Transformare reală, nu doar promisiuni{" "}
      </h1>
      <p className="text-2xl text-gray-600 mb-6 max-w-lg text-primary font-bold">
        Coaching personalizat pentru obiectivele tale
      </p>
      <p className="text-2xl text-gray-600 mb-20 max-w-lg  text-primary font-bold">
        Descoperă claritate, încredere și planuri concrete pentru schimbarea pe
        care o vrei
      </p>
      <CardCouch />
    </section>
  );
};

export default Hero;
