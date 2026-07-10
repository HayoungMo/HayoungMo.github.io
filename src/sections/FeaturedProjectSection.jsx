import { Code2, Database, Search, UserCheck } from "lucide-react";
import ProjectCard from "../components/ProjectCard";
import SectionTitle from "../components/SectionTitle";
import { featuredProject } from "../data/projects";

const architecture = [
  { icon: Search, title: "URL Query", text: "검색어 · 카테고리 · 정렬 조건" },
  { icon: Code2, title: "Spring MVC", text: "Controller · Service · Mapper" },
  { icon: Database, title: "Oracle", text: "조건별 상품 조회" },
  { icon: UserCheck, title: "User State", text: "추천 · 숨김 상태 유지" },
];

function FeaturedProjectSection() {
  return (
    <section id="projects" className="section-shell featured-section">
      <SectionTitle
        eyebrow="Main Project"
        title="PlusHome을 메인 프로젝트로 보여줍니다"
        description="기능 나열보다 통합검색, 사용자 상태 유지, MyBatis 조회 흐름처럼 면접 질문이 나올 수 있는 기술 포인트를 앞에 배치했습니다."
      />

      <div className="featured-layout">
        <ProjectCard project={featuredProject} />

        <aside className="architecture-panel">
          <p className="panel-label">Core Flow</p>
          <h3>검색과 사용자 상태를 함께 다룬 백엔드 흐름</h3>
          <div className="architecture-list">
            {architecture.map((item) => {
              const Icon = item.icon;
              return (
                <div className="architecture-item" key={item.title}>
                  <span>
                    <Icon size={20} />
                  </span>
                  <div>
                    <strong>{item.title}</strong>
                    <p>{item.text}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="interview-box">
            <p className="panel-label">Interview Hooks</p>
            <ul>
              {featuredProject.interviewPoints.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </section>
  );
}

export default FeaturedProjectSection;
