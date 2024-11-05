import Card from "./Card";
import Gallery from "./Gallery";
import Inlet from "./Inlet";
import Logos from "./Logos";
import Mission from "./Mission";
import downtown from "./assets/skyline.webp";
import image2 from "./assets/2.jpeg";
import image7 from "./assets/10.jpeg";
import image22 from "./assets/22.jpeg";

function Era() {
  return (
    <>
      <Inlet firstLine="OUR" secondLine="MISSION" image={downtown} />
      <Mission />
      <div
        className={`max-w-[1024px] relative mx-auto bg-gray-50 pb-20 select-none`}
      >
        <h2 className="px-6 text-gray-800 pt-5 text-3xl font-bold text-left ">
          A NEW ERA IN MEDIA
        </h2>

        <p className=" text-gray-400 text-lg px-6 pt-6 pb-10 text-left mx-auto font-sans">
          Ironmill is more than a media company; it’s a global movement. We aim
          to place the <strong>Middle East</strong> at the forefront of sports
          and entertainment media, forging powerful content that unites,
          inspires, and endures. <br />
          <br />
          Every project is a step toward a future where Ironmill is synonymous
          with world-class, boundary-breaking media.
        </p>
        <div className="container px-6 mx-auto">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
            <Card
              title="ENTERTAINMENT"
              blurb="Ironmill’s commitment to entertainment means creating experiences that resonate. From high-energy sports broadcasts to immersive documentaries and thought-provoking podcasts, our content is crafted to captivate and inspire. We bring stories to life with a fresh approach, embracing innovation and creativity to keep audiences engaged across platforms."
              image={image7}
              align="top"
            />
            <Card
              title="REAL"
              blurb="Authenticity is at the heart of Ironmill’s productions. We believe in telling stories that reveal the real side of sports and entertainment—showcasing raw emotions, triumphs, and struggles. Our documentaries and broadcasts delve deep into athletes' and entertainers' lives, offering unfiltered insights that build genuine connections with our viewers."
              image={image2}
              align="bottom"
            />

            <Card
              title="ACCESSIBLE"
              blurb="Accessibility is essential to our mission. Ironmill strives to make quality content available to everyone, breaking down cultural and linguistic barriers. Through digital platforms, multilingual content, and user-friendly technology, we ensure our stories reach audiences globally, providing content they can access anytime, anywhere."
              image={image22}
              align="top"
            />
          </div>
        </div>
      </div>
      <Gallery />
      <Logos />
    </>
  );
}

export default Era;
