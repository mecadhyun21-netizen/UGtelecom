import React, { useState } from 'react';
import { COMPANY_INFO, CERTIFICATIONS } from '../data/companyData';
import { FileText, Download, ShieldCheck, Award, X, CheckCircle2 } from 'lucide-react';

interface BrochureModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BrochureModal: React.FC<BrochureModalProps> = ({ isOpen, onClose }) => {
  const [downloadingFile, setDownloadingFile] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleDownload = (filename: string) => {
    setDownloadingFile(filename);
    setTimeout(() => {
      setDownloadingFile(null);
      // Simulate file download trigger
      const link = document.createElement('a');
      link.href = 'data:text/plain;charset=utf-8,' + encodeURIComponent(`[UG Telecom Official Document]\nTitle: ${filename}\nCompany: ${COMPANY_INFO.nameKo}\nLicense: ${COMPANY_INFO.licenseNo}\nSlogan: ${COMPANY_INFO.slogan}`);
      link.download = filename;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-2xl w-full p-6 sm:p-8 space-y-6 max-h-[90vh] overflow-y-auto border border-slate-100 shadow-2xl relative animate-in zoom-in-95 duration-200">
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 text-slate-400 hover:text-slate-800 bg-slate-100 rounded-full"
          aria-label="Close brochure modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="space-y-1">
          <span className="text-xs font-bold text-[#323A87] bg-[#E8EEFF] px-2.5 py-1 rounded-lg">
            Download Center
          </span>
          <h3 className="text-xl font-bold text-[#111111]">회사소개서 & 면허 지명원 다운로드 센터</h3>
          <p className="text-xs text-slate-500">
            발주처 및 감리단 검토용 공식 회사소개서(Profile) 및 정보통신공사업 면허 증빙 서류입니다.
          </p>
        </div>

        {/* Printable Documents List */}
        <div className="space-y-3">
          <div className="bg-[#F5F7FA] p-4 rounded-2xl border border-slate-200 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <FileText className="w-4 h-4 text-[#323A87]" />
                <span className="text-sm font-bold text-[#111111]">2026 유지텔레컴 공식 지명원 & 브로슈어</span>
              </div>
              <p className="text-xs text-slate-500">기업 개요, 기술 인력 현황, 주요 실적 및 품질/안전 관리체계 (PDF, 8.4MB)</p>
            </div>
            <button
              onClick={() => handleDownload('UG_Telecom_Company_Brochure_2026.pdf')}
              disabled={downloadingFile === 'UG_Telecom_Company_Brochure_2026.pdf'}
              className="px-4 py-2 bg-[#323A87] hover:bg-[#282e6d] text-white text-xs font-bold rounded-xl shadow-sm transition-all flex items-center gap-1.5 shrink-0"
            >
              <Download className="w-3.5 h-3.5" />
              {downloadingFile === 'UG_Telecom_Company_Brochure_2026.pdf' ? '다운로드 중...' : 'PDF 다운로드'}
            </button>
          </div>

          <div className="bg-[#F5F7FA] p-4 rounded-2xl border border-slate-200 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-amber-600" />
                <span className="text-sm font-bold text-[#111111]">정보통신공사업 면허 및 ISO 인증서 통합본</span>
              </div>
              <p className="text-xs text-slate-500">서울-제021488호 면허 사본, ISO 9001/45001, INNO-BIZ 사본 (PDF, 5.1MB)</p>
            </div>
            <button
              onClick={() => handleDownload('UG_Telecom_Licenses_Set_2026.pdf')}
              disabled={downloadingFile === 'UG_Telecom_Licenses_Set_2026.pdf'}
              className="px-4 py-2 bg-slate-800 hover:bg-slate-900 text-white text-xs font-bold rounded-xl shadow-sm transition-all flex items-center gap-1.5 shrink-0"
            >
              <Download className="w-3.5 h-3.5" />
              {downloadingFile === 'UG_Telecom_Licenses_Set_2026.pdf' ? '다운로드 중...' : 'PDF 다운로드'}
            </button>
          </div>
        </div>

        {/* License Badges Overview */}
        <div className="pt-2 border-t border-slate-200 space-y-3">
          <h4 className="text-xs font-bold text-[#323A87] uppercase tracking-wider">주요 면허 & 보유 자격 요약</h4>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs">
            {CERTIFICATIONS.map((cert) => (
              <div key={cert.id} className="p-2.5 bg-white rounded-xl border border-slate-200 flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <div className="truncate">
                  <p className="font-bold text-[#111111] truncate">{cert.title}</p>
                  <p className="text-[10px] text-slate-400">{cert.certNumber}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="pt-4 border-t border-slate-200 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2.5 bg-slate-100 text-slate-700 text-xs font-bold rounded-xl hover:bg-slate-200"
          >
            닫기
          </button>
        </div>
      </div>
    </div>
  );
};
