# 📄 AI PDF Q&A Chatbot – PDF 기반 질문 챗봇 SaaS

> 사용자가 PDF(논문, 리포트 등)를 업로드하면,  
> 해당 문서를 AI가 분석하고, 관련 질문을 하면 대화형으로 답변해주는 SaaS형 챗봇 서비스입니다.

---

## 🧠 주요 기능 (MVP)

- [x] 로그인 (Supabase Auth)
- [x] PDF 업로드 → Supabase Storage 저장
- [ ] 텍스트 추출 및 chunk 단위 분리
- [ ] GPT Embedding → 벡터 저장 (pgvector)
- [ ] 질문 입력 → 관련 chunk 검색 → GPT 답변 생성
- [ ] 대화형 챗 UI
- [ ] 내 문서 관리 페이지

---

## 🗓️ 개발 계획 (5일 MVP 완성 목표)

| Day | 작업 내용 | 상태 |
|-----|------------|------|
| Day 1 | 프로젝트 설계, Supabase 연결, 라우팅 구성 | ✅ 완료 |
| Day 2 | PDF 업로드 기능, 텍스트 파싱, chunk 저장 | ⏳ 예정 |
| Day 3 | GPT 임베딩 + 벡터 저장 | ⏳ 예정 |
| Day 4 | 질문 → 유사 chunk 검색 → GPT 답변 생성 | ⏳ 예정 |
| Day 5 | 내 문서 목록, 배포(Vercel), 마무리 정리 | ⏳ 예정 |

---

## 🛠️ 기술 스택

- **Frontend**: React + Vite + JavaScript + Tailwind CSS
- **Backend/API**: Supabase (Auth, DB, Storage, pgvector)
- **AI API**: OpenAI GPT (Embedding + Chat Completion)
- **Deployment**: Vercel (예정)

---

## 🧪 앞으로 구현될 기능 (예정)

- [ ] GPT 기반 문서 요약 기능
- [ ] 질문 자동 제안
- [ ] 문서 공유 링크 발급
- [ ] 실시간 응답 스트리밍 (stream API)
