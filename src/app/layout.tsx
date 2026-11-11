import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Assistant from "@/components/Assistant";

export const metadata: Metadata = {
  title: "Contabilitate și audit — concept redesign",
  description: "Concept de redesign pentru contabilitate.md, revista Contabilitate și audit",
};


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ro" className={`${GeistSans.variable} ${GeistMono.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col font-sans">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
        <Assistant />
      </body>
    </html>
  );
}
