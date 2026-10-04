import type { Metadata } from "next";
import { CTA } from "@/components/cta";
import { DitherBand } from "@/components/dither/dither-band";
import { Doors } from "@/components/doors";
import { Faq } from "@/components/faq";
import { Footer } from "@/components/footer";
import { FreshBooksStrip } from "@/components/freshbooks-strip";
import { Hero } from "@/components/hero";
import { Nav } from "@/components/nav";
import { NotList } from "@/components/not-list";
import { OpenSource } from "@/components/open-source";
import { Pricing } from "@/components/pricing";
import { TheAd } from "@/components/the-ad";
import { FAQ } from "@/lib/faq";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Nota",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    description:
      "AI invoicing that works inside ChatGPT, Claude and Nota's own chat. Open source, with an MCP server, CLI and REST API.",
    url: "https://www.withnota.com",
    offers: [
      { "@type": "Offer", name: "Free", price: "0", priceCurrency: "USD" },
      { "@type": "Offer", name: "Nota", price: "9", priceCurrency: "USD" },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ.map(({ q, a }) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: a },
    })),
  },
];

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
      <Nav />
      <main>
        <Hero />
        <DitherBand direction="to-ink" />
        <Doors />
        <DitherBand direction="to-paper" />
        <NotList />
        <TheAd />
        <Pricing />
        <Faq />
        <OpenSource />
        <DitherBand direction="to-ink" className="h-32 md:h-44" />
        <FreshBooksStrip />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
