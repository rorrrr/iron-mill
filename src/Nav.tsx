import { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import ironMillLogoWhite from "./assets/ironmilllogowhite.png";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 z-50 w-full text-white transition-colors duration-300 ${
        isScrolled ? "bg-black" : "bg-transparent"
      }`}
    >
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Left side - Logo */}
          <div>
            {pathname !== "/" && (
              <img
                src={ironMillLogoWhite}
                alt="logo"
                className="w-auto ml-4 h-[40px] pt-1 transition-transform duration-200 hover:scale-110 cursor-pointer"
                onClick={() => (window.location.href = "/")}
              />
            )}
          </div>

          {/* Right side - Burger menu */}
          <div className="relative focus:outline-none focus:ring-0 hover:ring-0 hover:outline-none hover:border-saudi-green">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md bg-white focus:outline-none focus:ring-0 hover:ring-0 hover:outline-none hover:border-saudi-green"
            >
              <svg
                className="w-6 h-6 stroke-saudi-green"
                fill="none"
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
              } mt-2 w-48 bg-white rounded-md shadow-lg py-1 focus:outline-none focus:ring-0 hover:ring-0 hover:outline-none`}
            >
              <Link
                to="/who-we-are"
                className="block px-4 py-2 text-lg text-gray-700 hover:text-saudi-green hover:underline hover:decoration-saudi-green"
                onClick={() => setIsOpen(false)}
              >
                WHO WE ARE
              </Link>
              <Link
                to="/what-we-do"
                className="block px-4 py-2 text-lg text-gray-700 hover:text-saudi-green hover:underline hover:decoration-saudi-green"
                onClick={() => setIsOpen(false)}
              >
                WHAT WE DO
              </Link>
              <Link
                to="/contact-us"
                className="block px-4 py-2 text-lg text-gray-700 hover:text-saudi-green hover:underline hover:decoration-saudi-green"
                onClick={() => setIsOpen(false)}
              >
                HOW TO REACH US
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
