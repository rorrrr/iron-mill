import Card from "./Card";
import Gallery from "./Gallery";
import Inlet from "./Inlet";
import Logos from "./Logos";
import Mission from "./Mission";
import downtown from "./assets/skyline.webp";
import edinburgh from "./assets/edin-wide.jpg";
import image2 from "./assets/2.jpeg";
import image7 from "./assets/10.jpeg";
import image22 from "./assets/13.jpeg";

function Era({ isUK }: { isUK: boolean }) {
  return (
    <>
      <Inlet
        firstLine="OUR"
        secondLine="MISSION"
        image={!isUK ? downtown : edinburgh}
      />
      <Mission isUK={isUK} />
      <div
        className={`max-w-[1024px] relative mx-auto bg-gray-50 pb-20 select-none`}
      >
        <h2 className="px-6 text-gray-800 pt-5 text-3xl font-bold text-left ">
          A NEW ERA IN MEDIA
        </h2>

        {!isUK && (
          <p className=" text-gray-400 text-lg px-6 pt-6 pb-10 text-left mx-auto font-sans">
            Ironmill is more than a media company; it's a global movement. We
            aim to place the <strong>Middle East</strong> at the forefront of
            sports and entertainment media, forging powerful content that
            unites, inspires, and endures. <br />
            <br />
            Every project is a step toward a future where Ironmill is synonymous
            with world-class, boundary-breaking media.
          </p>
        )}
        {isUK && (
          <p className=" text-gray-400 text-lg px-6 pt-6 pb-10 text-left mx-auto font-sans">
            Ironmill isn't just a media company – it's a global movement. We're
            on a mission to lead the way in sports and entertainment media,
            creating stories that unite, inspire, and stand the test of time.
            <br />
            Every project takes us one step closer to a future where Ironmill is
            known for world-class, groundbreaking content.
          </p>
        )}
        <div className="container px-6 mx-auto">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
            <Card
              title="ENTERTAINMENT"
              blurb={
                <>
                  <p>
                    At Ironmill, entertainment is more than just content – it's
                    about creating experiences that truly resonate. From
                    high-energy sports broadcasts to immersive documentaries and
                    thought-provoking podcasts, everything we produce is
                    designed to captivate and inspire.
                  </p>
                  <br />
                  <p>
                    We bring stories to life with a fresh approach, combining
                    innovation, data-driven insights, and creativity to keep
                    audiences engaged across all platforms.
                  </p>
                </>
              }
              image={image7}
              align="top"
            />
            <Card
              title="REAL"
              blurb={
                <>
                  <p>
                    Authenticity is at the heart of everything we do at
                    Ironmill. We believe in telling stories that reveal the real
                    side of sport and entertainment—showcasing raw emotions,
                    triumphs, and struggles.
                  </p>
                  <br />
                  <p>
                    Our documentaries and broadcasts take a deep dive into the
                    lives of real people—whether they’re athletes, entertainers,
                    or beyond—offering unfiltered insights that build genuine
                    connections with viewers and listeners.
                  </p>
                </>
              }
              image={image2}
              align="bottom"
            />

            <Card
              title="ACCESSIBLE"
              blurb={
                <>
                  <p>
                    Accessibility is at the heart of our mission. At Ironmill,
                    we’re committed to making top-quality content available to
                    everyone, breaking down cultural barriers along the way.
                  </p>
                  <br />
                  <p>
                    By embracing digital platforms, user-friendly technology,
                    and the potential for multi-language content, we make sure
                    our stories reach audiences worldwide—anytime, anywhere.
                  </p>
                </>
              }
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
