"use client";
import { TbMessageQuestion } from "react-icons/tb";

const QUESTIONS = [
  {
    question: "Cât durează o sesiune?",
    answer: "60 minute (prima sesiune gratuită durează 30 minute)",
  },
  {
    question: "Cum se desfășoară sesiunile?",
    answer:
      "Online (Zoom/Meet) sau față în față, în funcție de preferințele tale",
  },
  {
    question: " Este coachingul potrivit pentru mine?",
    answer:
      "Da, dacă îți dorești claritate, acțiune și schimbare în viața personală sau profesională",
  },
  {
    question: "Cât durează un program de coaching?",
    answer: "Între 6 și 12 sesiuni, în funcție de obiective",
  },
  {
    question: "Ce se întâmplă dacă nu pot ajunge?",
    answer: "Reprogramarea este gratuită cu minim 24h înainte",
  },
];

const ClientsQuestionsSection = () => {
  return (
    <section className="flex flex-col items-center justify-center text-center px-6 py-24 bg-gray-50">
      <div>
        <h1 className="text-gold font-extrabold text-4xl mb-12">
          Întrebări frecvente
        </h1>
        <div className="w-full flex flex-col gap-6 text-left">
          {QUESTIONS.map((question, index) => (
            <div
              key={index + question.question}
              className="relative bg-gradient-to-r from-[var(--color-primary)] to-[#876c34] p-[2px] rounded-xl shadow-xl text-left px-8 py-4"
            >
              <p className="flex items-center gap-3 text-gold sm:text-lg text-md font-bold">
                <span>
                  <TbMessageQuestion className="sm:w-8 sm:h-8 w-6 h-6" />
                </span>
                {question.question}
              </p>
              <p className="text-white sm:text-md text-sm font-bold">
                {question.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsQuestionsSection;
