import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./components/Navigation/Navbar";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Mehammed T - Professional Writer",
  description: "Portfolio website showcasing the work of Mehammed T, a professional writer specializing in creative writing, content creation, and storytelling.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-white`}>
        <Navbar />
        <div className="pt-20">
          {children}
        </div>
        <footer className="mt-auto py-8 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-sm text-gray-500">
                &copy; 2024 Jane Doe. All rights reserved.
              </div>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <a href="#" className="text-gray-400 hover:text-gray-500">Twitter</a>
                <a href="#" className="text-gray-400 hover:text-gray-500">LinkedIn</a>
                <a href="#" className="text-gray-400 hover:text-gray-500">Instagram</a>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
