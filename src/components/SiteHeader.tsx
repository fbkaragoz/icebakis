import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="border-b border-[--line] bg-[--surface]/70 backdrop-blur-md supports-[backdrop-filter]:bg-[--surface]/60 sticky top-0 z-30">
      <div className="mx-auto max-w-5xl px-4 py-4 flex items-center justify-between gap-6">
        <Link href="/" className="group">
          <span className="font-serif text-2xl tracking-tight text-[--accent-700] group-hover:text-[--accent-600] transition-colors">
            İçe Bakış
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <Link className="nav-link" href="/">Ana Sayfa</Link>
          <Link className="nav-link" href="/blog">Blog</Link>
          <Link className="nav-link" href="/post">Post</Link>
          <Link className="nav-link" href="/hakkimda">Hakkımda</Link>
          <Link className="nav-link" href="/iletisim">İletişim</Link>
        </nav>
      </div>
    </header>
  );
}
