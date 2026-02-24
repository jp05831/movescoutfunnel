import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter"
});

export const metadata: Metadata = {
  title: "Book a Call - MoveScout | Digital Marketing for Moving Companies",
  description: "Schedule a free 30-minute call to learn how MoveScout can generate qualified moving leads for your company. 30-day money back guarantee.",
  keywords: "moving company marketing, moving leads, digital marketing, moving company advertising",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
