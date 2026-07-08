import type { ApplicationExample, InquiryPayload, Product, Resource } from "./types";

const PUBLIC_API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:8100/api";

function getApiBaseUrl() {
  if (typeof window === "undefined") {
    return process.env.API_INTERNAL_BASE_URL || PUBLIC_API_BASE_URL;
  }

  return PUBLIC_API_BASE_URL;
}

async function fetchJson<T>(path: string): Promise<T | null> {
  try {
    const response = await fetch(`${getApiBaseUrl()}${path}`, {
      next: { revalidate: 60 },
    });

    if (!response.ok) {
      return null;
    }

    return response.json() as Promise<T>;
  } catch {
    return null;
  }
}

export async function getProducts() {
  return (await fetchJson<Product[]>("/products/")) || fallbackProducts;
}

export async function getProduct(slug: string) {
  const product = await fetchJson<Product>(`/products/${slug}/`);
  return product || fallbackProducts.find((item) => item.slug === slug) || null;
}

export async function getResources() {
  return (await fetchJson<Resource[]>("/resources/")) || fallbackResources;
}

export async function getApplications() {
  return (await fetchJson<ApplicationExample[]>("/applications/")) || fallbackApplications;
}

export async function submitInquiry(payload: InquiryPayload) {
  const response = await fetch(`${getApiBaseUrl()}/inquiries/`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    throw new Error("Inquiry submission failed");
  }

  return response.json();
}

export const fallbackProducts: Product[] = [
  {
    id: 1,
    name: "JS-R7 Servo Motor",
    slug: "js-r7-servo-motor",
    category: "servo_motor",
    short_description: "소형 로봇과 맞춤 메커니즘을 위한 컴팩트 서보 액추에이터",
    description:
      "JS-R7은 소형 로봇 관절, 교육/연구 장비, 커스텀 자동화 장치에 적용할 수 있는 ROBOTRO의 핵심 서보모터입니다.",
    key_features: ["컴팩트 폼팩터", "위치 제어", "펌웨어 업그레이드", "JSProgramer PC 제어"],
    specifications: {
      "Control Mode": "Position control",
      "Communication": "TBD",
      "Rated Voltage": "TBD",
      "Dimensions": "TBD",
    },
    is_featured: true,
    order: 1,
  },
  {
    id: 2,
    name: "Motor Drivers",
    slug: "motor-drivers",
    category: "motor_driver",
    short_description: "ROBOTRO 서보/모터 시스템 제어를 위한 드라이버 보드",
    description:
      "ROBOTRO 모터 드라이버는 소형 로봇 메커니즘과 커스텀 하드웨어 통합에 맞춘 안정적인 제어 보드입니다.",
    key_features: ["안정적인 모터 제어", "커스텀 하드웨어 통합", "연구/자동화 장비 적용", "직접 기술 지원"],
    specifications: { "Representative Product": "JSD-B7", "Interface": "TBD" },
    is_featured: true,
    order: 2,
  },
  {
    id: 3,
    name: "JSProgramer",
    slug: "jsprogramer",
    category: "software_firmware",
    short_description: "JS-R7 설정, 제어, 펌웨어 관리를 위한 PC 소프트웨어",
    description: "JSProgramer는 ROBOTRO 액추에이터 시스템의 설정과 테스트를 지원하는 제어 도구입니다.",
    key_features: ["PC 제어", "파라미터 설정", "펌웨어 관리", "테스트 워크플로우"],
    specifications: { "Platform": "Windows installer TBD" },
    is_featured: false,
    order: 3,
  },
];

export const fallbackResources: Resource[] = [
  {
    id: 1,
    title: "JS-R7 Datasheet",
    slug: "js-r7-datasheet",
    product: "JS-R7",
    category: "datasheet",
    description: "JS-R7 서보모터 사양과 적용 정보를 정리한 데이터시트입니다.",
    version: "v0.1",
    published_at: "2026-07-02",
    is_public: true,
    order: 1,
  },
  {
    id: 2,
    title: "JS-R7 Firmware",
    slug: "js-r7-firmware",
    product: "JS-R7",
    category: "firmware",
    description: "JS-R7 펌웨어 업데이트 파일입니다.",
    version: "TBD",
    published_at: "2026-07-02",
    is_public: true,
    order: 2,
  },
  {
    id: 3,
    title: "JSProgramer",
    slug: "jsprogramer",
    product: "JS-R7",
    category: "software",
    description: "JS-R7 설정과 테스트를 위한 PC 제어 소프트웨어입니다.",
    version: "TBD",
    published_at: "2026-07-02",
    is_public: true,
    order: 3,
  },
  {
    id: 4,
    title: "Motor Driver Wiring Guide",
    slug: "motor-driver-wiring-guide",
    product: "Motor Drivers",
    category: "wiring_guide",
    description: "모터 드라이버 배선과 설치를 위한 기본 가이드입니다.",
    version: "v0.1",
    published_at: "2026-07-02",
    is_public: true,
    order: 4,
  },
];

export const fallbackApplications: ApplicationExample[] = [
  {
    id: 1,
    title: "Compact Robot Mechanisms",
    slug: "compact-robot-mechanisms",
    category: "compact_robotics",
    description: "작은 공간에서 정밀한 움직임이 필요한 로봇 관절과 구동부 예시입니다.",
    related_products: ["JS-R7 Servo Motor", "Motor Drivers"],
    order: 1,
    is_public: true,
  },
  {
    id: 2,
    title: "Delta Robot Example",
    slug: "delta-robot-example",
    category: "delta_robot_example",
    description: "델타로봇 메커니즘에 JS-R7과 드라이버를 적용할 수 있는 예시입니다.",
    related_products: ["JS-R7 Servo Motor", "Motor Drivers"],
    order: 2,
    is_public: true,
  },
  {
    id: 3,
    title: "Humanoid Joint Example",
    slug: "humanoid-joint-example",
    category: "humanoid_joint_example",
    description: "휴머노이드 관절 구조에서 컴팩트 액추에이터를 활용하는 예시입니다.",
    related_products: ["JS-R7 Servo Motor"],
    order: 3,
    is_public: true,
  },
  {
    id: 4,
    title: "Education & Research",
    slug: "education-research",
    category: "education_research",
    description: "교육용 로봇, 연구 프로토타입, 실험 장비에 적용하는 예시입니다.",
    related_products: ["JS-R7 Servo Motor", "JSProgramer"],
    order: 4,
    is_public: true,
  },
];
