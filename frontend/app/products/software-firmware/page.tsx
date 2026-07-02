import { ResourceCard } from "@/components/ResourceCard";
import { SectionTitle } from "@/components/SectionTitle";
import { getResources } from "@/lib/api";

export default async function SoftwareFirmwarePage() {
  const resources = (await getResources()).filter((resource) =>
    ["firmware", "software", "installation_guide"].includes(resource.category),
  );

  return (
    <>
      <section className="page-section soft">
        <div className="page-title">
          <p className="eyebrow">Software & Firmware</p>
          <h1>JSProgramer, firmware, installation files</h1>
          <p>JS-R7 설정, 펌웨어 업그레이드, PC 제어 도구, 설치 파일을 한 곳에서 제공합니다.</p>
        </div>
      </section>
      <section className="section">
        <div className="section-inner">
          <SectionTitle
            title="Control software and firmware resources"
            description="JSProgramer, JS-R7 firmware, JUNICELL 관련 자료가 계속 유효한 경우 Admin에서 공개 상태로 관리할 수 있습니다."
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
