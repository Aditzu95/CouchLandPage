const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 py-24 bg-gray-50">
      <h1 className="text-5xl font-bold mb-4">Your Dream Couch Awaits</h1>
      <p className="text-lg text-gray-600 mb-6 max-w-lg">
        Experience ultimate comfort with our modern, stylish couches.
      </p>
      <button className="bg-blue-600 text-white px-8 py-3 rounded-xl hover:bg-blue-700 transition">
        Explore Collection
      </button>
    </section>
  );
};

export default Hero;
