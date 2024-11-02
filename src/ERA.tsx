function Era() {
  return (
    <div className="relative mx-auto rounded-t-3xl bg-white pb-20 select-none">
      <h2 className="text-gray-800 mt-10 pt-10 text-4xl font-bold text-center">
        A new era in media
      </h2>

      <p className="text-gray-400 text-center text-lg px-6 pt-6 pb-10 md:w-2/3 mx-auto font-normal">
        Ironmill is more than a media company; it’s a global movement. We aim to
        place the <strong>Middle East</strong> at the forefront of sports and
        entertainment media, forging powerful content that unites, inspires, and
        endures. <br />
        <br />
        Every project is a step toward a future where Ironmill is synonymous
        with world-class, boundary-breaking media.
      </p>
      <div className="container px-6 mx-auto max-w-[1380px]">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
          <div className="border border-gray-900 rounded-3xl p-6 shadow-md hover:shadow-xl transition-shadow duration-300">
            <h1 className="text-3xl font-semibold text-gray-900">
              Entertainment
            </h1>

            <p className="mt-4 text-lg text-gray-400">
              Ironmill’s commitment to entertainment means creating experiences
              that resonate. From high-energy sports broadcasts to immersive
              documentaries and thought-provoking podcasts, our content is
              crafted to captivate and inspire. We bring stories to life with a
              fresh approach, embracing innovation and creativity to keep
              audiences engaged across platforms.
            </p>
          </div>

          <div className="border border-gray-900 rounded-3xl p-6 shadow-md hover:shadow-xl transition-shadow duration-300">
            <h1 className=" text-3xl font-semibold text-gray-900">Real</h1>

            <p className="mt-4 text-lg text-gray-400">
              Authenticity is at the heart of Ironmill’s productions. We believe
              in telling stories that reveal the real side of sports and
              entertainment—showcasing raw emotions, triumphs, and struggles.
              Our documentaries and broadcasts delve deep into athletes' and
              entertainers' lives, offering unfiltered insights that build
              genuine connections with our viewers.
            </p>
          </div>

          <div className="border border-gray-900 rounded-3xl p-6 shadow-md hover:shadow-xl transition-shadow duration-300">
            <h1 className="text-3xl font-semibold text-gray-900">Accessible</h1>

            <p className="mt-4 text-lg text-gray-400">
              Accessibility is essential to our mission. Ironmill strives to
              make quality content available to everyone, breaking down cultural
              and linguistic barriers. Through digital platforms, multilingual
              content, and user-friendly technology, we ensure our stories reach
              audiences globally, providing content they can access anytime,
              anywhere.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Era;
