import Link from "next/link";
import Image from "next/image";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export default function Home() {
  const latest = [
    { title: "Bunu Beklemiyordun, Değil mi?", excerpt: "Kendine nazikçe gurur duymayı hatırlatan küçük bir iç ses...", slug: "bunu-beklemiyordun", image: { src: "/media/pics/bunu_beklemiyordun.png", alt: "Bunu Beklemiyordun görsel" } },
    { title: "Travmanın Epigenetik Yolculuğu", excerpt: "Nesiller arası iz bırakan deneyimlerin biyolojik yankıları...", slug: "travma-epigenetik", image: { src: "/media/pics/Travmanın Epigenetik.png", alt: "Travmanın Epigenetik görsel" } },
    { title: "Kendi Kendine Terapi Sanatı", excerpt: "İçsel dayanıklılık ve büyüme için nazik pratikler...", slug: "kendi-kendine-terapi", image: { src: "/media/pics/kendi_kendine.png", alt: "Kendi Kendine Terapi görsel" } },
  ];

  return (
    <div className="relative min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="pt-20 pb-16 px-4">
          <div className="mx-auto max-w-5xl grid gap-12 md:grid-cols-[1.1fr_0.9fr] items-start">
            <div>
              <h1 className="font-serif text-[clamp(2.6rem,5.2vw,4rem)] leading-[1.05] tracking-tight mb-8 text-[--text]">
                İçsel Yolculuğuna <span className="relative inline-block"><span className="relative z-10 bg-gradient-to-r from-[--accent-500] to-[--accent-700] bg-clip-text text-transparent">Nazikçe</span></span> Bak.
              </h1>
              <p className="text-lg md:text-xl leading-relaxed text-[--text-muted] max-w-xl mb-10">
                Psikoloji ve iyilik hali üzerine yavaş, dingin ve özenli bir alan. Bilimsel temeli olan kavramları günlük yaşamın zarif ritmiyle buluşturuyorum.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/blog" className="inline-flex items-center rounded-full border border-[--line] bg-[--surface] hover:border-[--accent-400] hover:text-[--accent-600] text-[--text] text-sm font-medium px-7 py-3 transition-colors">
                  Yazıları Keşfet
                </Link>
                <Link href="/hakkimda" className="inline-flex items-center rounded-full border border-[--line] bg-[--surface] hover:border-[--accent-400] hover:text-[--accent-600] text-[--text] text-sm font-medium px-7 py-3 transition-colors">
                  Hakkımda
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/5] w-full rounded-[24px] overflow-hidden border border-[--line] shadow-[0_4px_30px_-8px_rgba(0,0,0,0.08)] bg-[--surface]">
                <Image
                  src="/media/pics/icebakis.jpg"
                  alt="İçe Bakış"
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 40vw"
                />
              </div>
              <div className="absolute -left-6 -top-6 w-28 h-28 rounded-2xl bg-[--accent-100] border border-[--line]" />
              <div className="absolute -right-4 bottom-8 w-20 h-20 rounded-full bg-[--accent-200] border border-[--line]" />
            </div>
          </div>
        </section>

        <div className="mx-auto max-w-5xl px-4">
          <div className="relative my-10 flex items-center justify-center">
            <span className="px-6 py-2 rounded-full border border-[--line] bg-[--surface] text-[11px] tracking-widest font-medium text-[--text-subtle] uppercase">Son Yazılar</span>
            <div className="absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-[--line] to-transparent" />
          </div>
        </div>

        <section className="px-4 pb-24">
          <div className="mx-auto max-w-5xl grid gap-10 md:grid-cols-3">
            {latest.map((p) => (
              <Link key={p.slug} href={`/blog/${p.slug}`} className="group block focus:outline-none">
                <article className="card h-full flex flex-col overflow-hidden rounded-2xl p-6 transition-shadow hover:shadow-lg">
                  <div className="mb-4 aspect-[4/3] w-full rounded-xl overflow-hidden relative border border-[--line]">
                    <Image src={p.image.src} alt={p.image.alt} fill className="object-cover" sizes="(max-width: 768px) 100vw, 30vw" />
                    <div className="absolute left-3 top-3">
                      <span className="text-[10px] font-medium uppercase tracking-wider text-[--accent-700] bg-[--accent-200]/80 backdrop-blur-sm px-3 py-1 rounded-full border border-[--accent-300]">Yazı</span>
                    </div>
                  </div>
                  <h3 className="font-serif text-lg leading-snug mb-3 text-[--text] group-hover:text-[--accent-600] transition-colors">{p.title}</h3>
                  <p className="text-sm leading-relaxed text-[--text-muted] line-clamp-3 flex-1">{p.excerpt}</p>
                  <span className="mt-5 inline-flex items-center text-[--accent-600] text-sm font-medium group-hover:gap-2 transition-all gap-1">
                    Devamını Oku
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M13 6l6 6-6 6" /></svg>
                  </span>
                </article>
              </Link>
            ))}
          </div>
          <div className="text-center mt-14">
            <Link href="/blog" className="inline-flex items-center gap-2 rounded-full border border-[--line] bg-[--surface] hover:border-[--accent-400] hover:text-[--accent-600] text-sm font-medium px-8 py-3 transition-colors">
              Tüm Yazıları Gör
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M13 6l6 6-6 6" /></svg>
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
