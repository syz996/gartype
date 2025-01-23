
import { Rocket, Shield, Gift } from 'lucide-react';
import { useTranslation } from 'react-i18next';


const gameGuide = [
  {
    title: 'gameGuide',
    icon: Rocket,
    steps: [
      'steps1',
      'steps2',
      'steps3',
      'steps4'
    ]
  },
  {
    title: 'combatTips',
    icon: Shield,
    steps: [
      'steps5',
      'steps6',
      'steps7',
      'steps8'
    ]
  },
  {
    title: 'powerUpGuide',
    icon: Gift,
    steps: [
      'steps9',
      'steps10',
      'steps11',
      'steps12'
    ]
  }
];

export function AboutSection() {
  const { t } = useTranslation();
  

  return (
    <section id="about" className="py-32 bg-black relative">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
            {t('about.title')}
          </h2>
          <p className="text-xl text-center text-gray-300 mb-20 max-w-3xl mx-auto">
            {t('about.description')}
          </p>

          <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
            {t('play.title')}
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {gameGuide.map((guide) => (
              <div key={guide.title} className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 hover-scale">
                <div className="flex items-center mb-6">
                  <guide.icon className="w-8 h-8 text-purple-400 mr-4" />
                  <h3 className="text-2xl font-semibold text-white">
                    {t(`play.${guide.title}`)}
                  </h3>
                </div>
                <ul className="space-y-4">
                  {guide.steps.map((step, index) => (
                    <li key={index} className="flex items-start text-gray-300">
                      <span className="text-purple-400 mr-2">•</span>
                      {t(`play.${step}`)}
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