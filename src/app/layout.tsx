import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  metadataBase: new URL("https://micro-u.vercel.app"),
  title: "Micro Url",
  description:
    "Shorten your URLs very efficiently and securely with Micro Url.",
  openGraph: {
    title: "Micro Url",
    description:
      "Shorten your URLs very efficiently and securely with Micro Url.",
    url: "https://micro-u.vercel.app",
    siteName: "https://micro-u.vercel.app/",
    images: ["/logo.webp"],
  },

  twitter: {
    title: "Micro Url",
    card: "summary_large_image",
    images: ["/logo.webp"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
} satisfies Metadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Toaster />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
