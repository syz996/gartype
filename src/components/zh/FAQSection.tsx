



const faqs = [
  {
    question: "游戏运行问题",
    children: [
      {
        title: "无法开始游戏：",
        answer: "这可能是由于浏览器兼容性问题、网络问题或设备性能不足造成的。要解决此问题，请尝试切换浏览器、检查网络连接或降低游戏的图形设置。"
      },
      {
        title: "滞后或延迟：",
        answer: "由于游戏采用 Unity 引擎，性能可能会受到设备配置的影响。您可以尝试关闭其他占用大量资源的程序或调整浏览器设置以提高游戏的流畅度。"
      }
    ]
  },
  {
    question: "控制问题",
    children: [
      {
        title: "鼠标控制无响应：",
        answer: "如果在游戏中感觉鼠标控制没有响应，请检查鼠标驱动程序是否已更新，或者在浏览器中调整鼠标设置。"
      },
      {
        title: "按钮无响应：",
        answer: "玩家可能会遇到屏幕点击或鼠标按钮无响应的问题。您可以尝试重新加载页面或检查设备上的输入设备设置。"
      }
    ]
  },
  {
    question: "游戏进度和保存问题",
    children: [
      {
        title: "游戏进度未保存：",
        answer: "有时，玩家可能会遇到无法保存进度的情况。检查是否有自动保存选项或手动保存游戏进度。"
      },
      {
        title: "卡在某一关或无法通过：",
        answer: "如果玩家在某个关卡卡住，可能是因为游戏难度太高。你可以尝试向其他玩家寻求提示或解决方案以继续前进。"
      }
    ]
  },
  {
    question: "游戏中的错误和缺陷",
    children: [
      {
        title: "敌人或物品消失：",
        answer: "在某些情况下，敌人或物品可能会因错误而消失。如果发生这种情况，请尝试重新加载游戏或向开发人员报告问题。"
      },
      {
        title: "技能无法正常运作：",
        answer: "如果某些技能无法使用，则可能是由于游戏设计缺陷或延迟造成的。查找可能修复此问题的更新或补丁。"
      }
    ]
  },
  {
    question: "音频和视频问题",
    children: [
      {
        title: "图形故障：",
        answer: "对于图形加载不当或显示错误等问题，这可能是由于图形驱动程序或浏览器设置过时造成的。更新图形驱动程序或切换浏览器可能会有所帮助。"
      },
      {
        title: "音频或背景音乐不起作用：",
        answer: "如果音频或背景音乐没有播放，请检查浏览器的音频设置或尝试刷新游戏"
      }
    ]
  },
  {
    question: "游戏策略和技巧",
    children: [
      {
        title: "如何有效使用充能传送攻击：",
        answer: "有些玩家可能不完全了解如何使用充能传送攻击。此技能通常用于躲避敌人攻击或快速缩小与敌人的距离以进行反击。玩家可以通过练习和观察敌人的攻击模式来改进他们的策略"
      },
      {
        title: "如何收集能量提升：",
        answer: "游戏中有各种随机道具，玩家需要留意屏幕提示并及时收集道具，提升战斗力。"
      }
    ]
  },

];

export function FAQSection() {

  return (
    <section id="faq" className="py-32 bg-black relative">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
          常问问题
        </h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 hover-scale">
              <h3 className="text-xl font-semibold text-white mb-4">{faq.question}</h3>
              <ul >
                {faq.children.map((c, i) => (
                  <li key={i}>
                    <h3 className="text-green-500 font-bold leading-relaxed">{c.title}</h3>
                    <p className="text-gray-300 leading-relaxed">{c.answer}</p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}