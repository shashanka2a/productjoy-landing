import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "ProductJoy - Premium Web & Mobile App Development Agency",
  description: "Premium web & mobile app development agency specializing in custom software solutions, UI/UX design, and business consultation. From startup MVPs to enterprise applications, we deliver exceptional digital products that drive growth.",
  keywords: ["premium web development", "mobile app development", "custom software development", "UI/UX design", "business consultation", "startup development", "enterprise applications", "digital product development", "software agency", "app development services"],
  authors: [{ name: "ProductJoy Team" }],
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  openGraph: {
    title: "ProductJoy - Premium Web & Mobile App Development Agency",
    description: "Premium web & mobile app development agency with design and business consultation services. Custom software solutions for startups and enterprises.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "ProductJoy - Premium Web & Mobile App Development Agency",
    description: "Premium web & mobile app development agency with design and business consultation services. Custom software solutions for startups and enterprises.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="shortcut icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/favicon.svg" />
      </head>
      <body className={`${inter.variable} font-sans antialiased bg-black text-white`}>
        {children}
      </body>
    </html>
  );
}
