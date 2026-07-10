import SectionTitle from "../components/SectionTitle";
import TechBadge from "../components/TechBadge";
import { technicalHighlights } from "../data/highlights";

function TechnicalHighlightsSection() {
  return (
    <section id="highlights" className="section-shell highlights-section">
      <SectionTitle
        eyebrow="Technical Highlights"
        title="면접 질문을 유도하는 기술 포인트"
        description="채용담당자는 빠르게 읽고, 기술 면접관은 바로 질문할 수 있도록 구현 이유와 고민이 드러나는 항목만 남겼습니다."
      />

      <div className="highlight-grid">
        {technicalHighlights.map((item) => (
          <article className="highlight-card" key={item.title}>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <div className="tech-list">
              {item.tags.map((tag) => (
                <TechBadge key={tag} label={tag} tone="soft" />
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default TechnicalHighlightsSection;
