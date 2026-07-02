import { SectionTitle } from "@/components/SectionTitle";

export default function DeltaRobotExamplePage() {
  return (
    <section className="page-section">
      <div className="section-inner">
        <SectionTitle
          eyebrow="Application Example"
          title="Delta Robot Example"
          description="델타로봇은 ROBOTRO의 주력 제품 카테고리가 아니라, JS-R7 서보모터와 모터 드라이버를 적용할 수 있는 메커니즘 예시입니다."
        />
        <div className="copy-block">
          <p>
            빠른 반복 동작이 필요한 소형 메커니즘에서 액추에이터 크기, 제어 안정성, 드라이버 통합 방식이 중요합니다.
            ROBOTRO는 이러한 조건을 기준으로 구동부 적용 가능성을 검토합니다.
          </p>
        </div>
      </div>
    </section>
  );
}
