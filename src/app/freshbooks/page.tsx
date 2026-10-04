import type { Metadata } from "next";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { FreshBooksContent } from "@/components/freshbooks-content";

const title = "Nota vs FreshBooks Lite: invoicing, pricing and API";
const description =
  "Compare Nota and FreshBooks Lite on invoicing, client limits, API access and standard USD monthly pricing. See the costs, trade-offs and official sources.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/freshbooks" },
  openGraph: {
    title,
    description,
    url: "https://www.withnota.com/freshbooks",
    siteName: "Nota",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export default function FreshBooksPage() {
  return (
    <>
      <Nav />
      <main>
        <FreshBooksContent />
      </main>
      <Footer />
    </>
  );
}
