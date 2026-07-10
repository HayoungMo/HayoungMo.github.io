import ProjectCard from "../components/ProjectCard";
import SectionTitle from "../components/SectionTitle";
import { aiProjects } from "../data/projects";

function AiProjectsSection() {
  return (
    <section className="section-shell ai-section">
      <SectionTitle
        eyebrow="AI Extension"
        title="AI 프로젝트는 서비스 확장 역량으로 압축했습니다"
        description="AI 모델 자체보다 이미지 분류, 벡터 검색, LLM 응답을 서비스 기능으로 연결한 구조를 강조했습니다."
      />

      <div className="project-grid">
        {aiProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}

export default AiProjectsSection;
