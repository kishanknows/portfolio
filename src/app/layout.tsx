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
  title: "Kishan · Software Engineer",
  description:
    "Kishan is a Software Development Engineer at NowFloats and an IIT Delhi alum building iOS apps, Go microservices and web experiences.",
  openGraph: {
    title: "Kishan · Software Engineer",
    description: "iOS, backend and full-stack projects by Kishan.",
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
