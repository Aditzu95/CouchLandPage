"use client";
import { BsFacebook } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import { FaSquareWhatsapp } from "react-icons/fa6";
import { AiFillTikTok } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="w-full bg-primary text-center text-gold font-extrabold text-md py-6 px-16">
      <div className="w-full flex flex-col items-center justify-center mt-2">
        <h1>
          Coaching pentru transformare reală – cu empatie, structură și
          claritate
        </h1>
        <p className="mb-4">
          Servicii oferite: Coaching personal, de relație și carieră
        </p>
        <hr className="w-full my-6"></hr>
        <div className="flex sm:flex-row flex-col sm:gap-40 gap-4 mb-4">
          <div className="flex flex-col">
            <p>Link-uri utile</p>
            <p>Termeni și condiții</p>
            <p>Politica de confidențialitate</p>
          </div>
          <div className="flex flex-col">
            <p>Contact rapid</p>
            <p>contact@andriciionut.ro</p>
            <div className="flex gap-6 mt-4">
              <a href="">
                <BsFacebook className="w-8 h-8" />
              </a>
              <a href="">
                <AiFillInstagram className="w-8 h-8" />
              </a>
              <a href="">
                <FaSquareWhatsapp className="w-8 h-8" />
              </a>
              <a href="">
                <AiFillTikTok className="w-8 h-8" />
              </a>
            </div>
          </div>
          <div className="flex flex-col">
            <p>Program</p>
            <p>Luni- Vineri</p>
            <p>09:00 - 19:00</p>
          </div>
        </div>
      </div>
      <hr className="w-full my-6"></hr>
      <p className="pb-6">
        &copy; 2025 IonutLife&RelantionshipCouch. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
