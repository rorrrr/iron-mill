function Card({
  title,
  blurb,
  image,
  align,
}: {
  title: string;
  blurb: string;
  image: string;
  align: string;
}) {
  return (
    <div className="w-full rounded overflow-hidden shadow-lg text-left">
      <img
        className={`w-full h-48 object-cover object-${align}`}
        src={image}
        alt="era image"
      />
      <div className="px-6 py-4">
        <div className="font-bold text-gray-800 text-4xl mb-2">{title}</div>
        <p className="text-gray-400 font-sans">{blurb}</p>
      </div>
    </div>
  );
}

export default Card;
