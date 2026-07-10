import { ArrowDown, Database, Server, Sparkles } from "lucide-react";
import LinkButton from "../components/LinkButton";
import PdfDownloadButton from "../components/PdfDownloadButton";
import TechBadge from "../components/TechBadge";
import { profile } from "../data/profile";

function HeroSection() {
  return (
    <section id="hero" className="hero-section section-shell">
      <div className="hero-content">
        <p className="eyebrow">Backend Portfolio</p>
        <h1>{profile.headline}</h1>
        <p className="hero-summary">{profile.summary}</p>

        <div className="hero-actions">
          <PdfDownloadButton href={profile.links.portfolioPdf} ready={false} />
          <LinkButton href={profile.links.github} icon="github" variant="secondary">
            GitHub
          </LinkButton>
          <LinkButton href="#projects" icon="external" variant="ghost">
            Projects
          </LinkButton>
        </div>

        <div className="hero-keywords" aria-label="핵심 기술">
          {profile.keywords.map((keyword) => (
            <TechBadge key={keyword} label={keyword} />
          ))}
        </div>
      </div>

      <div className="hero-visual" aria-label="서비스 확장 구조">
        <div className="system-node primary">
          <Server size={22} />
          <span>Spring Boot</span>
          <small>Search · API · State</small>
        </div>
        <div className="system-line" />
        <div className="system-grid">
          <div className="system-node">
            <Database size={20} />
            <span>Oracle</span>
            <small>Product Data</small>
          </div>
          <div className="system-node accent">
            <Sparkles size={20} />
            <span>RAG</span>
            <small>Vector Search · LLM</small>
          </div>
        </div>
        <div className="hero-scroll-hint">
          <ArrowDown size={16} />
          <span>Portfolio Flow</span>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
