import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

// Yeni 3 yazı seti (image yolları: /public/media/pics/*)
const blogPosts = {
  "bunu-beklemiyordun": {
    title: "Bunu Beklemiyordun, Değil mi?",
    date: "08 Ağustos 2025",
    category: "Özel",
    image: { src: "/media/pics/bunu_beklemiyordun.png", alt: "Bunu Beklemiyordun görsel" },
    content: `# Bunu Beklemiyordun, Değil mi?\n\nBugün — senin günü. Fakat belki de yine herkes için bir şeyler yaparken kendin için durmayı unuttuğun o ince çizgide yürüyorsun. O yüzden bu satırlar, fark etmeden ne kadar büyüdüğünü sana nazikçe hatırlatmak için burada.\n\n## Sessiz Güç\nDışarıdan bakıldığında “sıradan” görülebilen pek çok gün, aslında senin sabırla içinden geçtiğin küçük dönüşümlerin mozaiği. Kimse alkışlamadığında bile devam etmen; kimse sormadığında bile derinleşmen; kimse fark etmediğinde bile ince bir özenle kendini onarman… Bunlar hafife alınacak şeyler değil.\n\n## İçsel Pusula\nZamanla başkalarının ritmine yetişme telaşından kopup, kendi ritmini duymaya başladın. Bu; çok sesli, hızlı, talepkar bir dünyada nadir bir maharet. Durdun, dinledin, ayıkladın. Her “evet”in artık daha bilinçli, her “hayır”ın daha köklenmiş.\n\n## Kendini Taşıma Sanatı\nKırılganlığını saklamadan; ama kırılganlığınla özdeşleşmeden ilerliyorsun. Bu iki uç arasında kurduğun ince denge: olgunlaşmanın şiiri.\n\n> Büyüme bazen büyük sıçramalar değil, küçük iç onayların üst üste eklenmesidir.\n\n## Nazik Bir Tebrik\nBugün kendine şu cümleyi söylemeyi unutma: *“Olduğum yer, dün olduğum yerden daha bilinçli ve daha şefkatli.”* Bu kadar. Bu, yeterli. Daha fazlasını kanıtlamak zorunda değilsin.\n\nDoğum günün kutlu olsun. Yetişmeye değil, kök salmaya devam. Ve hatırla: İçte kurduğun alan, dışarıda kurduklarından daha kalıcı.\n\nŞefkatle – iç sesin (ve gelecekteki halin).`
  },
  "travma-epigenetik": {
    title: "Travmanın Epigenetik Yolculuğu",
    date: "12 Eylül 2024",
    category: "Psikobiyoloji",
    image: { src: "/media/pics/Travmanın Epigenetik.png", alt: "Travmanın Epigenetik görsel" },
    content: `# Travmanın Epigenetik Yolculuğu\n\nTravma, bireyin fiziksel veya duygusal bütünlüğünü tehdit eden ve ruhsal yapıda derin izler bırakabilen deneyimlere verilen tepkidir. Son yıllarda travmanın **yalnızca bireysel** değil, kuşaklar arası bir yankı oluşturabileceği fikri hem bilimsel literatürde hem de popüler kültürde (Zeytin Ağacı gibi yapımlarla) görünür hale geldi. Bu tartışmanın merkezinde *epigenetik mekanizmalar* yer alır.\n\n## Epigenetik Temel\nEpigenetik; DNA dizilimini değiştirmeden gen ifadesini kalıcı ya da yarı kalıcı biçimde etkileyen süreçleri inceler. DNA metilasyonu ve histon modifikasyonları gibi biyokimyasal işaretler; stres, beslenme, toksinler veya yoğun duygusal deneyimler tarafından şekillenebilir. Travmatik yaşantılar özellikle **stres yanıtını** düzenleyen genlerin üzerinde “ayar” değişikliklerine yol açabilir.\n\n## Nesiller Arası Aktarım Olasılığı\nHolokost’tan sağ kalan ailelerde gözlenen artmış stres duyarlılığı veya bazı savaş ve göç sonrası topluluklarda görülen kaygı örüntüleri; epigenetik değişimlerin ebeveynden çocuğa biyolojik bir aktarım ihtimalini gündeme taşır. Hayvan modellerinde de erken dönem stresinin sonraki kuşakların davranışsal ve fizyolojik stres yanıtını modüle ettiği gösterilmiştir.\n\n## Toplumsal Katman\nKitlesel travmalar (savaş, yerinden edilme, kıtlık) yalnızca bireysel ruh sağlığı değil; **kolektif hafıza** ve toplumsal iyileşme süreçlerini de etkiler. Epigenetik perspektif, toplumsal destek ve adalet mekanizmalarının neden uzun vadeli koruyucu etkiler yaratabileceğini biyolojik bir zemine oturtur.\n\n## Müdahale ve Umut\nİyi haber: Epigenetik işaretler katı kader değildir. Psikoterapi, güvenli ilişkiler, düzenli uyku, hareket, besleyici çevre ve duygu düzenleme pratikleri nöroendokrin eksen üzerindeki yükü hafifletebilir; bazı epigenetik işaretlerin esnek doğası bu nedenle umut vericidir.\n\n> İyileşme; maruz kalınanı silmek değil, organizmanın yeniden uyum kapasitesini artırmaktır.\n\n## Son Söz\nTravmayı yalnızca “geçmişte olan” bir kesit değil; biyopsikososyal bir süreç olarak görmek, hem kişisel hem toplumsal iyileşme için daha derin, daha şefkatli stratejiler üretmemizi sağlar.`
  },
  "kendi-kendine-terapi": {
    title: "Kendi Kendine Terapi Sanatı",
    date: "12 Eylül 2024",
    category: "Kişisel Gelişim",
    image: { src: "/media/pics/kendi_kendine.png", alt: "Kendi Kendine Terapi görsel" },
    content: `# Kendi Kendine Terapi Sanatı: İçsel Dayanıklılık ve Büyüme Yaratma\n\nGünümüzde ruh sağlığı farkındalığı arttıkça, öz yönelimli iyileşme pratikleri de daha fazla değer kazanıyor. Kendi kendine terapi; profesyonel desteğin yerine geçmekten çok, onu **tamamlayan** ve kişinin içsel düzenleme kaslarını güçlendiren bir yaklaşım.\n\n## Temel Perspektif\nKendi kendine terapi: İçsel süreçleri merakla gözlemlemek, duygu düzenleme stratejilerini bilinçli seçmek ve içsel eleştiri yerine nazik tanıklık geliştirmek demektir.\n\n## Çekirdek Araçlar\n1. **Duygu Günlüğü:** Duyguyu tetikleyen olay – bedensel duyum – düşünce – ihtiyaç zincirini yaz.\n2. **Farkındalık Molaları:** Günde 3 kez 1 dakikalık nefes-yer-duyum taraması.\n3. **Bilişsel Yeniden Çerçeveleme:** Otomatik düşünce → kanıtlar → alternatif yorum.\n4. **Öz-Şefkat Diyalogları:** “Yakın bir arkadaşım bu hissi yaşasa ona ne söylerdim?”\n5. **Yaratıcı Kanal:** Çizim, ses, hareket; söze sığmayanı güvenli ifade alanı.\n\n## Faydalar\n- Duygusal esneklik artışı\n- Stres eşiğinin genişlemesi\n- İç konuşmanın yumuşaması\n- Anlam ve öz-etkinlik hissinde yükselme\n\n## Sınırlar\nDerin travmatik materyal, yoğun dissosiyatif deneyimler veya intihar düşüncesi durumunda profesyonel rehberlik şart. Öz bakım, uzman desteğinin alternatifi değil; sürdürülebilir tamamlayıcısıdır.\n\n## Entegrasyon\nTerapi sürecinde seans aralarını “uygulama laboratuvarı” gibi kullanmak; öğrenilen regülasyon becerilerini sinir sistemine yerleştirir.\n\n> İçsel dayanıklılık; duyguları bastırmak değil, duygu dalgasını karşılayıp işledikten sonra geri bırakma kapasitesidir.\n\n## Sonuç\nKendi kendine terapi; disiplin + nezaket + merak üçlüsünün yavaş, organik sentezi. Kusursuzluk değil; sürdürülebilir iç temas hedeflenir.`
  }
} as const;

