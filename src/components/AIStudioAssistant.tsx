import React, { useState, useRef, useEffect } from 'react';
import { COMPANY_INFO } from '../data/companyData';
import { Bot, X, Send, Sparkles, FileText, Calculator, RefreshCw, Phone } from 'lucide-react';

interface AIStudioAssistantProps {
  openRFQModal: (category?: string) => void;
}

export const AIStudioAssistant: React.FC<AIStudioAssistantProps> = ({ openRFQModal }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Array<{ sender: 'user' | 'bot'; text: string }>>([
    {
      sender: 'bot',
      text: `안녕하세요! (주)유지텔레컴 AI B2B 비즈니스 챗봇입니다. 5G 기지국 구축, 광통신망, 철도 LTE-R, 정보통신공사 면허(${COMPANY_INFO.licenseNo}), 시공 실적 및 사업 견적에 대해 자유롭게 질문해 주세요.`
    }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const quickQuestions = [
    '정보통신공사 면허 번호가 어떻게 되나요?',
    'SK텔레컴 5G 기지국 구축 실적이 있나요?',
    'GTX-A 철도통신 LTE-R 공사 사례 알려줘',
    '온라인 견적 문의 신청 방법이 어떻게 되나요?'
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const handleSend = async (textToSend?: string) => {
    const query = textToSend || input;
    if (!query.trim() || loading) return;

    const userMsg = { sender: 'user' as const, text: query };
    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInput('');
    setLoading(true);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: query,
          history: messages
        })
      });

      if (!res.ok) throw new Error('API server response error');
      const data = await res.json();
      
      setMessages((prev) => [
        ...prev,
        { sender: 'bot', text: data.reply || '유지텔레컴 AI 챗봇 답변을 불러왔습니다.' }
      ]);
    } catch (err) {
      console.error('Chat error:', err);
      // Fallback intelligent response
      let fallbackText = '';
      const lower = query.toLowerCase();

      if (lower.includes('면허') || lower.includes('자격') || lower.includes('번호')) {
        fallbackText = `유지텔레컴은 정보통신공사업 면허(${COMPANY_INFO.licenseNo})를 보유하고 있으며, ISO 9001, ISO 45001, INNO-BIZ 인증 및 벤처기업 자격을 갖추고 있습니다.`;
      } else if (lower.includes('5g') || lower.includes('기지국') || lower.includes('sk')) {
        fallbackText = `유지텔레컴은 SK텔레컴 및 SK브로드밴드의 우수 협력사로서, 수도권 5G 3.5GHz/28GHz Massive MIMO 기지국 1,200개소 및 전국 인빌딩 음영해소 9,800개소를 완수하였습니다.`;
      } else if (lower.includes('철도') || lower.includes('gtx') || lower.includes('lte-r')) {
        fallbackText = `GTX-A(수서~동탄) 대심도 지하터널 구간에서 시속 180km 무단절 LTE-R 및 PS-LTE 재난안전통신망 구축(142억 원)을 성공적으로 수행하였습니다.`;
      } else if (lower.includes('견적') || lower.includes('문의') || lower.includes('비용')) {
        fallbackText = `우측 상단 [온라인 사업 문의] 버튼이나 챗봇 하단의 [온라인 견적 요청] 버튼을 누르시면 24시간 이내 엔지니어 회신을 받으실 수 있습니다.`;
      } else {
        fallbackText = `유지텔레컴은 2001년 창립 이래 24년간 ICT 인프라 구축을 전담해온 전문 기업입니다. 자세한 사업 상담은 대표전화(${COMPANY_INFO.representativePhone})로도 가능합니다.`;
      }

      setMessages((prev) => [...prev, { sender: 'bot', text: fallbackText }]);
    } finally {
      setLoading(false);
    }
  };

  const handleClearHistory = () => {
    setMessages([
      {
        sender: 'bot',
        text: `안녕하세요! (주)유지텔레컴 AI B2B 비즈니스 챗봇입니다. 무엇을 도와드릴까요?`
      }
    ]);
  };

  return (
    <>
      {/* Floating Launcher Button at Bottom-Right */}
      <div className="fixed bottom-6 right-6 z-40">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-3.5 sm:p-4 bg-[#323A87] hover:bg-[#282e6d] text-white rounded-2xl shadow-2xl transition-all duration-300 flex items-center gap-2.5 group border border-white/20 active:scale-95"
          aria-label="유지텔레컴 AI 챗봇 열기"
        >
          <div className="relative flex items-center justify-center">
            <Bot className="w-6 h-6 text-[#F2B21B]" />
            <span className="w-2.5 h-2.5 bg-emerald-400 rounded-full absolute -top-1 -right-1 border-2 border-[#323A87]" />
          </div>
          <div className="text-left hidden sm:block">
            <span className="text-xs font-bold block leading-none">AI B2B 상담</span>
            <span className="text-[10px] text-slate-300 block mt-0.5">유지텔레컴 AI 챗봇</span>
          </div>
        </button>
      </div>

      {/* Chat Window Popup in Bottom-Right */}
      {isOpen && (
        <div className="fixed bottom-24 right-4 sm:right-6 z-50 w-[calc(100vw-32px)] sm:w-[400px] bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col h-[540px] animate-in slide-in-from-bottom-4 duration-200">
          {/* Header */}
          <div className="p-4 bg-[#323A87] text-white flex justify-between items-center shadow-md">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 bg-white/10 rounded-xl flex items-center justify-center border border-white/10">
                <Bot className="w-5 h-5 text-[#F2B21B]" />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <p className="text-xs font-bold">유지텔레컴 AI 비즈니스 챗봇</p>
                  <span className="px-1.5 py-0.5 bg-[#F2B21B] text-[#111111] text-[9px] font-extrabold rounded">Gemini 3.6</span>
                </div>
                <p className="text-[10px] text-slate-300">ICT 인프라 & 견적 실시간 안내</p>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <button
                onClick={handleClearHistory}
                title="대화 초기화"
                className="p-1.5 text-slate-300 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
              >
                <RefreshCw className="w-4 h-4" />
              </button>
              <button
                onClick={() => setIsOpen(false)}
                title="닫기"
                className="p-1.5 text-slate-300 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Quick Action Shortcut Buttons */}
          <div className="bg-[#E8EEFF]/80 px-3 py-2 border-b border-slate-200 flex items-center justify-between text-xs font-bold text-[#323A87]">
            <span className="text-[11px]">빠른 견적 요청</span>
            <button
              onClick={() => {
                setIsOpen(false);
                openRFQModal();
              }}
              className="px-2.5 py-1 bg-[#323A87] hover:bg-[#282e6d] text-white text-[10px] font-bold rounded-lg flex items-center gap-1 shadow-sm transition-colors"
            >
              <Calculator className="w-3 h-3 text-[#F2B21B]" />
              견적 신청 모달 열기 →
            </button>
          </div>

          {/* Messages Area */}
          <div className="p-4 flex-1 overflow-y-auto space-y-3.5 bg-[#F5F7FA]">
            {messages.map((m, idx) => (
              <div key={idx} className={`flex ${m.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                {m.sender === 'bot' && (
                  <div className="w-7 h-7 rounded-xl bg-[#323A87] text-[#F2B21B] flex items-center justify-center shrink-0 mr-2 mt-1 shadow-sm">
                    <Bot className="w-4 h-4" />
                  </div>
                )}
                <div
                  className={`max-w-[82%] p-3.5 rounded-2xl text-xs leading-relaxed ${
                    m.sender === 'user'
                      ? 'bg-[#323A87] text-white rounded-tr-none shadow-sm'
                      : 'bg-white text-slate-800 border border-slate-200 rounded-tl-none shadow-sm'
                  }`}
                >
                  <p className="whitespace-pre-line">{m.text}</p>
                </div>
              </div>
            ))}

            {loading && (
              <div className="flex justify-start items-center space-x-2">
                <div className="w-7 h-7 rounded-xl bg-[#323A87] text-[#F2B21B] flex items-center justify-center shrink-0 shadow-sm">
                  <Sparkles className="w-4 h-4 animate-spin" />
                </div>
                <div className="bg-white p-3 rounded-2xl text-xs text-slate-500 border border-slate-200 shadow-sm flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#323A87] animate-ping" />
                  유지텔레컴 데이터베이스 및 기술 정보 검색 중...
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Questions Chips */}
          <div className="p-2 bg-white border-t border-slate-100 flex gap-1.5 overflow-x-auto">
            {quickQuestions.map((q, idx) => (
              <button
                key={idx}
                onClick={() => handleSend(q)}
                className="px-2.5 py-1 bg-[#F5F7FA] hover:bg-[#E8EEFF] text-[#323A87] border border-slate-200 hover:border-[#323A87]/30 text-[10px] font-bold rounded-lg shrink-0 transition-colors"
              >
                {q}
              </button>
            ))}
          </div>

          {/* Input Box */}
          <div className="p-3 bg-white border-t border-slate-200 flex items-center gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="유지텔레컴 공사, 실적, 견적에 관해 문의하세요..."
              className="flex-1 px-3 py-2.5 bg-[#F5F7FA] border border-slate-200 rounded-xl text-xs outline-none focus:border-[#323A87] focus:bg-white transition-all"
            />
            <button
              onClick={() => handleSend()}
              disabled={loading || !input.trim()}
              className="p-2.5 bg-[#323A87] hover:bg-[#282e6d] disabled:opacity-50 text-white rounded-xl shadow-sm transition-colors"
              aria-label="Send message"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

