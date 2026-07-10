import SectionTitle from "../components/SectionTitle";
import { flowSteps } from "../data/highlights";

function FlowSection() {
  return (
    <section id="flow" className="section-shell flow-section">
      <SectionTitle
        eyebrow="Portfolio Story"
        title="서비스 개발 경험을 AI 추천 기능으로 확장했습니다"
        description="프로젝트를 단순 나열하지 않고, PlusHome에서 느낀 검색 경험의 한계를 AI 프로젝트로 확장한 흐름으로 구성했습니다."
      />

      <div className="flow-timeline">
        {flowSteps.map((step, index) => (
          <article className="flow-step" key={step.title}>
            <span className="flow-index">{String(index + 1).padStart(2, "0")}</span>
            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default FlowSection;
