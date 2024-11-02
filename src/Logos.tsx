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
          <div className="grid grid-cols-6 gap-1 place-items-center">
            <img
              className="w-16 sm:w-24 h-auto grayscale hover:grayscale-0"
              src={bbc}
              alt="bbc"
            />
            <img
              className="w-16 sm:w-24 h-auto grayscale hover:grayscale-0"
              src={mns}
              alt="mns"
            />
            <img
              className="w-16 sm:w-24 h-auto grayscale hover:grayscale-0"
              src={capital}
              alt="capital"
            />
            <img
              className="w-16 sm:w-24 h-auto grayscale hover:grayscale-0"
              src={bbcscot}
              alt="bbcscot"
            />
            <img
              className="w-16 sm:w-24 h-auto grayscale hover:grayscale-0"
              src={clyde}
              alt="clyde"
            />
            <img
              className="w-16 sm:w-24 h-auto grayscale hover:grayscale-0"
              src={forth}
              alt="forth"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default Logos;
