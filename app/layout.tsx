import type { Metadata } from "next";
import { Roboto } from "next/font/google"; // Use a good-looking font
import "./globals.css";
import { Header } from "@/components/Header";
import Breadcrumb from "@/components/Breadcrumb";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["greek"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

export const metadata: Metadata = {
  title: "EduSpark Global",
  description: "EduSpark Global is a learning platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${roboto.variable} antialiased`}
        suppressHydrationWarning
      >
        <Header />
        <Breadcrumb />
        {children}
      </body>
    </html>
  );
}
