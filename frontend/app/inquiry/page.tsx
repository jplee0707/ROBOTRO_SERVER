import { QuoteForm } from "@/components/QuoteForm";
import { SectionTitle } from "@/components/SectionTitle";

export default function QuotePage() {
  return (
    <>
      <section className="page-section soft">
        <div className="page-title">
          <p className="eyebrow">Quote Request</p>
          <h1>제품 조건과 적용 목적을 알려주세요.</h1>
          <p>JS-R7 Servo Motor, Motor Driver, Software/Firmware, Custom Development 문의를 접수합니다.</p>
        </div>
      </section>
      <section className="section">
        <div className="section-inner split">
          <div>
            <SectionTitle title="Request details" description="제출된 문의는 PostgreSQL에 저장되고 Django Admin에서 관리됩니다." />
            <QuoteForm />
          </div>
          <aside className="info-panel product-card">
            <h2>Contact</h2>
            <p>경기도 부천시 평천로 655</p>
            <p>부천테크노파크 402-1203</p>
            <p>admin@robotro.com</p>
            <p>070-8224-4100</p>
          </aside>
        </div>
      </section>
    </>
  );
}
