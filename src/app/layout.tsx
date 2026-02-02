import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata: Metadata = {
  title: "Insurance Claim Denied? | Denied Claim Help",
  description:
    "General information about denied insurance claims. Learn about options and connect with third-party assistance services.",
  keywords: [
    "insurance claim denied",
    "claim appeal information",
    "denied claim assistance",
    "claim review options",
  ],
  authors: [{ name: "Denied Claim Information" }],
  creator: "Denied Claim Information",
  publisher: "Denied Claim Information",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://example.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Insurance Claim Denied? | Denied Claim Help",
    description:
      "General information about denied insurance claims. Learn about options and connect with third-party assistance services.",
    url: "https://example.com",
    siteName: "Denied Claim Help",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Insurance Claim Denied? | Denied Claim Help",
    description:
      "General information about denied insurance claims. Learn about options and connect with third-party assistance services.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
