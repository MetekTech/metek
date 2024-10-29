import { ContactDialog } from "@/components/navbar/contact-dialog";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import { SmallMenu } from "./small-menu";
import { ThemeSwitch } from "./theme-switch";

const routes = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
  { name: "Services", path: "/services" },
];

export function Navbar() {
  return (
    <header className="border-b bg-background">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-8">
            <div className="font-semibold text-lg">
              <span>Metek</span>
              <span className="hidden md:inline"> Tech</span>
            </div>
            <NavigationMenu className="hidden md:flex">
              <NavigationMenuList>
                {routes.map((route) => (
                  <NavigationMenuItem key={route.path}>
                    <Link href={route.path} legacyBehavior passHref>
                      <NavigationMenuLink
                        className={navigationMenuTriggerStyle()}
                      >
                        {route.name}
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>
          <div className="flex items-center gap-4 md:gap-8">
            <ThemeSwitch />
            <ContactDialog />
            <SmallMenu routes={routes} />
          </div>
        </div>
      </div>
    </header>
  );
}