// Minimal, güvenli markdown -> HTML (başlıklar, blockquote, listeler, paragraflar)
function mdToHtml(md: string): string {
  const esc = (s: string) => s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");

  // satır bazlı işleme
  const lines = md.trim().split(/\n/);
  const out: string[] = [];
  let inList = false;
  const flushP = (buf: string[]) => {
    if (buf.length) {
      out.push(`<p>${buf.join(" ")}</p>`);
      buf.length = 0;
    }
  };
  const pbuf: string[] = [];

  for (const raw of lines) {
    const line = raw.trim();
    if (!line) { flushP(pbuf); if (inList) { out.push('</ul>'); inList = false; } continue; }
    if (line.startsWith('### ')) { flushP(pbuf); if (inList) { out.push('</ul>'); inList = false; } out.push(`<h3>${esc(line.slice(4))}</h3>`); continue; }
    if (line.startsWith('## ')) { flushP(pbuf); if (inList) { out.push('</ul>'); inList = false; } out.push(`<h2>${esc(line.slice(3))}</h2>`); continue; }
    if (line.startsWith('# ')) { flushP(pbuf); if (inList) { out.push('</ul>'); inList = false; } out.push(`<h1>${esc(line.slice(2))}</h1>`); continue; }
    if (line.startsWith('> ')) { flushP(pbuf); if (inList) { out.push('</ul>'); inList = false; } out.push(`<blockquote>${esc(line.slice(2))}</blockquote>`); continue; }
    if (line.startsWith('- ')) { flushP(pbuf); if (!inList) { out.push('<ul>'); inList = true; } out.push(`<li>${esc(line.slice(2))}</li>`); continue; }
    // emphasis: *italic* and **bold**
    let html = esc(line)
      .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
      .replace(/\*(.+?)\*/g, '<em>$1</em>');
    pbuf.push(html);
  }
  flushP(pbuf);
  if (inList) out.push('</ul>');
  return out.join('\n');
}

