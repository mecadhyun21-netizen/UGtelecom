import React, { useState, useEffect } from 'react';
import { COMPANY_INFO } from '../data/companyData';
import { NavCategory } from '../types';
import { 
  Phone, 
  FileText, 
  Menu, 
  X, 
  ChevronDown, 
  Shield, 
  Building2, 
  RadioTower, 
  Network, 
  Train, 
  Briefcase, 
  MapPin, 
  Users, 
  Award,
  Search,
  ExternalLink
} from 'lucide-react';

interface GNBHeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  openRFQModal: () => void;
  openBrochureModal: () => void;
}

export const GNBHeader: React.FC<GNBHeaderProps> = ({
  activeTab,
  setActiveTab,
  openRFQModal,
  openBrochureModal,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    {
      id: 'company',
      label: '기업소개',
      subItems: [
        { id: 'company-ceo', name: '대표 인사말', desc: '유지텔레컴의 비전과 약속' },
        { id: 'company-vision', name: '핵심가치 & 비전', desc: 'Better Connection, Better Future' },
        { id: 'company-history', name: '연혁 & 성장과정', desc: '2001년 창립 후 24년의 발자취' },
        { id: 'company-cert', name: '인증 & 특허', desc: 'ISO 9001/45001 및 면허 현황' },
        { id: 'company-location', name: '오시는 길', desc: '전국 사업소 및 본사 안내' }
      ]
    },
    {
      id: 'business',
      label: '사업분야',
      subItems: [
        { id: 'mobile-infra', name: '5G/이동통신 기지국', desc: '5G, LTE, 인빌딩 음영 해소' },
        { id: 'optical-backbone', name: '광통신망 & 백본', desc: '초고속 광케이블, 관로 접속 공사' },
        { id: 'rail-transport-its', name: '철도 & 도로 ITS', desc: 'LTE-R 철도 무선통신, 스마트 교통' },
        { id: 'smart-building', name: '스마트 빌딩 & CCTV', desc: 'IFA 구내통신, AI 통합 관제' },
        { id: 'noc-maintenance', name: '통신 유지보수 & NOC', desc: '365일 24시간 실시간 모니터링' },
        { id: 'defense-public', name: '국방 & 공공 자가망', desc: '특수 보안 통신망 및 지자체망' }
      ]
    },
    {
      id: 'projects',
      label: '실적 & 프로젝트',
      subItems: [
        { id: 'projects-skt', name: '주요 이통사 실적', desc: 'SK텔레컴, SK브로드밴드 구축사례' },
        { id: 'projects-public', name: '공공 & 철도 인프라', desc: '국가철도공단, 행정안전부, 도로공사' },
        { id: 'projects-enterprise', name: '대기업 & 스마트빌딩', desc: '현대건설, 삼성물산 주요 건설사' }
      ]
    },
    {
      id: 'safety',
      label: '지속가능경영',
      subItems: [
        { id: 'safety-policy', name: '안전보건 경영방침', desc: 'ISO 45001 & 중대재해 Zero' },
        { id: 'safety-quality', name: '품질경영체계', desc: 'ISO 9001 표준 공정 모니터링' },
        { id: 'safety-esg', name: 'ESG & 사회공헌', desc: '투명하고 지속가능한 경영' }
      ]
    },
    {
      id: 'careers',
      label: '인재채용',
      subItems: [
        { id: 'careers-culture', name: '유지텔레컴 인재상', desc: '함께 성장하는 전문 엔지니어' },
        { id: 'careers-jobs', name: '채용 공고', desc: '현재 모집 중인 정규직 채용' }
      ]
    }
  ];

  const handleNavClick = (sectionId: string) => {
    setActiveTab(sectionId);
    setMobileMenuOpen(false);
    setActiveDropdown(null);

    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100 py-3' : 'bg-white border-b border-slate-100 py-4'
    }`}>
      {/* Top Utility Bar */}
      <div className="hidden lg:block border-b border-slate-100/80 -mt-2 pb-2 mb-2 bg-[#F5F7FA]/60 text-xs text-slate-600">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <span className="font-semibold text-[#323A87]">정보통신공사업 면허: {COMPANY_INFO.licenseNo}</span>
            <span className="text-slate-300">|</span>
            <span className="flex items-center gap-1"><Shield className="w-3.5 h-3.5 text-emerald-600" /> ISO 9001 / 45001 안전보건 인증기업</span>
            <span className="text-slate-300">|</span>
            <span>중대재해 Zero 실현 (2,450일+)</span>
          </div>
          <div className="flex items-center space-x-5">
            <button 
              onClick={openBrochureModal}
              className="hover:text-[#323A87] transition-colors flex items-center gap-1 font-medium"
            >
              <FileText className="w-3.5 h-3.5 text-[#323A87]" />
              회사소개서 다운로드
            </button>
            <span className="text-slate-300">|</span>
            <a href={`tel:${COMPANY_INFO.representativePhone}`} className="hover:text-[#323A87] font-semibold flex items-center gap-1 text-[#323A87]">
              <Phone className="w-3.5 h-3.5" />
              대표전화: {COMPANY_INFO.representativePhone}
            </a>
          </div>
        </div>
      </div>

      {/* Main GNB Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex justify-between items-center">
        {/* Brand Logo */}
        <div 
          onClick={() => handleNavClick('hero')}
          className="cursor-pointer flex items-center space-x-2.5 group"
        >
          <div className="w-9 h-9 bg-[#323A87] rounded-xl flex items-center justify-center shadow-md group-hover:bg-[#282e6d] transition-all">
            <div className="w-4 h-4 border-2 border-[#F2B21B] rounded-full flex items-center justify-center">
              <div className="w-1.5 h-1.5 bg-white rounded-full" />
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-extrabold tracking-tight text-[#323A87]">
              UG<span className="text-[#111111]">TELECOM</span>
            </span>
            <span className="text-[10px] tracking-widest text-slate-500 font-bold uppercase -mt-1">
              (주)유지텔레컴
            </span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-1">
          {navItems.map((item) => (
            <div 
              key={item.id}
              className="relative"
              onMouseEnter={() => setActiveDropdown(item.id)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                onClick={() => handleNavClick(item.id)}
                className={`px-4 py-2 text-sm font-semibold rounded-xl transition-all flex items-center gap-1 ${
                  activeTab === item.id 
                    ? 'text-[#323A87] bg-[#E8EEFF]' 
                    : 'text-slate-800 hover:text-[#323A87] hover:bg-slate-50'
                }`}
              >
                {item.label}
                <ChevronDown className={`w-3.5 h-3.5 text-slate-400 transition-transform duration-200 ${
                  activeDropdown === item.id ? 'rotate-180 text-[#323A87]' : ''
                }`} />
              </button>

              {/* Dropdown Mega Menu */}
              {activeDropdown === item.id && (
                <div className="absolute top-full left-0 w-72 pt-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                  <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-3 space-y-1">
                    <div className="px-3 py-1.5 border-b border-slate-100 mb-1">
                      <p className="text-[11px] font-bold text-[#323A87] uppercase tracking-wider">{item.label}</p>
                    </div>
                    {item.subItems.map((sub) => (
                      <button
                        key={sub.id}
                        onClick={() => handleNavClick(item.id)}
                        className="w-full text-left p-2.5 rounded-xl hover:bg-[#F5F7FA] transition-all group flex flex-col"
                      >
                        <span className="text-xs font-bold text-slate-800 group-hover:text-[#323A87] flex items-center justify-between">
                          {sub.name}
                        </span>
                        <span className="text-[11px] text-slate-500 mt-0.5 line-clamp-1">{sub.desc}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* CTA Buttons */}
        <div className="hidden lg:flex items-center space-x-3">
          <button
            onClick={openBrochureModal}
            className="px-4 py-2.5 text-xs font-bold text-[#323A87] bg-white border border-[#E8EEFF] hover:bg-[#E8EEFF] rounded-2xl transition-all flex items-center gap-1.5 shadow-sm"
          >
            <FileText className="w-3.5 h-3.5" />
            회사소개서
          </button>
          
          <button
            onClick={openRFQModal}
            className="px-5 py-2 text-xs font-bold text-white bg-[#323A87] hover:bg-[#272d6b] rounded-2xl shadow-lg hover:shadow-xl transition-all flex items-center gap-2 group border border-white/20"
            title="온라인 사업 문의 (Google Sheets 수주 DB 자동 연동)"
          >
            <div className="flex flex-col items-start leading-tight">
              <div className="flex items-center gap-1.5">
                <span>온라인 사업 문의</span>
                <span className="w-2 h-2 rounded-full bg-[#F2B21B] group-hover:scale-125 transition-transform" />
              </div>
              <span className="text-[9px] text-emerald-300 font-semibold flex items-center gap-1 mt-0.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Google Sheets DB 연동
              </span>
            </div>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex lg:hidden items-center space-x-2">
          <button
            onClick={openRFQModal}
            className="px-3 py-1.5 text-xs font-bold text-white bg-[#323A87] rounded-xl"
          >
            문의하기
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl text-slate-700 hover:bg-slate-100"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[70px] bg-white border-b border-slate-200 shadow-2xl z-40 max-h-[calc(100vh-80px)] overflow-y-auto">
          <div className="p-4 space-y-4">
            <div className="bg-[#F5F7FA] p-3 rounded-2xl space-y-1">
              <p className="text-xs font-bold text-[#323A87]">{COMPANY_INFO.nameKo}</p>
              <p className="text-[11px] text-slate-600">면허: {COMPANY_INFO.licenseNo}</p>
              <p className="text-[11px] text-slate-600">대표전화: {COMPANY_INFO.representativePhone}</p>
            </div>

            <div className="space-y-2">
              {navItems.map((item) => (
                <div key={item.id} className="border-b border-slate-100 pb-2">
                  <button
                    onClick={() => handleNavClick(item.id)}
                    className="w-full text-left font-bold text-slate-900 py-2 flex justify-between items-center text-sm"
                  >
                    <span>{item.label}</span>
                    <ChevronDown className="w-4 h-4 text-slate-400" />
                  </button>
                  <div className="pl-3 space-y-1 mt-1">
                    {item.subItems.map((sub) => (
                      <button
                        key={sub.id}
                        onClick={() => handleNavClick(item.id)}
                        className="w-full text-left py-1.5 text-xs text-slate-600 hover:text-[#323A87]"
                      >
                        • {sub.name}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-2 grid grid-cols-2 gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  openBrochureModal();
                }}
                className="w-full py-3 text-xs font-bold text-[#323A87] bg-[#E8EEFF] rounded-xl flex items-center justify-center gap-1"
              >
                <FileText className="w-4 h-4" />
                회사소개서
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  openRFQModal();
                }}
                className="w-full py-3 text-xs font-bold text-white bg-[#323A87] rounded-xl flex items-center justify-center gap-1"
              >
                <span>견적/사업 문의</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
