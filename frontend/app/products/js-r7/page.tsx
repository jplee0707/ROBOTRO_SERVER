import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ProductSpecTable } from "@/components/ProductSpecTable";
import { ResourceCard } from "@/components/ResourceCard";
import { SectionTitle } from "@/components/SectionTitle";
import { getProduct, getResources } from "@/lib/api";

const features = [
  "컴팩트 사이즈",
  "위치 제어",
  "펌웨어 업그레이드",
  "JSProgramer를 통한 PC 제어",
  "커스텀 로봇 메커니즘 적용",
];

// Replace placeholder specs with official JS-R7 specs.
const placeholderSpecs = {
  "Control Type": "Position control",
  "Communication": "TBD",
  "Rated Voltage": "TBD",
  "Torque": "TBD",
  "Dimensions": "TBD",
  "Firmware Upgrade": "Supported",
};

export default async function JsR7Page() {
  const product = await getProduct("js-r7-servo-motor");
  const resources = (await getResources()).filter((resource) => resource.product.includes("JS-R7"));

  return (
    <>
      <section className="page-section soft">
        <div className="page-title">
          <p className="eyebrow">Servo Motor</p>
          <h1>JS-R7 Servo Motor</h1>
          <p>Compact servo motor for robotics applications.</p>
        </div>
      </section>
      <section className="section">
        <div className="section-inner split">
          <div className="copy-block">
            <h2>Product Overview</h2>
            <p>
              JS-R7은 소형 로봇, 교육/연구용 장비, 커스텀 자동화 시스템에 적용할 수 있는 컴팩트 서보
              액추에이터입니다. ROBOTRO는 모터, 드라이버, 펌웨어, 제어 소프트웨어를 함께 고려한 구동 시스템을
              제공합니다.
            </p>
          </div>
          <div className="info-panel product-card">
            <p className="card-meta">Featured product</p>
            <h3>{product?.name || "JS-R7 Servo Motor"}</h3>
            <p>{product?.short_description}</p>
            <Link href="/quote">Request Quote</Link>
          </div>
        </div>
      </section>
      <section className="section soft">
        <div className="section-inner split">
          <div>
            <SectionTitle eyebrow="Key Features" title="정밀한 소형 로봇 구동을 위한 핵심 기능" />
            <ul className="check-list">
              {features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
          </div>
          <div>
            <SectionTitle eyebrow="Specifications" title="Specifications" />
            <ProductSpecTable specs={product?.specifications || placeholderSpecs} />
          </div>
        </div>
      </section>
      <section className="section">
        <div className="section-inner">
          <SectionTitle eyebrow="Downloads" title="JS-R7 downloads" />
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
            <h2>JS-R7 적용 검토가 필요하신가요?</h2>
            <p>소형 로봇 관절, 교육용 로봇, 델타로봇 구동 예시, 휴머노이드 관절 예시를 함께 검토합니다.</p>
          </div>
          <Button asChild>
            <Link href="/quote">Request Quote</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
