import amy from "./assets/amy-alternative.jpeg";
import steven from "./assets/steven-about-us.png";

function Mission() {
  return (
    <section className="mx-auto max-w-[1024px] relative py-4 bg-custom-grey text-white">
      <div className="w-full px-5 mx-auto pb-5">
        <div className="w-full justify-start items-center gap-12 grid lg:grid-cols-2 grid-cols-1 pt-4 ">
          <div className="w-full justify-center items-start gap-6 grid sm:grid-cols-2 grid-cols-2 lg:order-first order-last">
            <div className="lg:pt-24 lg:justify-center sm:justify-end justify-start items-start gap-2.5 flex">
              <img
                className="rounded-xl object-cover object-center w-full h-[300px] md:h-auto transition-transform duration-300 hover:scale-105"
                src={amy}
                alt="about Us image amy"
              />
            </div>
            <img
              className="rounded-xl object-cover object-center w-full h-[300px] md:h-auto transition-transform duration-300 hover:scale-105"
              src={steven}
              alt="about Us image steven"
            />
          </div>
          <div className="w-full flex-col justify-center lg:items-start items-center gap-10 inline-flex">
            <div className="w-full flex-col justify-center items-start gap-8 flex">
              <div
                className={`w-full flex-col justify-start lg:items-start items-center gap-3 flex `}
              >
                <h2 className="text-4xl font-bold lg:text-start text-center text-black">
                  FORGING GREAT CONTENT
                </h2>
                <p className=" text-lg font-normal  text-start  text-gray-400 font-sans">
                  Ironmill Sports & Entertainment Media exists to redefine
                  storytelling across sports and entertainment. With the Middle
                  East as our base, our mission is to be a world-leading media
                  powerhouse, bridging cultures through captivating and
                  authentic content.
                </p>

                <p className=" text-lg font-normal  text-start  text-gray-400 font-sans">
                  Guided by our ERA principles—Entertaining, Real,
                  Accessible—we’re crafting a new era in broadcasting that
                  reaches audiences worldwide through TV shows, documentaries,
                  live broadcasts, podcasts, and radio.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Mission;
