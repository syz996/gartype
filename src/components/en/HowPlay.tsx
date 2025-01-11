
import { Rocket, Shield, Gift } from 'lucide-react';


const gameGuide = [
  {
    title: 'Basic Controls',
    icon: Rocket,
    steps: [
      "🖱️ Move mouse to control the spaceship",
      "🔫 Left click to shoot basic attacks",
      "⚡ Right click to charge special attack",
      "⌨️ ESC key to pause the game",
      "🎯 Auto-aim assistance available"
    ]
  },
  {
    title: 'Combat Tips',
    icon: Shield,
    steps: [
      "💫 Dodge enemy projectiles",
      "🔋 Charge attacks for boss battles",
      "⚡ Time your special moves carefully",
      "🛡️ Use shields strategically",
      "💥 Chain combos for bonus points"
    ]
  },
  {
    title: 'Power-up Guide',
    icon: Gift,
    steps: [
      "❤️ Health restoration (+50 HP)",
      "⚡ Speed boost (30s duration)",
      "🔥 Double damage (20s duration)",
      "🛡️ Shield (absorbs 3 hits)",
      "💫 Screen-clearing bomb"
    ]
  }
];

export function HowPlay() {


  return (
    <section className="py-32 bg-black relative">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
            How To Play
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {gameGuide.map((guide) => (
              <div key={guide.title} className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 hover-scale">
                <div className="flex items-center mb-6">
                  <guide.icon className="w-8 h-8 text-purple-400 mr-4" />
                  <h3 className="text-2xl font-semibold text-white">
                    {guide.title}
                  </h3>
                </div>
                <ul className="space-y-4">
                  {guide.steps.map((step, index) => (
                    <li key={index} className="flex items-start text-gray-300">
                      {step}
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