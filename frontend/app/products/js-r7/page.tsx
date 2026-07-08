
import { getProduct, getResources } from "@/lib/api";

const features = [
  "컴팩트 사이즈",
  "위치 제어",
  "펌웨어 업그레이드",
  "JSProgramer를 통한 PC 제어",
  "커스텀 로봇 메커니즘 적용",
];

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

  return;
}
