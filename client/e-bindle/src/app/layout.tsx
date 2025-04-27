import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import { DataProvider } from "@/context/DataContext";
import "./globals.css";
import CookieConsent from "./Components/General/CookieConsent";
// import FloatingChatbot from "./Components/General/FloatingWidget";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "E-Bindle",
  description: "Best E-Service agency in India",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <DataProvider>
        {children}
        </DataProvider>
     
        <CookieConsent />

      </body>
    </html>
  );
}
