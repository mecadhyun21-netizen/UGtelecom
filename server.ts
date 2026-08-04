import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

const UG_SYSTEM_INSTRUCTION = `
당신은 (주)유지텔레컴(UG Telecom)의 공식 AI B2B 비즈니스 및 기술 상담 챗봇입니다.
방문자, 공공기관 발주처, 건설사 감리단, 이통사 담당자에게 친절하고 전문적인 어조(존댓말)로 유지텔레컴의 사업 분야, 기술력, 실적, 면허, 견적 절차를 답변해 주세요.

[유지텔레컴 회사 개요]
- 회사명: (주)유지텔레컴 (UG Telecom Co., Ltd.)
- 대표이사: 유지훈 (Yoo Ji-Hoon)
- 설립년도: 2001년 (24년 이상 정보통신공사 전문 기업)
- 면허번호: 정보통신공사업 서울-제021488호
- 주소: 서울특별시 서초구 반포대로 123 유지빌딩 4~6층 (본사) / 경기 판교 ICT 기술연구소 / 대전, 부산 지역본부
- 연락처: 대표전화 02-588-7200, 팩스 02-588-7209, 이메일 contact@ugtelecom.co.kr
- 인증 및 자격: ISO 9001 (품질경영), ISO 45001 (안전보건경영), INNO-BIZ (기술혁신형 중소기업), 벤처기업 인증, KISA 정보보호관리체계

[핵심 사업 분야]
1. 5G / 이동통신 기지국 구축: 3.5GHz/28GHz Massive MIMO, 인빌딩 음영지역(터널/지하철/대형쇼핑몰) 광중계기 설계 및 시공. SKT/SKB 우수협력사.
2. 초고속 광통신망 & 백본 설비: 전국 FTTH, B2B 전용회선, 지중 관로/케이블 시공, OTDR/OTN 심선 시험 및 24시간 선로 유지보수.
3. 철도 & 도로 스마트 ITS 통신: GTX-A 대심도 철도통신 LTE-R 무단절 구축, 재난안전통신망(PS-LTE), C-ITS 자율주행 차증통신.
4. 스마트 빌딩 & 데이터센터 ICT: 빌딩 지능화(IBS), 네트워크/보안 CCTV, 출입통제, 데이터센터 랙/공조/케이블링 구축.
5. 24시간 종합 유지보수 & NOC 관제: 전국 24/7 전문 엔지니어 긴급 출동 및 네트워크 모니터링.

[핵심 사업 실적]
- SK텔레컴 수도권 5G 기지국 1,200개소 및 전국 인빌딩 음영해소 9,800개소 완수
- GTX-A(수서~동탄) 대심도 지하터널 구간 LTE-R 무단절 통신망 구축 (142억 원)
- 서울특별시 C-ITS 차세대 지능형 교통체계 통신 인프라 구축 (88억 원)
- 무재해 기록: 2,450일 연속 무재해 기록 달성 (중대재해 Zero)

[견적 및 안내 문의]
- 발주 및 견적 문의는 홈페이지 우상단의 [온라인 사업 문의] 버튼이나 채팅창 하단 견적 버튼을 누르면 24시간 이내 담당 기술자 회신을 받으실 수 있습니다.
- 답변은 2~4문장 정도로 핵심을 명확하고 친절하게 작성하며, 관련 실적 및 기술 인증을 곁들여 신뢰감을 주세요.
`;

let aiClient: GoogleGenAI | null = null;
function getAIClient() {
  if (!aiClient) {
    const apiKey = process.env.GEMINI_API_KEY;
    if (apiKey) {
      aiClient = new GoogleGenAI({
        apiKey,
        httpOptions: {
          headers: {
            'User-Agent': 'aistudio-build',
          },
        },
      });
    }
  }
  return aiClient;
}

function getFallbackReply(message: string): string {
  const lower = message.toLowerCase();
  if (lower.includes('면허') || lower.includes('자격') || lower.includes('번호') || lower.includes('인증')) {
    return "유지텔레컴은 정보통신공사업 면허(서울-제021488호)를 보유하고 있으며, ISO 9001(품질경영), ISO 45001(안전보건경영), INNO-BIZ 및 벤처기업 인증을 보유한 전문 ICT 기업입니다.";
  }
  if (lower.includes('5g') || lower.includes('기지국') || lower.includes('sk') || lower.includes('이동통신')) {
    return "유지텔레컴은 SK텔레컴 및 SK브로드밴드의 우수 협력사로서 수도권 5G 3.5GHz/28GHz 기지국 1,200개소 및 전국 건물 인빌딩 음영해소 9,800개소를 성공적으로 시공하였습니다.";
  }
  if (lower.includes('철도') || lower.includes('gtx') || lower.includes('lte-r') || lower.includes('교통')) {
    return "GTX-A(수서~동탄) 대심도 지하 터널 구간에서 시속 180km 주행 중 무단절 LTE-R 및 국가 재난안전통신망(PS-LTE)을 구축하였습니다 (142억 원 규모).";
  }
  if (lower.includes('광통신') || lower.includes('백본') || lower.includes('광케이블') || lower.includes('ftth')) {
    return "유지텔레컴은 전국 12,500km 이상의 초고속 광통신망 백본, FTTH 및 B2B 전용회선 지중 관로 공사 및 24시간 OTDR 선로 유지보수를 전담하고 있습니다.";
  }
  if (lower.includes('스마트') || lower.includes('빌딩') || lower.includes('cctv') || lower.includes('ibs') || lower.includes('데이터센터')) {
    return "스마트 빌딩 IBS 지능화, CCTV 및 출입통제 보안 인프라, 데이터센터 랙/공조 케이블링 구축 솔루션을 제공합니다.";
  }
  if (lower.includes('견적') || lower.includes('문의') || lower.includes('비용') || lower.includes('신청') || lower.includes('사업')) {
    return "홈페이지 우상단 [온라인 사업 문의] 버튼이나 챗봇 하단 [견적 요청] 버튼을 눌러 공사 카테고리, 예산, 시기를 제출해 주시면 24시간 이내 엔지니어가 회신 드립니다.";
  }
  return "유지텔레컴은 2001년 창립 이래 24년간 이동통신 기지국, 광통신망, 철도/도로 ITS 및 스마트 빌딩 ICT 설비를 전담 시공해온 대표 엔지니어링 기업입니다. 상세 문의는 대표전화(02-588-7200)로 연락주시기 바랍니다.";
}

app.post("/api/chat", async (req, res) => {
  try {
    const { message, history } = req.body;
    if (!message || typeof message !== 'string') {
      return res.status(400).json({ error: "메시지를 입력해주세요." });
    }

    const ai = getAIClient();
    if (!ai) {
      return res.json({ reply: getFallbackReply(message) });
    }

    const formattedHistory = Array.isArray(history)
      ? history.slice(-6).map((h: { sender: string; text: string }) => ({
          role: h.sender === 'user' ? 'user' : 'model',
          parts: [{ text: h.text }]
        }))
      : [];

    const contents = [
      ...formattedHistory,
      { role: 'user', parts: [{ text: message }] }
    ];

    const response = await ai.models.generateContent({
      model: "gemini-3.6-flash",
      contents,
      config: {
        systemInstruction: UG_SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
    });

    const replyText = response.text || "유지텔레컴 챗봇 상담입니다. 대표전화(02-588-7200)로 문의주시면 더 상세히 안내해 드리겠습니다.";
    return res.json({ reply: replyText });

  } catch (err: any) {
    console.log("Using intelligent knowledge fallback due to API status.");
    return res.json({ reply: getFallbackReply(req.body.message || '') });
  }
});

async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
