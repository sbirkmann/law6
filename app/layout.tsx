import type { Metadata, Viewport } from "next";
import { Public_Sans } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { site } from "@/data/site";
import "./globals.css";

const pub = Public_Sans({ subsets: ["latin"], variable: "--font-public", display: "swap", weight: ["300", "400", "500", "700"] });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: "Köhler Westphal | Wirtschaftskanzlei", template: "%s | Köhler Westphal" },
  description: site.description,
  openGraph: { type: "website", locale: "de_DE", siteName: site.name, title: "Köhler Westphal | Wirtschaftskanzlei", description: site.description, images: [{ url: "/images/og.jpg", width: 1800, height: 1200, alt: "Köhler Westphal" }] },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
  alternates: { canonical: site.url },
};

export const viewport: Viewport = { themeColor: "#0f3d5c", width: "device-width", initialScale: 1 };

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  name: site.legalName,
  description: site.description,
  url: site.url,
  telephone: site.phone,
  email: site.email,
  address: { "@type": "PostalAddress", streetAddress: "Georg-Glock-Straße 4", postalCode: "40474", addressLocality: "Düsseldorf", addressCountry: "DE" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" className={pub.variable}>
      <body className="flex min-h-dvh flex-col">
        <Header />
        <main id="inhalt" className="flex-1">{children}</main>
        <Footer />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </body>
    </html>
  );
}
