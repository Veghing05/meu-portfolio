import React from "react";
import Jrx from "../assets/Jrx.png"; 
import Delicia from "../assets/restaurantedelicia.png";

import htmlLogo from "../assets/logos/html.png";
import cssLogo from "../assets/logos/css.png";
import jsLogo from "../assets/logos/javascript.png";
import bootstrapLogo from "../assets/logos/bootstrap.png";
import reactLogo from "../assets/logos/react.png";
import nodeLogo from "../assets/logos/node.png";

interface Tecnologia {
  src: string;
  alt: string;
  title: string;
}

interface Projeto {
  id: number;
  titulo: string;
  descricao: string;
  imagemSrc: string;
  imagemAlt: string;
  link: string;
  tecnologias: Tecnologia[];
}

const projetos: Projeto[] = [
  {
    id: 1,
    titulo: "Site JRX Seguros",
    descricao: "Site institucional da corretora JRX Galasse, com layout responsivo e funcionalidades modernas.",
    imagemSrc: Jrx,
    imagemAlt: "Projeto 1",
    link: "https://jrx-seguros.vercel.app/",
    tecnologias: [
      { src: htmlLogo, alt: "HTML", title: "HTML" },
      { src: cssLogo, alt: "CSS", title: "CSS" },
      { src: jsLogo, alt: "JavaScript", title: "JavaScript" },
      { src: reactLogo, alt: "React", title: "React" },
      { src: nodeLogo, alt: "Node.js", title: "Node.js" },
      { src: bootstrapLogo, alt: "Bootstrap", title: "Bootstrap" },
    ],
  },
  {
    id: 2,
    titulo: "Restaurante Delicia",
    descricao: "Site Restaurante Delicia Projeto pessoal, pedido pela Ebac.",
    imagemSrc: Delicia,
    imagemAlt: "Projeto 2",
    link: "https://restaurante-delicia.vercel.app/",
    tecnologias: [
      { src: htmlLogo, alt: "HTML", title: "HTML" },
      { src: cssLogo, alt: "CSS", title: "CSS" },
      { src: bootstrapLogo, alt: "Bootstrap", title: "Bootstrap" },
    ],
  },
  {
    id: 3,
    titulo: "Projeto 3",
    descricao: "Descrição do projeto 3.",
    imagemSrc: "/images/projeto3.jpg",
    imagemAlt: "Projeto 3",
    link: "https://seu-link-projeto-3.com",
    tecnologias: [],
  },
];

export default function Projetos() {
  return (
    <section className="projetos">
      {projetos.map(({ id, titulo, descricao, imagemSrc, imagemAlt, link, tecnologias }) => (
        <div key={id} className="projeto">
          <a href={link} target="_blank" rel="noopener noreferrer">
            <img src={imagemSrc} alt={imagemAlt} className="projeto-imagem" />
          </a>
          <h3>{titulo}</h3>
          <p>{descricao}</p>

          <div className="tecnologias">
            {tecnologias.map(({ src, alt, title }) => (
              <img
                key={alt}
                src={src}
                alt={alt}
                title={title}
                className="logo-tecnologia"
              />
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
