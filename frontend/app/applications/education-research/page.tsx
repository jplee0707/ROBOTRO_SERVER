import { SectionTitle } from "@/components/SectionTitle";

export default function EducationResearchPage() {
  return (
    <section className="page-section">
      <div className="section-inner">
        <SectionTitle
          eyebrow="Application Example"
          title="Education & Research"
          description="교육용 로봇, 연구 프로토타입, 실험 장비에서 JS-R7과 JSProgramer를 활용할 수 있습니다."
        />
        <div className="copy-block">
          <p>
            연구실과 교육 현장에서는 빠르게 실험하고 반복할 수 있는 구동 시스템이 필요합니다. ROBOTRO는 서보모터,
            드라이버, 펌웨어, PC 제어 소프트웨어를 중심으로 학습과 실험을 지원합니다.
          </p>
        </div>
      </div>
    </section>
  );
}
