import React from "react";
import EbacShoes from "../assets/EbacShoes.png";
import Restaurante from "../assets/Restaurante.png"

// Logos das tecnologias
import htmlLogo from "../assets/logos/html.png";
import cssLogo from "../assets/logos/css.png";
import jsLogo from "../assets/logos/javascript.png";
import bootstrapLogo from "../assets/logos/bootstrap.png";

// Dados dos projetos (opcional: facilita escalar depois)
const projetos = [
  {
    titulo: "EbacShoes",
    descricao: "Criação do site EbacShoes, loja de calçados.",
    imagem: EbacShoes,
    link: "https://ebac-shoes-ten-gamma.vercel.app/",
    tecnologias: [htmlLogo, cssLogo, jsLogo, bootstrapLogo],
  },
  {
    titulo: "Restaurante EBAC",
    descricao: "Descrição do projeto EBAC.",
    imagem: Restaurante, // se estiver em public/
    link: "https://restaurante-sooty-psi.vercel.app/",
    tecnologias: [],
  },
  {
    titulo: "Projeto EBAC 3",
    descricao: "Descrição do projeto EBAC 3.",
    imagem: "/images/projeto3.jpg",
    link: "https://seu-link-projeto-3.com",
    tecnologias: [],
  },
];

export default function ProjetosEBAC() {
  return (
    <section className="projetos">
      {projetos.map((projeto, index) => (
        <div className="projeto" key={index}>
          <a
            href={projeto.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={projeto.imagem}
              alt={`Imagem do projeto ${projeto.titulo}`}
              className="projeto-imagem"
            />
          </a>
          <h3>{projeto.titulo}</h3>
          <p>{projeto.descricao}</p>

          {projeto.tecnologias.length > 0 && (
            <div className="tecnologias">
              {projeto.tecnologias.map((logo, i) => (
                <img
                  key={i}
                  src={logo}
                  alt="Tecnologia"
                  className="logo-tecnologia"
                />
              ))}
            </div>
          )}
        </div>
      ))}
    </section>
  );
}
