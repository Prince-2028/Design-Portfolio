const DesignProcess = () => {
  return (
    <section id="about" className="bg-gray-50 py-16 px-6 text-center">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
        About My Design Process
      </h2>
      <p className="text-gray-600 max-w-xl mx-auto mb-10">
        I create user-centered designs using Figma’s powerful tools and
        features. My process focuses on understanding user needs, creating
        intuitive interfaces, and delivering pixel-perfect designs.
      </p>
      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        <div>
          <div className="text-3xl mb-4">💡</div>
          <h3 className="font-semibold text-lg mb-2">Research & Ideation</h3>
          <p className="text-gray-600 text-sm">
            Understanding user needs and market requirements to create
            meaningful design solutions.
          </p>
        </div>
        <div>
          <div className="text-3xl mb-4">🛠️</div>
          <h3 className="font-semibold text-lg mb-2">Design & Prototype</h3>
          <p className="text-gray-600 text-sm">
            Creating wireframes, mockups, and interactive prototypes using
            Figma’s advanced features.
          </p>
        </div>
        <div>
          <div className="text-3xl mb-4">✅</div>
          <h3 className="font-semibold text-lg mb-2">Test & Iterate</h3>
          <p className="text-gray-600 text-sm">
            User testing and continuous refinement to ensure optimal user
            experience and usability.
          </p>
        </div>
      </div>
    </section>
  );
};

export default DesignProcess;
