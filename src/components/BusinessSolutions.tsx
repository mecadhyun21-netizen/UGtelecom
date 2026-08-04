import React, { useState } from 'react';
import { CORE_SERVICES } from '../data/companyData';
import { BusinessService } from '../types';
import { 
  RadioTower, 
  Network, 
  Train, 
  Building2, 
  ShieldCheck, 
  Shield, 
  ArrowRight, 
  CheckCircle2, 
  X, 
  Zap, 
  FileText 
} from 'lucide-react';

interface BusinessSolutionsProps {
  openRFQModal: (category?: string) => void;
}

export const BusinessSolutions: React.FC<BusinessSolutionsProps> = ({ openRFQModal }) => {
  const [selectedService, setSelectedService] = useState<BusinessService | null>(null);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'RadioTower': return <RadioTower className="w-6 h-6" />;
      case 'Network': return <Network className="w-6 h-6" />;
      case 'Train': return <Train className="w-6 h-6" />;
      case 'Building2': return <Building2 className="w-6 h-6" />;
      case 'ShieldCheck': return <ShieldCheck className="w-6 h-6" />;
      case 'Shield': return <Shield className="w-6 h-6" />;
      default: return <RadioTower className="w-6 h-6" />;
    }
  };

  return (
    <section id="business" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-12">
        {/* Section Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-200 pb-8">
          <div className="space-y-2">
            <span className="text-xs font-bold text-[#323A87] bg-[#E8EEFF] px-3 py-1 rounded-full uppercase tracking-wider">
              Business Expertise & Solutions
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#111111]">
              유지텔레컴 핵심 사업 분야
            </h2>
            <p className="text-sm text-slate-600 max-w-2xl">
              이동통신 기지국부터 국가 철도망, 광통신 백본, 스마트 빌딩 ICT까지 최적의 품질과 안전 시공을 약속합니다.
            </p>
          </div>

          <button
            onClick={() => openRFQModal()}
            className="px-5 py-3 text-xs font-bold text-white bg-[#323A87] hover:bg-[#282e6d] rounded-2xl shadow-sm transition-all flex items-center gap-2 self-start md:self-auto"
          >
            <span>사업 제안 & 시공 문의</span>
            <ArrowRight className="w-4 h-4 text-[#F2B21B]" />
          </button>
        </div>

        {/* 6 Core Business Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CORE_SERVICES.map((service) => (
            <div 
              key={service.id}
              className="bg-[#F5F7FA] rounded-2xl p-6 sm:p-8 border border-slate-200 hover:border-[#323A87] hover:bg-white hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="space-y-6">
                {/* Header Icon */}
                <div className="flex justify-between items-start">
                  <div className="w-12 h-12 rounded-2xl bg-[#323A87] text-white flex items-center justify-center shadow-md group-hover:bg-[#F2B21B] group-hover:text-[#111111] transition-colors">
                    {getIcon(service.iconName)}
                  </div>
                  <span className="text-[11px] font-bold text-[#323A87] bg-[#E8EEFF] px-2.5 py-1 rounded-lg">
                    {service.category}
                  </span>
                </div>

                {/* Content */}
                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-[#111111] group-hover:text-[#323A87] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-[11px] text-slate-400 font-semibold uppercase tracking-wider">{service.subtitle}</p>
                  <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                    {service.description}
                  </p>
                </div>

                {/* Features List Preview */}
                <div className="space-y-1.5 pt-2 border-t border-slate-200/80">
                  {service.features.slice(0, 2).map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#323A87] shrink-0 mt-0.5" />
                      <span className="line-clamp-1">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-6 mt-6 border-t border-slate-200 flex items-center justify-between">
                <button
                  onClick={() => setSelectedService(service)}
                  className="text-xs font-bold text-[#323A87] hover:underline flex items-center gap-1"
                >
                  상세 기술 보기 →
                </button>
                <button
                  onClick={() => openRFQModal(service.title)}
                  className="px-3 py-1.5 text-[11px] font-bold text-[#323A87] bg-[#E8EEFF] hover:bg-[#323A87] hover:text-white rounded-xl transition-all"
                >
                  견적 요청
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Service Detail Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full p-6 sm:p-8 space-y-6 max-h-[90vh] overflow-y-auto border border-slate-100 shadow-2xl animate-in zoom-in-95 duration-200 relative">
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-6 right-6 p-2 text-slate-400 hover:text-slate-800 bg-slate-100 rounded-full"
              aria-label="Close detail modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#323A87] text-white flex items-center justify-center">
                {getIcon(selectedService.iconName)}
              </div>
              <div>
                <span className="text-xs font-bold text-[#323A87]">{selectedService.category}</span>
                <h3 className="text-xl font-bold text-[#111111]">{selectedService.title}</h3>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed bg-[#F5F7FA] p-4 rounded-xl border border-slate-200">
              {selectedService.description}
            </p>

            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase text-[#323A87] tracking-wider">주요 시공 항목 & 기술 범위</h4>
              <div className="space-y-2">
                {selectedService.features.map((f, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-700 bg-white p-3 rounded-xl border border-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-[#323A87] shrink-0 mt-0.5" />
                    <span className="font-medium">{f}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-3 pt-2">
              <h4 className="text-xs font-bold uppercase text-[#323A87] tracking-wider">주요 스펙 & 발주 사양</h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {selectedService.specs.map((spec, idx) => (
                  <div key={idx} className="p-3 bg-[#E8EEFF]/60 rounded-xl border border-[#323A87]/10 space-y-1">
                    <span className="text-[11px] font-bold text-slate-500 block">{spec.label}</span>
                    <span className="text-xs font-bold text-[#323A87]">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-slate-200 flex justify-end gap-3">
              <button
                onClick={() => setSelectedService(null)}
                className="px-5 py-2.5 text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-xl"
              >
                닫기
              </button>
              <button
                onClick={() => {
                  const name = selectedService.title;
                  setSelectedService(null);
                  openRFQModal(name);
                }}
                className="px-6 py-2.5 text-xs font-bold text-white bg-[#323A87] hover:bg-[#282e6d] rounded-xl shadow-sm"
              >
                이 사업 분야 견적 문의
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
