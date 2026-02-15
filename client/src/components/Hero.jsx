function Hero({ data }) {
  return (
    <div className="grid md:grid-cols-2 min-h-screen relative">
      {/* LEFT IMAGE SECTION */}
      <div className="relative ">
        <img
          src="/images/hero-building.avif"
          alt="Project"
          className="w-full h-full object-cover"
        />

        {/* Overlay Content */}
        <div className="absolute top-8 shadow-2xl left-10 text-black text-center px-2 z-10">
          <h2 className="text-4xl font-bold text-yellow-600 tracking-wide">
            {data.titleLine1}
          </h2>

          <h1 className="text-3xl font-extrabold text-red-700 mt-2">
            {data.titleLine2}
          </h1>

          <p className="mt-2 text-lg font-medium">{data.subtitle}</p>
        </div>

        <div className="w-full h-full  absolute top-0 bg-linear-to-b from-white via-transparent to-transparent"></div>

        {/* Bottom diagonal effect */}
        <div className="absolute bottom-0 left-0 w-full h-24 bg-[#d9ebe7] skew-y-[9deg] origin-bottom-left "></div>
      </div>

      {/* RIGHT CONTENT SECTION */}
      <div className="flex flex-col justify-center items-center bg-white rounded-bl-4xl px-12 text-center ">
        {/* Project Name */}
        <h3 className="text-xl tracking-widest text-gray-600 mb-2">
          VIGHNAHARTA
        </h3>

        <h1 className="text-6xl font-serif text-gray-800 mb-6">INFINITY</h1>

        {/* Decorative Divider */}
        <div className="w-32 h-[2px] bg-gray-400 mb-10"></div>

        {/* Pricing Section */}
        <div className="flex gap-16 mb-10">
          {/* 1 BHK */}
          <div>
            <p className="text-lg font-semibold">SMART 1 BHK</p>

            <p className="text-gray-500 line-through text-md">₹ 74.99 Lacs</p>

            <p className="text-4xl font-bold">₹ {data.price1}</p>

            <p className="text-sm text-gray-500 mt-1">onwards</p>
          </div>

          {/* Divider */}
          <div className="w-[1px] bg-gray-300"></div>

          {/* 2 BHK */}
          <div>
            <p className="text-lg font-semibold">PREMIUM 2 BHK</p>

            <p className="text-gray-500 line-through text-md">₹ 1.05 Cr</p>

            <p className="text-4xl font-bold">₹ {data.price2}</p>

            <p className="text-sm text-gray-500 mt-1">onwards</p>
          </div>
        </div>

        {/* Location */}
        <div className="flex items-center gap-3 text-gray-600">
          <span className="text-red-600 text-2xl"></span>
          <p className="text-sm font-medium">{data.location}</p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
