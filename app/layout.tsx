import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Barnagar Iron Works",
  description: "House of Wire Products",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased `}
      >
        <Header />

        {/* Main Content Area */}
        <main className="min-h-[calc(100vh-160px)]">
          {" "}
          {/* Adjust height based on header/footer */}
          {children} {/* Renders the content of the current page */}
        </main>

        {/* Footer Section */}
        <Footer />
      </body>
    </html>
  );
}
