import { useState } from "react";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 z-10 w-full bg-transparent text-white">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex items-center justify-end h-16">
          <div className="relative">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md bg-white focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="black"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
            <div
              className={`absolute right-0 ${
                isOpen ? "block" : "hidden"
              } mt-2 w-48 bg-white rounded-md shadow-lg py-1`}
            >
              <a
                href="#"
                className="block px-4 py-2 text-base text-gray-700 hover:text-saudi-green hover:underline hover:decoration-saudi-green"
              >
                WHO WE ARE
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-base text-gray-700 hover:text-saudi-green hover:underline hover:decoration-saudi-green"
              >
                WHAT WE DO{" "}
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-base text-gray-700 hover:text-saudi-green hover:underline hover:decoration-saudi-green"
              >
                HOW TO REACH US
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
