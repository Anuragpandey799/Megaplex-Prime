import { useState } from "react";

function FAQ({ data }) {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="bg-[#d9ebe7] pb-20 px-10">

      <h2 className="text-4xl font-bold text-center mb-14">
        {data.title}
      </h2>

      <div className="max-w-4xl mx-auto space-y-4">

        {data.questions.map((item, index) => (
          <div
            key={index}
            className="bg-green-200 rounded-lg shadow"
          >
            <div
              className="flex justify-between items-center p-4 cursor-pointer"
              onClick={() => toggle(index)}
            >
              <p>{item.question}</p>
              <span>
                {activeIndex === index ? "-" : "+"}
              </span>
            </div>

            {activeIndex === index && (
              <div className="p-4 bg-white">
                {item.answer}
              </div>
            )}
          </div>
        ))}

      </div>
    </div>
  );
}

export default FAQ;
