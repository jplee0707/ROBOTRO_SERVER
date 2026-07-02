import Link from "next/link";
import { SectionTitle } from "@/components/SectionTitle";

const supportItems = [
  ["Custom Development", "서보모터, 드라이버, 펌웨어, 제어 소프트웨어 조건에 맞춘 개발 협의를 지원합니다."],
  ["A/S", "제품 상태 확인, 수리 접수, 교체 가능 여부를 검토합니다."],
  ["Installation & Teaching", "배선, 설치, 티칭, 초기 구동 절차를 엔지니어링 관점에서 지원합니다."],
  ["FAQ", "제품 선택과 자료 다운로드, 견적 문의에 대한 자주 묻는 질문을 정리합니다."],
];

export default function SupportPage() {
  return (
    <>
      <section className="page-section soft">
        <div className="page-title">
          <p className="eyebrow">Support</p>
          <h1>제품 통합과 적용을 위한 기술 지원</h1>
          <p>ROBOTRO는 제품 판매 이후의 설치, 배선, 티칭, 커스텀 개발 협의까지 함께 지원합니다.</p>
        </div>
      </section>
      <section className="section">
        <div className="section-inner">
          <SectionTitle title="Support areas" />
          <div className="grid two">
            {supportItems.map(([title, description]) => (
              <article className="feature-block" key={title}>
                <h3>{title}</h3>
                <p>{description}</p>
                {title === "FAQ" && <Link href="/support/faq">FAQ 보기</Link>}
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
