
import SEOHead from '../../components/zh/SEOHead';
import { Gamepad2 } from 'lucide-react';
// import { LanguageSelector } from '../../components/zh/LanguageSelector';
export default function TermsOfService() {
  return (
    <>
      <SEOHead
        title="Terms of Service - Gar-Type Game"
        description="Read our terms of service for playing Gar-Type, including user conduct, intellectual property, and other important information."
        canonicalUrl="https://gartype.info/terms"
        lang='zh'
      />
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-3">
            <Gamepad2 className="w-8 h-8 text-purple-400" />
            <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              Gar Type
            </span>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            {/* 
            <LanguageSelector /> */}
          </nav>


        </div>


      </div>
      <div className="min-h-screen pt-20 bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-3xl font-bold mb-8">服务条款</h1>
          <div className="space-y-6 text-gray-300">
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">1. 接受条款</h2>
              <p>通过访问和玩 Gar-Type，您同意接受这些服务条款和所有适用法律法规的约束。</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">2. 游戏规则和公平竞赛</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>球员必须保持公平竞争和良好的体育精神</li>
                <li>禁止作弊、黑客攻击或利用游戏机制</li>
                <li>尊重其他玩家并保持适当的行为</li>
                <li>不允许使用多个帐户或自动游戏</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">3. 知识产权</h2>
              <p>所有游戏内容，包括但不限于图形、代码、音乐和文本，受版权法保护，属于 Gar-Type。</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">4. 用户内容</h2>
              <p>用户创建或分享的任何内容必须适当且不侵犯他人的权利。</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">5. 终止</h2>
              <p>如果违反这些条款，我们保留终止或暂停游戏访问的权利。</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">6. 免责声明</h2>
              <p>该游戏按“原样”提供，不提供任何明示或暗示的保证。</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">7. 联系方式</h2>
              <p>如果对这些条款有疑问，请联系我们：terms@gar-type.com</p>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}