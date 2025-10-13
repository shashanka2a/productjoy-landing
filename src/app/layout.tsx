import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "ProductJoy - Modern Product Development Services",
  description: "Transform your ideas into exceptional products with our expert development services. From concept to launch, we deliver innovative solutions that drive business growth.",
  keywords: ["product development", "software development", "web development", "mobile apps", "UI/UX design"],
  authors: [{ name: "ProductJoy Team" }],
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  openGraph: {
    title: "ProductJoy - Modern Product Development Services",
    description: "Transform your ideas into exceptional products with our expert development services.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "ProductJoy - Modern Product Development Services",
    description: "Transform your ideas into exceptional products with our expert development services.",
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
