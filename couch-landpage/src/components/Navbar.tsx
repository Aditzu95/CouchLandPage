import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-8 py-4 shadow-md bg-white sticky top-0 z-50">
      <Link href="/" className="text-2xl font-bold text-blue-600">
        CouchCo
      </Link>
      <div className="space-x-6 text-gray-700">
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;
