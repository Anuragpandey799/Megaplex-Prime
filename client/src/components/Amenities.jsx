import {
  Dumbbell,
  Baby,
  Footprints,
  Flower2,
  Trees,
  Building2
} from "lucide-react";

function Amenities({ data }) {

  // Map item names to icons safely
  const iconMap = {
    "Gymnasium": Dumbbell,
    "Kids Play Area": Baby,
    "Jogging Track": Footprints,
    "Yoga Deck": Flower2,
    "Garden": Trees,
    "Club House": Building2
  };

  return (
    <div className="bg-[#d9ebe7] py-24 px-6 text-center">

      {/* Title */}
      <h2 className="text-5xl font-serif text-gray-800 mb-4">
        {data.title}
      </h2>

      <p className="text-gray-600 max-w-3xl mb-16 mx-auto">
        {data.subtitle}
      </p>

      <div className="grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT IMAGE */}
        <div>
          <img
            src="/images/amenities.jpg"
            alt="Amenities"
            className="rounded-3xl shadow-xl"
          />
        </div>

        {/* RIGHT ICON GRID */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-12">

          {data.items.map((item, index) => {

            // Safe fallback icon
            const Icon = iconMap[item] || Building2;

            return (
              <div key={index} className="text-center">

                <div className="w-28 h-28 mx-auto rounded-full bg-gray-100 flex items-center justify-center mb-4 shadow-sm hover:scale-105 transition">
                  <Icon size={40} className="text-emerald-600" />
                </div>

                <p className="font-medium text-gray-700">
                  {item.name}
                </p>

              </div>
            );
          })}

        </div>

      </div>

      {/* Button */}
      <div className="flex justify-center mt-16">
        <button className="bg-gradient-to-r from-[#40e4c8] to-[#35f293] px-8 py-3 rounded-lg text-white font-semibold shadow-md hover:scale-105 transition">
          View more
        </button>
      </div>

    </div>
  );
}

export default Amenities;
