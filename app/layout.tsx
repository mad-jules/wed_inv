import type { Metadata } from "next";
import localFont from "next/font/local";
import styles from "./layout.module.css";
import "./globals.css";

const comicSans = localFont({
  src: "./fonts/Comic_Sans_MS.ttf",
  variable: "--font-comic-sans",
  display: "swap",
});
export const metadata: Metadata = {
  // metadataBase: new URL("https://your-domain.com"),

  title: "Wedding Invitation",
  description: "Yuliia & Maksym Wedding Website",

  openGraph: {
    title: "Yuliia & Maksym Wedding",
    description: "We invite you to celebrate our wedding with us ❤️",
    url: "https://your-domain.com",
    siteName: "Yuliia & Maksym Wedding",
    locale: "uk_UA",
    type: "website",
    // images: [
    //   {
    //     url: "/og-image.jpg",
    //     width: 1200,
    //     height: 630,
    //     alt: "Yuliia & Maksym Wedding",
    //   },
    // ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Yuliia & Maksym Wedding",
    description: "We invite you to celebrate our wedding with us ❤️",
    // images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="uk" className={comicSans.variable}>
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, viewport-fit=cover"
        />
        <meta property="og:title" content="Yuliia & Maksym Wedding" />
        <meta property="og:description" content="Wedding Invitation" />
        {/* <meta property="og:image" content="https://your-domain.com/og-image.jpg" /> */}
      </head>
      <body className={styles.body}>{children}</body>
    </html>
  );
}
