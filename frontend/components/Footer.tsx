import Link from "next/link";

const columns = [
  {
    title: "Products",
    links: [
      ["JS-R7 Servo Motor", "/products/js-r7"],
      ["Motor Drivers", "/products/motor-drivers"],
      ["Software & Firmware", "/products/software-firmware"],
    ],
  },
  {
    title: "Resources",
    links: [
      ["Datasheets", "/resources"],
      ["Manuals", "/resources"],
      ["Firmware", "/resources"],
      ["Software Tools", "/resources"],
    ],
  },
  {
    title: "Support",
    links: [
      ["Custom Development", "/support"],
      ["A/S", "/support"],
      ["Installation & Teaching", "/support"],
      ["FAQ", "/support/faq"],
    ],
  },
];

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <div>
          <p className="footer-brand">ROBOTRO</p>
          <p className="footer-copy">
            로보트로는 JS-R7 서보모터와 모터 드라이버를 중심으로, 소형 로봇 구동 시스템을 개발합니다.
          </p>
        </div>
        {columns.map((column) => (
          <div key={column.title}>
            <h2>{column.title}</h2>
            {column.links.map(([label, href]) => (
              <Link key={label} href={href}>
                {label}
              </Link>
            ))}
          </div>
        ))}
        <div>
          <h2>Contact</h2>
          <p>경기도 부천시 평천로 655</p>
          <p>부천테크노파크 402-1203</p>
          <p>admin@robotro.com</p>
          <p>070-8224-4100</p>
        </div>
      </div>
    </footer>
  );
}
