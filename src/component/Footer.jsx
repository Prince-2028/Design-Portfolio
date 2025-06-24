const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 text-center">
      <p className="text-sm mb-2">
        © 2024 Design Portfolio. All rights reserved.
      </p>
      <div className="flex justify-center space-x-6 text-white text-lg mt-4">
        <a href="#" className="hover:text-blue-400">
          🐦
        </a>
        <a href="#" className="hover:text-pink-400">
          🎨
        </a>
        <a href="#" className="hover:text-blue-500">
          💼
        </a>
      </div>
    </footer>
  );
};

export default Footer;
