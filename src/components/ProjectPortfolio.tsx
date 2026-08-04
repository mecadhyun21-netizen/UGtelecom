import React, { useState } from 'react';
import { PROJECTS_DATA } from '../data/companyData';
import { ProjectItem } from '../types';
import { Search, Filter, Calendar, MapPin, Building2, CheckCircle2, ArrowUpRight, X, DollarSign } from 'lucide-react';

export const ProjectPortfolio: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'skt' | 'public' | 'railway' | 'enterprise'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const filteredProjects = PROJECTS_DATA.filter((proj) => {
    const matchesFilter = filter === 'all' || proj.clientCategory === filter;
    const matchesSearch = 
      proj.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      proj.client.toLowerCase().includes(searchQuery.toLowerCase()) ||
      proj.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      proj.category.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesFilter && matchesSearch;
  });

  return (
    <section id="projects" className="py-20 bg-[#F5F7FA] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-200 pb-8">
          <div className="space-y-2">
            <span className="text-xs font-bold text-[#323A87] bg-[#E8EEFF] px-3 py-1 rounded-full uppercase tracking-wider">
              Proven Track Record & Case Studies
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#111111]">
              주요 프로젝트 시공 실적
            </h2>
            <p className="text-sm text-slate-600 max-w-2xl">
              정부 기관, 한국철도공사, SK텔레컴, 주요 건설사가 검증한 유지텔레컴의 시공 실적입니다.
            </p>
          </div>

          {/* Search Bar */}
          <div className="relative min-w-[280px]">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="프로젝트, 발주처, 지역 검색..."
              className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-300 rounded-2xl text-xs font-medium focus:border-[#323A87] focus:ring-1 focus:ring-[#323A87] shadow-sm outline-none"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2">
          <button
            onClick={() => setFilter('all')}
            className={`px-4 py-2 text-xs font-bold rounded-xl transition-all ${
              filter === 'all' ? 'bg-[#323A87] text-white shadow-sm' : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
            }`}
          >
            전체 실적 ({PROJECTS_DATA.length})
          </button>
          <button
            onClick={() => setFilter('skt')}
            className={`px-4 py-2 text-xs font-bold rounded-xl transition-all ${
              filter === 'skt' ? 'bg-[#323A87] text-white shadow-sm' : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
            }`}
          >
            SKT / SKB 이통사
          </button>
          <button
            onClick={() => setFilter('public')}
            className={`px-4 py-2 text-xs font-bold rounded-xl transition-all ${
              filter === 'public' ? 'bg-[#323A87] text-white shadow-sm' : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
            }`}
          >
            공공기관 & 도로
          </button>
          <button
            onClick={() => setFilter('railway')}
            className={`px-4 py-2 text-xs font-bold rounded-xl transition-all ${
              filter === 'railway' ? 'bg-[#323A87] text-white shadow-sm' : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
            }`}
          >
            철도 & GTX 통신
          </button>
          <button
            onClick={() => setFilter('enterprise')}
            className={`px-4 py-2 text-xs font-bold rounded-xl transition-all ${
              filter === 'enterprise' ? 'bg-[#323A87] text-white shadow-sm' : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
            }`}
          >
            건설사 & 스마트빌딩
          </button>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((proj) => (
            <div
              key={proj.id}
              onClick={() => setSelectedProject(proj)}
              className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl hover:border-[#323A87] transition-all duration-300 cursor-pointer flex flex-col justify-between group"
            >
              <div>
                {/* Image & Overlay Badge */}
                <div className="relative h-48 overflow-hidden bg-slate-900">
                  <img
                    src={proj.imageUrl}
                    alt={proj.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                  />
                  <div className="absolute top-3 left-3 bg-[#323A87]/90 backdrop-blur-md text-white text-[11px] font-bold px-3 py-1 rounded-xl">
                    {proj.category}
                  </div>
                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-md text-[#111111] text-[11px] font-extrabold px-3 py-1 rounded-xl shadow-sm">
                    {proj.year}년 완료
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-3">
                  <span className="text-[11px] font-extrabold text-[#323A87] block uppercase">{proj.client}</span>
                  <h3 className="text-base font-bold text-[#111111] group-hover:text-[#323A87] transition-colors leading-snug line-clamp-2">
                    {proj.title}
                  </h3>
                  <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
                    {proj.description}
                  </p>

                  <div className="pt-3 border-t border-slate-100 grid grid-cols-2 gap-2 text-[11px] text-slate-600">
                    <div className="flex items-center gap-1 font-medium">
                      <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                      <span className="truncate">{proj.location}</span>
                    </div>
                    <div className="flex items-center gap-1 font-bold text-[#323A87]">
                      <DollarSign className="w-3.5 h-3.5 text-[#F2B21B] shrink-0" />
                      <span>사업규모: {proj.scale}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Footer CTA */}
              <div className="px-6 py-3.5 bg-[#F5F7FA] border-t border-slate-100 flex justify-between items-center text-xs font-bold text-[#323A87]">
                <span>상세 개요 및 스펙</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-16 bg-white rounded-2xl border border-slate-200 space-y-3">
            <p className="text-base font-bold text-slate-700">검색 결과에 맞는 프로젝트가 없습니다.</p>
            <p className="text-xs text-slate-500">검색어를 변경하시거나 전체 필터를 선택해보세요.</p>
            <button
              onClick={() => {
                setFilter('all');
                setSearchQuery('');
              }}
              className="px-4 py-2 bg-[#323A87] text-white text-xs font-bold rounded-xl"
            >
              필터 초기화
            </button>
          </div>
        )}
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full p-6 sm:p-8 space-y-6 max-h-[90vh] overflow-y-auto border border-slate-100 shadow-2xl relative animate-in zoom-in-95 duration-200">
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-6 right-6 p-2 text-slate-400 hover:text-slate-800 bg-slate-100 rounded-full"
              aria-label="Close project modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-[#323A87] bg-[#E8EEFF] px-2.5 py-1 rounded-lg">
                  {selectedProject.category}
                </span>
                <span className="text-xs font-bold text-slate-500">완공년도: {selectedProject.year}</span>
              </div>
              <h3 className="text-xl font-bold text-[#111111]">{selectedProject.title}</h3>
            </div>

            <div className="relative h-56 rounded-xl overflow-hidden bg-slate-900">
              <img src={selectedProject.imageUrl} alt={selectedProject.title} className="w-full h-full object-cover" />
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 p-4 bg-[#F5F7FA] rounded-xl border border-slate-200 text-xs">
              <div>
                <span className="text-slate-400 font-semibold block">발주처</span>
                <span className="font-bold text-[#111111]">{selectedProject.client}</span>
              </div>
              <div>
                <span className="text-slate-400 font-semibold block">사업 위치</span>
                <span className="font-bold text-[#111111]">{selectedProject.location}</span>
              </div>
              <div>
                <span className="text-slate-400 font-semibold block">공사 규모</span>
                <span className="font-bold text-[#323A87]">{selectedProject.scale}</span>
              </div>
            </div>

            <div className="space-y-2">
              <h4 className="text-xs font-bold uppercase text-[#323A87] tracking-wider">공사 개요 및 시공 범위</h4>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed bg-white p-3.5 rounded-xl border border-slate-200">
                {selectedProject.scope}
              </p>
            </div>

            <div className="space-y-2">
              <h4 className="text-xs font-bold uppercase text-[#323A87] tracking-wider">주요 성과 & 시공 포인트</h4>
              <div className="space-y-2">
                {selectedProject.highlights.map((h, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-700 bg-[#E8EEFF]/40 p-3 rounded-xl border border-[#323A87]/10">
                    <CheckCircle2 className="w-4 h-4 text-[#323A87] shrink-0 mt-0.5" />
                    <span className="font-medium">{h}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-slate-200 flex justify-end">
              <button
                onClick={() => setSelectedProject(null)}
                className="px-6 py-2.5 text-xs font-bold text-white bg-[#323A87] rounded-xl hover:bg-[#282e6d]"
              >
                확인 및 닫기
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
