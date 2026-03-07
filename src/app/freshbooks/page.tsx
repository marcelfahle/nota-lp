import type { Metadata } from "next";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { FreshBooksContent } from "@/components/freshbooks-content";

export const metadata: Metadata = {
  title: "Drop FreshBooks → Switch to Nota",
  description:
    "FreshBooks charges $23/month and limits you to 5 clients. Nota gives you unlimited everything for $9/month. Open source. No upsells.",
  openGraph: {
    title: "Drop FreshBooks → Switch to Nota",
    description:
      "FreshBooks charges $23/month and limits you to 5 clients. Nota gives you unlimited everything for $9/month.",
    url: "https://withnota.com/freshbooks",
    siteName: "Nota",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Drop FreshBooks → Switch to Nota",
    description:
      "FreshBooks charges $23/month and limits you to 5 clients. Nota gives you unlimited everything for $9/month.",
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
