import { ApplicationCard } from "@/components/ApplicationCard";
import { SectionTitle } from "@/components/SectionTitle";
import { getApplications } from "@/lib/api";

export default async function ApplicationsPage() {
  const applications = await getApplications();

  return (
    <>
      <section className="page-section soft">
        <div className="page-title">
          <p className="eyebrow">Applications</p>
          <h1>ROBOTRO actuator systems can be used in compact mechanisms</h1>
          <p>
            ROBOTRO no longer presents delta robots or humanoid robots as the main product direction. They are shown here
            as examples of mechanisms that can use ROBOTRO servo motors and motor drivers.
          </p>
        </div>
      </section>
      <section className="section">
        <div className="section-inner">
          <SectionTitle
            title="적용 예시"
            description="아래 항목은 JS-R7 서보모터와 모터 드라이버의 적용 가능성을 설명하는 예시이며, 제품 카테고리가 아닙니다."
          />
          <div className="grid">
            {applications.map((application) => (
              <ApplicationCard
                key={application.slug}
                title={application.title}
                description={application.description}
                href={`/applications/${application.slug}`}
              />
            ))}
            <ApplicationCard title="Custom Mechanisms" description="고객 장비 조건에 맞춘 커스텀 구동 메커니즘 예시입니다." />
          </div>
        </div>
      </section>
    </>
  );
}
