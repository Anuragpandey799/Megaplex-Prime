import { useEffect, useState } from "react";

function AdminDashboard() {
  const [content, setContent] = useState(null);
  const [active, setActive] = useState("hero");
  const [loading, setLoading] = useState(true);

  const token = localStorage.getItem("token");

  useEffect(() => {
    fetch("http://localhost:5000/api/content")
      .then(res => res.json())
      .then(data => {
        setContent(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const handleChange = (section, field, value) => {
    setContent(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value
      }
    }));
  };

  const handleArrayChange = (section, arrayName, index, field, value) => {
    const updatedArray = [...(content[section]?.[arrayName] || [])];
    updatedArray[index][field] = value;

    setContent(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        [arrayName]: updatedArray
      }
    }));
  };

  const addArrayItem = (section, arrayName, newItem) => {
    const updatedArray = [...(content[section]?.[arrayName] || []), newItem];

    setContent(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        [arrayName]: updatedArray
      }
    }));
  };

  const removeArrayItem = (section, arrayName, index) => {
    const updatedArray = content[section][arrayName].filter(
      (_, i) => i !== index
    );

    setContent(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        [arrayName]: updatedArray
      }
    }));
  };

  const handleSave = async () => {
    const res = await fetch("http://localhost:5000/api/content", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify(content)
    });

    if (res.ok) {
      alert("✅ Content Updated Successfully");
    } else {
      alert("❌ Update Failed");
    }
  };

  if (loading)
    return <div className="flex items-center justify-center h-screen">Loading...</div>;

  if (!content)
    return <div className="flex items-center justify-center h-screen">No Content Found</div>;

  const sections = [
    "hero",
    "aboutProject",
    "amenities",
    "township",
    "floorPlans",
    "developer",
    "construction",
    "faq"
  ];

  return (
    <div className="flex min-h-screen bg-gray-100">

      {/* SIDEBAR */}
      <aside className="w-64 bg-white shadow-xl p-6 space-y-3 border-r">
        <h2 className="text-2xl font-bold mb-6 text-green-600">Admin CMS</h2>

        {sections.map(section => (
          <button
            key={section}
            onClick={() => setActive(section)}
            className={`w-full text-left px-4 py-2 rounded-lg transition-all capitalize
            ${active === section
                ? "bg-green-500 text-white shadow"
                : "hover:bg-gray-100"
              }`}
          >
            {section}
          </button>
        ))}
      </aside>

      {/* CONTENT AREA */}
      <main className="flex-1 p-10 overflow-y-auto">

        <h1 className="text-3xl font-bold mb-8 capitalize">
          {active.replace(/([A-Z])/g, " $1")}
        </h1>

        <div className="bg-white p-6 rounded-2xl shadow-lg space-y-6">

          {/* ================= HERO ================= */}
          {active === "hero" && (
            <div className="grid grid-cols-2 gap-4">
              {Object.keys(content.hero || {}).map(key => (
                <input
                  key={key}
                  className="border p-3 rounded-lg focus:ring-2 focus:ring-green-400 outline-none"
                  value={content.hero[key] || ""}
                  onChange={e =>
                    handleChange("hero", key, e.target.value)
                  }
                  placeholder={key}
                />
              ))}
            </div>
          )}

          {/* ================= ABOUT ================= */}
          {active === "aboutProject" && (
            <div className="space-y-4">
              <input
                className="border p-3 w-full rounded-lg"
                value={content.aboutProject?.title || ""}
                onChange={e =>
                  handleChange("aboutProject", "title", e.target.value)
                }
              />
              <textarea
                className="border p-3 w-full rounded-lg"
                rows="5"
                value={content.aboutProject?.description || ""}
                onChange={e =>
                  handleChange("aboutProject", "description", e.target.value)
                }
              />
            </div>
          )}

          {/* ================= AMENITIES ================= */}
          {active === "amenities" && (
            <>
              {content.amenities?.items?.map((item, index) => (
                <div key={index} className="flex gap-3">
                  <input
                    className="border p-3 flex-1 rounded-lg"
                    value={item.name}
                    onChange={e =>
                      handleArrayChange("amenities", "items", index, "name", e.target.value)
                    }
                  />
                  <button
                    onClick={() => removeArrayItem("amenities", "items", index)}
                    className="bg-red-500 text-white px-4 rounded-lg"
                  >
                    ✕
                  </button>
                </div>
              ))}
              <button
                onClick={() =>
                  addArrayItem("amenities", "items", { name: "" })
                }
                className="bg-blue-500 text-white px-5 py-2 rounded-lg"
              >
                + Add Amenity
              </button>
            </>
          )}

          {/* ================= TOWNSHIP ================= */}
          {active === "township" && (
            <>
              <input
                className="border p-3 w-full rounded-lg"
                value={content.township?.title || ""}
                onChange={e =>
                  handleChange("township", "title", e.target.value)
                }
              />

              {content.township?.buildings?.map((item, index) => (
                <div key={index} className="flex gap-3">
                  <input
                    className="border p-3 flex-1 rounded-lg"
                    value={item.name}
                    onChange={e =>
                      handleArrayChange("township", "buildings", index, "name", e.target.value)
                    }
                  />
                  <button
                    onClick={() =>
                      removeArrayItem("township", "buildings", index)
                    }
                    className="bg-red-500 text-white px-4 rounded-lg"
                  >
                    ✕
                  </button>
                </div>
              ))}

              <button
                onClick={() =>
                  addArrayItem("township", "buildings", { name: "" })
                }
                className="bg-blue-500 text-white px-5 py-2 rounded-lg"
              >
                + Add Building
              </button>
            </>
          )}

          {/* ================= FLOOR PLANS ================= */}
          {active === "floorPlans" && (
            <>
              {content.floorPlans?.types?.map((item, index) => (
                <div key={index} className="border p-4 rounded-xl space-y-3">
                  <input
                    className="border p-2 w-full rounded-lg"
                    value={item.type}
                    onChange={e =>
                      handleArrayChange("floorPlans", "types", index, "type", e.target.value)
                    }
                  />
                  <input
                    className="border p-2 w-full rounded-lg"
                    value={item.area}
                    onChange={e =>
                      handleArrayChange("floorPlans", "types", index, "area", e.target.value)
                    }
                  />
                  <input
                    className="border p-2 w-full rounded-lg"
                    value={item.price}
                    onChange={e =>
                      handleArrayChange("floorPlans", "types", index, "price", e.target.value)
                    }
                  />
                </div>
              ))}

              <button
                onClick={() =>
                  addArrayItem("floorPlans", "types", {
                    type: "",
                    area: "",
                    price: ""
                  })
                }
                className="bg-blue-500 text-white px-5 py-2 rounded-lg"
              >
                + Add Floor Plan
              </button>
            </>
          )}

          {/* ================= DEVELOPER ================= */}
          {active === "developer" && (
            <>
              <input
                className="border p-3 w-full rounded-lg"
                value={content.developer?.title || ""}
                onChange={e =>
                  handleChange("developer", "title", e.target.value)
                }
              />
              <textarea
                className="border p-3 w-full rounded-lg"
                rows="4"
                value={content.developer?.description || ""}
                onChange={e =>
                  handleChange("developer", "description", e.target.value)
                }
              />

              {content.developer?.stats?.map((item, index) => (
                <div key={index} className="grid grid-cols-2 gap-3">
                  <input
                    className="border p-2 rounded-lg"
                    value={item.label}
                    onChange={e =>
                      handleArrayChange("developer", "stats", index, "label", e.target.value)
                    }
                  />
                  <input
                    className="border p-2 rounded-lg"
                    value={item.value}
                    onChange={e =>
                      handleArrayChange("developer", "stats", index, "value", e.target.value)
                    }
                  />
                </div>
              ))}

              <button
                onClick={() =>
                  addArrayItem("developer", "stats", { label: "", value: "" })
                }
                className="bg-blue-500 text-white px-5 py-2 rounded-lg"
              >
                + Add Stat
              </button>
            </>
          )}

          {/* ================= CONSTRUCTION ================= */}
          {active === "construction" && (
            <>
              <input
                className="border p-3 w-full rounded-lg"
                value={content.construction?.title || ""}
                onChange={e =>
                  handleChange("construction", "title", e.target.value)
                }
              />

              {content.construction?.projects?.map((item, index) => (
                <div key={index} className="grid grid-cols-2 gap-3">
                  <input
                    className="border p-2 rounded-lg"
                    value={item.status}
                    onChange={e =>
                      handleArrayChange("construction", "projects", index, "status", e.target.value)
                    }
                  />
                  <input
                    className="border p-2 rounded-lg"
                    value={item.buttonText}
                    onChange={e =>
                      handleArrayChange("construction", "projects", index, "buttonText", e.target.value)
                    }
                  />
                </div>
              ))}

              <button
                onClick={() =>
                  addArrayItem("construction", "projects", {
                    status: "",
                    buttonText: ""
                  })
                }
                className="bg-blue-500 text-white px-5 py-2 rounded-lg"
              >
                + Add Project
              </button>
            </>
          )}

          {/* ================= FAQ ================= */}
          {active === "faq" && (
            <>
              {content.faq?.questions?.map((item, index) => (
                <div key={index} className="border p-4 rounded-xl space-y-3">
                  <input
                    className="border p-2 w-full rounded-lg"
                    value={item.question}
                    onChange={e =>
                      handleArrayChange("faq", "questions", index, "question", e.target.value)
                    }
                  />
                  <textarea
                    className="border p-2 w-full rounded-lg"
                    value={item.answer}
                    onChange={e =>
                      handleArrayChange("faq", "questions", index, "answer", e.target.value)
                    }
                  />
                  <button
                    onClick={() =>
                      removeArrayItem("faq", "questions", index)
                    }
                    className="bg-red-500 text-white px-4 py-1 rounded-lg"
                  >
                    Delete
                  </button>
                </div>
              ))}

              <button
                onClick={() =>
                  addArrayItem("faq", "questions", { question: "", answer: "" })
                }
                className="bg-blue-500 text-white px-5 py-2 rounded-lg"
              >
                + Add FAQ
              </button>
            </>
          )}

        </div>

        {/* SAVE BUTTON */}
        <div className="sticky bottom-5 mt-8">
          <button
            onClick={handleSave}
            className="w-full bg-green-600 text-white py-4 rounded-2xl text-lg font-semibold hover:bg-green-700 shadow-lg"
          >
            💾 Save All Changes
          </button>
        </div>

      </main>
    </div>
  );
}

export default AdminDashboard;
