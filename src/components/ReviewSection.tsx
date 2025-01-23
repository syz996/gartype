
import { Star } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const reviews = [
  {
    avatar: "https://images.unsplash.com/photo-1511367461989-f85a21fda167",
    author: "PixelWarrior99",
    comment: "",
    rating: 5
  },
  {
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
    author: "RetroGamerX",
    comment: "",
    rating: 5
  },
  {
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    author: "BulletHellFan",
    comment: "",
    rating: 4
  },
  {
    avatar: "https://images.unsplash.com/photo-1546964124-0cce460f38ef",
    author: "IndieLover",
    comment: "",
    rating: 4
  },
  {
    avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde",
    author: "ShmupKing",
    comment: "",
    rating: 5
  },
  {
    avatar: "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7",
    author: "CasualGamer",
    comment: "",
    rating: 4
  },
  {
    avatar: "https://images.unsplash.com/photo-1521119989659-a83eee488004",
    author: "8BitLegend",
    comment: "",
    rating: 5
  },
  {
    avatar: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef",
    author: "BossRushPro",
    comment: "",
    rating: 4
  },
  {
    avatar: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79",
    author: "GarfieldFan",
    comment: "",
    rating: 5
  },
  {
    avatar: "https://images.unsplash.com/photo-1506089676908-3592f7389d4d",
    author: "NeoArcade",
    comment: "",
    rating: 5
  },
  {
    avatar: "https://images.unsplash.com/photo-1542903660-eedba2cda473",
    author: "SpeedrunnerX",
    comment: "",
    rating: 4
  },
  {
    avatar: "https://images.unsplash.com/photo-1532074205216-d0e1f4b87368",
    author: "LazyCat",
    comment: "",
    rating: 4
  }
];

reviews.forEach((item, index) => {
  item.comment = `com${index + 1}`
})

export function ReviewSection() {
  const { t } = useTranslation();

  return (
    <section id="reviews" className="py-32 bg-black relative">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
          {t('nav.reviews')}
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {reviews.map((review, index) => (
            <div key={index} className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 hover-scale">
              <div className="flex items-center mb-4">
                <img
                  src={review.avatar}
                  alt={review.author}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h3 className="text-lg font-semibold text-white">{review.author}</h3>
                  <div className="flex text-yellow-400">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed">{t(`reviews.${review.comment}`)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}