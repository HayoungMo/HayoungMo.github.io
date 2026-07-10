import { ArrowUpRight, Code2, Download, Mail } from "lucide-react";

const iconMap = {
  external: ArrowUpRight,
  github: Code2,
  download: Download,
  mail: Mail,
};

function LinkButton({ href, children, variant = "primary", icon = "external", disabled = false }) {
  const Icon = iconMap[icon] || ArrowUpRight;
  const isInternalLink = href?.startsWith("#");

  if (disabled || !href) {
    return (
      <span className={`link-button ${variant} disabled`} aria-disabled="true">
        <Icon size={18} />
        <span>{children}</span>
      </span>
    );
  }

  return (
    <a
      className={`link-button ${variant}`}
      href={href}
      target={isInternalLink ? undefined : "_blank"}
      rel={isInternalLink ? undefined : "noreferrer"}
    >
      <Icon size={18} />
      <span>{children}</span>
    </a>
  );
}

export default LinkButton;
