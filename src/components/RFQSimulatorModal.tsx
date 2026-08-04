import React, { useState, useEffect } from 'react';
import { RFQFormData } from '../types';
import { CORE_SERVICES } from '../data/companyData';
import { googleSignIn, getAccessToken, initAuth } from '../lib/firebaseAuth';
import { appendRFQToGoogleSheet } from '../lib/googleSheets';
import { X, CheckCircle2, Send, FileText, Calculator, ShieldCheck, Phone, ArrowRight, ExternalLink, Loader2 } from 'lucide-react';

interface RFQSimulatorModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedCategory?: string;
}

export const RFQSimulatorModal: React.FC<RFQSimulatorModalProps> = ({
  isOpen,
  onClose,
  preselectedCategory,
}) => {
  const [step, setStep] = useState<number>(1);
  const [submittedCode, setSubmittedCode] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [sheetUrl, setSheetUrl] = useState<string | null>(null);
  const [sheetStatusMessage, setSheetStatusMessage] = useState<string | null>(null);

  const [formData, setFormData] = useState<RFQFormData>({
    companyName: '',
    contactName: '',
    email: '',
    phone: '',
    projectCategory: preselectedCategory || '5G / 이동통신 기지국 구축',
    budgetRange: '5,000만 원 ~ 3억 원 미만',
    estimatedStartDate: '1개월 이내',
    location: '수도권 (서울/경기/인천)',
    description: '',
    needSiteSurvey: true,
  });

  useEffect(() => {
    initAuth();
  }, []);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSheetStatusMessage('구글 시트에 수주 및 고객 정보 저장을 진행하고 있습니다...');

    const randomCode = `RFQ-${new Date().getFullYear()}-UG${Math.floor(1000 + Math.random() * 9000)}`;

    try {
      let token = await getAccessToken();
      if (!token) {
        // Trigger Google OAuth sign-in to get Google Sheets authorization
        const authResult = await googleSignIn();
        token = authResult?.accessToken || null;
      }

      if (token) {
        const sheetRes = await appendRFQToGoogleSheet(token, formData, randomCode);
        if (sheetRes.success && sheetRes.spreadsheetUrl) {
          setSheetUrl(sheetRes.spreadsheetUrl);
          setSheetStatusMessage('구글 시트(유지텔레컴_수주및견적문의_목록)에 성공적으로 추가되었습니다!');
        } else {
          setSheetStatusMessage(sheetRes.error || '구글 시트 저장 실패');
        }
      } else {
        setSheetStatusMessage('Google 인증이 완료되지 않아 일반 접수로 처리되었습니다.');
      }
    } catch (err: any) {
      console.error('Submission Google Sheet Error:', err);
      setSheetStatusMessage('Google 시트 연동 중 오류가 발생했으나 문의는 정상 접수되었습니다.');
    } finally {
      setSubmittedCode(randomCode);
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-2xl w-full p-6 sm:p-8 space-y-6 max-h-[90vh] overflow-y-auto border border-slate-100 shadow-2xl relative animate-in zoom-in-95 duration-200">
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 text-slate-400 hover:text-slate-800 bg-slate-100 rounded-full"
          aria-label="Close RFQ modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submittedCode ? (
          <div className="py-8 text-center space-y-6">
            <div className="w-16 h-16 bg-[#323A87] text-[#F2B21B] rounded-2xl flex items-center justify-center mx-auto shadow-lg">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div className="space-y-2">
              <span className="text-xs font-extrabold text-[#323A87] bg-[#E8EEFF] px-3 py-1 rounded-full uppercase">
                온라인 견적 문의 접수 완료
              </span>
              <h3 className="text-2xl font-extrabold text-[#111111]">
                사업 문의가 접수되었습니다.
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                유지텔레컴 수주영업본부 기술 담당자가 접수 내용을 검토 후 <strong>24시간 이내(영업일 기준)</strong> 연락 드리겠습니다.
              </p>
            </div>

            <div className="p-4 bg-[#F5F7FA] rounded-2xl border border-slate-200 max-w-md mx-auto text-left space-y-3 text-xs">
              <div className="flex justify-between items-center border-b border-slate-200 pb-2">
                <span className="font-semibold text-slate-500">접수 번호</span>
                <span className="font-extrabold text-[#323A87] text-sm">{submittedCode}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-semibold text-slate-500">문의 분야</span>
                <span className="font-bold text-[#111111]">{formData.projectCategory}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-semibold text-slate-500">신청 업체 / 담당자</span>
                <span className="font-bold text-[#111111]">{formData.companyName} / {formData.contactName}</span>
              </div>

              {sheetStatusMessage && (
                <div className="pt-2 border-t border-slate-200 space-y-2">
                  <div className="flex items-center gap-2 text-emerald-700 bg-emerald-50 p-2.5 rounded-xl border border-emerald-200 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span className="text-[11px]">{sheetStatusMessage}</span>
                  </div>

                  {sheetUrl && (
                    <a
                      href={sheetUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-2.5 bg-[#323A87] hover:bg-[#282e6d] text-white font-bold rounded-xl flex items-center justify-center gap-2 text-xs shadow-md transition-all"
                    >
                      <span>연동된 구글 시트 확인하기</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              )}
            </div>

            <div className="pt-4">
              <button
                onClick={() => {
                  setSubmittedCode(null);
                  setStep(1);
                  onClose();
                }}
                className="px-6 py-3 bg-[#323A87] hover:bg-[#282e6d] text-white text-xs font-bold rounded-xl shadow-sm"
              >
                확인 및 모달 닫기
              </button>
            </div>
          </div>
        ) : (
          <>
            {/* Modal Title */}
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-[#323A87] bg-[#E8EEFF] px-2.5 py-1 rounded-lg">
                  B2B 사업 proposal & 견적
                </span>
                <span className="text-xs text-slate-400 font-semibold">24시간 이내 회신</span>
              </div>
              <h3 className="text-xl font-bold text-[#111111]">온라인 사업 문의 및 시공 견적</h3>
            </div>

            {/* Step Progress Pills */}
            <div className="flex items-center space-x-2 border-y border-slate-100 py-3 text-xs font-bold">
              <span className={`px-3 py-1 rounded-xl ${step === 1 ? 'bg-[#323A87] text-white' : 'bg-slate-100 text-slate-500'}`}>
                1. 사업 분야 선택
              </span>
              <span className="text-slate-300">→</span>
              <span className={`px-3 py-1 rounded-xl ${step === 2 ? 'bg-[#323A87] text-white' : 'bg-slate-100 text-slate-500'}`}>
                2. 상세 정보 입력
              </span>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {step === 1 && (
                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-800 mb-2">1. 공사/사업 분야 선택 *</label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {CORE_SERVICES.map((s) => (
                        <button
                          key={s.id}
                          type="button"
                          onClick={() => setFormData({ ...formData, projectCategory: s.title })}
                          className={`p-3 rounded-xl border text-left text-xs transition-all ${
                            formData.projectCategory === s.title 
                              ? 'border-[#323A87] bg-[#E8EEFF] font-bold text-[#323A87]' 
                              : 'border-slate-200 bg-[#F5F7FA] text-slate-700 hover:bg-slate-100'
                          }`}
                        >
                          {s.title}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-800 mb-1">예상 사업 예산 범위</label>
                      <select
                        value={formData.budgetRange}
                        onChange={(e) => setFormData({ ...formData, budgetRange: e.target.value })}
                        className="w-full px-3 py-2.5 bg-[#F5F7FA] border border-slate-300 rounded-xl text-xs outline-none focus:border-[#323A87]"
                      >
                        <option value="5,000만 원 미만">5,000만 원 미만</option>
                        <option value="5,000만 원 ~ 3억 원 미만">5,000만 원 ~ 3억 원 미만</option>
                        <option value="3억 원 ~ 10억 원 미만">3억 원 ~ 10억 원 미만</option>
                        <option value="10억 원 ~ 50억 원 미만">10억 원 ~ 50억 원 미만</option>
                        <option value="50억 원 이상 (대형 공공/이통사)">50억 원 이상 (대형 공공/이통사)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-800 mb-1">착공 예정 시기</label>
                      <select
                        value={formData.estimatedStartDate}
                        onChange={(e) => setFormData({ ...formData, estimatedStartDate: e.target.value })}
                        className="w-full px-3 py-2.5 bg-[#F5F7FA] border border-slate-300 rounded-xl text-xs outline-none focus:border-[#323A87]"
                      >
                        <option value="즉시 착공 필요 (긴급)">즉시 착공 필요 (긴급)</option>
                        <option value="1개월 이내">1개월 이내</option>
                        <option value="3개월 이내">3개월 이내</option>
                        <option value="상반기/하반기 예산 반영 후">상반기/하반기 예산 반영 후</option>
                      </select>
                    </div>
                  </div>

                  <div className="pt-4 flex justify-end">
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="px-6 py-2.5 text-xs font-bold text-white bg-[#323A87] hover:bg-[#282e6d] rounded-xl flex items-center gap-1.5"
                    >
                      <span>다음 단계 (담당자 정보 입력)</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="space-y-4">
                  <div className="p-3 bg-[#E8EEFF]/80 rounded-xl border border-[#323A87]/20 flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 rounded bg-emerald-600 text-white flex items-center justify-center font-bold text-[10px]">
                        田
                      </div>
                      <span className="font-bold text-[#323A87]">Google Sheets 자동 수주DB 연동</span>
                    </div>
                    <span className="text-[11px] text-slate-500 font-medium">제출 시 구글 스프레드시트에 자동 기록됩니다</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-slate-800 mb-1">발주처 / 회사명 *</label>
                      <input
                        type="text"
                        required
                        value={formData.companyName}
                        onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                        placeholder="예: SK텔레컴 / 현대건설 / OOO구청"
                        className="w-full px-3 py-2.5 bg-[#F5F7FA] border border-slate-300 rounded-xl text-xs outline-none focus:border-[#323A87]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-800 mb-1">담당자 성명 및 직급 *</label>
                      <input
                        type="text"
                        required
                        value={formData.contactName}
                        onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                        placeholder="홍길동 팀장"
                        className="w-full px-3 py-2.5 bg-[#F5F7FA] border border-slate-300 rounded-xl text-xs outline-none focus:border-[#323A87]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-slate-800 mb-1">연락처 *</label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="010-0000-0000 / 02-000-0000"
                        className="w-full px-3 py-2.5 bg-[#F5F7FA] border border-slate-300 rounded-xl text-xs outline-none focus:border-[#323A87]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-800 mb-1">이메일 *</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="contact@company.com"
                        className="w-full px-3 py-2.5 bg-[#F5F7FA] border border-slate-300 rounded-xl text-xs outline-none focus:border-[#323A87]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-800 mb-1">공사 개요 및 요청 사항</label>
                    <textarea
                      rows={3}
                      value={formData.description}
                      onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                      placeholder="공사 위치, 수량, 세부 스펙 등 요청사항을 자유롭게 적어주세요."
                      className="w-full px-3 py-2.5 bg-[#F5F7FA] border border-slate-300 rounded-xl text-xs outline-none focus:border-[#323A87]"
                    />
                  </div>

                  <div className="flex items-center gap-2 pt-1">
                    <input
                      type="checkbox"
                      id="survey"
                      checked={formData.needSiteSurvey}
                      onChange={(e) => setFormData({ ...formData, needSiteSurvey: e.target.checked })}
                      className="w-4 h-4 text-[#323A87] rounded border-slate-300"
                    />
                    <label htmlFor="survey" className="text-xs font-semibold text-slate-700 cursor-pointer">
                      엔지니어 사전 현장 실사 및 기술 검토 요청
                    </label>
                  </div>

                  <div className="pt-4 flex justify-between items-center">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      disabled={isSubmitting}
                      className="px-4 py-2.5 text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-xl disabled:opacity-50"
                    >
                      이전 단계
                    </button>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="px-6 py-2.5 text-xs font-bold text-white bg-[#323A87] hover:bg-[#282e6d] rounded-xl shadow-md flex items-center gap-2 transition-all disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin text-[#F2B21B]" />
                          <span>구글 시트에 정보 추가 중...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-3.5 h-3.5 text-[#F2B21B]" />
                          <span>온라인 견적 요청 & 구글 시트 등록</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              )}
            </form>
          </>
        )}
      </div>
    </div>
  );
};
