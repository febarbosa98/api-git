import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "GitHub User",
  description: "Um aplicativo simples para buscar usuários do GitHub",
  icons: {
    icon: "/git.png",
  },
  openGraph: {
    title: "GitHub User",
    description: "Um aplicativo simples para buscar usuários do GitHub",
    url: "https://api-git-one.vercel.app/",
    siteName: "GitHub User",
    images: [
      {
        url: "/git.png",
        width: 800,
        height: 600,
      },
    ],
    locale: "pt-BR",
    type: "website",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
