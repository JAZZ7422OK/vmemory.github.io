// ==========================================
// [V-MEMORY 전광판 v4] 5대 핵심 15초 브리핑 & 실시간 지표
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

    // 2. 기승전결 5단계 [15초 AI 영상 브리핑] (1T1C 기초 → 0T0C → V-Line → HBM → 계층 통합)
    videos: [
        {
            id: "v1",
            badge: "Q1 · 15초 기초 입문",
            title: "0T0C를 이해하기 위한 첫걸음: 기존 DRAM의 '1T1C' 구조란?",
            desc: "현재 모든 메모리의 표준인 트랜지스터(1T)와 커패시터(1C)의 작동 원리와 미세화·전력 한계를 먼저 짚어봅니다.",
            videoFile: "video_01.mp4",
            poster: "Venus.png",
            detail: "기존 DRAM은 1개의 트랜지스터(스위치)와 1개의 커패시터(전하 저장소)로 1비트를 저장합니다. 이 구조적 한계를 이해하면 트랜지스터와 커패시터를 모두 없앤 V-Memory(0T0C)의 혁신이 명확해집니다."
        },
        {
            id: "v2",
            badge: "Q2 · 15초 핵심 원리 ①",
            title: "트랜지스터 없이, 커패시터 없이: 강유전체 도메인월(FDWM)의 탄생",
            desc: "1990년대 상용화된 FeRAM의 커패시터 한계를 넘어, 강유전체 내부의 분극 경계(도메인월) 전류 경로를 직접 제어합니다.",
            videoFile: "video_02.mp4",
            poster: "Venus_Model_m.jpg",
            detail: "이미 자동차 ECU 등에서 검증된 강유전체 소재 기반 위에, 분극 상태 판독이 아닌 '도메인월 전도 경로(V-Line) 제어'라는 1%의 관점 전환으로 커패시터 없는 0T0C 셀을 지향합니다."
        },
        {
            id: "v3",
            badge: "Q3 · 15초 핵심 원리 ②",
            title: "'면'이 아닌 전류가 흐르는 '선(V-Line)'을 제어하다",
            desc: "기존 1T1C 셀의 신호 여유 한계를 돌파하는 V-Line 아키텍처와 압도적 데이터 마진의 비밀을 공개합니다.",
            videoFile: "video_03.mp4",
            poster: "Venus.png",
            detail: "V-Memory의 'V'는 가변 선(Variable Line)을 의미합니다. 전하를 가두는 면적 대신 나노 단위의 전도성 도메인월 경로(V-Line)를 생성·소멸시켜 고속·초저전력·고집적을 동시에 추구합니다."
        },
        {
            id: "v4",
            badge: "Q4 · 15초 시장 돌파",
            title: "적층의 한계에 부딪힌 HBM, 그 다음 도약을 위한 해법은?",
            desc: "AI 시대를 연 HBM이지만 DRAM 적층 구조로 인한 전력·발열·패키징 한계는 여전합니다. 전혀 다른 DNA의 차세대 메모리가 필요합니다.",
            videoFile: "video_04.mp4",
            poster: "Venus_Model_m.jpg",
            detail: "AI 데이터센터의 폭발적인 전력 소모와 발열을 근본적으로 줄이기 위해서는 기존 MOSFET 기반의 연장이 아닌, 비휘발성과 초저전력을 갖춘 새로운 저장·판독 원리가 필수적입니다."
        },
        {
            id: "v5",
            badge: "Q5 · 15초 미래 아키텍처",
            title: "메모리가 CPU 속도로 움직이면, 컴퓨터의 구조가 달라집니다",
            desc: "레지스터·캐시·DRAM·SSD로 쪼개진 폰 노이만 병목을 허물고, 메모리와 저장을 통합하는 V-Memory의 미래 청사진.",
            videoFile: "video_05.mp4",
            poster: "Venus.png",
            detail: "여러 메모리 계층을 오가며 발생하는 데이터 이동 병목과 접근 지연을 획기적으로 단축하여, AI 데이터센터부터 온디바이스 피지컬 AI(CIV)까지 새로운 컴퓨팅 패러다임을 엽니다."
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
