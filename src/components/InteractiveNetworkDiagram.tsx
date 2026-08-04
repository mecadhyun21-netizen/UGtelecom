import React, { useState } from 'react';
import { RadioTower, Network, Train, Building2, ShieldCheck, Zap, Activity, CheckCircle2 } from 'lucide-react';

export const InteractiveNetworkDiagram: React.FC = () => {
  const [activeNode, setActiveNode] = useState<number>(0);

  const nodes = [
    {
      id: 0,
      title: '5G / 이동통신 기지국 (Radio Access Network)',
      sub: 'Cell Sites, Massive MIMO & In-Building',
      icon: <RadioTower className="w-5 h-5" />,
      tag: '무선 통신망',
      status: '정상 가동 중 (Normal)',
      desc: 'SKT/SKB 5G/LTE 기지국, 옥외 철탑, 건물 내부 인빌딩 안테나 및 광중계기 수신음영 완전 해소 시공.',
      metrics: [
        { label: '누적 구축 개소', val: '9,800+ 개소' },
        { label: '주파수 대역', val: '3.5GHz / 28GHz' },
        { label: '전파 품질', val: '99.98% 커버리지' }
      ]
    },
    {
      id: 1,
      title: '초고속 광통신망 백본 (Optical Backbone Network)',
      sub: 'FTTx, High-Density Fiber & DWDM Tunnels',
      icon: <Network className="w-5 h-5" />,
      tag: '유선 관로망',
      status: '초저지연 회선 운용 중',
      desc: '144/864코어 대용량 광케이블 지중화 포설, OTDR 정밀 접속 및 IDC 간 초고속 전용회선 망 연동.',
      metrics: [
        { label: '누적 포설 길의', val: '12,500+ km' },
        { label: '광 손실률', val: '0.18dB/km 이하' },
        { label: '지중 이중화', val: '100% 이중 관로' }
      ]
    },
    {
      id: 2,
      title: '철도 & 도로 스마트 교통 (Smart Transport ITS)',
      sub: 'LTE-R Railway & C-ITS V2X Highway',
      icon: <Train className="w-5 h-5" />,
      tag: '공공/철도망',
      status: '고속주행 호환 검증완료',
      desc: 'KORAIL/GTX 지하 대심도 터널 LTE-R 무선망, 누설동축케이블(LCX) 및 C-ITS 자율주행 도로 센서 연동.',
      metrics: [
        { label: '최대 수용 속도', val: '시속 180km+ 무단절' },
        { label: '재난망 연동', val: 'PS-LTE 100% 호환' },
        { label: '안전성 평가', val: '안전진단 통과' }
      ]
    },
    {
      id: 3,
      title: '스마트 빌딩 & CCTV (Smart Building ICT)',
      sub: 'IFA, AI Video Surveillance & BEMS',
      icon: <Building2 className="w-5 h-5" />,
      tag: '건축/보안',
      status: '구내통신 특등급 인증',
      desc: '초고층 아파트/사옥 구내통신, AI 영상분석 기반 CCTV 통합 관제 및 스마트 출입통제 종합 일체 시공.',
      metrics: [
        { label: '구내통신 등급', val: '특등급 정식 인증' },
        { label: 'AI CCTV 연동', val: '실시간 불꽃/침입 감지' },
        { label: '협력사 파트너', val: '현대건설, 삼성물산' }
      ]
    },
    {
      id: 4,
      title: '24/7 NOC 통합 관제 센터 (Network Operations)',
      sub: '365 Days Real-time Monitoring & Emergency Patrol',
      icon: <ShieldCheck className="w-5 h-5" />,
      tag: '통합 관제',
      status: 'SLA 1시간 대응 체계',
      desc: '전국 통신망 이상 유무를 365일 24시간 실시간 감시하며, 선로 단선 발생 시 긴급 복구조 즉시 현장 투입.',
      metrics: [
        { label: '관제 가동률', val: '365일 24시간' },
        { label: '현장 도착 SLA', val: '1시간 이내' },
        { label: '복구 패트롤', val: '전국 사업소 상시 대기' }
      ]
    }
  ];

  return (
    <section className="py-20 bg-[#111111] text-white border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-[#F2B21B] text-xs font-bold">
            <Activity className="w-3.5 h-3.5 animate-pulse text-emerald-400" />
            유지텔레컴 종합 ICT 인프라 연동 체계도
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white">
            유무선 통신망 통합 엔지니어링 맵
          </h2>
          <p className="text-xs sm:text-sm text-slate-400">
            기지국 무선 구간부터 광통신 백본, 스마트 빌딩, 철도 교통망, 24시간 NOC 관제까지 하나로 이어집니다. 아래 각 노드를 클릭하여 기술 스펙을 확인해보세요.
          </p>
        </div>

        {/* Visual Architecture Node Connector Diagram */}
        <div className="bg-slate-900/90 rounded-2xl p-6 sm:p-8 border border-slate-800 shadow-2xl relative overflow-hidden">
          {/* Background Geometric Concentric Rings */}
          <div className="absolute -top-20 -right-20 w-[400px] h-[400px] border-[30px] border-[#323A87]/20 rounded-full pointer-events-none" />
          <div className="absolute -top-10 -right-10 w-[280px] h-[280px] border-[2px] border-[#F2B21B]/15 border-dashed rounded-full pointer-events-none" />

          {/* Interactive Flow Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-8 relative z-10">
            {nodes.map((node) => (
              <button
                key={node.id}
                onClick={() => setActiveNode(node.id)}
                className={`p-4 rounded-xl text-left border transition-all duration-200 flex flex-col justify-between ${
                  activeNode === node.id 
                    ? 'bg-[#323A87] border-[#F2B21B] shadow-lg text-white scale-105' 
                    : 'bg-slate-800/80 border-slate-700/80 hover:bg-slate-800 text-slate-300'
                }`}
              >
                <div className="flex justify-between items-center mb-3">
                  <div className={`p-2 rounded-lg ${activeNode === node.id ? 'bg-[#F2B21B] text-[#111111]' : 'bg-slate-700 text-white'}`}>
                    {node.icon}
                  </div>
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded ${activeNode === node.id ? 'bg-white/20 text-white' : 'bg-slate-700 text-slate-300'}`}>
                    Node 0{node.id + 1}
                  </span>
                </div>
                <div>
                  <h4 className="text-xs font-bold line-clamp-1">{node.title.split('(')[0]}</h4>
                  <p className="text-[10px] text-slate-400 mt-0.5 line-clamp-1">{node.tag}</p>
                </div>
              </button>
            ))}
          </div>

          {/* Active Node Detail Display Box */}
          <div className="bg-slate-950/80 rounded-2xl p-6 sm:p-8 border border-slate-800 relative z-10 space-y-6 animate-in fade-in duration-300">
            <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-3 border-b border-slate-800 pb-4">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-[#323A87] text-[#F2B21B] rounded-xl font-bold">
                  {nodes[activeNode].icon}
                </div>
                <div>
                  <span className="text-[11px] font-bold text-[#F2B21B] uppercase tracking-wider">{nodes[activeNode].tag}</span>
                  <h3 className="text-xl font-bold text-white">{nodes[activeNode].title}</h3>
                  <p className="text-xs text-slate-400">{nodes[activeNode].sub}</p>
                </div>
              </div>

              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-950/60 border border-emerald-800/80 text-emerald-400 text-xs font-semibold self-start sm:self-auto">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                <span>{nodes[activeNode].status}</span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed bg-slate-900/80 p-4 rounded-xl border border-slate-800">
              {nodes[activeNode].desc}
            </p>

            {/* Metrics Breakdown */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {nodes[activeNode].metrics.map((m, idx) => (
                <div key={idx} className="p-4 bg-slate-900/90 rounded-xl border border-slate-800 space-y-1">
                  <span className="text-xs font-medium text-slate-400 block">{m.label}</span>
                  <span className="text-lg font-extrabold text-[#F2B21B]">{m.val}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
