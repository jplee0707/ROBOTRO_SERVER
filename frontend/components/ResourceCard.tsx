import { Download, FileText } from "lucide-react";

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
    <article className="resource-card">
      <div className="resource-head">
        <FileText size={22} />
        <span>{category}</span>
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
      <dl>
        <div>
          <dt>Product</dt>
          <dd>{product}</dd>
        </div>
        <div>
          <dt>Version</dt>
          <dd>{version}</dd>
        </div>
        <div>
          <dt>Date</dt>
          <dd>{date}</dd>
        </div>
      </dl>
      <a className="download-link" href={href || "#"} aria-disabled={!href}>
        <Download size={16} />
        Download
      </a>
    </article>
  );
}
