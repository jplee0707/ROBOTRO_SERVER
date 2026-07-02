import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

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
            <Link className="button primary" href={primaryCta.href}>
              {primaryCta.label}
              <ArrowRight size={18} />
            </Link>
          )}
          {secondaryCta && (
            <Link className="button secondary" href={secondaryCta.href}>
              {secondaryCta.label}
            </Link>
          )}
          {tertiaryCta && (
            <Link className="button ghost" href={tertiaryCta.href}>
              {tertiaryCta.label}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
