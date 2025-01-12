


const aboutList =
  [
    {
      title: "Unique Features",
      items: [
        "Dynamic charging transmission attacks",
        "Procedurally generated power-ups",
        "Pixel-perfect collision detection",
        "Original soundtrack and sound effects",
        "Multiple challenging boss battles"
      ]
    },
    {
      title: "Technical Details",
      items: [
        "Built with Unity game engine",
        "Smooth 60 FPS gameplay",
        "Optimized for low-end systems",
        "Customizable controls",
        "Regular content updates"
      ]
    }
  ]



export function AboutSection() {
  return (
    <section id="about" className="py-32 bg-black relative">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
            About Gar-Type
          </h2>
          <p className="text-xl text-center text-gray-300 mb-20 max-w-3xl mx-auto">
            Gar-Type is a free pixel art shooter game developed by Lumpy, drawing inspiration from the mysterious "Gar" character. This sci-fi adventure combines humor with intense action as you defend Earth from the living planet Gar's invasion. Pilot humanity's secret prototype ship and become our last hope for survival.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-2 gap-6">
            {aboutList.map((item, index) => (
              <div className="bg-gray-700/50 p-6 rounded-lg" key={index}>
                <h3 className="text-xl font-bold mb-3 text-green-400">{item.title}</h3>
                <ul className="list-disc list-inside space-y-2">
                  {item.items.map((c, i) => (
                    <li key={i}>
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}