function stripMd(md: string): string {
  return md
    .replace(/^# .*$\n?/gm, '')
    .replace(/^## .*$\n?/gm, '')
    .replace(/^### .*$\n?/gm, '')
    .replace(/^> /gm, '')
    .replace(/\*\*|\*/g, '')
    .trim();
}

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = blogPosts[params.slug as keyof typeof blogPosts];

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <article className="py-16 px-4 flex-1">
        <div className="max-w-4xl mx-auto">
          {/* Back to Blog */}
          <Link 
            href="/blog" 
            className="inline-flex items-center text-purple-600 hover:text-purple-800 mb-8 transition-colors"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Blog'a Dön
          </Link>

          {/* Article Header */}
          <div className="card rounded-2xl p-0 overflow-hidden mb-8">
            {post.image ? (
              <div className="relative w-full aspect-[16/9] border-b border-[--line]">
                <Image src={post.image.src} alt={post.image.alt} fill className="object-cover" sizes="(max-width: 768px) 100vw, 800px" />
              </div>
            ) : null}
            <div className="p-8">
            <div className="flex items-center justify-between mb-4">
                <span className="text-xs tracking-wider uppercase text-[--text-faint] bg-[--surface] border border-[--line] px-3 py-1 rounded-full">
                  {post.category}
                </span>
                <span className="text-sm text-[--text-faint]">{post.date}</span>
            </div>
              <h1 className="font-serif text-[clamp(2rem,4vw,2.6rem)] leading-tight mb-2 text-[--text]">{post.title}</h1>
              <div className="text-sm text-[--text-muted] pb-2">Zeynep İdil • {post.date}</div>
            </div>
          </div>

          <div className="card p-8 mt-4">
            <div className="prose-custom text-[--text-subtle]" dangerouslySetInnerHTML={{ __html: mdToHtml(post.content) }} />
          </div>

          {/* Related Posts */}
          {/* Related Posts - pick other two from current set */}
          <div className="mt-12">
            <h3 className="font-serif text-2xl mb-6 text-[--text]">İlgili Yazılar</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {Object.entries(blogPosts)
                .filter(([slug]) => slug !== params.slug)
                .slice(0, 2)
                .map(([slug, p]) => (
                  <Link key={slug} href={`/blog/${slug}`} className="card p-6 rounded-2xl hover:shadow-lg transition-shadow">
                    <h4 className="text-lg font-semibold text-[--text] mb-2">{p.title}</h4>
                    <p className="text-sm text-[--text-muted] line-clamp-2">{stripMd(p.content).slice(0, 140)}...</p>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </article>
      <SiteFooter />
    </div>
  );
}
