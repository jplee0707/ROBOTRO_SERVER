import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ProductCard } from "@/components/ProductCard";
import { ResourceCard } from "@/components/ResourceCard";
import { SectionTitle } from "@/components/SectionTitle";
import { getProducts, getResources } from "@/lib/api";

const features = [
  "안정적인 모터 제어",
  "커스텀 하드웨어 통합",
  "ROBOTRO 액추에이터 시스템 지원",
  "로봇 연구와 소형 자동화 장비 적용",
];

export default async function MotorDriversPage() {
  const products = (await getProducts()).filter((product) => product.category === "motor_driver");
  const resources = (await getResources()).filter(
    (resource) => resource.product.includes("JSD-B7") || resource.product.includes("Motor"),
  );

  return (
    <>
      <section className="page-section soft">
        <div className="page-title">
          <p className="eyebrow">Motor Drivers</p>
          <h1>Driver boards for ROBOTRO servo and motor systems</h1>
          <p>ROBOTRO 모터 드라이버는 소형 로봇 메커니즘을 안정적으로 제어하고 커스텀 하드웨어와 통합되도록 설계됩니다.</p>
        </div>
      </section>
      <section className="section">
        <div className="section-inner split">
          <div className="copy-block">
            <h2>Product Overview</h2>
            <p>
              모터 드라이버 제품군은 ROBOTRO 액추에이터 시스템을 제어하는 핵심 전장 구성입니다. 기존 제품인
              JSD-B7을 포함해, 신규 드라이버 제품은 Django Admin에서 추가하고 공개할 수 있습니다.
            </p>
          </div>
          <ul className="check-list">
            {features.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
        </div>
      </section>
      <section className="section soft">
        <div className="section-inner">
          <SectionTitle eyebrow="Product List" title="Motor driver products" />
          <div className="grid two">
            {products.map((product) => (
              <ProductCard
                key={product.slug}
                title={product.name}
                meta="Motor driver"
                description={product.short_description}
                href="/products/motor-drivers"
              />
            ))}
          </div>
        </div>
      </section>
      <section className="section">
        <div className="section-inner">
          <SectionTitle eyebrow="Downloads" title="Driver manuals, wiring guides, software tools" />
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
      <section className="section soft">
        <div className="quote-band">
          <div>
            <h2>드라이버 통합 조건을 검토해 드립니다.</h2>
            <p>전원, 제어 방식, 배선, 수량, 장착 환경을 알려주세요.</p>
          </div>
          <Button asChild>
            <Link href="/quote">Request Quote</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
