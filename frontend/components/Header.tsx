import Link from "next/link";
import { Cpu } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const productLinks = [
  { href: "/products/js-r7", label: "JS-R7 Servo Motor" },
  { href: "/products/motor-drivers", label: "Motor Drivers" },
  { href: "/products/software-firmware", label: "Software & Firmware" },
];

const navLinks = [
  { href: "/software", label: "소프트웨어" },
  { href: "/news", label: "소식" },
  { href: "/company", label: "회사소개" },
  { href: "/support", label: "고객지원" },
  { href: "/inquiry", label: "문의" },
];

export function Header() {
  return (
    <header className="site-header">
      <Link className="brand" href="/" aria-label="ROBOTRO home">
        <span className="brand-mark">
          <Cpu size={22} strokeWidth={2.2} />
        </span>
        <span>ROBOTRO</span>
      </Link>
      <NavigationMenu className="desktop-nav" aria-label="Primary navigation" viewport={false}>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>제품</NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="grid w-64 gap-1">
                {productLinks.map((link) => (
                  <NavigationMenuLink key={link.href} className="hover:bg-muted focus:bg-muted" asChild>
                    <Link href={link.href}>{link.label}</Link>
                  </NavigationMenuLink>
                ))}
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
          {navLinks.map((link) => (
            <NavigationMenuItem key={link.href}>
              <NavigationMenuLink className={navigationMenuTriggerStyle} data-nav-indicator-target="" asChild>
                <Link href={link.href}>{link.label}</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
}
