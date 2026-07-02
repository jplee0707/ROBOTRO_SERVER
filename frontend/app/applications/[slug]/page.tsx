import { notFound } from "next/navigation";
import { ApplicationCard } from "@/components/ApplicationCard";
import { SectionTitle } from "@/components/SectionTitle";
import { getApplications } from "@/lib/api";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export default async function ApplicationDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const applications = await getApplications();
  const application = applications.find((item) => item.slug === slug);

  if (!application) {
    notFound();
  }

  return (
    <section className="page-section">
      <div className="section-inner">
        <SectionTitle eyebrow="Application Example" title={application.title} description={application.description} />
        <div className="grid two">
          <article className="feature-block">
            <h3>Example Positioning</h3>
            <p>
              이 페이지는 ROBOTRO 서보모터와 모터 드라이버가 적용될 수 있는 메커니즘 예시입니다. 완제품 로봇의
              제품 카테고리로 표시하지 않습니다.
            </p>
          </article>
          <ApplicationCard
            title="Related actuator system"
            description={`${application.related_products.join(", ")} 제품군과 함께 적용 조건을 검토할 수 있습니다.`}
          />
        </div>
      </div>
    </section>
  );
}
