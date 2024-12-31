import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Footer from "@/components/Footer";

const customFont = localFont({
  src: [
    {
      path: "/fonts/RedHatText-Bold.ttf",
      weight: "400",
      style: "bold",
    },
    {
      path: "/fonts/RedHatText-SemiBold.ttf",
      weight: "700",
      style: "semibold",
    },
    {
      path: "/fonts/RedHatText-Regular.ttf",
      weight: "700",
      style: "regular",
    },
    {
      path: "/fonts/RedHatText-Italic-VariableFont_wght.ttf",
      weight: "700",
      style: "italic",
    },
    {
      path: "/fonts/RedHatText-VariableFont_wght.ttf",
      weight: "700",
      style: "variable",
    },
  ],
  variable: "--font-custom",
});
export const metadata: Metadata = {
  title: "desserts project",
  description: "Front end mentor challenge project 1",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${customFont.variable}antialiased`}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
