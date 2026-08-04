import React from 'react';
import { COMPANY_INFO, CLIENT_LOGOS } from '../data/companyData';
import { ShieldCheck, Phone, Mail, MapPin, Printer, ArrowUp, Award, ExternalLink } from 'lucide-react';

interface FooterProps {
  setActiveTab: (tab: string) => void;
  openRFQModal: () => void;
  openBrochureModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ setActiveTab, openRFQModal, openBrochureModal }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (id: string) => {
    setActiveTab(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <footer className="bg-[#111111] text-slate-300 pt-16 pb-12 border-t border-slate-800">
      {/* Client / Partner Logo Marquee Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pb-12 mb-12 border-b border-slate-800">
        <p className="text-center text-xs font-bold uppercase tracking-widest text-slate-400 mb-6">
          신뢰로 엮은 대한민국 ICT 생태계 — 주요 협력 및 발주기관
        </p>
        <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-8 opacity-85">
          {CLIENT_LOGOS.map((client, idx) => (
            <div 
              key={idx}
              className="px-4 py-2 bg-slate-900/80 rounded-xl border border-slate-800 text-xs font-semibold text-slate-300 hover:border-[#F2B21B] hover:text-white transition-all flex items-center gap-2"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#F2B21B]" />
              <span>{client.name}</span>
              <span className="text-[10px] text-slate-500 font-normal">({client.type})</span>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
        {/* Col 1: Brand Info */}
        <div className="lg:col-span-2 space-y-4">
          <div className="flex items-center space-x-3 cursor-pointer" onClick={scrollToTop}>
            <div className="w-10 h-10 rounded-2xl bg-[#323A87] flex items-center justify-center text-white font-extrabold text-xl shadow-md">
              UG
            </div>
            <div>
              <span className="text-xl font-extrabold text-white tracking-tight">{COMPANY_INFO.nameKo}</span>
              <p className="text-[10px] text-slate-400 uppercase tracking-wider">{COMPANY_INFO.nameEn}</p>
            </div>
          </div>

          <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
            {COMPANY_INFO.slogan}
            <br />
            유지텔레컴은 2001년 창립 이래 이동통신 5G 기지국, 초고속 광통신망, 철도/도로 ITS 및 스마트 빌딩 인프라를 전담 구축해온 ICT 전문 기업입니다.
          </p>

          <div className="pt-2 flex flex-wrap gap-2">
            <span className="inline-flex items-center gap-1 px-3 py-1 bg-slate-900 rounded-xl border border-slate-800 text-[11px] font-semibold text-emerald-400">
              <ShieldCheck className="w-3.5 h-3.5" /> ISO 9001 / 45001
            </span>
            <span className="inline-flex items-center gap-1 px-3 py-1 bg-slate-900 rounded-xl border border-slate-800 text-[11px] font-semibold text-amber-400">
              <Award className="w-3.5 h-3.5" /> 정보통신공사업 면허
            </span>
          </div>
        </div>

        {/* Col 2: Quick Navigation */}
        <div className="space-y-3">
          <h4 className="text-xs font-bold text-white uppercase tracking-wider border-b border-slate-800 pb-2">
            사업 영역 (Solutions)
          </h4>
          <ul className="space-y-2 text-xs">
            <li>
              <button onClick={() => scrollToSection('business')} className="hover:text-white transition-colors">
                • 5G / 이동통신 기지국
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection('business')} className="hover:text-white transition-colors">
                • 광통신망 & 백본 인프라
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection('business')} className="hover:text-white transition-colors">
                • 철도 & 도로 스마트 교통(ITS)
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection('business')} className="hover:text-white transition-colors">
                • 스마트 빌딩 & CCTV 관제
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection('business')} className="hover:text-white transition-colors">
                • 통신 유지보수 & NOC 관제
              </button>
            </li>
          </ul>
        </div>

        {/* Col 3: Company Navigation */}
        <div className="space-y-3">
          <h4 className="text-xs font-bold text-white uppercase tracking-wider border-b border-slate-800 pb-2">
            회사정보 & 서비스
          </h4>
          <ul className="space-y-2 text-xs">
            <li>
              <button onClick={() => scrollToSection('company')} className="hover:text-white transition-colors">
                • 대표 인사말 & 비전
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection('projects')} className="hover:text-white transition-colors">
                • 주요 프로젝트 실적
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection('safety')} className="hover:text-white transition-colors">
                • 안전보건 & 품질경영
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection('careers')} className="hover:text-white transition-colors">
                • 인재채용 (Careers)
              </button>
            </li>
            <li>
              <button onClick={openBrochureModal} className="hover:text-[#F2B21B] font-semibold transition-colors flex items-center gap-1">
                • 회사소개서 다운로드 <ExternalLink className="w-3 h-3" />
              </button>
            </li>
          </ul>
        </div>

        {/* Col 4: Corporate Info */}
        <div className="space-y-3">
          <h4 className="text-xs font-bold text-white uppercase tracking-wider border-b border-slate-800 pb-2">
            본사 정보 (Contact)
          </h4>
          <div className="space-y-2 text-xs text-slate-400">
            <p className="flex items-start gap-1.5">
              <MapPin className="w-4 h-4 text-[#F2B21B] shrink-0 mt-0.5" />
              <span>{COMPANY_INFO.headquarters}</span>
            </p>
            <p className="flex items-center gap-1.5">
              <Phone className="w-4 h-4 text-[#F2B21B] shrink-0" />
              <span>대표전화: {COMPANY_INFO.representativePhone}</span>
            </p>
            <p className="flex items-center gap-1.5">
              <Printer className="w-4 h-4 text-slate-500 shrink-0" />
              <span>팩스: {COMPANY_INFO.fax}</span>
            </p>
            <p className="flex items-center gap-1.5">
              <Mail className="w-4 h-4 text-slate-500 shrink-0" />
              <span>이메일: {COMPANY_INFO.email}</span>
            </p>

            <div className="pt-2">
              <button
                onClick={openRFQModal}
                className="w-full py-2.5 px-3 bg-[#323A87] hover:bg-[#272d6b] text-white text-xs font-bold rounded-xl transition-all shadow-sm flex items-center justify-center gap-1"
              >
                <span>온라인 견적 / 수주 문의</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Legal & Copyright Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-10 mt-10 border-t border-slate-800/80 text-xs text-slate-500 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="space-y-1 text-center md:text-left">
          <p>
            {COMPANY_INFO.nameKo} | 대표이사: {COMPANY_INFO.ceo} | 사업자등록번호: {COMPANY_INFO.bizRegNo} | 면허: {COMPANY_INFO.licenseNo}
          </p>
          <p>© 2001-{new Date().getFullYear()} UG Telecom Co., Ltd. All Rights Reserved. Better Connection, Better Future.</p>
        </div>

        <div className="flex items-center space-x-4">
          <button onClick={() => alert('개인정보처리방침: 유지텔레컴은 고객의 개인정보를 엄격히 보호합니다.')} className="hover:text-slate-300">
            개인정보처리방침
          </button>
          <span>|</span>
          <button onClick={() => alert('이메일무단수집거부: 본 웹사이트에 게시된 이메일 주소의 무단 수집을 거부합니다.')} className="hover:text-slate-300">
            이메일무단수집거부
          </button>
          <span>|</span>
          <button 
            onClick={scrollToTop}
            className="p-2 bg-slate-900 hover:bg-slate-800 text-slate-300 rounded-xl transition-all"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};
