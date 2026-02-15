function Developer({ data }) {
  return (
    <div className="bg-[#d9ebe7] pt-20 text-center overflow-hidden">
      {/* Title */}
      <h2 className="text-4xl font-bold text-gray-800 mb-6">{data.title}</h2>

      {/* Description */}
      <p className="max-w-4xl mx-auto px-6 text-gray-600 leading-relaxed mb-14">
        {data.description}
      </p>

      {/* Stats Bar */}
      <div className="max-w-6xl mx-auto px-6">
        <div className="bg-gradient-to-r from-[#7fd1c3] to-[#74c69d] rounded-2xl py-6 px-4 flex flex-col md:flex-row justify-between items-center gap-6 shadow-md">
          {data.stats.map((stat, index) => (
            <div key={index} className="text-center flex-1">
              <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
              <p className="text-sm text-gray-700 mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Developer Image Section */}
      <div className="relative">
        <img
          src="/images/developer.webp"
          alt="Developer"
          className="w-full h-100 object-cover rounded-t-[50%]"
        />
      </div>
    </div>
  );
}

export default Developer;
