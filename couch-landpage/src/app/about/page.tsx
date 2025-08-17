"use client";

import CardDescription from "@/components/CardDescription";

type Information = {
  title: string;
  objectives: string[];
};

const INFO: Information[] = [
  {
    title: "Schimbare reală și sustenabilă",
    objectives: [
      "Obiective clare și realizabile",
      "Ghidare pentru a depăși blocajele",
      "Încredere autentică în propriile decizii ",
      "Planuri de acțiune concrete și realiste ",
    ],
  },
  {
    title: "Program personalizat pe nevoile tale",
    objectives: [
      "Sesiuni adaptate ritmului tău ",
      "Alegi tu frecvența întâlnirilor ",
      "Exerciții aplicabile imediat  ",
      "Feedback după fiecare sesiune ",
    ],
  },
  {
    title: "Confidențialitate și profesionalism",
    objectives: [
      "Confidențialitate totală garantată ",
      "Abordare empatică, dar clară",
      "Certificări și experiență validată ",
      "Implicare autentică în progresul tău ",
    ],
  },
];

const About = () => {
  return (
    <section
      id="about"
      className="flex flex-col items-center justify-center text-center px-6 py-24 bg-gray-50"
    >
      <div className="flex flex-col justify-center items-center px-20 py-10">
        <p className="text-4xl font-extrabold text-gold mb-6">
          De ce să mă alegi pe mine
        </p>
        <p className="sm:text-2xl text-lg font-bold text-primary w-full sm:w-[75%]">
          Coachingul cu mine este mai mult decât o conversație. Este un
          parteneriat real pentru schimbare, claritate și progres.{" "}
        </p>
      </div>
      {INFO.map((information: Information, index) => (
        <CardDescription {...information} key={index} />
      ))}
    </section>
  );
};

export default About;
