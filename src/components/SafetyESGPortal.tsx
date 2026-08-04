import React from 'react';
import { ShieldCheck, Award, FileCheck, CheckCircle2, AlertTriangle, Users, HeartHandshake, Leaf, Lock } from 'lucide-react';

export const SafetyESGPortal: React.FC = () => {
  const safetyRules = [
    { title: '작업 전 TBM 및 위험성평가 100% 미팅', desc: '매일 작업 개시 전 현장 위험 요인을 도출하고 안전조치 확인' },
    { title: '안전보호구 완벽 착용 준수', desc: '안전모, 안전대, 절연장갑 등 법정 안전장비 미착용 시 작업 금지' },
    { title: '고소 및 활선 작업 2인 1조 원칙', desc: '고소작업차 및 고압 통신선 인근 작업 시 전담 신호수 및 안전요원 배치' },
    { title: '중대재해 예방 24시간 핫라인', desc: '현장근로자의 작업중지권 100% 보장 및 즉시 보고 체계 구축' }
  ];

  return (
    <section id="safety" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-bold text-emerald-800 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full uppercase tracking-wider">
            Safety First & Quality Commitment
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#111111]">
            안전보건 & 지속가능경영 (ESG)
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            유지텔레컴은 "근로자의 안전이 최고의 품질"이라는 신념으로 중대재해 Zero를 실천하며 ISO 45001/9001 표준을 엄격히 준수합니다.
          </p>
        </div>

        {/* Safety Record Banner */}
        <div className="bg-gradient-to-r from-[#323A87] via-[#282e6d] to-slate-900 text-white rounded-2xl p-8 sm:p-10 shadow-xl grid grid-cols-1 md:grid-cols-12 gap-8 items-center relative overflow-hidden">
          <div className="md:col-span-8 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-500/20 text-emerald-300 rounded-full text-xs font-bold border border-emerald-500/30">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              ISO 45001 안전보건경영시스템 인증
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold leading-tight">
              무재해 기록 <span className="text-[#F2B21B]">2,450일+</span> 달성 중
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl leading-relaxed">
              유지텔레컴은 고소 작업, 야간 기지국 공사, 광선로 관관로 포설 등 위험 요인이 상존하는 통신공사 현장에서 철저한 사전 위험성평가를 거쳐 단 한 건의 중대재해도 발생시키지 않았습니다.
            </p>
          </div>

          <div className="md:col-span-4 bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 text-center space-y-2">
            <span className="text-xs font-semibold text-slate-300 uppercase block">전사 안전 목표</span>
            <p className="text-2xl font-extrabold text-[#F2B21B]">중대재해 Zero</p>
            <p className="text-[11px] text-slate-300">작업중지권 보장 및 법정 안전교육 100% 이수</p>
          </div>
        </div>

        {/* Safety & Quality Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left: Safety Rules */}
          <div className="bg-[#F5F7FA] rounded-2xl p-6 sm:p-8 border border-slate-200 space-y-6">
            <div className="flex items-center gap-3 border-b border-slate-200 pb-4">
              <div className="p-3 bg-emerald-600 text-white rounded-xl">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#111111]">현장 안전보건 4대 핵심 수칙</h3>
                <p className="text-xs text-slate-500">통신공사 현장 사고 예방을 위한 철칙</p>
              </div>
            </div>

            <div className="space-y-3">
              {safetyRules.map((rule, idx) => (
                <div key={idx} className="bg-white p-4 rounded-xl border border-slate-200 space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-[#323A87] text-white text-[10px] font-bold flex items-center justify-center shrink-0">
                      0{idx + 1}
                    </span>
                    <h4 className="text-xs sm:text-sm font-bold text-[#111111]">{rule.title}</h4>
                  </div>
                  <p className="text-xs text-slate-600 pl-7">{rule.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Quality & ESG */}
          <div className="bg-[#F5F7FA] rounded-2xl p-6 sm:p-8 border border-slate-200 space-y-6">
            <div className="flex items-center gap-3 border-b border-slate-200 pb-4">
              <div className="p-3 bg-[#323A87] text-white rounded-xl">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#111111]">품질경영 (ISO 9001) & ESG</h3>
                <p className="text-xs text-slate-500">투명성과 지속가능성을 위한 기업 활동</p>
              </div>
            </div>

            <div className="space-y-4 text-xs text-slate-700">
              <div className="bg-white p-4 rounded-xl border border-slate-200 space-y-2">
                <div className="flex items-center gap-2 text-[#323A87] font-bold">
                  <FileCheck className="w-4 h-4" />
                  <span>ISO 9001 품질표준 공정 감리 시스템</span>
                </div>
                <p className="text-slate-600 leading-relaxed">
                  자재 검수부터 시공, OTDR 측정, 준공 검사에 이르는 모든 단계에 3단계 품질 측정 매뉴얼을 적용하여 불량률 0%에 도전합니다.
                </p>
              </div>

              <div className="bg-white p-4 rounded-xl border border-slate-200 space-y-2">
                <div className="flex items-center gap-2 text-[#323A87] font-bold">
                  <Leaf className="w-4 h-4 text-emerald-600" />
                  <span>친환경 기지국 공법 및 에너지 절감</span>
                </div>
                <p className="text-slate-600 leading-relaxed">
                  고효율 광전송 장비 도입 및 5G 기지국 전력 최적화 공법을 적용하여 탄소 배출을 저감하고 친환경 공사를 실천합니다.
                </p>
              </div>

              <div className="bg-white p-4 rounded-xl border border-slate-200 space-y-2">
                <div className="flex items-center gap-2 text-[#323A87] font-bold">
                  <HeartHandshake className="w-4 h-4 text-[#F2B21B]" />
                  <span>투명한 상생 협력 및 지역 사회 공헌</span>
                </div>
                <p className="text-slate-600 leading-relaxed">
                  협력업체 대금 100% 현금결제 원칙 준수 및 지역 ICT 기술 인재 육성을 위한 장학 사업을 정기 시행하고 있습니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
