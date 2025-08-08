import Image from "next/image";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export default function HakkimdaPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="pt-16 px-4">
          <div className="max-w-4xl mx-auto text-center mb-14">
            <h1 className="font-serif text-[clamp(2.4rem,4.5vw,3.6rem)] leading-tight mb-6">Hakkımda</h1>
            <p className="text-lg text-[--text-muted] leading-relaxed">Psikoloji öğrencisi olarak insanların içsel yolculuklarında eşlik etmeyi seviyorum.</p>
          </div>
        </section>

      {/* About Content */}
      <section className="py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Profile Image */}
            <div className="flex justify-center">
              <div className="relative w-80 h-80">
                <Image
                  src="/media/pics/zeynep.jpg"
                  alt="Zeynep İdil"
                  fill
                  className="object-cover rounded-full border border-[--line] shadow-[0_10px_30px_-12px_rgba(0,0,0,0.25)]"
                />
              </div>
            </div>

            {/* About Text */}
            <div className="space-y-6">
              <div className="bg-white rounded-lg shadow-md p-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">Zeynep İdil</h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  Merhaba! Ben Zeynep İdil, 4. sınıf psikoloji öğrencisiyim. Psikolojiye olan ilgim lise yıllarında başladı ve 
                  insanların iç dünyalarını anlamak, onlara yardımcı olmak benim için bir tutkuya dönüştü.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  &quot;İçe Bakış&quot; markasını, edindiğim bilgileri ve deneyimleri daha geniş kitlelerle paylaşmak, 
                  insanların kendilerini daha iyi anlamalarına yardımcı olmak amacıyla kurdum.
                </p>
              </div>

              {/* Education */}
              <div className="bg-white rounded-lg shadow-md p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Eğitim</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Psikoloji Lisans</h4>
                      <p className="text-gray-600">4. Sınıf Öğrenci</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Interests */}
              <div className="bg-white rounded-lg shadow-md p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">İlgi Alanlarım</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                    <span className="text-gray-700">Klinik Psikoloji</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                    <span className="text-gray-700">Kişisel Gelişim</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                    <span className="text-gray-700">Stres Yönetimi</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                    <span className="text-gray-700">İlişkiler</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                    <span className="text-gray-700">Mindfulness</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                    <span className="text-gray-700">Anksiyete</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mission Section */}
          <div className="mt-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg p-12 text-white text-center">
            <h2 className="text-3xl font-bold mb-6">Misyonum</h2>
            <p className="text-xl leading-relaxed max-w-3xl mx-auto">
              İnsanların kendilerini daha iyi anlamalarına, içsel dengeyi bulmalarına ve yaşam kalitelerini 
              artırmalarına yardımcı olmak. Bilimsel temelli bilgileri pratik ve anlaşılır bir dille paylaşarak, 
              psikolojik sağlığı herkes için erişilebilir kılmak.
            </p>
          </div>

          {/* Values Section */}
          <div className="mt-16">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Değerlerim</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg shadow-md p-8 text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Şefkat</h3>
                <p className="text-gray-600">Kendimize ve başkalarına karşı şefkatli olmayı önemsiyorum.</p>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-8 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Doğruluk</h3>
                <p className="text-gray-600">Bilimsel doğruluğa ve etik değerlere bağlı kalıyorum.</p>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-8 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Gelişim</h3>
                <p className="text-gray-600">Sürekli öğrenmeyi ve kendimi geliştirmeyi hedefliyorum.</p>
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
