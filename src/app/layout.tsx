import type { Metadata } from "next";
import { Lora, Inter } from "next/font/google";
import "./globals.css";

const fontSerif = Lora({
  variable: "--font-serif",
  subsets: ["latin"],
  display: "swap",
});

const fontSans = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    template: "%s | İçe Bakış",
    default: "İçe Bakış – Psikoloji & İyilik Hali Yazıları",
  },
  description:
    "Zeynep İdil ile psikoloji, kişisel gelişim, wellbeing ve içsel denge üzerine özgün Türkçe içerikler.",
  keywords: ["psikoloji", "kişisel gelişim", "wellbeing", "içsel denge", "öz sevgi"],
  authors: [{ name: "Zeynep İdil" }],
  icons: {
  icon: "/media/pics/icebakis.jpg",
  shortcut: "/media/pics/icebakis.jpg",
  },
  openGraph: {
    title: "İçe Bakış",
    description: "Psikoloji, içe bakış ve wellbeing üzerine yazılar & notlar.",
    locale: "tr_TR",
    type: "website",
    siteName: "İçe Bakış",
    url: "https://icebakis.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className="scroll-smooth">
      <body
        className={`${fontSerif.variable} ${fontSans.variable} font-sans antialiased bg-[--bg] text-[--text] selection:bg-[--accent-200] selection:text-[--accent-800]`}
      >
        {children}
      </body>
    </html>
  );
}
