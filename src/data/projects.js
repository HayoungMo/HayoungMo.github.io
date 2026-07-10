export const projects = [
  {
    id: "plushome",
    title: "PlusHome",
    type: "Main Team Project",
    role: "Full-stack Feature Implementation",
    period: "Team Project",
    summary:
      "가구 쇼핑몰 서비스에서 상품 탐색과 사용자 맞춤 노출 기능을 구현한 메인 프로젝트입니다.",
    problem:
      "사용자가 원하는 상품을 빠르게 찾고, 관심 없는 상품은 다시 노출되지 않도록 하는 탐색 경험이 필요했습니다.",
    solution:
      "URL Query 기반 통합검색과 사용자별 추천/숨김 상태 유지 기능을 구현해 검색 조건과 사용자 상태를 서비스 흐름에 반영했습니다.",
    result:
      "메인 페이지, 검색, 추천/숨김, 상품문의, 챗봇 UI를 담당하며 화면과 API 흐름을 함께 구현했습니다.",
    techStack: ["Java", "Spring Boot", "MyBatis", "Oracle", "React", "JavaScript"],
    highlights: [
      "URL Query 기반 통합검색",
      "MyBatis Dynamic SQL",
      "사용자별 추천/숨김 상태 유지",
      "상품문의(Q&A) 기능 구현",
      "챗봇 UI 화면 구현",
    ],
    interviewPoints: [
      "GET 방식과 URL Query로 검색 조건을 관리한 이유",
      "MyBatis 동적 SQL에서 조건 분기와 검색 확장성을 처리한 방식",
      "로그인 사용자 기준 추천/숨김 상태를 유지하는 방법",
    ],
    links: {
      github: "https://github.com/HayoungMo/PlusHome",
      demo: "",
    },
    featured: true,
  },
  {
    id: "rag-chatbot",
    title: "RAG 기반 AI 가구 추천 챗봇",
    type: "AI Extension Project",
    role: "RAG Pipeline / Streamlit",
    period: "AI Project",
    summary:
      "이미지 분류 결과를 기반으로 벡터 검색을 수행하고 LLM이 가구 추천 답변을 생성하는 프로젝트입니다.",
    problem:
      "단순 키워드 검색만으로는 사용자의 의도와 추천 근거를 충분히 설명하기 어려웠습니다.",
    solution:
      "BGE-M3 임베딩, ChromaDB 유사도 검색, Gemma 기반 LLM 응답 생성을 연결해 근거 기반 추천 흐름을 구성했습니다.",
    result:
      "이미지 분류 결과를 검색 조건으로 활용하고, 검색된 문맥을 바탕으로 추천 답변을 생성하는 구조를 구현했습니다.",
    techStack: ["Python", "Ollama", "Gemma", "BGE-M3", "ChromaDB", "Streamlit"],
    highlights: [
      "이미지 분류 결과 기반 RAG 검색",
      "Embedding + Vector DB 검색",
      "검색 근거 기반 LLM 답변 생성",
    ],
    interviewPoints: [
      "RAG를 사용한 이유와 단순 LLM 호출과의 차이",
      "임베딩 모델과 벡터 DB의 역할",
      "추천 답변의 신뢰도를 높이기 위한 프롬프트 구성",
    ],
    links: {
      github: "https://github.com/HayoungMo/llm_mohayoung_project",
      demo: "",
    },
    featured: false,
  },
  {
    id: "cnn-furniture",
    title: "CNN 가구 이미지 분류",
    type: "Deep Learning Project",
    role: "Image Classification",
    period: "AI Project",
    summary:
      "CNN 기반 이미지 분류 실험을 통해 이미지 기반 상품 탐색 기능으로 확장할 수 있는 가능성을 검토했습니다.",
    problem:
      "텍스트 검색만으로는 사용자가 원하는 가구의 형태나 스타일을 표현하기 어려운 한계가 있었습니다.",
    solution:
      "TensorFlow/Keras 기반 CNN 모델로 이미지 분류를 실험하고, 분류 결과를 추천 검색의 입력값으로 활용할 수 있도록 구성했습니다.",
    result:
      "실서비스 적용 전 단계의 이미지 분류 실험으로, RAG 추천 프로젝트와 연결되는 입력 흐름을 만들었습니다.",
    techStack: ["Python", "TensorFlow", "Keras", "CNN", "CIFAR-100", "Streamlit"],
    highlights: [
      "CNN 기반 이미지 분류",
      "Streamlit 분류 결과 화면",
      "RAG 검색 입력값으로 확장",
    ],
    interviewPoints: [
      "CIFAR-100 데이터셋의 한계와 실서비스 데이터와의 차이",
      "모델 정확도보다 서비스 연결 구조를 강조해야 하는 이유",
      "이미지 분류 결과를 추천 검색에 활용하는 방식",
    ],
    links: {
      github: "https://github.com/HayoungMo/dl_mohayoung_furniture_project",
      demo: "",
    },
    featured: false,
  },
  {
    id: "student-performance",
    title: "학생 성적 예측 및 위험군 분류",
    type: "Machine Learning Project",
    role: "Prediction / Classification",
    period: "ML Project",
    summary:
      "Student Performance Dataset을 활용해 최종 성적 예측과 학업 위험군 분류를 수행했습니다.",
    problem:
      "학업 성취도 데이터를 바탕으로 학생의 최종 성적과 위험군 여부를 사전에 파악하는 분석 흐름이 필요했습니다.",
    solution:
      "Linear Regression으로 성적을 예측하고 Logistic Regression으로 위험군을 분류해 데이터 기반 의사결정 과정을 실험했습니다.",
    result:
      "교육용 데이터셋을 통해 전처리, 모델 학습, 평가, Streamlit 시각화까지 머신러닝 기본 흐름을 정리했습니다.",
    techStack: ["Python", "Pandas", "Linear Regression", "Logistic Regression", "Streamlit"],
    highlights: [
      "데이터 전처리와 특성 선택",
      "회귀/분류 모델 비교",
      "Streamlit 기반 결과 확인",
    ],
    interviewPoints: [
      "회귀와 분류 문제를 나눈 기준",
      "교육용 데이터셋 프로젝트를 포트폴리오에서 과장하지 않는 방법",
      "AI 프로젝트를 백엔드 서비스 확장 경험으로 연결하는 방식",
    ],
    links: {
      github: "",
      demo: "",
    },
    featured: false,
  },
];

export const featuredProject = projects.find((project) => project.featured);
export const aiProjects = projects.filter((project) => !project.featured);
