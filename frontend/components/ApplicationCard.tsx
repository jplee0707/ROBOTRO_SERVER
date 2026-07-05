import Link from "next/link";
import { ArrowRight, Move3D } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

type ApplicationCardProps = {
  title: string;
  description: string;
  href?: string;
};

export function ApplicationCard({ title, description, href = "/applications" }: ApplicationCardProps) {
  return (
    <Card>
      <CardHeader>
        <Move3D className="text-primary" size={24} />
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription>{description}</CardDescription>
      </CardContent>
      <CardFooter>
        <Button asChild variant="link">
          <Link href={href}>
            Example detail
            <ArrowRight size={16} />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
