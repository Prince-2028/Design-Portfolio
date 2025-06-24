const WorkTogether = () => {
  return (
    <section className="py-16 px-6 text-center">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
        Let's Work Together
      </h2>
      <p className="text-gray-600 max-w-xl mx-auto mb-10">
        Interested in collaborating or want to see more of my work? Feel free to
        reach out!
      </p>

      <div className="flex justify-center gap-10 flex-wrap mb-8">
        <div>
          <div className="text-2xl">✉️</div>
          <p className="text-sm mt-2 text-gray-700">your.email@example.com</p>
        </div>
        <div>
          <div className="text-2xl">💼</div>
          <p className="text-sm mt-2 text-gray-700">
            <a
              href="https://princefolioverse.netlify.app/"
              className="text-blue-600 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit My Portfolio
            </a>
          </p>
        </div>
        <div>
          <div className="text-2xl">🐙</div>
          <p className="text-sm mt-2 text-gray-700">
            <a
              href="https://github.com/Prince-2028"
              className="text-blue-600 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Follow Me on GitHub
            </a>
          </p>
        </div>
      </div>

      <div className="flex justify-center gap-4">
        <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition">
          Send Message
        </button>
        <button className="border border-blue-600 text-blue-600 px-6 py-2 rounded hover:bg-blue-50 transition">
          View Resume
        </button>
      </div>
    </section>
  );
};

export default WorkTogether;
