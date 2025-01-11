
import SEOHead from '../../components/zh/SEOHead';
import { Gamepad2 } from 'lucide-react';
// import { LanguageSelector } from '../../components/zh/LanguageSelector';

export default function PrivacyPolicy() {


  return (
    <>
      <SEOHead
        title="Privacy Policy - Gar-Type Game"
        description="Learn about how we collect, use, and protect your information while playing Gar-Type."
        canonicalUrl="https://gartype.info/privacy"
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
            {/* <LanguageSelector /> */}
          </nav>
        </div>
      </div>
      <div className="min-h-screen pt-20 bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-3xl font-bold mb-8">Privacy Policy</h1>
          <div className="space-y-6 text-gray-300">
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">1. 我们收集的信息</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>游戏进度和分数</li>
                <li>设备信息（浏览器类型、操作系统）</li>
                <li>使用统计数据和游戏模式</li>
                <li>游戏优化技术数据</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">2. 我们如何使用您的信息</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>提高游戏性能和用户体验</li>
                <li>提供技术支持和故障排除</li>
                <li>发送重要的游戏更新和公告</li>
                <li>分析游戏模式以实现更好的游戏平衡</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">3. 数据安全</h2>
              <p>我们实施行业标准的安全措施，以保护您的信息免遭未经授权的访问、泄露或滥用。</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">4. Cookie 和分析</h2>
              <p>我们使用 Cookie 和 Google Analytics 来了解游戏使用模式并改进我们的服务。您可以通过浏览器偏好设置来控制 Cookie 设置。</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">5. 隐私政策更新</h2>
              <p>我们可能会定期更新本隐私政策。我们将通过游戏或网站通知您任何重大变更。</p>
            </section>

           
          </div>
        </div>
      </div>
    </>
  );
}