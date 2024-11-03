import bbc from "./assets/bbc.png";
import mns from "./assets/mns.png";
import capital from "./assets/capital.png";
import clyde from "./assets/clyde.png";
import forth from "./assets/forth.png";
import bbcscot from "./assets/bbcscot.png";

function Logos() {
  return (
    <>
      <section className="w-full mx-auto bg-white">
        <div className="mx-auto xl:max-w-[1200px] py-4 px-2">
          <h3 className="text-xl font-bold leading-tight text-black sm:text-2xl lg:text-3xl">
            Trusted by industry leading brands
          </h3>
          <div className="grid grid-cols-3 gap-1 place-items-center my-4">
            <img className="w-16 sm:w-24 h-auto" src={bbc} alt="bbc" />
            <img className="w-16 sm:w-24 h-auto" src={mns} alt="mns" />
            <img className="w-16 sm:w-24 h-auto" src={capital} alt="capital" />
            <img className="w-16 sm:w-24 h-auto" src={bbcscot} alt="bbcscot" />
            <img className="w-16 sm:w-24 h-auto" src={clyde} alt="clyde" />
            <img className="w-16 sm:w-24 h-auto" src={forth} alt="forth" />
          </div>
        </div>
      </section>
    </>
  );
}

export default Logos;
