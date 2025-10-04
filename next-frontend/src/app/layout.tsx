import type { Metadata } from "next";
import { Josefin_Sans, DM_Sans } from "next/font/google";
import Script from "next/script";
import "./globals.css";

// Import your global styles here. Next.js handles the bundling.
import "../styles/index.css";
import "../styles/style.css";
import "../styles/App.scss";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Import your components
import Navbar from "@/Components/Navbar/Navbar";
import { ProfileContextProvider } from "@/context/ProfileContext";
import { getProfileData } from "@/lib/data";
import React from "react";

// Setup the fonts you were using from Google Fonts
const josefin_sans = Josefin_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-josefin-sans", // Optional: for use with CSS variables
});

const dm_sans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-sans",
});

export const metadata: Metadata = {
  title: "Savan's Website", // Updated from your old index.html
  description: "Savan Patel's personal portfolio website.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Fetch all data on the server, once.
  const profileData = await getProfileData();

  return (
    <html lang="en">
      {/* Add Bootstrap CSS to the head */}
      <body
        className={`${josefin_sans.variable} ${dm_sans.variable} antialiased`}
      >
        <ProfileContextProvider initialData={profileData}>
          <Navbar />
          {children}
        </ProfileContextProvider>

        {/* Add Bootstrap and Analytics scripts before the closing body tag */}
        <Script
          async
          defer
          src="https://scripts.simpleanalyticscdn.com/latest.js"
        />
        <noscript>
          <img
            alt=""
            referrerPolicy="no-referrer-when-downgrade"
            src="https://queue.simpleanalyticscdn.com/noscript.gif"
          />
        </noscript>
      </body>
    </html>
  );
}
