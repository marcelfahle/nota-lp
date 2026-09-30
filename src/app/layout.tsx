import type { Metadata } from "next";
import { Archivo, Doto, Geist_Mono, Newsreader } from "next/font/google";
import "./globals.css";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  axes: ["wdth"],
  display: "swap",
});

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  style: ["normal", "italic"],
  axes: ["opsz"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const doto = Doto({
  variable: "--font-doto",
  subsets: ["latin"],
  display: "swap",
});

const title = "Nota — AI invoicing that works in ChatGPT and Claude";
const description =
  "Send invoices from ChatGPT, Claude or Nota's own chat. One sentence in, a real invoice out: PDF, Stripe pay link, XRechnung. $9/mo, open source.";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.withnota.com"),
  title,
  description,
  alternates: { canonical: "/" },
  openGraph: {
    title,
    description,
    url: "https://www.withnota.com",
    siteName: "Nota",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${archivo.variable} ${newsreader.variable} ${geistMono.variable} ${doto.variable}`}
    >
      <body className="antialiased">{children}</body>
    </html>
  );
}
