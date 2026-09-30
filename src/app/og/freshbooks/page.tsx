import type { Metadata } from "next";
import { OgFreshBooks } from "../og-frames";

export const metadata: Metadata = { robots: { index: false } };

export default function Page() {
  return <OgFreshBooks />;
}
