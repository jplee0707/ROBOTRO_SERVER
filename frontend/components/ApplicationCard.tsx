import Link from "next/link";
import { Move3D } from "lucide-react";

type ApplicationCardProps = {
  title: string;
  description: string;
  href?: string;
};

export function ApplicationCard({ title, description, href = "/applications" }: ApplicationCardProps) {
  return (
    <article className="application-card">
      <Move3D size={24} />
      <h3>{title}</h3>
      <p>{description}</p>
      <Link href={href}>Example detail</Link>
    </article>
  );
}
