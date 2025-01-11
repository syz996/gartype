
import { Star } from 'lucide-react';

const reviews = [
  {
    author: "太空王牌",
    rating: 5,
    comment: "令人惊叹的像素艺术和令人上瘾的游戏玩法！BOSS 之战极具挑战性。",
    avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop"
  },
  {
    author: "RetroGamer",
    rating: 4,
    comment: "喜欢复古感与现代机制的结合。强化系统经过深思熟虑。",
    avatar: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=100&h=100&fit=crop"
  },
  {
    author: "像素飞行员",
    rating: 5,
    comment: "动画对细节的关注令人难以置信。每个级别都感觉独一无二。",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop"
  },
  {
    author: "宇宙批评家",
    rating: 4,
    comment: "出色的射击游戏，拥有出色的升级系统。故事情节为游戏增添了深度。",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop"
  }
];

export function ReviewSection() {

  return (
    <section id="reviews" className="py-32 bg-black relative">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
          评论
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
              <p className="text-gray-300 leading-relaxed">{review.comment}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}