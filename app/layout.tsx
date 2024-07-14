import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import TopHeader from "@/components/top-header";
import Head from "next/head";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Protech Titan",
  description: "Generated by create next app",
};
const title = "Feature-Rich Software To Improve Productivity";
const breadcrumbs = [
  { label: 'Home', href: '/' },
  { label: 'Features', href: '/features' },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <Script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></Script>
      </Head>
      <body className={inter.className}>
        <TopHeader title={title} breadcrumbs={breadcrumbs} />

        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
