import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "animate.css";
import Footer from "./components/Footer";
import Header from "./components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Academia do Jon",
  description: "Academia",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
