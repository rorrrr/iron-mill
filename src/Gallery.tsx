import image2 from "./assets/2.jpeg";
import image5 from "./assets/5.jpeg";
import image6 from "./assets/11.jpeg";
import image7 from "./assets/10.jpeg";
import image1 from "./assets/9.jpeg";
import image11 from "./assets/21.jpeg";
import image12 from "./assets/25.jpg";
import image13 from "./assets/26.jpg";
import image23 from "./assets/23.jpg";
import { useState } from "react";

function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section className="bg-gray-900 overflow-hidden w-contain pb-10">
      <h2 className="text-white text-4xl font-bold text-center py-5">
        Our experience
      </h2>
      <div className="container mx-auto px-5 py-2 lg:px-32 lg:pt-12">
        <div className="-m-1 flex flex-wrap md:-m-2">
          <div className="flex w-1/3 flex-wrap">
            <div className="w-full p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center cursor-pointer"
                src={image1}
                onClick={() => setSelectedImage(image1)}
              />
            </div>
          </div>

          <div className="flex w-1/3 flex-wrap">
            <div className="w-full p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center cursor-pointer"
                src={image11}
                onClick={() => setSelectedImage(image11)}
              />
            </div>
          </div>
          <div className="flex w-1/3 flex-wrap">
            <div className="w-full p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center cursor-pointer"
                src={image12}
                onClick={() => setSelectedImage(image12)}
              />
            </div>
          </div>
          <div className="flex w-1/3 flex-wrap">
            <div className="w-full p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center cursor-pointer"
                src={image23}
                onClick={() => setSelectedImage(image23)}
              />
            </div>
          </div>
          <div className="flex w-1/3 flex-wrap">
            <div className="w-full p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center cursor-pointer"
                src={image13}
                onClick={() => setSelectedImage(image13)}
              />
            </div>
          </div>
          <div className="flex w-1/3 flex-wrap">
            <div className="w-full p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center cursor-pointer"
                src={image6}
                onClick={() => setSelectedImage(image6)}
              />
            </div>
          </div>
          <div className="flex w-1/3 flex-wrap">
            <div className="w-full p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center cursor-pointer"
                src={image7}
                onClick={() => setSelectedImage(image7)}
              />
            </div>
          </div>
          <div className="flex w-1/3 flex-wrap">
            <div className="w-full p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center cursor-pointer"
                src={image2}
                onClick={() => setSelectedImage(image2)}
              />
            </div>
          </div>
          <div className="flex w-1/3 flex-wrap">
            <div className="w-full p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center cursor-pointer"
                src={image5}
                onClick={() => setSelectedImage(image5)}
              />
            </div>
          </div>
        </div>
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            alt="fullscreen"
            className="max-h-[90vh] max-w-[90vw] object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}

export default Gallery;
