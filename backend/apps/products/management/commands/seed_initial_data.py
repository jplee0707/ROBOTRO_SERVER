from datetime import date

from django.core.management.base import BaseCommand

from apps.pages.models import ApplicationExample
from apps.products.models import Product
from apps.resources.models import Resource


class Command(BaseCommand):
    help = "Seed initial ROBOTRO products, resources, and application examples."

    def handle(self, *args, **options):
        products = [
            {
                "name": "JS-R7 Servo Motor",
                "slug": "js-r7-servo-motor",
                "category": Product.Category.SERVO_MOTOR,
                "short_description": "소형 로봇과 커스텀 메커니즘을 위한 컴팩트 서보 액추에이터",
                "description": "JS-R7은 소형 로봇 관절, 교육/연구 장비, 커스텀 자동화 장치에 적용할 수 있는 ROBOTRO의 핵심 서보모터입니다.",
                "key_features": ["Compact size", "Position control", "Firmware upgradable", "PC control through JSProgramer"],
                "specifications": {
                    "Control Mode": "Position control",
                    "Communication": "TBD",
                    "Rated Voltage": "TBD",
                    "Dimensions": "TBD",
                },
                "is_featured": True,
                "order": 1,
            },
            {
                "name": "Motor Drivers",
                "slug": "motor-drivers",
                "category": Product.Category.MOTOR_DRIVER,
                "short_description": "ROBOTRO 서보/모터 시스템 제어를 위한 드라이버 보드 제품군",
                "description": "ROBOTRO 모터 드라이버는 소형 로봇 메커니즘을 안정적으로 제어하고 커스텀 하드웨어와 통합되도록 설계됩니다.",
                "key_features": ["Stable motor control", "Custom hardware integration", "ROBOTRO actuator support"],
                "specifications": {"Representative Product": "JSD-B7"},
                "is_featured": True,
                "order": 2,
            },
            {
                "name": "JSD-B7 Motor Driver",
                "slug": "jsd-b7-motor-driver",
                "category": Product.Category.MOTOR_DRIVER,
                "short_description": "기존 ROBOTRO 모터 드라이버 관련 제품",
                "description": "JSD-B7은 ROBOTRO 모터 드라이버 제품군에 포함되는 기존 제품입니다.",
                "key_features": ["Motor driver board", "Integration support"],
                "specifications": {"Interface": "TBD"},
                "is_featured": False,
                "order": 3,
            },
            {
                "name": "JSProgramer",
                "slug": "jsprogramer",
                "category": Product.Category.SOFTWARE_FIRMWARE,
                "short_description": "JS-R7 설정과 테스트를 위한 PC 제어 소프트웨어",
                "description": "JSProgramer는 ROBOTRO 액추에이터 시스템의 설정, 테스트, 펌웨어 관리를 지원합니다.",
                "key_features": ["PC control", "Parameter setup", "Firmware management"],
                "specifications": {"Platform": "TBD"},
                "is_featured": False,
                "order": 4,
            },
            {
                "name": "JS-R7 Firmware",
                "slug": "js-r7-firmware",
                "category": Product.Category.SOFTWARE_FIRMWARE,
                "short_description": "JS-R7 서보모터 제어 펌웨어",
                "description": "JS-R7 펌웨어는 제품 제어와 업그레이드 워크플로우를 지원합니다.",
                "key_features": ["Firmware upgrade", "Control stability"],
                "specifications": {"Version": "TBD"},
                "is_featured": False,
                "order": 5,
            },
        ]

        product_objects = {}
        for payload in products:
            product, _created = Product.objects.update_or_create(slug=payload["slug"], defaults=payload)
            product_objects[payload["slug"]] = product

        resources = [
            ("JS-R7 Datasheet", "js-r7-datasheet", "JS-R7", Resource.Category.DATASHEET, "JS-R7 서보모터 사양과 적용 정보를 정리한 데이터시트입니다.", "v0.1", 1),
            ("JS-R7 Firmware", "js-r7-firmware", "JS-R7", Resource.Category.FIRMWARE, "JS-R7 펌웨어 업데이트 파일입니다.", "TBD", 2),
            ("JSProgramer", "jsprogramer", "JS-R7", Resource.Category.SOFTWARE, "JS-R7 설정과 테스트를 위한 PC 제어 소프트웨어입니다.", "TBD", 3),
            ("JSProgramer Required Installation Files", "jsprogramer-required-installation-files", "JS-R7", Resource.Category.INSTALLATION_GUIDE, "JSProgramer 구동에 필요한 설치 파일 안내입니다.", "TBD", 4),
            ("JSD-B7 Manual", "jsd-b7-manual", "JSD-B7", Resource.Category.MANUAL, "JSD-B7 모터 드라이버 매뉴얼입니다.", "v0.1", 5),
            ("Motor Driver Wiring Guide", "motor-driver-wiring-guide", "Motor Drivers", Resource.Category.WIRING_GUIDE, "모터 드라이버 배선과 설치를 위한 기본 가이드입니다.", "v0.1", 6),
            ("JS-R7S Datasheet", "js-r7s-datasheet", "JS-R7S", Resource.Category.DATASHEET, "JS-R7S 자료 등록을 위한 항목입니다.", "TBD", 7),
            ("JS-R8 Datasheet", "js-r8-datasheet", "JS-R8", Resource.Category.DATASHEET, "JS-R8 자료 등록을 위한 항목입니다.", "TBD", 8),
            ("JS-R8B Datasheet", "js-r8b-datasheet", "JS-R8B", Resource.Category.DATASHEET, "JS-R8B 자료 등록을 위한 항목입니다.", "TBD", 9),
            ("JUNICELL", "junicell", "Software Tools", Resource.Category.SOFTWARE, "JUNICELL이 계속 유효한 경우 공개 파일을 연결하세요.", "TBD", 10),
        ]

        for title, slug, product, category, description, version, order in resources:
            Resource.objects.update_or_create(
                slug=slug,
                defaults={
                    "title": title,
                    "product": product,
                    "category": category,
                    "description": description,
                    "version": version,
                    "published_at": date.today(),
                    "is_public": True,
                    "order": order,
                },
            )

        applications = [
            ("Compact Robot Mechanisms", "compact-robot-mechanisms", ApplicationExample.Category.COMPACT_ROBOTICS, "작은 공간에서 정밀한 움직임이 필요한 로봇 관절과 구동부 예시입니다.", 1),
            ("Delta Robot Example", "delta-robot-example", ApplicationExample.Category.DELTA_ROBOT_EXAMPLE, "델타로봇 메커니즘에 JS-R7과 드라이버를 적용할 수 있는 예시입니다.", 2),
            ("Humanoid Joint Example", "humanoid-joint-example", ApplicationExample.Category.HUMANOID_JOINT_EXAMPLE, "휴머노이드 관절 구조에서 컴팩트 액추에이터를 활용하는 예시입니다.", 3),
            ("Education & Research", "education-research", ApplicationExample.Category.EDUCATION_RESEARCH, "교육용 로봇, 연구 프로토타입, 실험 장비에 적용하는 예시입니다.", 4),
        ]

        for title, slug, category, description, order in applications:
            application, _created = ApplicationExample.objects.update_or_create(
                slug=slug,
                defaults={
                    "title": title,
                    "category": category,
                    "description": description,
                    "order": order,
                    "is_public": True,
                },
            )
            application.related_products.set([product_objects["js-r7-servo-motor"], product_objects["motor-drivers"]])

        self.stdout.write(self.style.SUCCESS("Seeded ROBOTRO initial data."))
