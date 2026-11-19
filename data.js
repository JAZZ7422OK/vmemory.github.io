// ==========================================
// [V-MEMORY 전광판] 숫자나 15초 영상 파일명만 여기서 고치세요!
// ==========================================
const VMEMORY_DATA = {
    // 1. 실시간 지표 (특허 수량이나 TRL 바뀌면 여기 숫자만 수정!)
    metrics: {
        trlStatus: "TRL 4 완료 → TRL 5 검증 진입",
        patentApplied: "47건+",
        patentRegistered: "8건",
        pctApplied: "3건",
        lastUpdated: "2026.11"
    },

    // 2. 궁금한 걸 누르면 뜨는 [15초 그록 AI 영상 브리핑] 목록
    // 나중에 깃허브에 mp4 영상 올리고 videoFile 이름만 맞춰주면 바로 재생됩니다!
    videos: [
        {
            id: "v1",
            badge: "Q1 · 15초 브리핑",
            title: "브이메모리(V-Memory)는 어떤 회사인가요?",
            desc: "기존 메모리의 한계(Memory Wall)를 새로운 나노 물리 현상으로 돌파하는 차세대 반도체 원천기술 기업입니다.",
            videoFile: "video_01.mp4", // 나중에 올릴 15초 영상 파일명
            poster: "Venus.png",
            detail: "브이메모리는 강유전체 도메인월(Ferroelectric Domain Wall)이라는 근본적인 물리 현상을 제어해 초고속·초저전력 비휘발성 메모리 플랫폼을 구축하고 있습니다."
        },
        {
            id: "v2",
            badge: "Q2 · 15초 브리핑",
            title: "FDWM과 V-Line 기술이 정확히 뭔가요?",
            desc: "전하를 가두는 방식이 아니라, 강유전체 내부의 '전도성 도메인월 경로(V-Line)'를 켜고 끄는 혁신 메커니즘입니다.",
            videoFile: "video_02.mp4",
            poster: "Venus_Model_m.jpg",
            detail: "커패시터와 트랜지스터 의존도를 없앤 0T0C 아키텍처와 비파괴 읽기(NDRO)를 지향하며, 기존 반도체 표준 소재(HZO)와 CMOS/BEOL 공정 호환성을 목표로 합니다."
        },
        {
            id: "v3",
            badge: "Q3 · 15초 브리핑",
            title: "기존 DRAM · 낸드플래시와 뭐가 다른가요?",
            desc: "FeFET·FeRAM·FTJ와도 물리적 저장 대상과 읽기 원리가 완전히 다른 독자적 도메인월 아키텍처입니다.",
            videoFile: "video_03.mp4",
            poster: "Venus.png",
            detail: "전하 저장이나 파괴적 읽기 방식에서 벗어나 도메인월의 저항/전류 상태를 직접 읽음으로써, AI 데이터센터의 발열과 전력 병목을 근본적으로 해결할 잠재력을 갖습니다."
        },
        {
            id: "v4",
            badge: "Q4 · 15초 브리핑",
            title: "V-Quantum & 피지컬 AI(VENUS)의 미래",
            desc: "메모리가 곧 연산을 수행하는 CIV(Computing-In-Vmemory)와 휴머노이드의 초저전력 신경망을 향합니다.",
            videoFile: "video_04.mp4",
            poster: "Venus_Model_m.jpg",
            detail: "멀티 스테이트 전도성 구조를 활용해 데이터 이동을 최소화하는 메모리 내 연산(CIV) 및 상온 아날로그 컴퓨팅(V-Quantum) 패러다임으로 확장하고 있습니다."
        }
    ]
};
