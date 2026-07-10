import LinkButton from "../components/LinkButton";
import PdfDownloadButton from "../components/PdfDownloadButton";
import SectionTitle from "../components/SectionTitle";
import { profile } from "../data/profile";

function ContactSection() {
  return (
    <section id="contact" className="section-shell contact-section">
      <div className="contact-card">
        <SectionTitle
          eyebrow="Contact"
          title="GitHub Pages, Repository, PDF를 하나의 포트폴리오로 연결합니다"
          description="사이트에서는 전체 흐름을 빠르게 보여주고, GitHub 저장소에서는 구현 근거를, PDF에서는 제출용 요약본을 제공합니다."
        />

        <div className="contact-actions">
          <LinkButton href={profile.links.github} icon="github" variant="secondary">
            GitHub Profile
          </LinkButton>
          <PdfDownloadButton href={profile.links.portfolioPdf} ready={false} />
          <LinkButton href={profile.links.email} icon="mail" variant="ghost" disabled={!profile.links.email}>
            Email
          </LinkButton>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
