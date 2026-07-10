function TechBadge({ label, tone = "default" }) {
  return <span className={`tech-badge ${tone}`}>{label}</span>;
}

export default TechBadge;
