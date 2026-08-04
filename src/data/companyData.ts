import { BusinessService, ProjectItem, Milestone, Certification, JobOpening, OfficeLocation } from '../types';

export const COMPANY_INFO = {
  nameKo: '유지텔레컴 주식회사',
  nameEn: 'UG Telecom Co., Ltd.',
  brandName: 'UG Telecom',
  slogan: 'Better Connection, Better Future.',
  ceo: '유지형',
  established: '2001년 04월 18일',
  licenseNo: '서울-정보통신-제021488호',
  bizRegNo: '214-88-12940',
  headquarters: '서울특별시 서초구 반포대로 138 유지빌딩 5-7층',
  representativePhone: '02-588-3200',
  fax: '02-588-3205',
  email: 'contact@ugtelecom.co.kr',
  stats: [
    { label: '누적 광통신망 구축', value: '12,500', unit: 'km+', desc: '전국 백본 및 접근 망 완료' },
    { label: '5G/LTE 기지국 공사', value: '9,800', unit: '개소+', desc: 'In-Building & 옥외 음영 해소' },
    { label: '안전사고 무재해 기록', value: '2,450', unit: '일+', desc: '중대재해 Zero 실현' },
    { label: '주요 프로젝트 완수율', value: '100', unit: '%', desc: '공기 준수 및 감리 우수' }
  ]
};

