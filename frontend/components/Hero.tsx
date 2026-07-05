import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

type HeroProps = {
  eyebrow?: string;
  title: string;
  koreanTitle?: string;
  subtitle: string;
  primaryCta?: { href: string; label: string };
  secondaryCta?: { href: string; label: string };
  tertiaryCta?: { href: string; label: string };
  image?: string;
};

export function Hero({
  eyebrow,
  title,
  koreanTitle,
  subtitle,
  primaryCta,
  secondaryCta,
  tertiaryCta,
  image = "/images/hero/compact-servo-driver-workbench.png",
}: HeroProps) {
  return (
    <section className="hero">
      <div className="hero-media">
        <Image src={image} alt="" fill priority sizes="100vw" />
      </div>
      <div className="hero-overlay" />
      <div className="hero-content">
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        <h1>{title}</h1>
        {koreanTitle && <p className="hero-korean">{koreanTitle}</p>}
        <p className="hero-subtitle">{subtitle}</p>
        <div className="hero-actions">
          {primaryCta && (
            <Button asChild size="lg">
              <Link href={primaryCta.href}>
                {primaryCta.label}
                <ArrowRight size={18} />
              </Link>
            </Button>
          )}
          {secondaryCta && (
            <Button asChild variant="secondary" size="lg">
              <Link href={secondaryCta.href}>{secondaryCta.label}</Link>
            </Button>
          )}
          {tertiaryCta && (
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white/60 bg-transparent text-white hover:bg-white/10 hover:text-white"
            >
              <Link href={tertiaryCta.href}>{tertiaryCta.label}</Link>
            </Button>
          )}
        </div>
      </div>
    </section>
  );
}
