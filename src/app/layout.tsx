import type { Metadata } from "next";
import { Noto_Serif_JP, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const notoSerifJP = Noto_Serif_JP({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-noto-serif-jp",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

export const metadata: Metadata = {
  title: "青山不動産 | AOYAMA REAL ESTATE - 東京都心の厳選高級物件",
  description: "理想の住まいは、妥協しなくていい。東京都心の厳選物件を、AI査定と専属コンシェルジュがご案内。累計取引実績3,200件超。",
  keywords: "不動産, 高級マンション, 東京, 青山, 港区, 渋谷区, 物件売買, 賃貸, AI査定",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={`${notoSerifJP.variable} ${cormorant.variable}`}>
      <body className={`antialiased ${notoSerifJP.className}`}>
        <div className="noise-overlay" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