export const CORE_SERVICES: BusinessService[] = [
  {
    id: 'mobile-infra',
    title: '5G / 이동통신 기지국 구축',
    subtitle: '5G Mobile Base Stations & In-Building Networks',
    category: '이동통신 인프라',
    iconName: 'RadioTower',
    description: 'SKT, SKB 등 주요 통신사업자의 5G/LTE 이동통신 기지국, 중계기, 인빌딩(In-Building) 음영지역 해소 통신설비를 정밀 구축합니다.',
    features: [
      '5G Massive MIMO 및 초고주파(28GHz) 기지국 안테나 설치',
      '지하철, 터널, 대형 빌딩 음영지역 초고속 인빌딩 안테나 구축',
      'RF 환경 측정 및 신호 품질 최적화(Optimization)',
      '친환경 공법 적용 및 노후 통신설비 교체 공사'
    ],
    specs: [
      { label: '주요 발주처', value: 'SK텔레컴, SK브로드밴드, 공공기관' },
      { label: '주요 기술', value: 'Massive MIMO, Beamforming, RF Optimization' },
      { label: '품질 표준', value: 'ISO 9001 / 정보통신공사 표준시방서' }
    ],
    bgImage: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: 'optical-backbone',
    title: '광통신망 & 백본 인프라',
    subtitle: 'Optical Fiber Backbone & FTTx Network',
    category: '유선 통신망',
    iconName: 'Network',
    description: '국가 기간 통신망, 도시 간 광통신 백본망, FTTx 간선 통신망의 설계, 융착접속, 관로 공사 및 시험을 전담합니다.',
    features: [
      '초고속 대용량 대간선 Optical Fiber Cable 접속 및 관관로 구축',
      'OTDR 정밀 광손실 측정 및 광대역 통신 품질 보증',
      '지중화 통신관로 공사 및 도로 굴착/복구 전문 표준 시공',
      '데이터센터(IDC) 간 초고속 전용 회선망 구축'
    ],
    specs: [
      { label: '누적 실적', value: '전국 12,500km 이상 접속' },
      { label: '측정 장비', value: 'EXFO / Anritsu 4K OTDR' },
      { label: '응답 시간', value: '긴급 단선 시 2시간 이내 현장 출동' }
    ],
    bgImage: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: 'rail-transport-its',
    title: '철도 & 도로 스마트 교통 통신(ITS)',
    subtitle: 'Railway & Highway Smart ITS Telecom Systems',
    category: '공공/스마트 교통',
    iconName: 'Train',
    description: '한국철도공사(KORAIL), 국가철도공단, 한국도로공사의 LTE-R/KTCS-2 철도 통합 무선통신망 및 도로 지능형 교통체계(ITS) 통신설비를 구축합니다.',
    features: [
      '철도 전용 무선통신망(LTE-R / K-IRT) 기지국 및 터널 안테나 설비',
      '고속도로 C-ITS(차량·도로 간 협력형 주행) 통신 센서 망',
      '철도 역사 및 터널 내 재난안전통신망(PS-LTE) 연동 구축',
      '열차 제어 통신 시스템 및 중앙 관제 센터 설비 공사'
    ],
    specs: [
      { label: '주요 사업', value: 'KTX, GTX, 신안산선, 경부고속도로 C-ITS' },
      { label: '안전 인증', value: 'ISO 45001 안전보건경영 인증' },
      { label: '신뢰도', value: '철도 신호 연동 무결성 100%' }
    ],
    bgImage: 'https://images.unsplash.com/photo-1474487548417-781cb71495f3?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: 'smart-building',
    title: '스마트 빌딩 & CCTV 통합 관제',
    subtitle: 'Smart Building IFA & Integrated CCTV Control',
    category: '건축 ICT',
    iconName: 'Building2',
    description: '대기업 사옥, 공공 청사, 아파트단지의 약전 통신, 홈네트워크, 지능형 CCTV, 출입통제 및 종합 관제 시스템을 통공사합니다.',
    features: [
      '지능형 AI 영상분석 기반 CCTV 통합 관제 센터 구축',
      '스마트홈 IoT 통신 배선 및 구내통신 설비 특등급 인증 공사',
      '출입통제, 주차차단, 비상벨 및 방송 설비 일체 시공',
      '건물 통합 관리(BEMS) 통신 인터페이스 연동'
    ],
    specs: [
      { label: '적용 분야', value: '초고층 빌딩, 지식산업센터, 공공기관' },
      { label: '구내통신', value: '구내통신 특등급 표준 준수' },
      { label: '파트너', value: '현대건설, 삼성물산, GS건설' }
    ],
    bgImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: 'noc-maintenance',
    title: '통신 유지보수 및 NOC 관제 센터',
    subtitle: '24/7 Network Operations Center & Field Maintenance',
    category: '유지보수 관제',
    iconName: 'ShieldCheck',
    description: '365일 24시간 실시간 무선/유선 네트워크 상태를 감시하며, 예기치 않은 선로 장애 시 긴급 복구조를 투입하여 네트워크 중단을 최단 시간에 해결합니다.',
    features: [
      '24시간 365일 전문 실시간 통합 통신 관제(NOC)',
      '전국 긴급 장애 복구 패트롤팀(Mobile Service Team) 상시 대기',
      '주기적 예방 정검 및 통신 품질 측정 보고서 제출',
      '백업 선로 우회 자동 전환(Failover) 시스템 운용'
    ],
    specs: [
      { label: '대기 관제', value: '24/7 NOC 실시간 모니터링' },
      { label: '장애 대응', value: 'SLA 기준 1시간 이내 현장 도달' },
      { label: '장비 보유', value: '긴급 복구 전용 차 및 스플라이서' }
    ],
    bgImage: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: 'defense-public',
    title: '국방 & 공공 자가망 통신',
    subtitle: 'Defense & Public Private Telecommunication Networks',
    category: '특수/국방 통신',
    iconName: 'Shield',
    description: '높은 보안성을 요하는 국방부, 경찰청, 소방청, 지방자치단체의 전용 자가 광통신망 및 보안 통신 시스템을 엄격한 보안 규정에 맞추어 시공합니다.',
    features: [
      '국방 광대역 통합망(M-Sam) 및 자가통신망 시공',
      '재난안전통신망(PS-LTE) 지자체 관제 센터 연동',
      '물리적 보안 통신 관로 및 데이터 암호화 장비 설치',
      '시도지적 지형정보 GIS 통합 통신망 구축'
    ],
    specs: [
      { label: '보안 등급', value: '국방 보안 가이드라인 준수' },
      { label: '경력 요구', value: '신원조회 검증 필 엔지니어 상주' },
      { label: '발주처', value: '국방부, 경찰청, 지자체' }
    ],
    bgImage: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200&auto=format&fit=crop'
  }
];

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: 'proj-01',
    title: 'SK텔레컴 수도권 5G 3.5GHz/28GHz 기지국 고도화',
    client: 'SK텔레컴 (SK Telecom)',
    clientCategory: 'skt',
    year: '2025',
    category: '5G 이동통신',
    location: '서울특별시 및 경기도 전역',
    scope: '5G Massive MIMO 기지국 1,200개소 안테나 교체 및 광선로 커넥티비티 공사',
    scale: '185억 원',
    description: '수도권 주요 도심 및 트래픽 집중 구역의 5G 품질을 향상시키기 위한 Massive MIMO 고속 안테나 및 광중계기 최적화 통합 구축 공사.',
    highlights: [
      '트래픽 밀집 지역 품질 35% 향상',
      '주야간 야간작업 안전보건 지침 준수 무사고 완수',
      'SKT 우수 시공 협력사 표창 수상'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 'proj-02',
    title: 'GTX-A 노선(수서~동탄) 철도통신 LTE-R 및 PS-LTE 구축',
    client: '국가철도공단 / 한국철도공사',
    clientCategory: 'railway',
    year: '2024',
    category: '철도/교통 통신',
    location: 'GTX-A 수서-동탄 지하 터널 구간',
    scope: '지하 대심도 터널 내 LTE-R 기지국, 누설동축케이블(LCX), 재난망 연동 통신 시스템 시공',
    scale: '142억 원',
    description: '수도권 광역급행철도(GTX-A) 대심도 지하 터널 구간에서 초고속 열차의 안전 운행을 담보하는 LTE-R 무선통신설비 정밀 설치.',
    highlights: [
      '시속 180km 주행 상태에서도 무단절 무선 품질 달성',
      '국가 재난안전통신망(PS-LTE) 100% 호환성 검증',
      '공기 단축 및 철도안전관리체계 통과'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1474487548417-781cb71495f3?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 'proj-03',
    title: '정부세종청사 통합 자가 광통신망 백본 확장 사업',
    client: '행정안전부 정부청사관리본부',
    clientCategory: 'public',
    year: '2024',
    category: '공공 자가망',
    location: '세종특별자치시 정부세종청사',
    scope: '1단계~3단계 정부청사 간 대용량 광케이블 지중화 관로 신설 및 OTDR 통합 모니터링 구축',
    scale: '98억 원',
    description: '정부 핵심 부처 가용 통신 폭 확장을 위한 144코어 지중 광케이블 포설 및 이중화 관로 안전 구축.',
    highlights: [
      '국가 보안 1급 시설 보안 가이드라인 완료',
      '통신 회선 장애 대비 물리적 이중화 망 구성',
      '행안부 감사 우수 현장 지정'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 'proj-04',
    title: '현대건설 여의도 랜드마크 타워 ICT 약전 & 지능형 CCTV 시공',
    client: '현대건설 주식회사',
    clientCategory: 'enterprise',
    year: '2023',
    category: '스마트 빌딩',
    location: '서울특별시 영등포구 여의도동',
    scope: '초고층 업무시설 구내통신 특등급, AI CCTV 850대, 출입통제 및 통합 BEMS 통신 연동',
    scale: '115억 원',
    description: '초고층 빌딩의 안정적 통신 환경 구축을 위한 10Gbps 광배선 시스템 및 AI 영상분석 관제 센터 일체 시공.',
    highlights: [
      '구내통신 특등급 종합 인증 취득',
      '지능형 불꽃/침입 감지 AI CCTV 연동',
      '현대건설 최우수 전기통신 협력사 선정'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 'proj-05',
    title: 'SK브로드밴드 전국 주요 데이터센터(IDC) 간 초고속 전용 회선망',
    client: 'SK브로드밴드 (SK Broadband)',
    clientCategory: 'skt',
    year: '2023',
    category: '광통신망',
    location: '서울 서초 IDC - 판교 IDC - 대전 IDC 연결망',
    scope: '초고속 DWDM 광선로 접속, 시험, 광단자함(ODF) 고밀도 구축',
    scale: '89억 원',
    description: '데이터센터 간 AI 및 클라우드 트래픽 급증에 대응하기 위한 초저지연 광선로 물리망 구축 사업.',
    highlights: [
      '광 손실율 0.18dB/km 이하의 최고 레벨 품질 달성',
      '초고밀도 864코어 광케이블 무결성 접속',
      'SLA 통과 100%'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 'proj-06',
    title: '경부고속도로 C-ITS 차세대 지능형 교통체계 통신망 시공',
    client: '한국도로공사',
    clientCategory: 'public',
    year: '2022',
    category: '스마트 교통',
    location: '경부고속도로 서울~대전 구간 (130km)',
    scope: '도로변 기지국(RSU) 320개소 설치, 도로 상시 모니터링 통신 센서 망 연동',
    scale: '76억 원',
    description: '자율주행 지원을 위한 도로와 차량 간 5G-V2X / WAVE 실시간 통신 인프라망 성공적 구축.',
    highlights: [
      '자율주행 차량 통신 지연 1ms 이하 실증 성공',
      '24시간 무중단 도로 작업 안전 관리 기준 충족',
      '국토교통부 스마트교통 모범 사례 채택'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1508873696983-2df515122519?q=80&w=1000&auto=format&fit=crop'
  }
];

export const HISTORY_MILESTONES: Milestone[] = [
  {
    year: '2026',
    title: 'AI 기반 스마트 통신선로 관제 시스템 도입 및 중대재해 Zero 2,400일 달성',
    description: '실시간 광선로 진동/절단 감지 AI 모니터링 구축 및 안전보건 우수기업 표창.',
    tag: '혁신 성장'
  },
  {
    year: '2024',
    title: 'GTX 철도통신 LTE-R 대형 프로젝트 완수 & ISO 45001 안전보건 인증 갱신',
    description: '대심도 철도 통합 무선통신망 구축 완수 및 ESG 통합 경영 선포.',
    tag: '대형 수주'
  },
  {
    year: '2021',
    title: 'SK텔레컴 / SK브로드밴드 최우수 정보통신 협력사 파트너십 체결',
    description: '5G 전국망 확장 사업 메인 시공사 지정 및 정보통신공사업 시공능력평가 상위 3% 진입.',
    tag: '파트너십'
  },
  {
    year: '2018',
    title: '기업부설 연구소 설립 및 정보통신공사 특등급 시공자격 획득',
    description: '5G 인빌딩 안테나 특허 출원 및 ISO 9001 품질경영시스템 인증 확립.',
    tag: '기술 개발'
  },
  {
    year: '2010',
    title: '국가 기간 통신망 광케이블 지중화 공사 대규모 수주',
    description: '공공기관 자가망 및 도로공사 ITS 사업 진출, 사옥 서초구 이전.',
    tag: '사업 확장'
  },
  {
    year: '2001',
    title: '유지텔레컴 주식회사 설립 (설립일 2001년 4월 18일)',
    description: '정보통신공사업 면허 등록 및 통신 인프라 전문기업으로서 첫발을 내딛음.',
    tag: '창립'
  }
];

export const CERTIFICATIONS: Certification[] = [
  {
    id: 'cert-01',
    title: '정보통신공사업 면허증',
    issuer: '과학기술정보통신부 / 서울특별시',
    certNumber: '서울-제021488호',
    date: '2001.04.18',
    category: '면허/법인'
  },
  {
    id: 'cert-02',
    title: 'ISO 9001 품질경영시스템 인증',
    issuer: 'KQA 한국품질인증원',
    certNumber: 'KQA-Q091823',
    date: '2018.06.12',
    category: '품질인증'
  },
  {
    id: 'cert-03',
    title: 'ISO 45001 안전보건경영시스템 인증',
    issuer: 'KQA 한국품질인증원',
    certNumber: 'KQA-S210452',
    date: '2021.03.05',
    category: '안전보건'
  },
  {
    id: 'cert-04',
    title: 'INNO-BIZ 기술혁신형 중소기업 인증',
    issuer: '중소벤처기업부',
    certNumber: '210103-0912',
    date: '2021.11.10',
    category: '기술인증'
  },
  {
    id: 'cert-05',
    title: '벤처기업 확인서 (R&D 우수)',
    issuer: '벤처기업확인기관',
    certNumber: '20220412-001',
    date: '2022.04.12',
    category: '기술인증'
  },
  {
    id: 'cert-06',
    title: 'SKT/SKB 안전시공 우수 협력사 지정서',
    issuer: 'SK텔레컴 주식회사',
    certNumber: 'SKT-SUP-2024-032',
    date: '2024.01.15',
    category: '표창/지정'
  }
];

export const JOB_OPENINGS: JobOpening[] = [
  {
    id: 'job-01',
    title: '정보통신공사 현장소장 (시공관리 / 경력직)',
    department: '공사관리본부',
    location: '수도권 / 전국 현장',
    type: '정규직',
    experience: '경력 7년 이상',
    deadline: '채용시 마감',
    requirements: [
      '정보통신기사 또는 고급/특급 기술자 수첩 보유자 필수',
      '이동통신 기지국 / 광통신망 / 철도통신 현장 관리 경력자',
      '발주처(SKT, 공공기관) 및 협력업체 정산/감리 대응 경험자',
      '운전면허 소지자 및 현장 상주 가능자'
    ],
    responsibilities: [
      '정보통신 공사 현장 공정관리, 품질관리 및 안전관리 총괄',
      '시공 도면 검토, 내역서 정산, 감리단 승인 업무',
      '작업자 TBM(Tool Box Meeting) 및 위험성평가 실시'
    ]
  },
  {
    id: 'job-02',
    title: '5G/LTE RF 및 네트워크 측정 엔지니어',
    department: '기술연구소 / 품질팀',
    location: '서울 본사 (서초구)',
    type: '정규직',
    experience: '경력 3년 이상',
    deadline: '2026.08.31',
    requirements: [
      'RF 환경 측정 장비(Anritsu, Rohde&Schwarz) 운용 가능자',
      'OTDR 및 광품질 테스트 경험 보유자',
      '이동통신 공학 / 정보통신 공학 전공자 우대'
    ],
    responsibilities: [
      '5G/LTE 기지국 구축 후 전파 품질 측정 및 최적화 리포팅',
      '광통신망 손실 측정 및 준공 검사 보고서 작성',
      '발주처 품질 시공 검수 대응'
    ]
  },
  {
    id: 'job-03',
    title: '안전보건 관리자 (ISO 45001 담당)',
    department: '안전보건경영실',
    location: '서울 본사 및 현장 순찰',
    type: '정규직',
    experience: '경력 3년 이상',
    deadline: '채용시 마감',
    requirements: [
      '산업안전기사 또는 건설안전기사 자격증 필수',
      '중대재해처벌법 대응 및 ISO 45001 실무 경험자',
      '현장 위험성평가 및 안전 교육 기획 능력'
    ],
    responsibilities: [
      '전사 안전보건 경영체계 운영 및 현장 점검',
      '위험성평가 실시 및 TBM 현장 코칭',
      '안전보건 자율점검 및 재해 예방 대책 수립'
    ]
  }
];

export const OFFICE_LOCATIONS: OfficeLocation[] = [
  {
    id: 'off-01',
    name: '서울 본사 (Headquarters)',
    address: '서울특별시 서초구 반포대로 138 유지빌딩 5-7층',
    tel: '02-588-3200',
    fax: '02-588-3205',
    contactPerson: '경영지원본부 수주팀',
    email: 'contact@ugtelecom.co.kr',
    lat: 37.4891,
    lng: 127.0102,
    isHeadquarter: true
  },
  {
    id: 'off-02',
    name: '수도권 기술센터 & NOC 관제소',
    address: '경기도 성남시 분당구 판교역로 240 삼환하이펙스 A동 8층',
    tel: '031-708-3200',
    fax: '031-708-3205',
    contactPerson: '네트워크관제팀',
    email: 'noc@ugtelecom.co.kr',
    lat: 37.4012,
    lng: 127.1105,
    isHeadquarter: false
  },
  {
    id: 'off-03',
    name: '영남 사업소 (부산/대구)',
    address: '부산광역시 해운대구 센텀중앙로 78 센텀필1관 12층',
    tel: '051-744-3200',
    fax: '051-744-3205',
    contactPerson: '영남영업본부',
    email: 'busan@ugtelecom.co.kr',
    lat: 35.1745,
    lng: 129.1301,
    isHeadquarter: false
  },
  {
    id: 'off-04',
    name: '호남 사업소 (광주/대전)',
    address: '광주광역시 서구 상무중앙로 114 스마트타워 6층',
    tel: '062-383-3200',
    fax: '062-383-3205',
    contactPerson: '호남영업본부',
    email: 'gwangju@ugtelecom.co.kr',
    lat: 35.1523,
    lng: 126.8512,
    isHeadquarter: false
  }
];

export const CLIENT_LOGOS = [
  { name: 'SK텔레컴', type: '이동통신사' },
  { name: 'SK브로드밴드', type: '이동통신사' },
  { name: '행정안전부', type: '정부기관' },
  { name: '한국철도공사 (KORAIL)', type: '공공기관' },
  { name: '국가철도공단', type: '공공기관' },
  { name: '한국도로공사', type: '공공기관' },
  { name: '현대건설', type: '건설사' },
  { name: '삼성물산', type: '건설사' },
  { name: 'GS건설', type: '건설사' },
  { name: '국방부', type: '정부기관' }
];
