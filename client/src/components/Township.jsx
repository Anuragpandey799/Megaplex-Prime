function Township({ data }) {
  return (
    <div className="bg-gradient-to-b from-[#b6dfd3] to-[#8dcfc0] py-20 px-10">

      <h2 className="text-4xl font-bold text-center mb-14">
        {data.title}
      </h2>

      <div className="grid md:grid-cols-3 gap-10">

        {data.buildings.map((building, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition duration-300"
          >
            <img
              src={`/images/township${index + 1}.jpg`}
              className="h-80 w-full object-cover"
            />

            <div className="bg-gradient-to-r from-green-300 to-green-400 py-3 text-center font-semibold">
              {building.name}
            </div>
          </div>
        ))}

      </div>
    </div>
  );
}

export default Township;
