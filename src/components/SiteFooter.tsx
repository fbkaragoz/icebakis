import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="mt-32 border-t border-[--line] bg-[--surface] text-[--text-muted]">
      <div className="mx-auto max-w-5xl px-4 py-12 grid gap-12 md:grid-cols-3">
        <div className="space-y-3">
          <h4 className="font-serif text-xl text-[--text]">İçe Bakış</h4>
          <p className="text-sm leading-relaxed">
            Zeynep İdil ile psikoloji, wellbeing ve içsel denge üzerine düşünceler & yazılar.
          </p>
        </div>
        <div>
          <h5 className="mb-4 font-semibold text-[--text-subtle] text-sm tracking-wide">Sayfalar</h5>
          <ul className="space-y-2 text-sm">
            <li><Link className="hover:text-[--accent-600] transition-colors" href="/">Ana Sayfa</Link></li>
            <li><Link className="hover:text-[--accent-600] transition-colors" href="/blog">Blog</Link></li>
            <li><Link className="hover:text-[--accent-600] transition-colors" href="/post">Post</Link></li>
            <li><Link className="hover:text-[--accent-600] transition-colors" href="/hakkimda">Hakkımda</Link></li>
            <li><Link className="hover:text-[--accent-600] transition-colors" href="/iletisim">İletişim</Link></li>
          </ul>
        </div>
        <div className="space-y-4">
          <h5 className="mb-2 font-semibold text-[--text-subtle] text-sm tracking-wide">Sosyal</h5>
            <a
              href="https://instagram.com/ice.bakis"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm hover:text-[--accent-600] transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.405a1.44 1.44 0 112.881.001 1.44 1.44 0 01-2.881-.001z"/></svg>
              @ice.bakis
            </a>
          <p className="text-[10px] leading-relaxed text-[--text-faint] max-w-xs">
            © {new Date().getFullYear()} İçe Bakış. İçerikler kaynak gösterilerek paylaşılabilir.
          </p>
        </div>
      </div>
    </footer>
  );
}
