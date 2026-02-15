function Construction({ data }) {
  return (
    <div className="bg-[#d9ebe7] pb-20 pt-0 ">
      <div className="bg-linear-to-r from-[#41e3c0] to-green-400 py-20">
        <h2 className="text-4xl font-bold text-center mb-16">{data.title}</h2>
      </div>
      <div className="grid md:grid-cols-3 gap-10 px-10 relative bottom-20">
        {data.projects.map((project, index) => (
          <div key={index} className="rounded-2xl overflow-hidden shadow-lg">
            <img
              src={`/images/construction${index + 1}.jpg`}
              className="h-72 w-full object-cover"
            />

            <div className="p-6 text-center">
              <h3 className="font-semibold">{project.status}</h3>

              <button className="text-green-600 mt-2">
                {project.buttonText}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Construction;
