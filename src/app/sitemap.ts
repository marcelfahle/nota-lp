import type { MetadataRoute } from "next";

const SITE = "https://www.withnota.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${SITE}/`, changeFrequency: "weekly", priority: 1 },
    { url: `${SITE}/freshbooks`, changeFrequency: "monthly", priority: 0.8 },
  ];
}
