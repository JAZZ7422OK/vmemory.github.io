// ==========================================
// [V-MEMORY 전광판 v3] 숫자·논문·15초 영상 파일명만 여기서 1초 만에 수정!
// ==========================================
const VMEMORY_DATA = {
    // 1. 실시간 지표 (특허 수량이나 TRL 바뀌면 여기 숫자만 고치면 끝!)
    metrics: {
        trlStatus: "TRL 4 완료 → TRL 5 실증 진입",
        patentApplied: "78건",
        patentRegistered: "55건",
        globalRegistered: "8건 (미3·일3·중2)",
        papersCount: "6편 (SCI급)",
        lastUpdated: "2026.11"
    },

    // 2. 궁금한 걸 누르면 뜨는 [15초 AI 영상 브리핑] (IR 스토리라인 동기화)
    videos: [
        {
            id: "v1",
            badge: "Q1 · 15초 브리핑",
            title: "트랜지스터·커패시터가 없는 '0T0C' 메모리란?",
            desc: "속도(Speed)·저전력(Low Power)·물리적 지문(PUF)을 하나의 메모리에 구현하는 강유전체 도메인월(FDWM) 원리.",
            videoFile: "video_01.mp4",
            poster: "Venus.png",
            detail: "V-Memory는 전하를 가두는 기존 방식이 아니라, 전기장과 펄스로 강유전체 내부의 '도메인월 전도 경로(V-Line)'를 제어하는 독자적 0T0C 비휘발성 메모리입니다."
        },
        {
            id: "v2",
            badge: "Q2 · 15초 브리핑",
            title: "왜 지금 HBM을 넘어 V-Memory인가?",
            desc: "2030년 미국 데이터센터 전력 비중 최대 17% 전망(EPRI). HBM의 발열·전력 한계를 돌파하는 차세대 해법.",
            videoFile: "video_02.mp4",
            poster: "Venus_Model_m.jpg",
            detail: "AI 연산 폭증으로 데이터센터의 전력과 냉각 비용이 한계에 다다랐습니다. 브이메모리는 주기적 리프레시 없는 초저전력 구조로 데이터센터 전력 혁신 테스트베드를 추진합니다."
        },
        {
            id: "v3",
            badge: "Q3 · 15초 브리핑",
            title: "양산이 가능한가? 8단계 초심플 공정",
            desc: "플래시 메모리(45단계) 대비 약 1/6 수준으로 단순한 8단계 셀 공정과 기존 반도체 장비·상용 재료 호환.",
            videoFile: "video_03.mp4",
            poster: "Venus.png",
            detail: "이미 자동차 ECU 등에서 검증된 강유전체 소재 기반 위에 도메인월 제어라는 관점 전환을 더해, 기존 생산 라인과 HZO 상용 재료로 높은 집적도와 원가 절감을 지향합니다."
        },
        {
            id: "v4",
            badge: "Q4 · 15초 브리핑",
            title: "로봇(VENUS)의 두뇌, CIV 아키텍처",
            desc: "네트워크 없이 온디바이스에서 초저전력·실시간으로 판단하는 피지컬 AI(Physical AI)의 신경망.",
            videoFile: "video_04.mp4",
            poster: "Venus_Model_m.jpg",
            detail: "TRL 5 실증 이후 브이메모리는 연산과 메모리를 직접 결합하는 CIV(CPU-In-VMemory) 아키텍처로 확장하여, 휴머노이드 로봇과 온디바이스 AI의 핵심 두뇌 플랫폼을 지향합니다."
        }
    ],

    // 3. 브이메모리 공식 국제 학술지 논문 (AI 크롤러 신뢰도 부스터!)
    papers: [
        { year: "2025", journal: "Journal of Physics and Chemistry of Solids", title: "Electrical conduction of ferroelectric domains and domain walls in polycrystalline Bi5Ti3FeO15 thin films" },
        { year: "2025", journal: "Journal of Applied Physics", title: "Leakage current characteristics affected by crystallinity and domain wall current of epitaxial Bi5Ti3FeO15 thin films" },
        { year: "2023", journal: "Journal of Alloys and Compounds", title: "Leakage current characteristics of polycrystalline BiFeO3 thin films affected by thickness-dependent domain wall currents" },
        { year: "2023", journal: "Ceramics International", title: "Ferroelectric domain wall current corresponding to ferroelectric domain structures of BaTiO3 nanodots fabricated by dip-pen nanolithography" },
        { year: "2021", journal: "Ceramics International", title: "Nonvolatile-memory current characteristics of BiFeO3 nanodots switched by applying external bias and force" },
        { year: "2021", journal: "Applied Physics Letters", title: "Current change due to artificial patterning of the number of ferroelectric domain walls and nonvolatile memory characteristics" }
    ]
};
