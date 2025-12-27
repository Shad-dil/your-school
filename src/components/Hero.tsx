export default function Hero() {
  return (
    <section className="bg-[#f6f1ea] px-6 py-16 min-h-screen">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
            This is <br />
            <span className="text-yellow-500">Your School!</span>
          </h1>

          <p className="text-gray-700 max-w-md mb-8">
            College of Arts and Science in Columbia, South Carolina. Infinite
            possibilities and your promising future start here!
          </p>

          <div className="flex gap-6 items-center">
            <button className="bg-green-800 text-white px-6 py-3 rounded font-semibold">
              Explore Admission
            </button>

            <a
              href="#"
              className="text-green-800 font-semibold flex items-center gap-2"
            >
              → Academics
            </a>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative w-full h-105">
          <img
            src="/hero.jpg" // replace with your image
            alt="Students"
            className="object-cover rounded"
          />
        </div>
      </div>
    </section>
  );
}
