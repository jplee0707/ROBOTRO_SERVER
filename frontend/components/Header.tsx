import Link from "next/link";
import { Cpu, Menu } from "lucide-react";

const productLinks = [
  { href: "/products/js-r7", label: "JS-R7 Servo Motor" },
  { href: "/products/motor-drivers", label: "Motor Drivers" },
  { href: "/products/software-firmware", label: "Software & Firmware" },
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
      <nav className="desktop-nav" aria-label="Primary navigation">
        <Link href="/">Home</Link>
        <div className="nav-group">
          <Link href="/products">Products</Link>
          <div className="nav-menu">
            {productLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                {link.label}
              </Link>
            ))}
          </div>
        </div>
        <Link href="/applications">Applications</Link>
        <Link href="/resources">Resources</Link>
        <Link href="/support">Support</Link>
        <Link href="/company">Company</Link>
      </nav>
      <Link className="quote-link" href="/quote">
        Quote Request
      </Link>
      <button className="mobile-menu" type="button" aria-label="Open navigation">
        <Menu size={22} />
      </button>
    </header>
  );
}
