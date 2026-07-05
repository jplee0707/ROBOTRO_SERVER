export default function CompanyPage() {
  return (
    <>
      <section className="page-section soft">
        <div className="page-title">
          <p className="eyebrow">Company</p>
          <h1>Compact actuator technology for robotics developers</h1>
          <p>
            로보트로는 휴머노이드 로봇과 델타로봇 개발 경험을 바탕으로, 앞으로 JS-R7 서보모터와 모터 드라이버
            중심의 소형 로봇 구동 시스템 개발에 집중합니다.
          </p>
        </div>
      </section>
      <section className="section">
        <div className="section-inner split">
          <div className="copy-block">
            <h2>ROBOTRO 방향성</h2>
            <p>
              ROBOTRO has developed robotics hardware based on experience in humanoid robots, delta robots, and custom
              robotic systems. Going forward, ROBOTRO focuses on compact servo motors, motor drivers, firmware, and
              control tools for robotics developers, researchers, and automation teams.
            </p>
            <p>
              기존 로봇 프로젝트의 경험은 유지하되, 제품 메시지는 완성 로봇보다 핵심 구동부와 제어 기술에 맞춥니다.
            </p>
          </div>
          <div className="info-panel product-card">
            <h2>Company Focus</h2>
            <ul className="check-list">
              <li>JS-R7 Servo Motor</li>
              <li>Motor Drivers</li>
              <li>Firmware</li>
              <li>Control Software</li>
              <li>Custom Hardware Support</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
