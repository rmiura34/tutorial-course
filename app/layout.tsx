import type { Metadata } from "next";
import { Noto_Sans_JP, Space_Mono } from "next/font/google";
import { headers } from "next/headers";
import "./globals.css";

const notoSans = Noto_Sans_JP({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const spaceMono = Space_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host =
    requestHeaders.get("x-forwarded-host") ??
    requestHeaders.get("host") ??
    "localhost:3000";
  const protocol =
    requestHeaders.get("x-forwarded-proto") ??
    (host.startsWith("localhost") ? "http" : "https");

  return {
    title: {
      default: "Tutorial Course — 手を動かして、つくる。",
      template: "%s | Tutorial Course",
    },
    description:
      "VS Codeを開くところから、Webページの公開まで。動画・クイズ・実装課題・GitHubレビューで学ぶ初心者向け実践コース。",
    metadataBase: new URL(`${protocol}://${host}`),
    openGraph: {
      title: "Tutorial Course — 手を動かして、つくる。",
      description: "最初のPull RequestとWeb公開まで、全8レッスン。",
      type: "website",
      locale: "ja_JP",
      images: [
        {
          url: "/og.png",
          width: 1731,
          height: 909,
          alt: "Tutorial Course — 手を動かして、つくる。",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Tutorial Course — 手を動かして、つくる。",
      description: "最初のPull RequestとWeb公開まで、全8レッスン。",
      images: ["/og.png"],
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={`${notoSans.variable} ${spaceMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
