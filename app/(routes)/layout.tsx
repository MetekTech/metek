import { Navbar } from "@/components/navbar";
import type { PropsWithChildren } from "react";

export default function Layout(props: PropsWithChildren) {
  const { children } = props;

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <main className="flex-grow bg-background">{children}</main>

      <footer className="border-t bg-background py-4">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          © 2024 Metek Tech. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
