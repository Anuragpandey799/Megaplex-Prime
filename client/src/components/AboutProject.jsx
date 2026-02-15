function AboutProject({ data }) {
  return (
    <div className="bg-[#d9ebe7] py-20 px-10 grid md:grid-cols-2 gap-10 items-center">
      <div className=" rounded-full w-100 h-100 relative">
        <img
          src="/images/about1.jpeg"
          className="w-100 h-100 z-0 rounded-full border border-white"
        />
        <img
          src="/images/about2.jpeg"
          className="w-40 h-40 border-8 border-white relative bottom-100 left-0 rounded-full z-10"
        />
        <img
          src="/images/about3.jpeg"
          className="w-40 h-40 border-8 border-white relative bottom-70 left-50 rounded-full z-10"
        />
      </div>

      <div>
        <h2 className="text-4xl font-bold mb-6">{data.title}</h2>

        <p className="text-gray-700 leading-7">{data.description}</p>

        <button className="mt-8 bg-linear-to-r from-green-400 to-green-700 px-6 py-2 rounded-md text-white font-semibold">
          {data.buttonText}
        </button>
      </div>
    </div>
  );
}

export default AboutProject;
