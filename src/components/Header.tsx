import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaCode, FaBars } from "react-icons/fa";

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="header">
      {/* Logo e nome */}
      <div className="logo" aria-label="Logo Renato Vegh Dev">
        <FaCode className="logo-icon" aria-hidden="true" />
        <h1>Renato Vegh Dev</h1>
      </div>

      {/* Botão menu hamburguer */}
      <button
        className="menu-toggle"
        onClick={toggleMenu}
        aria-expanded={menuOpen}
        aria-label="Toggle navigation menu"
      >
        <FaBars />
      </button>

      {/* Navegação */}
      <nav className={`nav ${menuOpen ? "open" : ""}`}>
        <Link to="/" onClick={closeMenu}>Início</Link>
        <Link to="/projetos" onClick={closeMenu}>Projetos Pessoais</Link>
        <Link to="/ProjetosEbac" onClick={closeMenu}>Projetos EBAC</Link>
        <Link to="/contato" onClick={closeMenu}>Contato</Link>
        <Link to="/certificados" onClick={closeMenu}>Certificados</Link>
      </nav>
    </header>
  );
};

export default Header;
