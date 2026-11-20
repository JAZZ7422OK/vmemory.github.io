// ==========================================
// [V-MEMORY 전광판 v6] 기술평가 요약서 기반 보강 버전
// (K-TCB 평가금액 등 대외비 수치는 제외하고 공개 팩트만 반영)
// ==========================================
const VMEMORY_DATA = {
    // 1. 실시간 지표 (숫자 바뀔 때 여기만 수정!)
    metrics: {
        trlStatus: "TRL 4 완료 → TRL 5 실증 진입",
        patentApplied: "78건",
        patentRegistered: "55건",
        globalRegistered: "8건 (약 20개 패밀리 구축)",
        papersCount: "6편 (SCI급)",
        lastUpdated: "2026.11"
    },

    // 2. 6단계 [15초 AI 영상 브리핑]
    videos: [
        {
            id: "v1",
            badge: "Q1 · 15초 기초 입문",
            title: "0T0C를 이해하기 위한 첫걸음: 기존 DRAM의 '1T1C' 구조란?",
            desc: "트랜지스터(1T)와 커패시터(1C) 기반 기존 메모리 구조와 미세화·전력 한계를 먼저 짚어봅니다.",
            videoFile: "video_01.mp4",
            poster: "thumb_01.jpg",
            fallbackPoster: "Venus.png",
            detail: "기존 DRAM은 스위치(1T)와 전하 저장통(1C)으로 1비트를 다룹니다. 트랜지스터와 커패시터 구조의 한계를 알면 도메인월 전류 경로를 제어하는 0T0C V-Memory의 차별점이 분명해집니다."
        },
        {
            id: "v2",
            badge: "Q2 · 15초 핵심 원리 ①",
            title: "전하 대신 '도메인월 전류 경로'를 제어하는 FDWM",
            desc: "강유전체 내부 분극 경계(도메인월)를 따라 흐르는 전류 경로를 전압으로 제어하는 원리.",
            videoFile: "video_02.mp4",
            poster: "thumb_02.jpg",
            fallbackPoster: "Venus_Model_m.jpg",
            detail: "전압 펄스로 전기의 길(도메인월 경로)을 생성·소멸시키고, 흐르는 전류 차이를 읽어 비휘발성 저장과 비파괴 읽기(NDRO)를 지향합니다."
        },
        {
            id: "v3",
            badge: "Q3 · 15초 핵심 원리 ②",
            title: "도로 차선을 늘리듯 멀티라인(nDW) & V-Line 확장",
            desc: "단일 선을 넘어 멀티라인(1DW→nDW) 전류 경로 제어로 다중 상태와 신호 여유를 넓히는 구조.",
            videoFile: "video_03.mp4",
            poster: "thumb_03.jpg",
            fallbackPoster: "Venus.png",
            detail: "전극 사이 전류 경로 수(nDW)를 제어하면 전류 신호 수준을 확장할 수 있습니다. 이는 고집적·고신뢰 메모리 및 다중 상태 구현의 핵심 기반입니다."
        },
        {
            id: "v4",
            badge: "Q4 · 15초 시장 돌파",
            title: "적층의 한계에 부딪힌 HBM, 그 다음 도약을 위한 해법은?",
            desc: "DRAM 적층 기반 HBM의 전력·발열·패키징 부담을 줄일 차세대 비휘발성 메모리 비전.",
            videoFile: "video_04.mp4",
            poster: "thumb_04.jpg",
            fallbackPoster: "Venus_Model_m.jpg",
            detail: "AI 데이터센터의 전력과 냉각 부담을 완화하기 위해, 주기적 리프레시가 필요 없는 비휘발성·저전력 도메인월 아키텍처로의 전환을 모색합니다."
        },
        {
            id: "v5",
            badge: "Q5 · 15초 계층 통합",
            title: "메모리가 CPU의 속도로 움직이면, 컴퓨터의 구조가 달라집니다",
            desc: "레지스터·캐시·DRAM·SSD 계층 간 데이터 이동 병목을 줄이는 메모리 통합 구상.",
            videoFile: "video_05.mp4",
            poster: "thumb_05.jpg",
            fallbackPoster: "Venus.png",
            detail: "다단계 메모리 계층을 오가며 생기는 병목과 지연을 줄여, TRL 5 이후 파트너십 기반 공동개발 및 IP 라이선싱 모델로 확장합니다."
        },
        {
            id: "v6",
            badge: "Q6 · 15초 CIV & Physical AI (EN)",
            title: "로봇의 두뇌, 연산과 기억을 직접 결합하는 CIV 아키텍처",
            desc: "가상 AI에서 물리적 행동 AI(Physical AI)로! CIV가 여는 온디바이스 두뇌 아키텍처.",
            videoFile: "video_06.mp4",
            poster: "thumb_06.jpg",
            fallbackPoster: "Venus_Model_m.jpg",
            detail: "[EN Narration Summary] From virtual intelligence to robots that sense and act, the next frontier is the brain. CIV(CPU & V-Memory) brings memory closer to computation—a new vision for Physical AI."
        }
    ],

    // 3. 브이메모리 공식 국제 학술지 논문 (2021–2025)
    papers: [
        { year: "2025", journal: "Journal of Physics and Chemistry of Solids", title: "Electrical conduction of ferroelectric domains and domain walls in polycrystalline Bi5Ti3FeO15 thin films" },
        { year: "2025", journal: "Journal of Applied Physics", title: "Leakage current characteristics affected by crystallinity and domain wall current of epitaxial Bi5Ti3FeO15 thin films" },
        { year: "2023", journal: "Journal of Alloys and Compounds", title: "Leakage current characteristics of polycrystalline BiFeO3 thin films affected by thickness-dependent domain wall currents" },
        { year: "2023", journal: "Ceramics International", title: "Ferroelectric domain wall current corresponding to ferroelectric domain structures of BaTiO3 nanodots fabricated by dip-pen nanolithography" },
        { year: "2021", journal: "Ceramics International", title: "Nonvolatile-memory current characteristics of BiFeO3 nanodots switched by applying external bias and force" },
        { year: "2021", journal: "Applied Physics Letters", title: "Current change due to artificial patterning of the number of ferroelectric domain walls and nonvolatile memory characteristics" }
    ]
};
