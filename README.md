# Mo Hayoung Portfolio

Java/Spring Boot 기반 비즈니스 로직과 Python/FastAPI 기반 AI 기능을 연결하는  
AI Native Backend / Hybrid Developer 포트폴리오입니다.

Spring Boot 기반 웹 서비스 개발 경험을 바탕으로 FastAPI, RAG, LLM, ML/DL 모델을 서비스 기능으로 연결하는 프로젝트를 진행했습니다.  
특히 Final Project에서는 Spring Boot와 FastAPI를 연동하고, Advanced Hybrid RAG 기반 자연어 검색 품질 개선을 담당했습니다.

## Links

- Portfolio Site: https://hayoungmo.github.io/
- About / Resume: https://hayoungmo.github.io/about.html#resume
- Projects: https://hayoungmo.github.io/portfolio.html
- GitHub: https://github.com/HayoungMo

## Featured Projects

### 1. BidMatch - AI 기반 나라장터 입찰 공고 추천 서비스

팀 Final Project로 진행한 AI 기반 입찰 공고 추천 서비스입니다.

- 문제: 나라장터 공고 검색에서 지역, 예산, 업무 조건이 충분히 반영되지 않는 문제
- 해결: 자연어 조건 추출, 오타 보정, pgvector 기반 검색, Advanced Hybrid RAG 재정렬 적용
- 담당: 자연어 기반 AI 공고 검색, LLM 공고 상세 요약, 관심공고 및 검색조건 관리, 공고 목록/상세/대시보드 UI 개선
- 기술: React, Spring Boot, FastAPI, PostgreSQL, Redis, pgvector, Docker, Jenkins
- 자료: [Demo](https://youtu.be/wpKuUTZtILc) / [Team PDF](./assets/bidmatch-team-report.pdf) / [My Part PDF](./assets/bidmatch-my-part.pdf) / [Appendix](./assets/bidmatch-appendix.pdf)

### 2. CNN 기반 가구 이미지 분류 시스템

CIFAR-100 가구 클래스 데이터를 활용한 딥러닝 이미지 분류 프로젝트입니다.

- 문제: 이미지 기반 가구 카테고리 분류 흐름 구현 필요
- 해결: 가구 관련 클래스 필터링, CNN 모델 학습, 예측 결과 및 확률 시각화
- 기술: Python, TensorFlow/Keras, CNN, Streamlit
- 자료: [Demo](https://youtu.be/5h_Blc88tj8) / [Summary PDF](./assets/DL%20PRJ_MHY.pdf) / [Full PDF](./assets/dl-full.pdf)

### 3. 학생 생활패턴 기반 성적 예측 및 학업 위험군 분류

UCI Student Performance Dataset을 활용한 머신러닝 예측 프로젝트입니다.

- 문제: 생활패턴, 학교생활, 가정환경, 과거 성적을 기반으로 최종 성적 및 학업 위험군 예측
- 해결: 회귀/분류 모델 비교, G1/G2 포함 여부에 따른 성능 차이 분석, Streamlit 예측 화면 구현
- 기술: Python, Pandas, Scikit-learn, Streamlit
- 자료: [Demo](https://youtu.be/_Bp-JHLNQRM) / [Summary PDF](./assets/ML%20PRJ_MHY.pdf) / [Full PDF](./assets/ml-full.pdf)

### 4. RAG 기반 AI 가구 추천 챗봇

이미지 분류 결과와 RAG 검색을 결합한 LLM 추천 챗봇 프로젝트입니다.

- 문제: 가구 이미지를 단순 분류하는 데서 끝나지 않고 추천 답변까지 연결할 필요
- 해결: CNN/MobileNetV2 이미지 분류, TF-IDF 기반 문서 검색, LLM 답변 생성, fallback 응답 구성
- 기술: Python, Streamlit, RAG, LLM, Gemini/Groq/Ollama, TF-IDF
- 자료: [Demo](https://youtu.be/5DC6A5fxXO4) / [Summary PDF](./assets/LLM%20PRJ_MHY.pdf) / [Full PDF](./assets/llm-full.pdf)

### 5. PlusHome - 가구 쇼핑 및 인테리어 상담 플랫폼

가구 쇼핑과 인테리어 상담을 하나의 흐름으로 연결한 팀 Fullstack 프로젝트입니다.

- 문제: 상품 구매, 상담, 사업자 운영 기능을 하나의 서비스 흐름으로 연결할 필요
- 해결: JWT 인증/권한, 주문/배송/상담 상태 관리, 사업자/관리자 대시보드 구현
- 역할: 팀장, 공통 개발 규칙 및 협업 프로세스 수립, 메인/검색/문의/추천 기능 담당
- 기술: React, Spring Boot, Spring Security, MyBatis, OracleDB, JWT
- 자료: [Demo](https://youtu.be/0Aa0VpRnhKA) / [GitHub README](https://github.com/HayoungMo/PlusHome#readme) / [Summary PDF](./assets/plushome-mini.pdf) / [Team PDF](./assets/plushome-team-report.pdf)

## Tech Stack

| Group | Skills |
| --- | --- |
| Backend | Java, Spring Boot, Spring Security, REST API, MyBatis |
| AI | Python, FastAPI, TensorFlow/Keras, Scikit-learn, RAG, LLM, pgvector |
| Database | OracleDB, MariaDB, MongoDB, PostgreSQL, Redis |
| Infra | Docker, Jenkins, GitHub Pages |
| Collaboration | GitHub, Jira, Notion |

## Portfolio Site Structure

| Page | Role |
| --- | --- |
| `index.html` | 대문 페이지. 포지셔닝과 About/Portfolio 이동을 제공합니다. |
| `about.html` | 자기소개, 개발 방식, 접이식 이력서를 정리합니다. |
| `portfolio.html` | 프로젝트별 시연 영상, 핵심 설명, 사용 기술, GitHub/PDF 자료를 정리합니다. |

## Maintenance

PDF 파일을 같은 이름으로 교체하면 HTML 링크는 그대로 두고 파일만 commit/push하면 됩니다.  
`main` 브랜치에 push하면 GitHub Actions가 정적 파일과 `assets` 폴더를 GitHub Pages로 배포합니다.
