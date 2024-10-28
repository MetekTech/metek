import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "next-themes";
import type { PropsWithChildren } from "react";

export const metadata: Metadata = {
  title: "Metek Tech",
  description: "Metek Tech is a software development company",
  generator: "create-next-app",
};

export default function RootLayout(props: PropsWithChildren) {
  const { children } = props;

  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
