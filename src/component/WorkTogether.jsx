import { motion } from "framer-motion";

const WorkTogether = () => {
  return (
    <section id="contact" className="py-16 px-6 text-center">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
        Let's Work Together
      </h2>
      <p className="text-gray-600 max-w-xl mx-auto mb-10">
        Interested in collaborating or want to see more of my work? Feel free to
        reach out!
      </p>

      <div className="flex justify-center gap-10 flex-wrap mb-8">
        {/*
          {
            icon: "✉️",
            label: "pk20287022@gmail.com",
            link: null,
          },
          {
            icon: "💼",
            label: "Visit My Portfolio",
            link: "https://princefolioverse.netlify.app/",
          },
          {
            icon: "🐙",
            label: "Follow Me on GitHub",
            link: "https://github.com/Prince-2028",
          },
        ].map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: idx * 0.15, duration: 0.7, type: "spring", stiffness: 80 }}
            viewport={{ once: false, amount: 0.2 }}
          >
            <div className="text-2xl">{item.icon}</div>
            <p className="text-sm mt-2 text-gray-700">
              {item.link ? (
                <a
                  href={item.link}
                  className="text-blue-600 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {item.label}
                </a>
              ) : (
                item.label
              )}
            </p>
          </motion.div>
        ))}
      </div>

      <div className="flex justify-center gap-4">
        {/* WhatsApp Button */}
        <motion.a
          href="https://wa.me/919138368489"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition"
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.7, type: "spring", stiffness: 80 }}
          viewport={{ once: false, amount: 0.2 }}
          whileHover={{
            scale: 1.04,
            backgroundColor: "#22c55e",
            color: "#fff",
            filter: "brightness(1.15) drop-shadow(0 4px 24px #22c55e33)",
            letterSpacing: "2px",
          }}
          whileTap={{ scale: 0.98, filter: "brightness(0.95)" }}
        >
          Message on WhatsApp
        </motion.a>

        {/* Local Resume PDF */}
        <motion.a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="border border-blue-600 text-blue-600 px-6 py-2 rounded hover:bg-blue-50 transition"
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.45, duration: 0.7, type: "spring", stiffness: 80 }}
          viewport={{ once: false, amount: 0.2 }}
          whileHover={{
            scale: 1.04,
            backgroundColor: "#e0e7ff",
            color: "#2563eb",
            borderColor: "#2563eb",
            filter: "brightness(1.10) drop-shadow(0 4px 24px #2563eb22)",
            letterSpacing: "2px",
          }}
          whileTap={{ scale: 0.98, filter: "brightness(0.95)" }}
        >
          View Resume
        </motion.a>
      </div>
    </section>
  );
};

export default WorkTogether;
