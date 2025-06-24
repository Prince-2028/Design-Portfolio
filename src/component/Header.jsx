import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white border-b border-gray-200 shadow-sm sticky top-0 z-50">
      <div className="flex justify-between items-center px-6 py-4">
        <h1 className="text-xl font-bold text-gray-900 select-none">
          <a href="#home">Design Portfolio</a>
        </h1>

        {/* Desktop Nav */}
        <nav className="hidden md:flex">
          <ul className="flex space-x-8 text-gray-900 font-semibold text-base">
            <li>
              <a
                href="#home"
                className="hover:text-blue-600 transition cursor-pointer"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="hover:text-blue-600 transition cursor-pointer"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="hover:text-blue-600 transition cursor-pointer"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="hover:text-blue-600 transition cursor-pointer"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-800 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Nav */}
      <div
        className={`md:hidden px-6 pt-2 pb-4 ${isOpen ? "block" : "hidden"}`}
      >
        <ul className="space-y-4 text-gray-900 font-semibold text-base">
          <li>
            <a
              href="#home"
              className="hover:text-blue-600 transition cursor-pointer"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="hover:text-blue-600 transition cursor-pointer"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="hover:text-blue-600 transition cursor-pointer"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="hover:text-blue-600 transition cursor-pointer"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
