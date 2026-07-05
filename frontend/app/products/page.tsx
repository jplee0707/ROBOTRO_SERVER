import { ProductCard } from "@/components/ProductCard";

const products = [
  {
    title: "JS-R7 Servo Motor",
    href: "/products/js-r7",
    meta: "Servo actuator",
    description: "소형 로봇 구동부와 커스텀 메커니즘을 위한 핵심 컴팩트 서보모터입니다.",
  },
  {
    title: "Motor Drivers",
    href: "/products/motor-drivers",
    meta: "Driver boards",
    description: "ROBOTRO 액추에이터 시스템을 안정적으로 제어하기 위한 드라이버 보드입니다.",
  },
  {
    title: "Software & Firmware",
    href: "/products/software-firmware",
    meta: "Control tools",
    description: "JSProgramer, JS-R7 firmware, 설치 파일, 펌웨어 업그레이드 가이드를 제공합니다.",
  },
];

export default function ProductsPage() {
  return (
    <>
      <section className="page-section soft">
        <div className="page-title">
          <p className="eyebrow">Products</p>
          <h1>JS-R7 서보모터와 모터 드라이버 중심의 제품 체계</h1>
          <p>휴머노이드 로봇과 델타로봇은 제품 카테고리가 아니라 ROBOTRO 구동 시스템의 적용 예시로 다룹니다.</p>
        </div>
      </section>
      <section className="section">
        <div className="section-inner">
          <div className="grid">
            {products.map((product) => (
              <ProductCard key={product.href} {...product} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
