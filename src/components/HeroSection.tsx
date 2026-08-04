import React from 'react';
import { COMPANY_INFO } from '../data/companyData';
import { ShieldCheck, ArrowRight, RadioTower, Network, FileText, CheckCircle2, Award, Zap } from 'lucide-react';

interface HeroSectionProps {
  onNavigate: (sectionId: string) => void;
  openRFQModal: () => void;
  openBrochureModal: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onNavigate,
  openRFQModal,
  openBrochureModal,
}) => {
  return (
    <section id="hero" className="relative pt-28 pb-20 md:pt-36 md:pb-24 overflow-hidden bg-gradient-to-br from-white via-[#F5F7FA] to-[#E8EEFF] border-b border-slate-100">
      {/* Background Geometric Concentric Rings Pattern */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-12 right-12 w-[500px] h-[500px] border-[40px] border-[#323A87]/5 rounded-full" />
        <div className="absolute top-24 right-24 w-[380px] h-[380px] border-[2px] border-[#323A87]/10 border-dashed rounded-full" />
        <div className="absolute -bottom-24 -left-24 w-[350px] h-[350px] border-[20px] border-[#F2B21B]/10 rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 space-y-16">
        {/* Main Grid Hero Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Hero Content (7 Cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#E8EEFF] rounded-full border border-[#323A87]/15">
              <span className="w-2 h-2 bg-[#F2B21B] rounded-full animate-pulse" />
              <span className="text-[11px] font-bold text-[#323A87] uppercase tracking-wider">
                Leading ICT Infrastructure • UG Telecom
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#111111] leading-[1.1] tracking-tight">
              Better Connection,<br />
              <span className="text-[#323A87] relative inline-block">
                Better Future.
                <span className="absolute bottom-1 left-0 w-full h-2.5 bg-[#F2B21B]/35 -z-10 rounded-sm" />
              </span>
            </h1>

            <p className="text-base md:text-lg text-slate-600 leading-relaxed max-w-xl font-normal">
              유지텔레컴은 공공기관과 대기업을 위한 최상의 통신 인프라 솔루션을 제공하는 글로벌 ICT 파트너입니다. 5G 기지국, 광통신망, 철도/도로 ITS 및 스마트 빌딩 인프라까지 안전하고 끊김 없는 세상을 디자인합니다.
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-wrap items-center gap-3 sm:gap-4">
              <button
                onClick={openRFQModal}
                className="px-8 py-4 bg-[#323A87] hover:bg-[#282e6d] text-white rounded-2xl font-bold shadow-xl flex items-center gap-2.5 group transition-all relative overflow-hidden"
                title="온라인 사업 문의 및 견적 (Google Sheets 자동 연동)"
              >
                <div className="flex flex-col items-start text-left">
                  <div className="flex items-center gap-2">
                    <span>온라인 사업 문의 및 견적</span>
                    <ArrowRight className="w-5 h-5 text-[#F2B21B] group-hover:translate-x-1 transition-transform" />
                  </div>
                  <span className="text-[10px] text-emerald-300 font-semibold flex items-center gap-1 mt-0.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Google Sheets 수주 DB 자동 저장
                  </span>
                </div>
              </button>

              <button
                onClick={() => onNavigate('business')}
                className="px-8 py-4 bg-white text-[#323A87] border border-[#E8EEFF] rounded-2xl font-bold hover:bg-slate-50 transition-all shadow-sm"
              >
                네트워크 솔루션 보기
              </button>

              <button
                onClick={openBrochureModal}
                className="px-4 py-4 text-xs font-bold text-[#323A87] hover:text-[#282e6d] underline underline-offset-4 flex items-center gap-1.5"
              >
                <FileText className="w-4 h-4" />
                회사소개서 PDF
              </button>
            </div>

            {/* Key Trust Badges */}
            <div className="pt-4 grid grid-cols-2 sm:grid-cols-3 gap-3 border-t border-slate-200/80">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#323A87] shrink-0" />
                <span className="text-xs font-bold text-slate-700">정보통신공사업 면허 보유</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#323A87] shrink-0" />
                <span className="text-xs font-bold text-slate-700">SKT / SKB 우수 협력사</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#323A87] shrink-0" />
                <span className="text-xs font-bold text-slate-700">ISO 9001 / 45001 인증</span>
              </div>
            </div>
          </div>

          {/* Right Hero Graphic Cards (5 Cols) */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            {/* Visual Geometric Cards Stack */}
            <div className="relative w-full grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-xl border border-white space-y-3">
                <div className="w-10 h-10 bg-[#323A87] rounded-xl flex items-center justify-center text-white font-bold shadow-md">
                  <Network className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-[#111111] text-base">Infrastructure</h3>
                <p className="text-xs text-slate-500 leading-relaxed">Next-gen connectivity for enterprise environments.</p>
                <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="font-semibold text-slate-400">광통신망 구축</span>
                  <span className="font-extrabold text-[#323A87]">12,500km+</span>
                </div>
              </div>

              <div className="bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-xl border border-white sm:mt-8 space-y-3">
                <div className="w-10 h-10 bg-[#F2B21B] rounded-xl flex items-center justify-center text-[#111111] font-bold shadow-md">
                  <Zap className="w-6 h-6 text-[#111111]" />
                </div>
                <h3 className="font-bold text-[#111111] text-base">Reliability</h3>
                <p className="text-xs text-slate-500 leading-relaxed">99.9% uptime guaranteed for mission critical ops.</p>
                <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="font-semibold text-slate-400">무재해 기록</span>
                  <span className="font-extrabold text-emerald-600">2,450일+</span>
                </div>
              </div>

              {/* Status Banner */}
              <div className="sm:col-span-2 p-4 bg-white/95 backdrop-blur-md rounded-2xl border border-slate-100 shadow-lg flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-emerald-500 animate-ping shrink-0" />
                  <div>
                    <span className="text-xs font-bold text-[#323A87] block">24/7 NOC 실시간 통신망 관제 시스템 가동 중</span>
                    <span className="text-[11px] text-slate-500">전국 기지국 & 지중 선로 모니터링</span>
                  </div>
                </div>
                <button
                  onClick={() => onNavigate('business')}
                  className="px-3 py-1.5 bg-[#E8EEFF] text-[#323A87] text-xs font-bold rounded-xl hover:bg-[#323A87] hover:text-white transition-all shrink-0"
                >
                  상세보기 →
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Geometric Balance Three-Card Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
          <div className="group p-6 bg-white rounded-2xl border border-slate-200 hover:shadow-2xl transition-all duration-300">
            <div className="text-[#323A87] font-extrabold text-4xl mb-2">24+</div>
            <div className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">Years Experience</div>
            <p className="text-xs text-slate-600 leading-relaxed">
              2001년 창립 이래 통신 인프라 설계부터 시공까지 24년 이상의 축적된 기술적 자산과 노하우를 보유하고 있습니다.
            </p>
          </div>

          <div className="group p-6 bg-white rounded-2xl border border-slate-200 hover:shadow-2xl transition-all duration-300">
            <div className="text-[#323A87] font-extrabold text-4xl mb-2">500+</div>
            <div className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">Enterprise Clients</div>
            <p className="text-xs text-slate-600 leading-relaxed">
              SK텔레컴, SK브로드밴드, 현대건설, 국가철도공단 등 국내 최고의 공공 및 기업 파트너들과 함께 신뢰를 쌓아왔습니다.
            </p>
          </div>

          <div className="group p-6 bg-white rounded-2xl border border-slate-200 hover:shadow-2xl transition-all duration-300">
            <div className="text-[#F2B21B] font-extrabold text-4xl mb-2">0%</div>
            <div className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">Failure & Accident Rate</div>
            <p className="text-xs text-slate-600 leading-relaxed">
              완벽한 ISO 9001/45001 품질 관리와 철저한 24시간 모니터링을 통해 결함 없는 시공과 무재해 2,450일을 유지합니다.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
