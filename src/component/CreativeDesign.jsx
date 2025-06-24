const CreativeDesign = () => {
  return (
    <div id="home" className="h-100 bg-gradient-to-r from-blue-50 to-purple-50">
      <main className="flex flex-col items-center justify-center text-center px-6 py-24 max-w-4xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-4">
          Creative <span className="text-blue-600">Figma</span> Designs
        </h2>
        <p className="max-w-xl text-gray-700 text-lg md:text-xl mb-10">
          Explore my collection of user interface designs, prototypes, and
          creative solutions crafted with Figma.
        </p>
        <div className="flex space-x-6">
          <button className="bg-blue-600 text-white font-semibold rounded-md px-6 py-3 hover:bg-blue-700 transition">
            View Projects
          </button>
          <button className="border-2 border-blue-600 text-blue-600 font-semibold rounded-md px-6 py-3 hover:bg-blue-50 transition">
            Get in Touch
          </button>
        </div>
      </main>
    </div>
  );
};

export default CreativeDesign;
