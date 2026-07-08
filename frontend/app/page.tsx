import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Factory, Headphones, MonitorCog, PackageCheck, type LucideIcon } from "lucide-react";
import { ApplicationCard } from "@/components/ApplicationCard";
import { Hero } from "@/components/Hero";
import { ProductCard } from "@/components/ProductCard";
import { ResourceCard } from "@/components/ResourceCard";
import { SectionTitle } from "@/components/SectionTitle";
import { getResources } from "@/lib/api";

const features: Array<{ icon: LucideIcon; title: string; description: string }> = [
  {
    icon: PackageCheck,
    title: "Compact Form Factor",
    description: "소형 로봇과 제한된 공간의 구동부에 맞춘 컴팩트한 제품 방향을 유지합니다.",
  },
  {
    icon: Factory,
    title: "Custom Development Support",
    description: "기구, 제어, 전장 조건에 맞춘 서보/드라이버 개발 협의를 지원합니다.",
  },
  {
    icon: MonitorCog,
    title: "Firmware & Software Tools",
    description: "펌웨어, JSProgramer, 설치 파일 등 제어 환경까지 함께 제공합니다.",
  },
  {
    icon: Headphones,
    title: "Direct Engineering Support",
    description: "제품 선정, 배선, 설치, 티칭 과정에서 엔지니어링 기반 지원을 제공합니다.",
  },
];

export default async function HomePage() {
  const resources = (await getResources()).slice(0, 5);

  return (
    <>
      <Hero
        eyebrow="ROBOTRO Actuator Systems"
        title="Compact Servo Motors & Motor Drivers for Robotics"
        koreanTitle="소형 로봇을 위한 JS-R7 서보모터와 모터 드라이버"
        subtitle="ROBOTRO develops compact actuator systems, motor drivers, firmware, and control tools for custom robotics applications."
        primaryCta={{ href: "/products/js-r7", label: "View JS-R7" }}
        secondaryCta={{ href: "/products/motor-drivers", label: "View Motor Drivers" }}
        tertiaryCta={{ href: "/inquiry", label: "Request Quote" }}
      />

      <section className="section">
        <div className="section-inner">
          <SectionTitle
            eyebrow="Core Products"
            title="JS-R7 서보모터와 모터 드라이버 중심의 제품 구성"
            description="ROBOTRO는 완제품 로봇 쇼케이스가 아니라, 정밀 구동을 만드는 핵심 액추에이터 기술에 집중합니다."
          />
          <div className="grid two">
            <ProductCard
              title="JS-R7 Servo Motor"
              meta="Compact servo actuator"
              description="소형 로봇, 교육/연구 장비, 커스텀 메커니즘에 적합한 컴팩트 서보 액추에이터입니다."
              href="/products/js-r7"
            />
            <ProductCard
              title="Motor Drivers"
              meta="Driver boards"
              description="ROBOTRO 서보/모터 시스템을 커스텀 로봇 하드웨어와 연결하기 위한 드라이버 보드입니다."
              href="/products/motor-drivers"
            />
          </div>
        </div>
      </section>

      <section className="section soft">
        <div className="section-inner">
          <SectionTitle eyebrow="Why ROBOTRO" title="구동 시스템 개발에 필요한 실질적인 지원" />
          <div className="grid four">
            {features.map(({ icon: Icon, title, description }) => (
              <article className="feature-block" key={title}>
                <Icon size={26} color="#1269ff" />
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-inner">
          <SectionTitle
            eyebrow="Application Examples"
            title="Application Examples"
            description="JS-R7 servo motors and ROBOTRO motor drivers can be applied to compact robots, delta robot mechanisms, humanoid joints, education kits, and research prototypes. 아래 항목은 제품 카테고리가 아닌 적용 예시입니다."
          />
          <div className="grid four">
            <ApplicationCard
              title="Compact Robot Mechanisms"
              description="정밀한 소형 구동부, 관절, 자동화 메커니즘 예시입니다."
            />
            <ApplicationCard title="Delta Robot Example" description="델타로봇 구동 구조에 적용 가능한 예시입니다." />
            <ApplicationCard title="Humanoid Joint Example" description="휴머노이드 관절 구조에서의 적용 예시입니다." />
            <ApplicationCard title="Education & Research" description="교육 키트와 연구 프로토타입 적용 예시입니다." />
          </div>
        </div>
      </section>

      <section className="section soft">
        <div className="section-inner">
          <SectionTitle eyebrow="Resources" title="Datasheets, firmware, software tools" />
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

      <section className="section">
        <div className="quote-band">
          <div>
            <h2>Need a custom servo or motor driver solution?</h2>
            <p>제품 선정, 수량, 적용 메커니즘을 알려주시면 개발 방향을 함께 검토합니다.</p>
          </div>
          <Button asChild>
            <Link href="/inquiry">Request Quote</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
