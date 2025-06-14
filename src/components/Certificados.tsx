import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";

export default function Certificados() {
  const certificados = [
    {
      titulo: "React Developer",
      descricao: "Emitido pela EBAC - Escola Britânica de Artes Criativas.",
      link: "https://example.com/certificado-react",
    },
    {
      titulo: "CSS Avançado",
      descricao: "Emitido pela Digital Innovation One (DIO).",
      link: "https://example.com/certificado-css",
    },
    {
      titulo: "JavaScript Moderno",
      descricao: "Emitido pela Udemy.",
      link: "https://example.com/certificado-js",
    },
  ];

  return (
    <section className="certificados">
      <h2 className="titulo-secao">📜 Meus Certificados</h2>
      <div className="certificados-lista">
        {certificados.map((certificado, index) => (
          <div className="certificado-card" key={index}>
            <h3>{certificado.titulo}</h3>
            <p>{certificado.descricao}</p>
            <a
              href={certificado.link}
              target="_blank"
              rel="noopener noreferrer"
              className="certificado-link"
            >
              Visualizar <FaExternalLinkAlt className="icon-link" />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
