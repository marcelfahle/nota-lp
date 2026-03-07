import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { AiDemo } from "@/components/ai-demo";
import { WhyNota } from "@/components/why-nota";
import { SocialProof } from "@/components/social-proof";
import { InvoicePreview } from "@/components/invoice-preview";
import { ComparisonTable } from "@/components/comparison-table";
import { Pricing } from "@/components/pricing";
import { CTA } from "@/components/cta";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <AiDemo />
        <WhyNota />
        <SocialProof />
        <InvoicePreview />
        <ComparisonTable />
        <Pricing />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
