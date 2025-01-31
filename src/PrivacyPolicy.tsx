import downtown from "./assets/skyline.webp";
import edinburgh from "./assets/edin-wide.jpg";
import Inlet from "./Inlet";

function PrivacyPolicy({ isUK }: { isUK: boolean }) {
  return (
    <>
      <Inlet
        firstLine="PRIVACY"
        secondLine="POLICY"
        image={!isUK ? downtown : edinburgh}
      />

      <section className="relative w-full flex flex-col items-center justify-center text-center">
        <section className="bg-white">
          <div className="container p-6 mx-auto max-w-4xl">
            <div className="grid gap-8 mt-10">
              <div className="text-left">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  Privacy Policy
                </h2>
                <p className="text-gray-600 mb-6">
                  Last updated: {new Date().toLocaleDateString()}
                </p>

                <div className="space-y-6 text-gray-600">
                  <p>
                    Ironmill Media ("we", "our", or "us") is committed to
                    protecting your privacy. This Privacy Policy explains how we
                    collect, use, and safeguard your information when you visit
                    our website.
                  </p>

                  <h3 className="text-xl font-bold text-gray-800 mt-6">
                    How We Use Your Information
                  </h3>
                  <p>We use the information we collect to:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Provide and improve our services</li>
                    <li>Communicate with you</li>
                    <li>Customize content based on your location</li>
                    <li>Analyze website usage</li>
                  </ul>

                  <h3 className="text-xl font-bold text-gray-800 mt-6">
                    Data Protection
                  </h3>
                  <p>
                    We implement appropriate security measures to protect your
                    personal information. However, no method of transmission
                    over the Internet is 100% secure, and we cannot guarantee
                    absolute security.
                  </p>

                  <h3 className="text-xl font-bold text-gray-800 mt-6">
                    Contact Us
                  </h3>
                  <p>
                    If you have any questions about this Privacy Policy, please
                    contact us at:
                  </p>
                  <p className="font-medium">info@ironmillmedia.co.uk</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  );
}

export default PrivacyPolicy;
