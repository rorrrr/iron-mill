import downtown from "./assets/skyline.webp";
import edinburgh from "./assets/edin-wide.jpg";
import Inlet from "./Inlet";

function ContactUs({ isUK }: { isUK: boolean }) {
  return (
    <>
      <Inlet
        firstLine="CONTACT"
        secondLine="US"
        image={!isUK ? downtown : edinburgh}
      />

      <section className="relative w-full flex flex-col items-center justify-center text-center text-white">
        <section className="bg-white dark:bg-gray-900">
          <div className="container p-6 mx-auto">
            <div className="grid sm:gap-12 mt-10 grid-cols-1 md:grid-cols-1 gap-10">
              <div className="flex flex-col items-center justify-center text-center">
                <span
                  className={`p-3 ${
                    isUK ? "text-custom-blue" : "text-green-800"
                  } rounded-full ${
                    isUK ? "bg-custom-blue/20" : "bg-green-100/80"
                  } dark:bg-gray-800`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                    />
                  </svg>
                </span>

                <h2 className="mt-4 text-lg font-medium text-gray-400">
                  Email enquiries
                </h2>
                <p
                  className={`mt-2 ${
                    isUK
                      ? "text-custom-blue"
                      : "text-green-800 dark:text-green-400"
                  }`}
                >
                  info@ironmillmedia.co.uk
                </p>
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  );
}

export default ContactUs;
