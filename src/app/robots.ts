import type { MetadataRoute } from "next";

const SITE = "https://www.withnota.com";

// /og (the frames the social images are captured from) is kept out of search
// by its own noindex tag, which crawlers can only see if they may fetch it.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: `${SITE}/sitemap.xml`,
  };
}
