import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaCode, FaBars } from "react-icons/fa";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      {/* Logo e nome */}
      <div className="logo">
        <FaCode className="logo-icon" />
        <h1>Renato Vegh Dev</h1>
      </div>

      {/* Botão menu hamburguer */}
      <button className="menu-toggle" onClick={toggleMenu}>
        <FaBars />
      </button>

      {/* Navegação */}
      <nav className={`nav ${menuOpen ? "open" : ""}`}>
        <Link to="/" onClick={() => setMenuOpen(false)}>Início</Link>
        <Link to="/projetos" onClick={() => setMenuOpen(false)}>Projetos Pessoais</Link>
        <Link to="/ProjetosEbac" onClick={() => setMenuOpen(false)}>Projetos EBAC</Link>
        <Link to="/contato" onClick={() => setMenuOpen(false)}>Contato</Link>
        <Link to="/certificados" onClick={() => setMenuOpen(false)}>Certificados</Link>
      </nav>
    </header>
  );
}
