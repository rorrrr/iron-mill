import highResAmy from "./assets/highresamy.png";
import highResSteven from "./assets/stevenhighres.png";
import blobShape from "./assets/greenblob.svg";
import blobShape1 from "./assets/greenblob1.svg";
import blobUK from "./assets/blob.svg";
import blobUK1 from "./assets/blob1.svg";
import Logos from "./Logos";
import Inlet from "./Inlet";
import downtown from "./assets/skyline.webp";
import edinburgh from "./assets/edin-wide.jpg";

function Team({ isUK }: { isUK: boolean }) {
  return (
    <div className="relative mx-auto rounded-t-3xl">
      <Inlet
        firstLine="OUR"
        secondLine="TEAM"
        image={!isUK ? downtown : edinburgh}
      />
      <div className="h-100 max-w-[1024px] mx-auto">
        <section className="overflow-hidden mb-0.5 mt-6">
          <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
            <div className="grid items-center grid-cols-1 md:grid-cols-2">
              <div>
                <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl pt-5">
                  AMY IRONS
                </h2>
                <h3 className="text-xl mt-2 font-bold leading-tight text-black sm:text-2xl lg:text-3xl">
                  CO-FOUNDER
                </h3>
                <p className="mt-3 p-4 text-xl text-start leading-relaxed text-gray-400 md:mt-8 font-sans">
                  Amy is an award-winning Scottish TV and radio host, podcaster,
                  and all-round broadcasting powerhouse. With a gift for live TV
                  and event coverage, she’s built an impressive career, known
                  for her engaging presence and top-tier storytelling on major
                  platforms like the BBC, Capital FM and Sky Sports. This
                  culminated recently when she anchored coverage of BBC
                  Scotland's New Year's Eve coverage 2025.
                </p>
                <p className="mt-3 p-4 text-xl text-start leading-relaxed text-gray-400 md:mt-8 font-sans ">
                  Authentic, resilient, and a true role model, Amy is inspiring
                  the next generation of women to break into the media industry.
                  But her impact goes beyond broadcasting—she works with
                  world-renowned organisations like The Prince’s Trust,
                  championing empowerment and positive change. A trailblazer in
                  her field, she continues to set new standards, cementing her
                  place as one of Scotland’s most influential media figures.
                  <br />
                </p>
                <div className="space-x-4 mt-4 pb-8">
                  <a
                    href="https://x.com/AmyJIrons"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-7 h-7 inline-flex items-center justify-center rounded-full border-none outline-none bg-[#03a9f4] hover:bg-[#03a1f4] active:bg-[#03a9f4]"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14px"
                      fill="#fff"
                      viewBox="0 0 512 512"
                    >
                      <path
                        d="M512 97.248c-19.04 8.352-39.328 13.888-60.48 16.576 21.76-12.992 38.368-33.408 46.176-58.016-20.288 12.096-42.688 20.64-66.56 25.408C411.872 60.704 384.416 48 354.464 48c-58.112 0-104.896 47.168-104.896 104.992 0 8.32.704 16.32 2.432 23.936-87.264-4.256-164.48-46.08-216.352-109.792-9.056 15.712-14.368 33.696-14.368 53.056 0 36.352 18.72 68.576 46.624 87.232-16.864-.32-33.408-5.216-47.424-12.928v1.152c0 51.008 36.384 93.376 84.096 103.136-8.544 2.336-17.856 3.456-27.52 3.456-6.72 0-13.504-.384-19.872-1.792 13.6 41.568 52.192 72.128 98.08 73.12-35.712 27.936-81.056 44.768-130.144 44.768-8.608 0-16.864-.384-25.12-1.44C46.496 446.88 101.6 464 161.024 464c193.152 0 298.752-160 298.752-298.688 0-4.64-.16-9.12-.384-13.568 20.832-14.784 38.336-33.248 52.608-54.496z"
                        data-original="#03a9f4"
                      />
                    </svg>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/amy-irons-94214119/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-7 h-7 inline-flex items-center justify-center rounded-full border-none outline-none bg-[#0077b5] hover:bg-[#0055b5] active:bg-[#0077b5]"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14px"
                      fill="#fff"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M23.994 24v-.001H24v-8.802c0-4.306-.927-7.623-5.961-7.623-2.42 0-4.044 1.328-4.707 2.587h-.07V7.976H8.489v16.023h4.97v-7.934c0-2.089.396-4.109 2.983-4.109 2.549 0 2.587 2.384 2.587 4.243V24zM.396 7.977h4.976V24H.396zM2.882 0C1.291 0 0 1.291 0 2.882s1.291 2.909 2.882 2.909 2.882-1.318 2.882-2.909A2.884 2.884 0 0 0 2.882 0z"
                        data-original="#0077b5"
                      />
                    </svg>
                  </a>
                </div>
              </div>

              <div className="relative pt-5">
                <img
                  className="absolute inset-x-0 bottom-0 -mb-30"
                  src={!isUK ? blobShape : blobUK}
                  alt=""
                />

                <img
                  className="relative w-full xl:max-w-lg xl:mx-auto 2xl:origin-bottom 2xl:scale-110"
                  src={highResAmy}
                  alt="high-res-amy"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="pt-10 overflow-hidden bg-gray-50 md:pt-0 sm:pt-16 2xl:pt-16">
          <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
            <div className="grid items-center grid-cols-1 md:grid-cols-2">
              <div className="relative pt-5 hidden md:block">
                <img
                  className="absolute inset-x-0 bottom-15"
                  src={!isUK ? blobShape1 : blobUK1}
                  alt=""
                />

                <img
                  className="relative w-full xl:max-w-lg xl:mx-auto 2xl:origin-bottom"
                  src={highResSteven}
                  alt="high-res-steven"
                />
              </div>
              <div className="pt-10">
                <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
                  STEVEN MILL
                </h2>
                <h3 className="text-xl mt-2 font-bold leading-tight text-black sm:text-2xl lg:text-3xl">
                  CO-FOUNDER
                </h3>
                <p className="mt-3 p-4 text-xl text-start leading-relaxed text-gray-400 md:mt-8 font-sans ">
                  Steven Mill is an award-winning Scottish radio presenter and
                  podcaster, best known for his groundbreaking ideas and
                  record-smashing shows on Capital FM, Radio Clyde, and Radio
                  Forth. He’s one of the sharpest minds in the business when it
                  comes to on-air strategy, constantly pushing the boundaries of
                  listener engagement and setting new benchmarks in
                  broadcasting.
                </p>
                <p className="mt-3 p-4 text-xl text-start leading-relaxed text-gray-400 md:mt-8 font-sans ">
                  His fresh, dynamic approach has led to collaborations with top
                  brands like the BBC, RBS, and M&S, proving his influence goes
                  far beyond radio. A true leader in the industry, Steven
                  continues to inspire both audiences and fellow broadcasters,
                  redefining what’s possible in radio and podcasting.
                  <br />
                </p>
                <div className="space-x-4 mt-4 pb-8">
                  <a
                    href="https://x.com/stevenmill"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-7 h-7 inline-flex items-center justify-center rounded-full border-none outline-none bg-[#03a9f4] hover:bg-[#03a1f4] active:bg-[#03a9f4]"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14px"
                      fill="#fff"
                      viewBox="0 0 512 512"
                    >
                      <path
                        d="M512 97.248c-19.04 8.352-39.328 13.888-60.48 16.576 21.76-12.992 38.368-33.408 46.176-58.016-20.288 12.096-42.688 20.64-66.56 25.408C411.872 60.704 384.416 48 354.464 48c-58.112 0-104.896 47.168-104.896 104.992 0 8.32.704 16.32 2.432 23.936-87.264-4.256-164.48-46.08-216.352-109.792-9.056 15.712-14.368 33.696-14.368 53.056 0 36.352 18.72 68.576 46.624 87.232-16.864-.32-33.408-5.216-47.424-12.928v1.152c0 51.008 36.384 93.376 84.096 103.136-8.544 2.336-17.856 3.456-27.52 3.456-6.72 0-13.504-.384-19.872-1.792 13.6 41.568 52.192 72.128 98.08 73.12-35.712 27.936-81.056 44.768-130.144 44.768-8.608 0-16.864-.384-25.12-1.44C46.496 446.88 101.6 464 161.024 464c193.152 0 298.752-160 298.752-298.688 0-4.64-.16-9.12-.384-13.568 20.832-14.784 38.336-33.248 52.608-54.496z"
                        data-original="#03a9f4"
                      />
                    </svg>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/steven-mill-92596a96"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-7 h-7 inline-flex items-center justify-center rounded-full border-none outline-none bg-[#0077b5] hover:bg-[#0055b5] active:bg-[#0077b5]"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14px"
                      fill="#fff"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M23.994 24v-.001H24v-8.802c0-4.306-.927-7.623-5.961-7.623-2.42 0-4.044 1.328-4.707 2.587h-.07V7.976H8.489v16.023h4.97v-7.934c0-2.089.396-4.109 2.983-4.109 2.549 0 2.587 2.384 2.587 4.243V24zM.396 7.977h4.976V24H.396zM2.882 0C1.291 0 0 1.291 0 2.882s1.291 2.909 2.882 2.909 2.882-1.318 2.882-2.909A2.884 2.884 0 0 0 2.882 0z"
                        data-original="#0077b5"
                      />
                    </svg>
                  </a>
                </div>
              </div>
              <div className="relative pt-5 block md:hidden">
                <img
                  className="absolute inset-x-0 bottom-15"
                  src={!isUK ? blobShape1 : blobUK1}
                  alt=""
                />

                <img
                  className="relative w-full xl:max-w-lg xl:mx-auto 2xl:origin-bottom"
                  src={highResSteven}
                  alt="high-res-steven"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
      <Logos />
    </div>
  );
}

export default Team;
