import type { Metadata } from "next";
import { Catamaran } from "next/font/google"; // Using Catamaran as analyzed
import "./globals.css";

const catamaran = Catamaran({
  variable: "--font-catamaran",
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
});

export const metadata: Metadata = {
  title: "Savour Skiathos - Restaurant Menu",
  description: "Discover the flavors of Savour Skiathos Restaurant.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${catamaran.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
