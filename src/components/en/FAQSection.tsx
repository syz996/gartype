



const faqs = [
  {
    question: "Game Running Issues",
    children: [
      {
        title: "Unable to start the game:",
        answer: "This could be due to browser compatibility issues, network problems, or insufficient device performance. To resolve this, try switching browsers, checking your network connection, or lowering the game's graphic settings."
      },
      {
        title: "Lag or delay:",
        answer: "Since the game uses the Unity engine, performance may be affected by device configuration. You can try closing other resource-heavy programs or adjusting browser settings to improve the game’s smoothness."
      }
    ]
  },
  {
    question: "Control Issues",
    children: [
      {
        title: "Unresponsive mouse control:",
        answer: "If the mouse control feels unresponsive in the game, check whether the mouse drivers are updated, or adjust the mouse settings in your browser."
      },
      {
        title: "Buttons not responding:",
        answer: "Players might encounter issues where screen clicks or mouse buttons don’t respond. You can try reloading the page or checking the input device settings on your device."
      }
    ]
  },
  {
    question: "Game Progress and Save Issues",
    children: [
      {
        title: "Game progress not saving:",
        answer: "Sometimes, players might experience progress not being saved. Check if there’s an auto-save option or manually save your game progress."
      },
      {
        title: "Stuck on a level or unable to pass:",
        answer: "If players get stuck on a particular level, it might be due to the game’s difficulty. You can try looking for tips or solutions from other players to progress."
      }
    ]
  },
  {
    question: "In-Game Errors and Bugs",
    children: [
      {
        title: "Enemies or items disappearing:",
        answer: "In some cases, enemies or items may vanish due to a bug. If this happens, try reloading the game or reporting the issue to the developers."
      },
      {
        title: "Skills not functioning properly:",
        answer: "If certain skills aren’t working, it could be due to a design flaw or delay in the game. Look for updates or patches that may fix this issue."
      }
    ]
  },
  {
    question: "Audio and Visual Issues",
    children: [
      {
        title: "Graphical glitches:",
        answer: "For issues like improper graphics loading or display errors, this could be due to outdated graphics drivers or browser settings. Updating the graphics drivers or switching browsers may help."
      },
      {
        title: "Audio or background music not working:",
        answer: "If the audio or background music isn’t playing, check your browser’s audio settings or try refreshing the game."
      }
    ]
  },
  {
    question: "Game Strategy and Tips",
    children: [
      {
        title: "How to use the Charged Teleport Attack effectively:",
        answer: "Some players may not fully understand how to use the charged teleport attack. This ability is typically used to dodge enemy attacks or to quickly close the gap with enemies for a counterattack. Players can improve their strategy by practicing and observing enemy attack patterns."
      },
      {
        title: "How to collect power-ups:",
        answer: "The game features various random power-ups. Players need to pay attention to the screen’s indicators and collect them in time to enhance their combat abilities."
      }
    ]
  },

];

export function FAQSection() {

  return (
    <section id="faq" className="py-32 bg-black relative">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
          FAQ
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