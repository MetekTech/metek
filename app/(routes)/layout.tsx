import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import type { PropsWithChildren } from "react";

export default function Layout(props: PropsWithChildren) {
  const { children } = props;

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow bg-background">{children}</main>
      <Footer />
    </div>
  );
}
