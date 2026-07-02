import { SectionTitle } from "@/components/SectionTitle";

const faqs = [
  ["ROBOTRO의 주력 제품은 무엇인가요?", "JS-R7 Servo Motor와 Motor Driver 제품군이 중심입니다."],
  ["델타로봇이나 휴머노이드 로봇도 제품인가요?", "현재 사이트에서는 적용 예시와 개발 경험으로만 소개합니다."],
  ["자료 파일은 어디에서 받을 수 있나요?", "Resources 페이지에서 데이터시트, 매뉴얼, 펌웨어, 소프트웨어 자료를 확인할 수 있습니다."],
  ["견적 요청은 어떻게 하나요?", "Quote Request 페이지에서 제품 관심 분야, 수량, 적용 목적을 보내주시면 됩니다."],
];

export default function FaqPage() {
  return (
    <section className="page-section">
      <div className="section-inner">
        <SectionTitle eyebrow="FAQ" title="자주 묻는 질문" />
        <div className="grid two">
          {faqs.map(([question, answer]) => (
            <article className="feature-block" key={question}>
              <h3>{question}</h3>
              <p>{answer}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
