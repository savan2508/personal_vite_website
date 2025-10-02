import type { Metadata } from "next";
import { Josefin_Sans, Poppins, Aladin, DM_Sans } from "next/font/google";
import Script from "next/script";
import "./globals.css";

// Import your global styles here. Next.js handles the bundling.
import "../styles/index.css";
import "../styles/style.css";
import "../styles/App.scss";

// Import your components
import Navbar from "@/Components/Navbar/Navbar";

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* Add Bootstrap CSS to the head */}
      <head>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${josefin_sans.variable} ${dm_sans.variable} antialiased`}
      >
        <Navbar />
        {children}

        {/* Add Bootstrap and Analytics scripts before the closing body tag */}
        <Script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-ENjdO4Dr2bkBIFxQpeoTz1HIcje39Wm4jDKdf19U8gI4ddQ3GYNS7NTKfAdVQSZe"
          crossOrigin="anonymous"
        />
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
