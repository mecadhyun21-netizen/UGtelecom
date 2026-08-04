import React, { useState } from 'react';
import { JOB_OPENINGS } from '../data/companyData';
import { JobOpening } from '../types';
import { Briefcase, MapPin, Calendar, Users, CheckCircle2, Award, Heart, Sparkles, Send, X, FileText } from 'lucide-react';

export const CareersSection: React.FC = () => {
  const [selectedJob, setSelectedJob] = useState<JobOpening | null>(null);
  const [applySuccess, setApplySuccess] = useState(false);
  const [applicantForm, setApplicantForm] = useState({
    name: '',
    phone: '',
    email: '',
    experienceYears: '',
    coverLetter: ''
  });

  const benefits = [
    { title: '우수 기술자 성과급 & 자격 수당', desc: '정보통신기사/산업안전기사 자격증 보유자 월 자격수당 및 프로젝트 완료 성과급 지급' },
    { title: '자기계발 & 교육비 지원', desc: '국가 공인 정보통신 기술자 교육비, 세미나 참가비 및 학술 자격 취득 100% 지원' },
    { title: '건강검진 & 단체 상해보험', desc: '임직원 종합 건강검진 연 1회 실시 및 현장근로자 단체 상해보험 가입' },
    { title: '경조사 지원 & 휴가제도', desc: '경조휴가, 경조금, 명절 선물, 연차 자유 사용 및 리프레시 휴가 제공' }
  ];

  const handleApplySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setApplySuccess(true);
    setTimeout(() => {
      setApplySuccess(false);
      setSelectedJob(null);
      setApplicantForm({ name: '', phone: '', email: '', experienceYears: '', coverLetter: '' });
    }, 2500);
  };

  return (
    <section id="careers" className="py-20 bg-[#F5F7FA] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-bold text-[#323A87] bg-[#E8EEFF] px-3 py-1 rounded-full uppercase tracking-wider">
            Careers at UG Telecom
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#111111]">
            미래 통신 인프라를 함께 만들 <br />
            <span className="text-[#323A87]">인재를 모십니다</span>
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            유지텔레컴은 최고 수준의 기술 노하우를 나누며 함께 성장할 수 있는 수평적이고 안전한 근무 환경을 제공합니다.
          </p>
        </div>

        {/* Ideal Candidate & Welfare */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Ideal Traits */}
          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-6">
            <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
              <div className="p-3 bg-[#323A87] text-white rounded-xl">
                <Users className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#111111]">유지텔레컴 인재상</h3>
                <p className="text-xs text-slate-500">Better Connection을 이루는 핵심가치</p>
              </div>
            </div>

            <div className="space-y-3">
              <div className="p-3.5 bg-[#F5F7FA] rounded-xl space-y-1 border border-slate-200">
                <h4 className="text-xs font-bold text-[#323A87]">01. 전문성 (Professionalism)</h4>
                <p className="text-xs text-slate-600">정보통신 시공 기술에 대한 자부심과 끊임없는 배움의 자세를 가진 인재</p>
              </div>

              <div className="p-3.5 bg-[#F5F7FA] rounded-xl space-y-1 border border-slate-200">
                <h4 className="text-xs font-bold text-[#323A87]">02. 안전의식 (Safety First)</h4>
                <p className="text-xs text-slate-600">작업 현장에서 자신과 동료의 안전을 최우선으로 생각하는 인재</p>
              </div>

              <div className="p-3.5 bg-[#F5F7FA] rounded-xl space-y-1 border border-slate-200">
                <h4 className="text-xs font-bold text-[#323A87]">03. 신뢰와 협력 (Trust & Teamwork)</h4>
                <p className="text-xs text-slate-600">고객, 동료, 발주처와 원활하게 소통하고 약속을 끝까지 지키는 인재</p>
              </div>
            </div>
          </div>

          {/* Welfare */}
          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-6">
            <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
              <div className="p-3 bg-[#F2B21B] text-[#111111] rounded-xl font-bold">
                <Heart className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#111111]">복리후생 & 지원 제도</h3>
                <p className="text-xs text-slate-500">임직원의 자부심과 성장을 지원합니다</p>
              </div>
            </div>

            <div className="space-y-3">
              {benefits.map((b, idx) => (
                <div key={idx} className="p-3.5 bg-[#F5F7FA] rounded-xl space-y-1 border border-slate-200">
                  <h4 className="text-xs font-bold text-[#111111]">{b.title}</h4>
                  <p className="text-xs text-slate-600">{b.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Job Openings List */}
        <div className="space-y-6">
          <div className="flex justify-between items-center border-b border-slate-200 pb-4">
            <div>
              <h3 className="text-xl font-bold text-[#111111]">현재 진행 중인 채용 공고</h3>
              <p className="text-xs text-slate-500">원하시는 직무의 상세 요건을 확인하고 지원하세요.</p>
            </div>
            <span className="text-xs font-bold text-[#323A87] bg-[#E8EEFF] px-3 py-1 rounded-full">
              총 {JOB_OPENINGS.length}건 모집 중
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {JOB_OPENINGS.map((job) => (
              <div
                key={job.id}
                className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-md hover:border-[#323A87] transition-all flex flex-col justify-between space-y-6"
              >
                <div className="space-y-4">
                  <div className="flex justify-between items-start">
                    <span className="text-[11px] font-bold text-[#323A87] bg-[#E8EEFF] px-2.5 py-1 rounded-lg">
                      {job.department}
                    </span>
                    <span className="text-[11px] font-semibold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-lg">
                      {job.type}
                    </span>
                  </div>

                  <div className="space-y-1">
                    <h4 className="text-base font-bold text-[#111111] leading-snug">{job.title}</h4>
                    <p className="text-xs text-slate-500">경력: {job.experience} | 근무지: {job.location}</p>
                  </div>

                  <div className="pt-2 border-t border-slate-100 space-y-1 text-xs text-slate-600">
                    <p className="font-semibold text-slate-800">주요 자격요건:</p>
                    <p className="line-clamp-2 text-[11px]">{job.requirements[0]}</p>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 flex justify-between items-center">
                  <span className="text-[11px] font-medium text-slate-400">마감일: {job.deadline}</span>
                  <button
                    onClick={() => setSelectedJob(job)}
                    className="px-4 py-2 text-xs font-bold text-white bg-[#323A87] hover:bg-[#282e6d] rounded-xl transition-all"
                  >
                    상세보기 & 지원하기
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Job Detail & Application Modal */}
      {selectedJob && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full p-6 sm:p-8 space-y-6 max-h-[90vh] overflow-y-auto border border-slate-100 shadow-2xl relative animate-in zoom-in-95 duration-200">
            <button
              onClick={() => setSelectedJob(null)}
              className="absolute top-6 right-6 p-2 text-slate-400 hover:text-slate-800 bg-slate-100 rounded-full"
              aria-label="Close recruitment modal"
            >
              <X className="w-5 h-5" />
            </button>

            {applySuccess ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-xl font-bold text-[#111111]">입사 지원서가 성공적으로 접수되었습니다.</h3>
                <p className="text-xs text-slate-600">
                  제출해주신 지원서 서류 검토 후 채용 담당자가 개별 연락을 드리겠습니다.
                </p>
              </div>
            ) : (
              <>
                <div className="space-y-1">
                  <span className="text-xs font-bold text-[#323A87] bg-[#E8EEFF] px-2.5 py-1 rounded-lg">
                    {selectedJob.department} • {selectedJob.type}
                  </span>
                  <h3 className="text-xl font-bold text-[#111111]">{selectedJob.title}</h3>
                  <p className="text-xs text-slate-500">근무지: {selectedJob.location} | 마감일: {selectedJob.deadline}</p>
                </div>

                <div className="space-y-2">
                  <h4 className="text-xs font-bold uppercase text-[#323A87]">자격요건 & 자격증</h4>
                  <div className="space-y-1 bg-[#F5F7FA] p-3 rounded-xl border border-slate-200">
                    {selectedJob.requirements.map((r, idx) => (
                      <p key={idx} className="text-xs text-slate-700">• {r}</p>
                    ))}
                  </div>
                </div>

                <form onSubmit={handleApplySubmit} className="space-y-4 pt-2 border-t border-slate-200">
                  <h4 className="text-xs font-bold uppercase text-[#323A87]">간편 입사 지원서 작성</h4>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] font-bold text-slate-700 mb-1">지원자 성명 *</label>
                      <input
                        type="text"
                        required
                        value={applicantForm.name}
                        onChange={(e) => setApplicantForm({ ...applicantForm, name: e.target.value })}
                        placeholder="홍길동"
                        className="w-full px-3 py-2 bg-[#F5F7FA] border border-slate-300 rounded-xl text-xs outline-none focus:border-[#323A87]"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold text-slate-700 mb-1">연락처 *</label>
                      <input
                        type="tel"
                        required
                        value={applicantForm.phone}
                        onChange={(e) => setApplicantForm({ ...applicantForm, phone: e.target.value })}
                        placeholder="010-0000-0000"
                        className="w-full px-3 py-2 bg-[#F5F7FA] border border-slate-300 rounded-xl text-xs outline-none focus:border-[#323A87]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] font-bold text-slate-700 mb-1">이메일 *</label>
                      <input
                        type="email"
                        required
                        value={applicantForm.email}
                        onChange={(e) => setApplicantForm({ ...applicantForm, email: e.target.value })}
                        placeholder="example@email.com"
                        className="w-full px-3 py-2 bg-[#F5F7FA] border border-slate-300 rounded-xl text-xs outline-none focus:border-[#323A87]"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold text-slate-700 mb-1">경력 년수 (년) *</label>
                      <input
                        type="text"
                        required
                        value={applicantForm.experienceYears}
                        onChange={(e) => setApplicantForm({ ...applicantForm, experienceYears: e.target.value })}
                        placeholder="예: 5년"
                        className="w-full px-3 py-2 bg-[#F5F7FA] border border-slate-300 rounded-xl text-xs outline-none focus:border-[#323A87]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-slate-700 mb-1">간략한 경력 및 자기소개</label>
                    <textarea
                      rows={3}
                      value={applicantForm.coverLetter}
                      onChange={(e) => setApplicantForm({ ...applicantForm, coverLetter: e.target.value })}
                      placeholder="주요 수행 프로젝트, 자격증 보유 여부, 지원 동기를 적어주세요."
                      className="w-full px-3 py-2 bg-[#F5F7FA] border border-slate-300 rounded-xl text-xs outline-none focus:border-[#323A87]"
                    />
                  </div>

                  <div className="pt-2 flex justify-end gap-3">
                    <button
                      type="button"
                      onClick={() => setSelectedJob(null)}
                      className="px-4 py-2.5 text-xs font-bold text-slate-700 bg-slate-100 rounded-xl"
                    >
                      취소
                    </button>
                    <button
                      type="submit"
                      className="px-6 py-2.5 text-xs font-bold text-white bg-[#323A87] hover:bg-[#282e6d] rounded-xl shadow-sm flex items-center gap-1.5"
                    >
                      <Send className="w-3.5 h-3.5" />
                      입사 지원서 제출
                    </button>
                  </div>
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </section>
  );
};
