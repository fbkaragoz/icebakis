import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export default function IletisimPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="pt-16 px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h1 className="font-serif text-[clamp(2.4rem,4.5vw,3.6rem)] leading-tight mb-6">İletişim</h1>
            <p className="text-lg text-[--text-muted] leading-relaxed">Görüşlerin, soruların veya işbirliği fikirlerin için yazabilirsin.</p>
          </div>
        </section>

      {/* Contact Content */}
      <section className="py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact Info */}
              <div className="card p-8 rounded-2xl">
              {/* Contact Card */}
                <h2 className="text-2xl font-bold text-gray-800 mb-6">İletişim Bilgileri</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-1">E-posta</h3>
                      <p className="text-gray-600">zeyzey08@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-1">Sosyal Medya</h3>
                      <a 
                        href="https://instagram.com/ice.bakis" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-purple-600 hover:text-purple-800 transition-colors"
                      >
                        @ice.bakis
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-1">Yanıt Süresi</h3>
                      <p className="text-gray-600">Mesajlarınıza genellikle 24-48 saat içinde yanıt veriyorum.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* FAQ */}
              <div className="card p-8 rounded-2xl">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Sıkça Sorulan Sorular</h2>
                
                <div className="space-y-4">
                  <div className="border-b border-gray-200 pb-4">
                    <h3 className="font-semibold text-gray-800 mb-2">Danışmanlık hizmeti veriyor musunuz?</h3>
                    <p className="text-gray-600 text-sm">Henüz lisans eğitimimi tamamlamadığım için resmi danışmanlık hizmeti veremiyorum. Ancak bilgi paylaşımı ve rehberlik için buradayım.</p>
                  </div>

                  <div className="border-b border-gray-200 pb-4">
                    <h3 className="font-semibold text-gray-800 mb-2">İşbirliği teklifleri için nasıl ulaşabilirim?</h3>
                    <p className="text-gray-600 text-sm">İşbirliği tekliflerinizi e-posta adresime gönderebilirsiniz.</p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">Yazılarınızı paylaşabilir miyim?</h3>
                    <p className="text-gray-600 text-sm">Yazılarımı paylaşabilirsiniz, sadece kaynak belirtmeniz yeterli olacaktır.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>
        </section>

      </main>
      <SiteFooter />
    </div>
  );
}
