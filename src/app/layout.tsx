import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const instrumentSerif = localFont({
  src: [
    {
      path: "../fonts/InstrumentSerif-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/InstrumentSerif-Italic.ttf",
      weight: "400",
      style: "italic",
    },
  ],
  variable: "--font-instrument-serif",
  display: "swap",
});

const instrumentSans = localFont({
  src: [
    {
      path: "../fonts/InstrumentSans-Variable.ttf",
      weight: "400 700",
      style: "normal",
    },
    {
      path: "../fonts/InstrumentSans-VariableItalic.ttf",
      weight: "400 700",
      style: "italic",
    },
  ],
  variable: "--font-instrument-sans",
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nota — Invoices without the nonsense",
  description:
    "Create and send a beautiful invoice in 30 seconds. AI-native, open source, $9/month.",
  openGraph: {
    title: "Nota — Invoices without the nonsense",
    description:
      "Create and send a beautiful invoice in 30 seconds. AI-native. Open source. $9/month.",
    url: "https://withnota.com",
    siteName: "Nota",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nota — Invoices without the nonsense",
    description:
      "Create and send a beautiful invoice in 30 seconds. AI-native. Open source. $9/month.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${instrumentSans.variable} ${instrumentSerif.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
