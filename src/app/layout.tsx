import type { Metadata } from "next";
import { Noto_Serif_JP, Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

const serifJP = Noto_Serif_JP({
  variable: "--font-serif-jp",
  subsets: ["latin"],
  weight: ["200", "300", "400", "700"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Tsukisaki Aoi | AI Artist Portfolio",
  description: "Official portfolio of AI Artist Tsukisaki Aoi. Exploring the boundaries of AI-driven creativity.",
  verification: {
    // 新しいアカウントの認証タグに差し替え済み
    google: "vo-oSKzgd0ePePt0TD1thA9QifbxtthGf-fwhLLQyng",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${serifJP.variable} ${playfair.variable} font-serif-jp antialiased bg-white text-charcoal`}
      >
        <Header />
        <main className="min-h-screen pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}