

export default function Guide() {
  const steps = [
    {
      title: 'Movement',
      description: 'Use your mouse to control movement and aim'
    },
    {
      title: 'Combat',
      description: 'Click to shoot and charge your special attack'
    },
    {
      title: 'Power-ups',
      description: 'Collect power-ups to enhance your abilities'
    }
  ];

  return (
    <section id="guide" className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">How to Play</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((step, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-2xl font-bold text-blue-600 mb-2">
                Step {index + 1}
              </div>
              <h3 className="text-xl font-bold mb-2">{step.title}</h3>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}