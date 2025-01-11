


const aboutList =
  [
    {
      title: "独特功能",
      items: [
        "动态充电传输攻击",
        "程序生成的强化道具",
        "像素完美的碰撞检测",
        "原声音乐和音效",
        "多个具有挑战性的 Boss 战"
      ]
    },
    {
      title: "技术细节",
      items: [
        "采用 Unity 游戏引擎构建",
        "流畅的 60 FPS 游戏体验",
        "针对低端系统进行了优化",
        "可自定义的控件",
        "定期内容更新"
      ]
    }
  ]



export function AboutSection() {
  return (
    <section id="about" className="py-32 bg-black relative">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
            关于雀鳝类型
          </h2>
          <p className="text-xl text-center text-gray-300 mb-20 max-w-3xl mx-auto">
            Gar-Type 是一款由 Lumpy 开发的免费像素艺术射击游戏，灵感来自神秘的“Gar”角色。这款科幻冒险游戏将幽默与激烈的动作相结合，您将保卫地球免受生机星球 Gar 的入侵。驾驶人类的秘密原型飞船，成为我们生存的最后希望。
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