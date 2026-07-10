export const flowSteps = [
  {
    title: "PlusHome 개발",
    description: "가구 쇼핑몰에서 검색, 추천/숨김, Q&A, 챗봇 UI를 구현했습니다.",
  },
  {
    title: "검색 한계 인식",
    description: "텍스트 기반 검색만으로는 사용자의 취향과 이미지 의도를 충분히 반영하기 어렵다고 판단했습니다.",
  },
  {
    title: "이미지 분류 실험",
    description: "CNN으로 가구 이미지를 분류하고, 분류 결과를 추천 검색 조건으로 확장할 수 있는 흐름을 만들었습니다.",
  },
  {
    title: "예측 모델 경험",
    description: "머신러닝 프로젝트를 통해 데이터 전처리, 학습, 평가, 결과 시각화 흐름을 경험했습니다.",
  },
  {
    title: "RAG 추천 챗봇",
    description: "이미지 분류 결과, 벡터 검색, LLM 답변 생성을 연결해 AI 추천 서비스 구조를 구성했습니다.",
  },
];

export const technicalHighlights = [
  {
    title: "URL 기반 통합검색",
    description:
      "검색어, 카테고리, 정렬 조건을 URL Query로 관리해 새로고침과 공유에도 검색 상태가 유지되도록 설계했습니다.",
    tags: ["GET", "Query String", "Search UX"],
  },
  {
    title: "MyBatis Dynamic SQL",
    description:
      "조건별 상품 조회를 동적 SQL로 구성해 통합검색, 카테고리 필터, 정렬 조건을 하나의 조회 흐름에서 처리했습니다.",
    tags: ["MyBatis", "Oracle", "Dynamic SQL"],
  },
  {
    title: "사용자 상태 유지",
    description:
      "사용자별 추천/숨김 상태를 관리해 관심 없는 상품이 반복 노출되지 않도록 상품 탐색 경험을 개선했습니다.",
    tags: ["User State", "Recommendation", "Persistence"],
  },
  {
    title: "RAG 서비스 구조",
    description:
      "이미지 분류 결과를 검색 입력으로 사용하고, 벡터 DB에서 찾은 문맥을 LLM 응답 생성에 연결했습니다.",
    tags: ["BGE-M3", "ChromaDB", "Gemma"],
  },
];
