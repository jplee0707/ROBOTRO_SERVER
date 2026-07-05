import { Download, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

type ResourceCardProps = {
  title: string;
  product: string;
  category: string;
  description: string;
  version: string;
  date: string;
  href?: string | null;
};

export function ResourceCard({ title, product, category, description, version, date, href }: ResourceCardProps) {
  return (
    <Card>
      <CardHeader>
        <div className="resource-head">
          <FileText size={22} />
          <span>{category}</span>
        </div>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-4">
        <CardDescription>{description}</CardDescription>
        <dl className="grid gap-2 text-sm text-muted-foreground">
          <div className="flex justify-between gap-3 border-t border-border pt-2">
            <dt className="font-extrabold text-foreground">Product</dt>
            <dd className="m-0 text-right">{product}</dd>
          </div>
          <div className="flex justify-between gap-3 border-t border-border pt-2">
            <dt className="font-extrabold text-foreground">Version</dt>
            <dd className="m-0 text-right">{version}</dd>
          </div>
          <div className="flex justify-between gap-3 border-t border-border pt-2">
            <dt className="font-extrabold text-foreground">Date</dt>
            <dd className="m-0 text-right">{date}</dd>
          </div>
        </dl>
      </CardContent>
      <CardFooter>
        {href ? (
          <Button asChild variant="link">
            <a href={href}>
              <Download size={16} />
              Download
            </a>
          </Button>
        ) : (
          <Button variant="link" disabled>
            <Download size={16} />
            Download
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
