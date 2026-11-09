import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kishan Jangde · Software Engineer",
  description:
    "Kishan Jangde is a Software Development Engineer at District by Zomato and an IIT Delhi alum building iOS apps, full-stack products and backend services.",
  openGraph: {
    title: "Kishan Jangde · Software Engineer",
    description: "iOS, backend and full-stack projects by Kishan Jangde.",
    url: "https://kishanknows.github.io/portfolio/",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#06060a",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>{children}</body>
    </html>
  );
}
