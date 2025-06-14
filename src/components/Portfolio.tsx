import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";

export default function Portfolio() {
  const projetosPrincipais = [
    {
      titulo: "Projeto Destaque 1",
      descricao: "Descrição breve do projeto destaque 1.",
      link: "https://link-projeto1.com",
      tecnologias: ["React", "CSS", "API"],
    },
    {
      titulo: "Projeto Destaque 2",
      descricao: "Descrição breve do projeto destaque 2.",
      link: "https://link-projeto2.com",
      tecnologias: ["JavaScript", "Bootstrap"],
    },
    {
      titulo: "Projeto Destaque 3",
      descricao: "Descrição breve do projeto destaque 3.",
      link: "https://link-projeto3.com",
      tecnologias: ["HTML", "Sass", "Node.js"],
    },
  ];

  return (
    <section className="page portfolio">
      <h2>Meu Portfólio</h2>
      <p>Confira alguns dos meus projetos principais:</p>
      <div className="projetos-principais">
        {projetosPrincipais.map((projeto, index) => (
          <div className="projeto-card" key={index}>
            <h3>{projeto.titulo}</h3>
            <p>{projeto.descricao}</p>

            <div className="tecnologias">
              {projeto.tecnologias.map((tech, i) => (
                <span key={i} className="tag-tecnologia">{tech}</span>
              ))}
            </div>

            <a 
              href={projeto.link} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-ver-mais"
            >
              Ver projeto <FaExternalLinkAlt size={12} style={{ marginLeft: 4 }} />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
