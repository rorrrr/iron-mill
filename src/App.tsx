import "./App.css";
import Hero from "./Hero";
import Logos from "./Logos";
import Mission from "./Mission";
import Gallery from "./Gallery";
import Footer from "./Footer";
import ContactUs from "./ContactUs";

function App() {
  return (
    <div className="w-full">
      <Hero />
      <Logos />
      <Mission />
      <Gallery />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;
