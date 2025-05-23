import { ImageGrid } from "@/components/image-grid";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function LandingPage() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black">
      <div className="absolute grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        <ImageGrid />
      </div>

      <div className="absolute inset-0 bg-black bg-opacity-60" />

      <div className="relative z-10 text-center text-white">
        <h1 className="mb-8 font-bold text-4xl sm:text-5xl md:text-6xl">
          Welcome to Metek Tech
        </h1>
        <Link href="/about">
          <Button
            size="lg"
            className="group bg-white px-8 py-6 text-black text-lg transition-all duration-300 ease-in-out hover:bg-gray-200"
          >
            <span className="mr-2">Discover</span>
            <ArrowRight className="inline-block transition-transform duration-300 ease-in-out group-hover:translate-x-1" />
          </Button>
        </Link>
      </div>
    </main>
  );
}
