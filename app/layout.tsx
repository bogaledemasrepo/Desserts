import type { Metadata } from "next";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";

export const metadata: Metadata = {
  title: "desserts web application",
  description: "frontend mentor challenge developed by bogale demas",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ClerkProvider>
        <body className={`antialiased`}>{children}</body>
      </ClerkProvider>
    </html>
  );
}
