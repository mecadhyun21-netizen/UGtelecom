import React, { useState } from 'react';
import { OFFICE_LOCATIONS, COMPANY_INFO } from '../data/companyData';
import { MapPin, Phone, Printer, Mail, Navigation, Bus, Train, Car, ExternalLink } from 'lucide-react';

export const LocationSection: React.FC = () => {
  const [selectedOffice, setSelectedOffice] = useState(OFFICE_LOCATIONS[0]);

  return (
    <section id="company-location" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-bold text-[#323A87] bg-[#E8EEFF] px-3 py-1 rounded-full uppercase tracking-wider">
            Locations & Network
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#111111]">
            전국 거점 & 본사 오시는 길
          </h2>
          <p className="text-sm text-slate-600">
            유지텔레컴은 서울 본사 및 전국 주요 지역 사업소를 통해 신속한 현장 시공 및 24시간 장애 긴급 대응 네트워크를 구축하고 있습니다.
          </p>
        </div>

        {/* Office Selection Tabs */}
        <div className="flex justify-center overflow-x-auto pb-2">
          <div className="bg-[#F5F7FA] p-1.5 rounded-2xl border border-slate-200 flex space-x-1 shrink-0">
            {OFFICE_LOCATIONS.map((office) => (
              <button
                key={office.id}
                onClick={() => setSelectedOffice(office)}
                className={`px-5 py-2.5 text-xs font-bold rounded-xl transition-all ${
                  selectedOffice.id === office.id 
                    ? 'bg-[#323A87] text-white shadow-sm' 
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {office.name}
              </button>
            ))}
          </div>
        </div>

        {/* Office Details & Interactive Map Display */}
        <div className="bg-[#F5F7FA] rounded-2xl p-6 sm:p-10 border border-slate-200 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Details (5 Cols) */}
          <div className="lg:col-span-5 space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#E8EEFF] text-[#323A87] rounded-lg text-xs font-bold">
                <MapPin className="w-3.5 h-3.5" />
                {selectedOffice.isHeadquarter ? 'Headquarters (본사)' : 'Regional Branch'}
              </div>

              <h3 className="text-2xl font-extrabold text-[#111111]">{selectedOffice.name}</h3>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                {selectedOffice.address}
              </p>

              <div className="pt-4 border-t border-slate-200/80 space-y-3 text-xs text-slate-700">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-[#323A87]">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 block font-semibold">대표 전화</span>
                    <span className="font-bold text-[#111111]">{selectedOffice.tel}</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-slate-500">
                    <Printer className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 block font-semibold">팩스 번호</span>
                    <span className="font-bold text-[#111111]">{selectedOffice.fax}</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-slate-500">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 block font-semibold">담당 부서 / 이메일</span>
                    <span className="font-bold text-[#111111]">{selectedOffice.contactPerson} ({selectedOffice.email})</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Transport Guide */}
            <div className="p-4 bg-white rounded-xl border border-slate-200 space-y-2 text-xs">
              <span className="font-bold text-[#323A87] uppercase tracking-wider text-[11px]">대중교통 안내</span>
              <div className="space-y-1.5 text-slate-600">
                <p className="flex items-center gap-2">
                  <Train className="w-3.5 h-3.5 text-[#323A87] shrink-0" />
                  <span>지하철: 2호선 / 3호선 교대역 14번 출구 도보 5분</span>
                </p>
                <p className="flex items-center gap-2">
                  <Bus className="w-3.5 h-3.5 text-[#323A87] shrink-0" />
                  <span>버스: 서초역/교대역 정류장 하차 (간선 405, 5413)</span>
                </p>
                <p className="flex items-center gap-2">
                  <Car className="w-3.5 h-3.5 text-[#323A87] shrink-0" />
                  <span>주차: 유지빌딩 지하주차장 무료 주차 지원</span>
                </p>
              </div>
            </div>
          </div>

          {/* Right Simulated Map Canvas (7 Cols) */}
          <div className="lg:col-span-7 bg-slate-900 rounded-2xl overflow-hidden min-h-[350px] relative flex flex-col justify-between p-6 border border-slate-800 shadow-inner">
            {/* Map Grid Pattern */}
            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]" />

            {/* Simulated Interactive Map Pin Marker */}
            <div className="relative z-10 my-auto text-center space-y-4">
              <div className="w-16 h-16 bg-[#323A87] text-[#F2B21B] rounded-2xl mx-auto flex items-center justify-center shadow-2xl border-2 border-white/20 animate-bounce">
                <MapPin className="w-8 h-8" />
              </div>
              <div className="bg-slate-950/90 text-white p-4 rounded-xl border border-slate-800 max-w-sm mx-auto shadow-xl">
                <p className="text-xs font-bold">{selectedOffice.name}</p>
                <p className="text-[11px] text-slate-400 mt-1">{selectedOffice.address}</p>
              </div>
            </div>

            {/* External Navigation Launcher Links */}
            <div className="relative z-10 flex flex-wrap justify-center gap-3 pt-4 border-t border-slate-800">
              <a
                href={`https://map.kakao.com/?q=${encodeURIComponent(selectedOffice.address)}`}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 bg-[#FEE500] text-[#191919] text-xs font-bold rounded-xl hover:brightness-95 transition-all flex items-center gap-1.5"
              >
                <span>카카오맵 연결</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
              <a
                href={`https://map.naver.com/v5/search/${encodeURIComponent(selectedOffice.address)}`}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 bg-[#03CF5D] text-white text-xs font-bold rounded-xl hover:brightness-95 transition-all flex items-center gap-1.5"
              >
                <span>네이버지도 연결</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
