function Card({
  title,
  blurb,
  image,
  align = "top",
}: {
  title: string;
  blurb: React.ReactNode;
  image: string;
  align: string;
}) {
  const alignmentClasses =
    {
      top: "object-top",
      center: "object-center",
      bottom: "object-bottom",
    }[align] || "object-top";

  return (
    <div className="w-full rounded overflow-hidden shadow-lg text-left">
      <img
        className={`w-full h-48 object-cover object-${alignmentClasses}`}
        src={image}
        alt="era image"
      />
      <div className="px-6 py-4">
        <div className="font-bold text-gray-800 text-2xl mb-2">{title}</div>
        <div className="text-gray-400 font-sans">{blurb}</div>
      </div>
    </div>
  );
}

export default Card;
