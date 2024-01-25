import type { Metadata } from "next";
import { Noto_Sans_SC as FontSans } from "next/font/google";
import "./globals.css";
import React from "react";
import {ThemeProvider} from "@/components/theme-provider";
import {NavigationMenuDemo} from "@/components/nav";

const fontSans = FontSans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "XYi Blog",
  description: "XYi's blog",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={fontSans.className}>
      <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
      >
          <NavigationMenuDemo/>
        {children}
      </ThemeProvider>
      </body>
    </html>
  );
}
