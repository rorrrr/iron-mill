import video from "./assets/edinburgh-castle.mp4";
import ironMillLogo from "./assets/ironmilllogowhite.png";

function Hero() {
  return (
    <section className="relative w-full h-[50vh] flex flex-col items-center justify-center text-center text-white">
      <div className="video-docker absolute top-0 left-0 w-full h-full overflow-hidden after:content-[''] after:absolute after:w-full after:h-full after:top-0 after:left-0 after:bg-black/60 after:z-[1]">
        <video
          className="min-w-full min-h-full absolute object-cover top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          src={video}
          autoPlay
          muted
          loop
        />
      </div>
      <div className="video-content space-y-4 z-10">
        <img
          src={ironMillLogo}
          className="mx-auto w-full px-12 h-auto  max-w-[700px]"
          alt="ironmill logo"
        />
        {/* <h1 className="text-7xl lg:text-9xl font-light">IRONMILL</h1> */}
        <h1 className="text-3xl md:text-3xl lg:text-4xl xl:text-5xl font-light">
          MEDIA PRODUCTIONS
        </h1>
      </div>
    </section>
  );
}

export default Hero;
