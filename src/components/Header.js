import React from "react";
import { Link } from "react-router-dom";
import { FaCode } from "react-icons/fa";


<h1>Renato Vegh Dev <FaCode /></h1>


export default function Header() {
  return (
    <header className="header">
      <h1>RenatoVegh Dev <span>&lt;/&gt;</span></h1>
      <nav>
        <Link to="/">Início</Link>
        
        <Link to="/projetos">Meus Projetos Pessoais</Link>

        <Link to="/ProjetosEbac">Projetos EBAC</Link>

        <Link to="/contato">Contato</Link>

        <Link to="/certificados">Certificados</Link>
      </nav>
    </header>
  );
}