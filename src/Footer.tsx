function Footer() {
  return (
    <section className="bg-white">
      <div className="max-w-screen-xl px-4 py-6 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8">
        <p className="mt-8 text-base leading-6 text-center text-gray-400">
          © {new Date().getFullYear()} Ironmill Media, Inc. All rights reserved.
        </p>
      </div>
    </section>
  );
}

export default Footer;
