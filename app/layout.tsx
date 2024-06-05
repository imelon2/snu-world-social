import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "World Social",
  description: "World ID Application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-black text-white mx-auto max-w-md">
      <body className={inter.className}>
        <div className="inline-block w-full h-screen border">
          <Navbar></Navbar>
          {children}
        </div>
      </body>
    </html>
  );
}
