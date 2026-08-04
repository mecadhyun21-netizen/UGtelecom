import React, { useState } from 'react';
import { COMPANY_INFO, HISTORY_MILESTONES, CERTIFICATIONS } from '../data/companyData';
import { Award, ShieldCheck, Users, CheckCircle2, History, Target, Eye, Sparkles, Building2, ChevronRight, FileCheck } from 'lucide-react';

interface CompanyOverviewProps {
  openBrochureModal: () => void;
}

export const CompanyOverview: React.FC<CompanyOverviewProps> = ({ openBrochureModal }) => {
  const [activeTab, setActiveTab] = useState<'greeting' | 'vision' | 'history' | 'certifications'>('greeting');

  const coreValues = [
    {
      title: 'Reliable',
      subKo: '신뢰성',
      desc: '공공기관과 대기업이 검증한 24년 완벽 시공 실적과 철저한 품질 준수',
      color: 'border-l-4 border-l-[#323A87]',
      bg: 'bg-white'
    },
    {
      title: 'Connected',
      subKo: '연결성',
      desc: '무선 5G 기지국부터 초고속 광통신망, 철도/스마트교통까지 끊김 없는 통신 인프라',
      color: 'border-l-4 border-l-[#F2B21B]',
      bg: 'bg-white'
    },
    {
      title: 'Clear',
      subKo: '투명성',
      desc: 'ISO 9001/45001 기반의 투명한 공정 관리와 중대재해 Zero 안전보건경영',
      color: 'border-l-4 border-l-emerald-600',
      bg: 'bg-white'
    },
    {
      title: 'Professional',
      subKo: '전문성',
      desc: '국가 정보통신 특등급 시공자격 및 전담 고급 엔지니어링 인력 상주',
      color: 'border-l-4 border-l-indigo-600',
      bg: 'bg-white'
    }
  ];

  return (
    <section id="company" className="py-20 bg-[#F5F7FA] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="text-xs font-bold text-[#323A87] bg-[#E8EEFF] px-3 py-1 rounded-full uppercase tracking-wider">
            About UG Telecom
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#111111]">
            대한민국 통신 인프라를 이끄는 <br />
            <span className="text-[#323A87]">ICT 전문기업 유지텔레컴</span>
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            유지텔레컴은 축적된 기술력과 헌신적인 인재를 바탕으로 미래 정보통신 인프라의 새로운 기준을 세워갑니다.
          </p>
        </div>

        {/* Inner Sub-Navigation Bar */}
        <div className="flex justify-center mb-10 overflow-x-auto pb-2">
          <div className="bg-white p-1.5 rounded-2xl shadow-sm border border-slate-200 flex space-x-1 shrink-0">
            <button
              onClick={() => setActiveTab('greeting')}
              className={`px-5 py-2.5 text-xs font-bold rounded-xl transition-all ${
                activeTab === 'greeting' ? 'bg-[#323A87] text-white shadow-sm' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              대표 인사말
            </button>
            <button
              onClick={() => setActiveTab('vision')}
              className={`px-5 py-2.5 text-xs font-bold rounded-xl transition-all ${
                activeTab === 'vision' ? 'bg-[#323A87] text-white shadow-sm' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              비전 & 핵심가치
            </button>
            <button
              onClick={() => setActiveTab('history')}
              className={`px-5 py-2.5 text-xs font-bold rounded-xl transition-all ${
                activeTab === 'history' ? 'bg-[#323A87] text-white shadow-sm' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              회사 연혁 (2001~)
            </button>
            <button
              onClick={() => setActiveTab('certifications')}
              className={`px-5 py-2.5 text-xs font-bold rounded-xl transition-all ${
                activeTab === 'certifications' ? 'bg-[#323A87] text-white shadow-sm' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              면허 & 인증서
            </button>
          </div>
        </div>

        {/* Tab 1: CEO Greeting */}
        {activeTab === 'greeting' && (
          <div className="bg-white rounded-2xl p-6 sm:p-10 shadow-sm border border-slate-200 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center animate-in fade-in duration-300">
            <div className="lg:col-span-5 space-y-4">
              <div className="relative rounded-2xl overflow-hidden bg-slate-900 text-white p-8 space-y-6">
                <div className="space-y-1">
                  <span className="text-xs font-bold text-[#F2B21B] uppercase tracking-wider">CEO Message</span>
                  <h3 className="text-xl font-bold">"더 나은 연결이 더 나은 미래를 만듭니다."</h3>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  2001년 창립 이래 유지텔레컴은 국가 기관망과 주요 이동통신 네트워크의 혈맥을 잇는 파수꾼 역할을 다해왔습니다.
                </p>
                <div className="pt-4 border-t border-slate-800 flex justify-between items-end">
                  <div>
                    <p className="text-xs font-semibold text-slate-400">유지텔레컴 주식회사</p>
                    <p className="text-base font-extrabold text-white">대표이사 {COMPANY_INFO.ceo}</p>
                  </div>
                  <div className="w-12 h-12 bg-[#323A87] rounded-xl flex items-center justify-center font-bold text-white text-lg">
                    UG
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-4 text-slate-700 text-sm leading-relaxed">
              <h3 className="text-xl font-extrabold text-[#111111] leading-snug">
                안녕하십니까, 유지텔레컴 대표이사 {COMPANY_INFO.ceo}입니다.
              </h3>
              <p>
                오늘날 초연결 사회에서 정보통신 인프라는 국가 산업의 기틀이자 국민 삶의 질을 좌우하는 핵심 동력입니다. 유지텔레컴은 설립 이후 오직 정보통신공사 한 우물만을 파며, 최고의 시공 기술력과 철저한 관리 체계를 다져왔습니다.
              </p>
              <p>
                저희는 SK텔레컴, SK브로드밴드와의 두터운 파트너십을 바탕으로 5G/LTE 이동통신 기지국 설치 및 인빌딩 음영 해소 공사를 완벽히 수행하였으며, 한국철도공사, 국가철도공단, 도로공사의 철도 LTE-R 및 지능형 교통체계(ITS) 사업에서도 기술 우위와 안전성을 입증하였습니다.
              </p>
              <p>
                유지텔레컴의 모든 임직원은 <strong className="text-[#323A87]">"Better Connection, Better Future"</strong>라는 슬로건 아래 단 한 건의 안전사고도 허용하지 않는 엄격한 안전보건경영(ISO 45001)과 완벽 품질(ISO 9001)을 실천하겠습니다.
              </p>
              
              <div className="pt-4 flex flex-wrap gap-3">
                <button
                  onClick={openBrochureModal}
                  className="px-5 py-2.5 bg-[#E8EEFF] hover:bg-[#d8e4ff] text-[#323A87] text-xs font-bold rounded-xl transition-all flex items-center gap-1.5"
                >
                  <FileCheck className="w-4 h-4" />
                  지명원 / 회사소개서 다운로드
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Vision & Values */}
        {activeTab === 'vision' && (
          <div className="space-y-8 animate-in fade-in duration-300">
            {/* Vision Banner */}
            <div className="bg-[#323A87] text-white rounded-2xl p-8 sm:p-10 text-center space-y-4 shadow-md relative overflow-hidden">
              <div className="absolute -right-10 -bottom-10 w-60 h-60 bg-white/5 rounded-full pointer-events-none" />
              <span className="text-xs font-extrabold tracking-widest text-[#F2B21B] uppercase">UG Telecom Vision 2030</span>
              <h3 className="text-2xl sm:text-3xl font-extrabold">"대한민국을 넘어 세계 수준의 ICT 통신 인프라 엔지니어링 선도기업"</h3>
              <p className="text-xs sm:text-sm text-slate-200 max-w-2xl mx-auto leading-relaxed">
                안전과 품질을 최우선 가치로 세우고, AI/5G/IoT 기술 융합 인프라 시공 시장에서 고객과 공공기관이 가장 먼저 찾는 든든한 파트너가 되겠습니다.
              </p>
            </div>

            {/* Core Values Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {coreValues.map((val, idx) => (
                <div key={idx} className={`p-6 rounded-2xl ${val.bg} ${val.color} shadow-sm border border-slate-200 space-y-3`}>
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-extrabold text-[#323A87] uppercase tracking-wider">{val.title}</span>
                    <span className="text-xs font-bold text-slate-400">{val.subKo}</span>
                  </div>
                  <h4 className="text-lg font-bold text-[#111111]">{val.title}</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">{val.desc}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 3: History Timeline */}
        {activeTab === 'history' && (
          <div className="bg-white rounded-2xl p-6 sm:p-10 shadow-sm border border-slate-200 space-y-8 animate-in fade-in duration-300">
            <div className="flex justify-between items-center border-b border-slate-100 pb-4">
              <div>
                <h3 className="text-lg font-bold text-[#111111]">유지텔레컴 24년 성장 역사 (2001 - 2026)</h3>
                <p className="text-xs text-slate-500">지속적인 기술 개발과 현장 시공 노하우 축적의 기록</p>
              </div>
              <span className="text-xs font-bold text-[#323A87] bg-[#E8EEFF] px-3 py-1 rounded-full">
                설립 2001.04.18
              </span>
            </div>

            <div className="relative border-l-2 border-[#323A87]/30 pl-6 sm:pl-8 space-y-8 ml-2 sm:ml-4">
              {HISTORY_MILESTONES.map((item, idx) => (
                <div key={idx} className="relative group">
                  {/* Timeline Node Dot */}
                  <div className="absolute -left-[31px] sm:-left-[39px] top-0 w-4 h-4 rounded-full bg-[#323A87] border-4 border-white shadow-sm group-hover:scale-125 transition-transform" />

                  <div className="space-y-1">
                    <div className="flex items-center gap-3">
                      <span className="text-xl font-extrabold text-[#323A87]">{item.year}</span>
                      {item.tag && (
                        <span className="text-[10px] font-bold px-2 py-0.5 bg-[#E8EEFF] text-[#323A87] rounded-md">
                          {item.tag}
                        </span>
                      )}
                    </div>
                    <h4 className="text-sm sm:text-base font-bold text-[#111111]">{item.title}</h4>
                    <p className="text-xs text-slate-600 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 4: Certifications & Licenses */}
        {activeTab === 'certifications' && (
          <div className="space-y-6 animate-in fade-in duration-300">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {CERTIFICATIONS.map((cert) => (
                <div key={cert.id} className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 hover:border-[#323A87] transition-all space-y-4 group">
                  <div className="flex justify-between items-start">
                    <div className="w-10 h-10 rounded-xl bg-[#E8EEFF] text-[#323A87] flex items-center justify-center font-bold">
                      <Award className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-semibold px-2.5 py-1 bg-slate-100 text-slate-700 rounded-lg">
                      {cert.category}
                    </span>
                  </div>

                  <div>
                    <h4 className="text-base font-bold text-[#111111] group-hover:text-[#323A87] transition-colors">{cert.title}</h4>
                    <p className="text-xs text-slate-500 mt-1">발급기관: {cert.issuer}</p>
                  </div>

                  <div className="pt-3 border-t border-slate-100 flex justify-between items-center text-xs text-slate-600">
                    <span className="font-medium">번호: {cert.certNumber}</span>
                    <span className="text-[11px] text-slate-400">등록일: {cert.date}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
