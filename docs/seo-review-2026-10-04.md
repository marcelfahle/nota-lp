# Nota SEO review — October 4, 2026

## Status and scope

Implemented and verified on `fix/seo-canonicals-comparison`. Marcel approved publishing on
October 4, 2026. This report records the pre-publication checks; GitHub deployments record release status.
The existing Next.js marketing repository and Vercel GitHub publishing process are retained.
No new public pages, redesign, domain settings, app routes, authentication, OAuth, MCP endpoints,
payment flows or invoice destinations were changed.

## Implemented

- Moved the homepage canonical from the shared layout to the homepage. Added the self-canonical
  `https://www.withnota.com/freshbooks` to the comparison. The existing `/og` capture pages retain
  `noindex` and no longer inherit the homepage canonical.
- Made the comparison title and H1 explicit; added breadcrumb navigation and labelled the main
  navigation. Added captions and scoped row/column headers to both comparison tables.
- Added a direct product definition to the homepage and replaced the FAQ's speculative ChatGPT
  referral claim. Existing FAQ answers and JSON-LD still come from the same data.
- Corrected FreshBooks API access, payment-fee wording, client limits and price qualifications.
  Removed unsupported timing/click counts, the 2014-template claim, the blanket claim that
  FreshBooks cannot be extended, and the unsupported MCP/CLI absence claim.
- Replaced “3×” with the $14 standard monthly price difference. The $168 calculation explicitly
  compares 12 monthly payments before tax, excluding promotions and annual discounts. The page
  acknowledges the advertised FreshBooks $1/month first-year Lite offer as of the review date.
- Added official sources, a checked date and a balanced explanation of product trade-offs.
  Updated comparison metadata, social-card alt text and the two existing social-card PNGs.
- Fixed narrow-screen overflow from the GitHub copy command and desktop overflow from the
  decorative invoice preview without changing the copied command or invoice destinations.

## Verification

- `npm run build`: passed; public pages are statically prerendered.
- `npm run lint` and `git diff --check`: passed.
- Production-server browser checks with JavaScript disabled: both public routes return 200;
  content exists in HTML; one H1, one description and one correct canonical per page; no skipped
  heading levels or public-page `noindex`.
- FAQ JSON-LD matches the rendered questions/answers. Existing SoftwareApplication data retained.
- Comparison tables have captions and scoped headers. Breadcrumb is present on `/freshbooks`.
- Internal page and section links resolve. An unknown URL returns 404. Footer placeholder links
  are excluded from the link-pass result and listed below.
- `robots.txt` and `sitemap.xml` return 200 with unchanged contents and canonical sitemap URLs.
- Host-header checks for both alternate domains return 308 and preserve `/freshbooks?seo_check=1`.
- Browser checks at 390px and 1440px: no page-level horizontal overflow and no JavaScript errors.
- Short unthrottled localhost samples: observed CLS 0; homepage LCP approximately 1.3 seconds.
  These are lab observations, not field Core Web Vitals, mobile-network results or a guarantee
  of loading under two seconds. Full interaction-cycle and production performance remain unmeasured.
- Regenerated social card visually inspected at 1200×630. Mobile comparison layout inspected.
- App CTA links remain `https://app.withnota.com/start` and `https://app.withnota.com/login`.
  Endpoint/configuration source files, crawl files and invoice-preview destinations are unchanged.
- Temporary verification script, results and screenshots: `/tmp/nota-seo-verification/`.
  No test framework or dependency was added for these metadata, copy and semantic markup edits.

## Live baseline and remaining work

Before publication, the live comparison still has the old homepage canonical. Both public pages
and crawl files returned 200 during inspection. `www.nota.wtf` returned a path/query-preserving
308 to `www.withnota.com`. `nota.wtf` and `withnota.com` returned 307 to their respective www hosts.
HTTP variants returned 308 to HTTPS. No hosting settings were changed.

The primary-domain choice is `https://www.withnota.com`, with matching-page alternate-domain
redirects. A separate hosting change could replace apex 307 hops with direct permanent redirects
after reviewing the existing Vercel domain configuration; changing Next.js alone would not
necessarily override those upstream hops. Deployment and hosting changes require approval.

- Search Console's September 19 homepage report needs the user-declared canonical,
  Google-selected canonical and last crawl date. Today's self-canonical does not explain the
  earlier result or establish which duplicate Google selected.
- The September 5 comparison exclusion predates this inspection. Its cause remains unknown.
- The attributed homepage “20 minutes per invoice” testimonial is unchanged; Marcel should
  confirm its authenticity and permission. Other unverified testimonials are not independent evidence.
- Footer “Docs” and “Privacy” currently point to `#`. Supply existing real destinations; no policy
  text, documentation page or application destination was invented.
- Screenshot advice about fabricated people and “force indexing” services was not applied.
  No backlink purchases, outreach or social-profile creation occurred. Authentic founder information
  and relevant editorial links can be considered when evidence and destinations are available.
- No content images needed WebP conversion: invoice illustrations are HTML/SVG. Social cards
  retain the existing PNG format. Intentional preview `noindex` is preserved.
- Retaining FAQ schema does not promise a rich result. No additional AI-specific schema or file
  was introduced. Existing substantive content, crawlability and accurate sources are the focus.

## Publishing and Search Console

1. Obtain separate publishing approval. Use this repository's existing GitHub-to-Vercel process.
2. After publication, recheck live HTTP status, canonicals, title/description/social metadata,
   robots, sitemap, preview noindex, unknown-page 404s, redirects with paths and queries, and
   unchanged app destinations. Verify regenerated social images are served.
3. In Search Console, select the property covering `https://www.withnota.com/`. Under Sitemaps,
   submit `https://www.withnota.com/sitemap.xml` (or `sitemap.xml` if the property prefix is supplied).
4. Inspect the homepage and `/freshbooks`. Save the indexed report's canonical details and crawl
   dates, then run Test live URL after publication and request indexing for each corrected URL.
5. Check the sitemap processing result and revisit Page indexing and URL Inspection after recrawling.
   A successful live test or indexing request is not confirmation of indexing. Do not repeatedly
   submit requests expecting faster processing. Indexing, rankings and AI citations are not guaranteed.

## Sources

- FreshBooks API: https://www.freshbooks.com/api/start/
- FreshBooks pricing/features and promotions: https://www.freshbooks.com/pricing
- FreshBooks standard prices and annual discount: https://www.freshbooks.com/2026-faq-price-change
- Google sitemap submission: https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap
- Google recrawl requests: https://developers.google.com/search/docs/crawling-indexing/ask-google-to-recrawl
- Google AI features guidance: https://developers.google.com/search/docs/appearance/ai-features
