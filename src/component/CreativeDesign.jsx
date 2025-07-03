import { motion } from "framer-motion";

const CreativeDesign = () => {
  return (
    <div id="home" className="h-100 bg-gradient-to-r from-blue-50 to-purple-50">
      <main className="flex flex-col items-center justify-center text-center px-6 py-24 max-w-4xl mx-auto">
        <motion.h2
          className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-4"
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, type: "spring", stiffness: 80 }}
          viewport={{ once: false, amount: 0.5 }}
        >
          Creative <span className="text-blue-600">Figma</span> Designs
        </motion.h2>
        <motion.p
          className="max-w-xl text-gray-700 text-lg md:text-xl mb-10"
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            delay: 0.1,
            duration: 0.7,
            type: "spring",
            stiffness: 80,
          }}
          viewport={{ once: false, amount: 0.5 }}
        >
          Explore my collection of user interface designs, prototypes, and
          creative solutions crafted with Figma.
        </motion.p>
        <div className="flex space-x-6">
          <motion.a
            href="#Projects"
            className="bg-blue-600 text-white font-semibold rounded-md px-6 py-3 hover:bg-blue-700 transition"
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              delay: 0.2,
              duration: 0.7,
              type: "spring",
              stiffness: 80,
            }}
            viewport={{ once: false, amount: 0.5 }}
          >
            View Projects
          </motion.a>
          <motion.a
            href="https://wa.me/919138368489"
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-blue-600 text-blue-600 font-semibold rounded-md px-6 py-3 hover:bg-blue-50 transition"
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              delay: 0.3,
              duration: 0.7,
              type: "spring",
              stiffness: 80,
            }}
            viewport={{ once: false, amount: 0.5 }}
          >
            Get in Touch
          </motion.a>
        </div>
      </main>
    </div>
  );
};

export default CreativeDesign;
