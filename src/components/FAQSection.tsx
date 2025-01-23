
import { useTranslation } from 'react-i18next';



export function FAQSection() {
  const { t } = useTranslation();
  const faqs = [];
  for (let i = 1; i < 9; i++) {
    faqs.push({
      question: `qes${i}`,
      answer: `anw${i}`
    })
  }

  return (
    <section id="faq" className="py-32 bg-black relative">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
          {t('nav.faq')}
        </h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 hover-scale">
              <h3 className="text-xl font-semibold text-white mb-4">{t(`faq.${faq.question}`)}</h3>
              <p className="text-gray-300 leading-relaxed">{t(`faq.${faq.answer}`)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}