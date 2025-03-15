import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="header">
      <h1>Meu Portfólio</h1>
      <nav>
        <Link to="/">Início</Link>
        
        <Link to="/projetos">Projetos</Link>

        <Link to="/contato">Contato</Link>

        <Link to="/certificados">Certificados</Link>
      </nav>
    </header>
  );
}
