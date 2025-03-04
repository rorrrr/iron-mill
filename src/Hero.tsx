import video from "./assets/dubai-skyline.mp4";
import edinburghVideo from "./assets/edinburgh-castle.mp4";
import ironMillLogo from "./assets/logo2.png";
import { useEffect, useState } from "react";
import highresamy from "./assets/highresamy.png";
import stevehighres from "./assets/stevenhighres.png";
import skyline from "./assets/skyline.webp";
import { Link } from "react-router-dom";
import textureblack from "./assets/textureblack.jpg";

function Hero({
  isUK,
  isFinishedLoading,
}: {
  isUK: boolean;
  isFinishedLoading: boolean;
}) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % 5);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const showMedia = activeIndex === 0;
  const showEntertainment = activeIndex === 1;
  const showRadio = activeIndex === 2;
  const showSports = activeIndex === 3;
  const showPodcasts = activeIndex === 4;

  useEffect(() => {
    const preloadImages = [highresamy, stevehighres, skyline];
    preloadImages.forEach((image) => {
      const img = new Image();
      img.src = image;
    });
  }, []);

  const fadeInStyle = `animate-slideindownfast text-white mt-1 opacity-0 pt-2 px-4 border-t-4 ${
    isUK ? "border-custom-blue" : "border-saudi-green"
  } w-fit mx-auto`;

  const media = <p className={fadeInStyle}>MEDIA</p>;

  const entertainment = <p className={fadeInStyle}>ENTERTAINMENT</p>;

  const radio = <p className={fadeInStyle}>RADIO</p>;

  const sports = <p className={fadeInStyle}>SPORTS</p>;

  const podcasts = <p className={fadeInStyle}>PODCASTS</p>;

  if (!isFinishedLoading) {
    return (
      <div className="h-screen w-full flex items-center justify-center">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-white"></div>
      </div>
    );
  }

  return (
    <section className="relative w-full h-screen flex flex-col items-center justify-center text-center text-white">
      {isUK ? (
        <div className="video-docker absolute top-0 left-0 w-full h-full overflow-hidden after:content-[''] after:absolute after:w-full after:h-full after:top-0 after:left-0 after:bg-black/60 after:z-[1]">
          <video
            playsInline
            className="autoplay loop muted controls webkit-playsinline playsinline min-w-full min-h-full absolute object-cover top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            src={edinburghVideo}
            autoPlay
            muted
            loop
            poster={textureblack}
          />
        </div>
      ) : (
        <div className="video-docker absolute top-0 left-0 w-full h-full overflow-hidden after:content-[''] after:absolute after:w-full after:h-full after:top-0 after:left-0 after:bg-black/60 after:z-[1]">
          <video
            playsInline
            className="autoplay loop muted controls webkit-playsinline playsinline min-w-full min-h-full absolute object-cover top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            src={video}
            autoPlay
            muted
            loop
            poster={textureblack}
          />
        </div>
      )}

      <div className="video-content z-10">
        <div className="relative mx-auto">
          <img
            src={ironMillLogo}
            className="animate-slidein w-[320px] sm:w-[500px] opacity-0 [--slidein-delay:300ms] mx-auto mb-4 h-auto"
            alt="ironmill logo"
          />
        </div>

        <h1 className="animate-slidein opacity-0 mt-16  [--slidein-delay:1500ms] text-3xl sm:text-4xl font-light">
          INNOVATING
          <br /> {showMedia && media}
          {showSports && sports}
          {showEntertainment && entertainment}
          {showRadio && radio}
          {showPodcasts && podcasts}
        </h1>

        <div className="mt-16">
          <div className="w-16 h-16 mx-auto">
            <Link
              to="/who-we-are"
              className="animate-slidein opacity-0 [--slidein-delay:2000ms] rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-300 cursor-pointer w-full h-full flex items-center justify-center text-white hover:text-white no-underline"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7-7 7M3 12h18"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
