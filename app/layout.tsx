import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "next-themes";
import localFont from "next/font/local";
import type { PropsWithChildren } from "react";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Metek Tech",
  description: "Metek Tech is a software development company",
  generator: "create-next-app",
};

/**
 * Root layout performs the same function as the app.tsx in a react app. It is primarily for meta tags and providers.
 * Each page will be served with this layout.
 */
export default function RootLayout(props: PropsWithChildren) {
  const { children } = props;

  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} overflow-y-scroll font-sans antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
