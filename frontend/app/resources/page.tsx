import { ResourceCard } from "@/components/ResourceCard";
import { SectionTitle } from "@/components/SectionTitle";
import { getResources } from "@/lib/api";

export default async function ResourcesPage() {
  const resources = await getResources();

  return (
    <>
      <section className="page-section soft">
        <div className="page-title">
          <p className="eyebrow">Resources</p>
          <h1>Datasheets, manuals, firmware, software tools</h1>
          <p>자료는 Django Admin에서 등록, 파일 업로드, 공개 상태, 버전, 게시일을 관리합니다.</p>
        </div>
      </section>
      <section className="section">
        <div className="section-inner">
          <SectionTitle
            title="Downloadable materials"
            description="JS-R7, JS-R7S, JS-R8, JS-R8B, JSD-B7, JSProgramer, 펌웨어, 배선 가이드를 관리할 수 있습니다."
          />
          <div className="grid">
            {resources.map((resource) => (
              <ResourceCard
                key={resource.slug}
                title={resource.title}
                product={resource.product}
                category={resource.category}
                description={resource.description}
                version={resource.version}
                date={resource.published_at}
                href={resource.file || resource.external_url}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
