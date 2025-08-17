import Link from "next/link";
import "../app/globals.css";

const Navbar = () => {
  return (
    <nav className="w-full flex flex-col sm:flex-row justify-between items-start sm:items-center pt-1 sm:pt-0 shadow-md bg-primary sticky pb-1 top-0 z-50">
      <Link
        href="/"
        className="flex justify-start items-start gap-2 w-full sm:w-auto lg:text-xl text-md font-bold text-gold border-b-2 border-[#b89b63] px-8 pb-2 sm:border-b-0 pt-1"
      >
        Ionuț Andrici – Life & Relationship
      </Link>

      <div className="w-full sm:w-auto flex flex-col justify-start items-start space-x-6 lg:text-lg sm:text-sm text-xs font-bold text-gold md:flex-row md:items-center md:justify-end md:pr-8 pr-0">
        <Link
          href="#about"
          className="sm:text-sm text-xs  transition w-full sm:w-auto flex sm:justify-center pt-1 pr-0 pb-1 pl-8 sm:p-0 text-white/80 hover:bg-[#b89b63] sm:hover:bg-transparent sm:hover:text-[#b89b63]"
        >
          De ce sa ma alegi?
        </Link>
        <Link
          href="#benefits"
          className="sm:text-sm text-xs  transition w-full sm:w-auto flex sm:justify-center pt-1 pr-0 pb-1 pl-8 sm:p-0 text-white/80 hover:bg-[#b89b63] sm:hover:bg-transparent sm:hover:text-[#dab874]"
        >
          Ce primesti?
        </Link>
        <Link
          href="#testimonial"
          className="sm:text-sm text-xs transition w-full sm:w-auto flex sm:justify-center pt-1 pr-0 pb-1 pl-8 sm:p-0 text-white/80 hover:bg-[#dab874] sm:hover:bg-transparent sm:hover:text-[#dab874]"
        >
          Ce spun clientii?
        </Link>
      </div>
      <Link
        href="#contact"
        className="ml-2 mr-8 sm:text-sm text-xs font-bold transition sm:w-auto text-white/80 hover:text-[#0e564e] rounded-full bg-[#b89b63] sm:py-2 pb-1 px-6 z-55"
      >
        Programează o sesiune gratuită
      </Link>
    </nav>
  );
};

export default Navbar;
