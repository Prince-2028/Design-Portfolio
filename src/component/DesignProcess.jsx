import { motion } from "framer-motion";

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
        {[{
          icon: "💡",
          title: "Research & Ideation",
          desc: "Understanding user needs and market requirements to create meaningful design solutions.",
        }, {
          icon: "🛠️",
          title: "Design & Prototype",
          desc: "Creating wireframes, mockups, and interactive prototypes using Figma’s advanced features.",
        }, {
          icon: "✅",
          title: "Test & Iterate",
          desc: "User testing and continuous refinement to ensure optimal user experience and usability.",
        }].map((step, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: idx * 0.15, duration: 0.7, type: "spring", stiffness: 80 }}
            viewport={{ once: false, amount: 0.2 }}
          >
            <div className="text-3xl mb-4">{step.icon}</div>
            <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
            <p className="text-gray-600 text-sm">{step.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default DesignProcess;
