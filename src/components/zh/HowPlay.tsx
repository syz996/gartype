
import { Rocket, Shield, Gift } from 'lucide-react';


const gameGuide = [
  {
    title: '基本控制',
    icon: Rocket,
    steps: [
      "🖱️ 移动鼠标来控制宇宙飞船",
      "🔫 左键单击以进行基本攻击",
      "⚡ 右键点击进行特殊攻击",
      "⌨️ ESC 键暂停游戏",
      "🎯 提供自动瞄准辅助"
    ]
  },
  {
    title: '战斗技巧',
    icon: Shield,
    steps: [
      "💫 躲避敌人的射弹",
      "🔋 在 Boss 战中发起冲锋攻击",
      "⚡ 仔细把握特殊动作的时机",
      "🛡️ 策略性地使用盾牌",
      "💥 连续组合可获得奖励积分"
    ]
  },
  {
    title: '升级指南',
    icon: Gift,
    steps: [
      "❤️ 健康恢复 (+50 HP)",
      "⚡ 速度提升（持续 30 秒）",
      "🔥 双倍伤害（持续 20 秒）",
      "🛡️ 盾牌（吸收 3 次打击）",
      "💫 清屏炸弹"
    ]
  }
];

export function HowPlay() {


  return (
    <section className="py-32 bg-black relative">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
            怎么玩
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