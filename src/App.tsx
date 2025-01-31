import "./App.css";
import Hero from "./Hero";
import Nav from "./Nav";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Team from "./Team";
import Era from "./ERA";
import ContactUs from "./ContactUs";

function App() {
  return (
    <BrowserRouter>
      <div className="w-full">
        <Nav />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/who-we-are" element={<Team />} />
          <Route path="/what-we-do" element={<Era />} />
          <Route path="/contact-us" element={<ContactUs />} />
        </Routes>
        <SocialButtons />
      </div>
    </BrowserRouter>
  );
}

// Create a separate component for social buttons
function SocialButtons() {
  const location = useLocation();

  if (location.pathname !== "/") return null;

  return (
    <div className="max-w-5xl mx-auto relative">
      <div className="absolute bottom-5 right-5 flex justify-center items-center gap-4 mb-4 z-50">
        <>
          <a
            href="/contact-us"
            role="button"
            className="transform transition-transform hover:-translate-y-1 hover:scale-110 duration-200"
          >
            <span className="[&>svg]:h-7 [&>svg]:w-7 [&>svg]:fill-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-.141 7l-6.859 5.568-6.859-5.568h13.718zm-13.859 11v-9.054l7 5.681 7-5.681v9.054h-14z" />
              </svg>
            </span>
          </a>

          <a
            href="https://www.linkedin.com/in/steven-mill-92596a96"
            target="_blank"
            rel="noopener noreferrer"
            role="button"
            className="transform transition-transform hover:-translate-y-1 hover:scale-110 duration-200"
          >
            <span className="[&>svg]:h-7 [&>svg]:w-7 [&>svg]:fill-white">
              <svg width="24" height="24" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </span>
          </a>

          <a
            href="https://www.linkedin.com/in/amy-irons-4b852671"
            target="_blank"
            rel="noopener noreferrer"
            role="button"
            className="transform transition-transform hover:-translate-y-1 hover:scale-110 duration-200"
          >
            <span className="[&>svg]:h-7 [&>svg]:w-7 [&>svg]:fill-[#0077B5]">
              <svg width="24" height="24" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </span>
          </a>
        </>
      </div>
    </div>
  );
}

export default App;
