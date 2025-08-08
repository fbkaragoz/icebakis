import Link from "next/link";
import Image from "next/image";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export default function BlogPage() {
  const blogPosts = [
    {
      id: 1,
      title: "Bunu Beklemiyordun, Değil mi?",
      excerpt: "Kendine, yolculuğunun zarif kıvrımlarında büyüdüğünü hatırlatan küçük bir doğum günü metni.",
      date: "08 Ağustos 2025",
      category: "Özel",
      slug: "bunu-beklemiyordun",
      image: { src: "/media/pics/bunu_beklemiyordun.png", alt: "Bunu Beklemiyordun görsel" }
    },
    {
      id: 2,
      title: "Travmanın Epigenetik Yolculuğu",
      excerpt: "Nesiller arası iz bırakan deneyimlerin biyolojik ve toplumsal yankıları.",
      date: "12 Eylül 2024",
      category: "Psikobiyoloji",
      slug: "travma-epigenetik",
      image: { src: "/media/pics/Travmanın Epigenetik.png", alt: "Travmanın Epigenetik görsel" }
    },
    {
      id: 3,
      title: "Kendi Kendine Terapi Sanatı",
      excerpt: "İçsel dayanıklılık ve büyüme yaratmak için pratik, nazik araçlar.",
      date: "12 Eylül 2024",
      category: "Kişisel Gelişim",
      slug: "kendi-kendine-terapi",
      image: { src: "/media/pics/kendi_kendine.png", alt: "Kendi Kendine Terapi görsel" }
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="pt-16 px-4">
          <div className="max-w-4xl mx-auto mb-12 text-center">
            <h1 className="font-serif text-[clamp(2.4rem,4.5vw,3.6rem)] leading-tight mb-6">Yazılar</h1>
            <p className="text-[--text-muted] text-lg leading-relaxed max-w-2xl mx-auto">Psikoloji, içsel denge ve iyilik hali üzerine düzenli notlar & makaleler.</p>
          </div>
          <div className="max-w-5xl mx-auto grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map(post => (
              <Link key={post.id} href={`/blog/${post.slug}`} className="group block">
                <article className="card h-full rounded-2xl p-5 flex flex-col">
                  <div className="mb-5 aspect-[4/3] w-full rounded-xl overflow-hidden relative border border-[--line]">
                    <Image src={post.image.src} alt={post.image.alt} fill className="object-cover" sizes="(max-width: 768px) 100vw, 30vw" />
                  </div>
                  <div className="flex items-center justify-between mb-2 text-[10px] tracking-wider uppercase font-medium text-[--text-faint]">
                    <span>{post.category}</span>
                    <span>{post.date}</span>
                  </div>
                  <h2 className="font-serif text-lg leading-snug mb-2 text-[--text] group-hover:text-[--accent-600] transition-colors">{post.title}</h2>
                  <p className="text-sm text-[--text-muted] leading-relaxed line-clamp-3 flex-1">{post.excerpt}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-[--accent-600] text-xs font-medium group-hover:gap-2 transition-all">Devamını Oku <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M13 6l6 6-6 6" /></svg></span>
                </article>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
