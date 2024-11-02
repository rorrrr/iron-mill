import video from "./assets/dubai-skyline.mp4";
import ironMillLogo from "./assets/ironmilllogowhite-cut.png";
import windMillCrop from "./assets/windmillcrop.png";
function Hero() {
  return (
    <section className="relative w-full h-screen flex flex-col items-center justify-center text-center text-white">
      <div className="video-docker absolute top-0 left-0 w-full h-full overflow-hidden after:content-[''] after:absolute after:w-full after:h-full after:top-0 after:left-0 after:bg-black/60 after:z-[1]">
        <video
          className="min-w-full min-h-full absolute object-cover top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          src={video}
          autoPlay
          muted
          loop
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

        {/* <h1 className="text-7xl lg:text-9xl font-light">IRONMILL</h1> */}
        <h1 className="animate-slidein opacity-0 [--slidein-delay:500ms] text-3xl md:text-3xl font-light">
          MEDIA PRODUCTIONS
        </h1>
      </div>
    </section>
  );
}

export default Hero;
