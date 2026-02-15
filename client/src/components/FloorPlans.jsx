import { useState } from "react";

function FloorPlans({ data }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const activePlan = data.types[activeIndex];

  return (
    <div className="bg-[#a8d6c8] py-20 px-10">

      <h2 className="text-4xl font-bold text-center mb-16">
        {data.title}
      </h2>

      <div className="grid md:grid-cols-2 gap-16 items-center">

        {/* Left Image */}
        <div className="bg-white p-6 rounded-2xl shadow-lg">
          <img
            src="/images/floorplan.webp"
            className="w-full rounded-xl"
          />
        </div>

        {/* Right Content */}
        <div className="bg-white p-10 rounded-2xl shadow-lg">

          <div className="flex gap-4 mb-6 flex-wrap">
            {data.types.map((plan, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`px-5 py-2 rounded-md font-semibold ${
                  activeIndex === index
                    ? "bg-linear-to-r from-[#07e6a3] to-[#01573d] text-white"
                    : "bg-linear-to-r from-[#e0f7f0] to-[#cbf7e9]"
                }`}
              >
                {plan.type}
              </button>
            ))}
          </div>

          <p className="text-lg font-medium mb-2">
            Type - {activePlan.type}
          </p>

          <p>Area - {activePlan.area}</p>
          <p>Price - {activePlan.price}</p>

          <button className="mt-6 bg-linear-to-r from-blue-400 to-green-400 text-white px-6 py-3 rounded-md font-semibold">
            {data.buttonText}
          </button>

        </div>
      </div>
    </div>
  );
}

export default FloorPlans;
