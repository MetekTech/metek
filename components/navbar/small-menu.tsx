"use client";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

type Props = {
  routes: Route[];
};

type Route = {
  name: string;
  path: string;
};

export function SmallMenu(props: Props) {
  const { routes = [] } = props;

  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="md:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[240px] sm:w-[300px]">
        <SheetHeader className="mb-8">
          <SheetTitle>Menu</SheetTitle>
          <SheetDescription>Navigate to a page</SheetDescription>
        </SheetHeader>
        <nav className="flex flex-col gap-4">
          {routes.map((route) => (
            <Link
              key={route.path}
              href={route.path}
              className={`font-medium text-lg transition-colors hover:text-primary ${
                pathname === route.path
                  ? "text-primary"
                  : "text-muted-foreground"
              }`}
              onClick={() => setOpen(false)}
            >
              {route.name}
            </Link>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
}
