import { Poppins, Roboto_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Link from "next/link";
import Head from "next/head";

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Alif Attallah Basya | Portfolio",
  description: "here is my portfolio website",
  icons: {
    icon: "favicon.ico", // ini otomatis cari di public/
  },
  openGraph: {
    title: "Alif Attallah Personal Website",
    description: "Alif Attallah Basya | Student, Web Designer and Developer",
    url: "https://alifattallah.kodein.sch.id",
    siteName: "Alif Attallah Basya | Portfolio",
    images: [
      {
        url: "https://alifattallah.kodein.sch.id/og-image.jpg", // Must be an absolute URL
        width: 1200,
        height: 630,
      },
    ],

    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${robotoMono.variable} antialiased w-full max-w-[1093px] bg-[#f6f6f6] mx-auto px-4 lg:px-0`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
