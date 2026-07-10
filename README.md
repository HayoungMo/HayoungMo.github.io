# Mo Hayoung Portfolio

Java/Spring Boot 백엔드 개발자 포트폴리오 사이트입니다.

이 포트폴리오는 단순 자기소개 사이트가 아니라, 채용담당자와 기술 면접관이 프로젝트의 목적, 구현 범위, 기술적 고민을 빠르게 확인할 수 있도록 구성했습니다.

## Focus

- Java/Spring Boot 기반 웹 서비스 개발
- MyBatis와 Oracle을 활용한 데이터 처리
- URL 기반 통합검색 설계
- 사용자별 추천/숨김 상태 유지
- 이미지 분류와 RAG 기반 AI 추천 서비스 확장

## Projects

### PlusHome

가구 쇼핑몰 팀 프로젝트입니다. 메인 프로젝트로, 상품 탐색 경험을 개선하기 위한 URL 기반 통합검색과 사용자별 추천/숨김 상태 유지 기능을 중심으로 정리했습니다.

### RAG Furniture Recommendation Chatbot

이미지 분류 결과를 기반으로 벡터 검색을 수행하고, LLM이 검색 근거를 바탕으로 가구 추천 답변을 생성하는 프로젝트입니다.

### CNN Furniture Image Classification

CNN 기반 이미지 분류 실험을 통해 이미지 기반 상품 탐색 기능으로 확장할 수 있는 가능성을 검토했습니다.

### Student Performance Prediction

Student Performance Dataset을 활용해 최종 성적 예측과 학업 위험군 분류를 수행한 머신러닝 프로젝트입니다.

## Local Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## GitHub Pages

이 저장소가 `HayoungMo.github.io`라면 Vite의 `base` 값은 `/`로 유지합니다.

GitHub Pages 배포는 `.github/workflows/deploy.yml`의 GitHub Actions 설정을 사용합니다.
