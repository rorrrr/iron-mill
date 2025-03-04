function Inlet({
  image,
  firstLine,
  secondLine,
}: {
  image: string;
  firstLine: string;
  secondLine: string;
}) {
  return (
    <>
      <div>
        <section className="relative w-screen h-[40vh] overflow after:content-[''] after:absolute after:w-full after:h-full after:top-0 after:left-0 after:bg-black/60 after:z-[1]">
          <img
            src={image}
            alt="Contact Us"
            className="w-full h-full object-cover md:object-center object-[75%_center]"
          />
        </section>
      </div>
      <div className="md:max-w-5xl md:mx-auto text-5xl z-40 relative -mt-[40px] md:pl-6 text-left ml-2 text-white animate-slidein-left opacity-0">
        <h1 className="p-0 leading-[0.85]">{firstLine}</h1>
        <h1 className="p-0 leading-[0.85] text-black">{secondLine}</h1>
      </div>
    </>
  );
}

export default Inlet;
