import { Menu, X } from "lucide-react";
import { useState } from "react";

const navItems = [
  { href: "#flow", label: "Flow" },
  { href: "#projects", label: "Projects" },
  { href: "#highlights", label: "Tech" },
  { href: "#contact", label: "Contact" },
];

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="site-header">
      <a className="logo" href="#hero" onClick={closeMenu}>
        Mo Hayoung
      </a>

      <button
        className="mobile-menu-button"
        type="button"
        aria-label={isOpen ? "메뉴 닫기" : "메뉴 열기"}
        onClick={() => setIsOpen((current) => !current)}
      >
        {isOpen ? <X size={21} /> : <Menu size={21} />}
      </button>

      <nav className={`header-nav ${isOpen ? "open" : ""}`}>
        {navItems.map((item) => (
          <a key={item.href} href={item.href} onClick={closeMenu}>
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  );
}

export default Header;
