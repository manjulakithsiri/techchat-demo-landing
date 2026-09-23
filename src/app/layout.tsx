import type { Metadata } from "next";
import { Mona_Sans } from "next/font/google";
import "./globals.css";
import FloatingActions from "@/components/FloatingActions";

const monaSans = Mona_Sans({
  variable: "--font-mona-sans",
  subsets: ["latin"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "SLTS ERP — Enterprise Resource Planning Software",
    template: "%s — SLTS ERP",
  },
  description:
    "SLTS ERP brings finance, inventory, HR, sales and manufacturing into one system. Request a free demo to see it running on your data.",
  openGraph: {
    title: "SLTS ERP — Enterprise Resource Planning Software",
    description:
      "One ERP system for finance, inventory, HR, sales and manufacturing.",
    siteName: "SLTS ERP",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${monaSans.variable} antialiased`}>
      <body className="min-h-screen bg-white text-neutral-900">
        {children}
        <FloatingActions />
      </body>
    </html>
  );
}
