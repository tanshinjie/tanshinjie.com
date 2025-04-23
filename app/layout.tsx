import "./global.css";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Navbar } from "./components/nav";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Footer from "./components/footer";
import { baseUrl } from "./sitemap";
import { ViewTransitions } from "next-view-transitions";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Shin Jie",
    template: "%s | Shin Jie",
  },
  description:
    "Software Engineer based in Singapore with experience in building modern applications.",
  manifest: "/manifest.json",
  icons: {
    icon: [{ url: "/images/shinjie.jpg", type: "image/jpg" }],
    apple: [{ url: "/images/shinjie.jpg" }],
  },
  openGraph: {
    title: "Shin Jie",
    description: "This is my portfolio.",
    url: baseUrl,
    siteName: "Shin Jie",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/shinjie.jpg",
        width: 600,
        height: 600,
        alt: "Shin Jie",
      },
    ],
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

const cx = (...classes) => classes.filter(Boolean).join(" ");

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ViewTransitions>
      <html
        lang="en"
        className={cx(
          "text-black bg-white dark:text-white dark:bg-black",
          GeistSans.variable,
          GeistMono.variable
        )}
      >
        <body className="antialiased max-w-xl mx-4 mt-8 lg:mx-auto overflow-x-hidden">
          <main className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">
            <Navbar />
            {children}
            <Footer />
            <Analytics />
            <SpeedInsights />
          </main>
        </body>
      </html>
    </ViewTransitions>
  );
}
