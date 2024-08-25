import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="max-w-md h-[100dvh] mx-auto bg-neutral-400 text-white border-2 border-gray-600 overflow-y-hidden"
    >
      <body className={`${inter.className}`}>
        <Link href={"/"}>
          <header className="flex flex-col justify-center items-center h-[10dvh] p-2 *:font-Freesentation border-b-2 border-gray-500">
            <p className="text-4xl">Master Plan</p>
            <p className="text-lg font-thin">The Key</p>
          </header>
        </Link>
        <main className="w-full h-[82dvh] px-6 py-8 overflow-y-auto overflow-x-hidden scrollbar-hide bg-neutral-900">
          {children}
        </main>
        <footer className="flex flex-col justify-center items-center h-[8dvh] p-2 *:font-Freesentation border-t-2 border-gray-500">
          <p className="text-4xl">하단 Nav</p>
        </footer>
      </body>
    </html>
  );
}
