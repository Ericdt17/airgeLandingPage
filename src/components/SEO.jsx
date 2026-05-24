import { Helmet } from "react-helmet-async";
import {
  brandName,
  siteBaseUrl,
  siteDefaultDescription,
  siteDefaultTitle,
  siteOgImagePath,
} from "../constants";

export default function SEO({ title, description, canonical }) {
  const pageTitle = title || siteDefaultTitle;
  const fullTitle = `${pageTitle} — ${brandName}`;
  const metaDescription = description || siteDefaultDescription;
  const canonicalPath = canonical || "/";
  const pageUrl = `${siteBaseUrl}${canonicalPath}`;
  const ogImageUrl = siteOgImagePath
    ? `${siteBaseUrl}${siteOgImagePath}`
    : null;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name='description' content={metaDescription} />
      <link rel='canonical' href={pageUrl} />
      <meta property='og:title' content={fullTitle} />
      <meta property='og:description' content={metaDescription} />
      <meta property='og:type' content='website' />
      <meta property='og:url' content={pageUrl} />
      <meta property='og:site_name' content={brandName} />
      <meta property='og:locale' content='fr_FR' />
      {ogImageUrl ? (
        <>
          <meta property='og:image' content={ogImageUrl} />
          <meta property='og:image:alt' content={`${brandName} — plateforme création de contenu`} />
        </>
      ) : null}
      <meta name='twitter:card' content={ogImageUrl ? "summary_large_image" : "summary"} />
      <meta name='twitter:title' content={fullTitle} />
      <meta name='twitter:description' content={metaDescription} />
      {ogImageUrl ? <meta name='twitter:image' content={ogImageUrl} /> : null}
    </Helmet>
  );
}
