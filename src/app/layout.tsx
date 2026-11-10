import type { Metadata, Viewport } from "next";
import { Geist_Mono, Mrs_Saint_Delafield, Rajdhani } from "next/font/google";
import "./globals.css";

const display = Rajdhani({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const script = Mrs_Saint_Delafield({
  variable: "--font-script-face",
  subsets: ["latin"],
  weight: "400",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://kishanknows.in"),
  title: "kishanknows",
  description:
    "Kishan Jangde is a Software Development Engineer at District by Zomato and an IIT Delhi alum building iOS apps, full-stack products and backend services.",
  openGraph: {
    title: "Kishan Jangde · Software Engineer",
    description: "iOS, backend and full-stack projects by Kishan Jangde.",
    url: "https://kishanknows.in/",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#000000",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${display.variable} ${script.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
