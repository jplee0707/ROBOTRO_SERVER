import Link from "next/link";
import { ArrowRight, Cpu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

type ProductCardProps = {
  title: string;
  description: string;
  href: string;
  meta?: string;
};

export function ProductCard({ title, description, href, meta }: ProductCardProps) {
  return (
    <Card>
      <CardHeader>
        <div className="card-icon">
          <Cpu size={24} />
        </div>
        {meta && <p className="card-meta">{meta}</p>}
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription>{description}</CardDescription>
      </CardContent>
      <CardFooter>
        <Button asChild variant="link">
          <Link href={href}>
            Learn More
            <ArrowRight size={16} />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
