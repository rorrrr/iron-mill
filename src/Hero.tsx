import video from "./assets/dubai-skyline.mp4";
import ironMillLogo from "./assets/ironmilllogowhite-cut.png";
import windMillCrop from "./assets/windmillcrop.png";
import thumb from "./assets/thumb.jpg";
import { useEffect, useState } from "react";
import highresamy from "./assets/highresamy.png";
import stevehighres from "./assets/stevenhighres.png";
import skyline from "./assets/skyline.webp";

function Hero() {
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
      img.loading = "lazy";
    });
  }, []);

  const fadeInStyle =
    "animate-slideindownfast text-white mt-3 opacity-0 overline overline-offset-8 decoration-saudi-green ";

  const media = <p className={fadeInStyle}>MEDIA</p>;

  const entertainment = <p className={fadeInStyle}>ENTERTAINMENT</p>;

  const radio = <p className={fadeInStyle}>RADIO</p>;

  const sports = <p className={fadeInStyle}>SPORTS</p>;

  const podcasts = <p className={fadeInStyle}>PODCASTS</p>;

  return (
    <section className="relative w-full h-screen flex flex-col items-center justify-center text-center text-white">
      <div className="video-docker absolute top-0 left-0 w-full h-full overflow-hidden after:content-[''] after:absolute after:w-full after:h-full after:top-0 after:left-0 after:bg-black/60 after:z-[1]">
        <video
          className="min-w-full min-h-full absolute object-cover top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          src={video}
          autoPlay
          muted
          loop
          poster={thumb}
        />
      </div>

      <div className="video-content z-10">
        <div className="relative mx-auto">
          <img
            src={ironMillLogo}
            className="animate-slidein w-[500px] opacity-0 [--slidein-delay:300ms] mx-auto mb-4 px-12 h-auto"
            alt="ironmill logo"
          />
          <img
            src={windMillCrop}
            className="h-[45px] w-[45px] animate-slidein-rotate opacity-0 [--slidein-delay:300ms] absolute top-[5px] left-[313.7px]"
            alt="windmill crop"
          />
        </div>

        {/* <div className="animate-slidein opacity-0 [--slidein-delay:300ms] flex justify-center w-[300px] border-2 border-black mx-auto mb-1"></div> */}

        <h1 className="animate-slidein opacity-0 [--slidein-delay:300ms] text-3xl md:text-3xl font-light mb-1">
          MEDIA PRODUCTIONS
        </h1>

        <h1 className="animate-slidein opacity-0 mt-16  [--slidein-delay:1500ms] text-5xl font-light">
          INNOVATING
          <br /> {showMedia && media}
          {showSports && sports}
          {showEntertainment && entertainment}
          {showRadio && radio}
          {showPodcasts && podcasts}
        </h1>
      </div>
    </section>
  );
}

export default Hero;
