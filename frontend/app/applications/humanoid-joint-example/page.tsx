import { SectionTitle } from "@/components/SectionTitle";

export default function HumanoidJointExamplePage() {
  return (
    <section className="page-section">
      <div className="section-inner">
        <SectionTitle
          eyebrow="Application Example"
          title="Humanoid Joint Example"
          description="휴머노이드 관절은 완제품 로봇 판매 방향이 아니라, ROBOTRO 서보모터를 활용할 수 있는 관절 구동 예시로 소개됩니다."
        />
        <div className="copy-block">
          <p>
            관절부는 공간 제약, 배선, 반복 동작, 제어 응답이 함께 고려되어야 합니다. JS-R7과 모터 드라이버는
            소형 관절 구조의 프로토타입과 연구 장비에 적용할 수 있습니다.
          </p>
        </div>
      </div>
    </section>
  );
}
