import Link from "next/link";
import { ArrowRight, Cpu } from "lucide-react";

type ProductCardProps = {
  title: string;
  description: string;
  href: string;
  meta?: string;
};

export function ProductCard({ title, description, href, meta }: ProductCardProps) {
  return (
    <article className="product-card">
      <div className="card-icon">
        <Cpu size={24} />
      </div>
      {meta && <p className="card-meta">{meta}</p>}
      <h3>{title}</h3>
      <p>{description}</p>
      <Link href={href}>
        Learn More
        <ArrowRight size={16} />
      </Link>
    </article>
  );
}
