import React from "react";
import Jrx from "../assets/Jrx.png"; 
import Delicia from "../assets/restaurantedelicia.png"

// Logos das tecnologias
import htmlLogo from "../assets/logos/html.png";
import cssLogo from "../assets/logos/css.png";
import jsLogo from "../assets/logos/javascript.png";
import bootstrapLogo from "../assets/logos/bootstrap.png";
import reactLogo from "../assets/logos/react.png";
import nodeLogo from "../assets/logos/node.png";


export default function Projetos() {
  return (
    <section className="projetos">
      <div className="projeto">
        <a 
          href="https://jrx-seguros.vercel.app/" target="_blank" 
          rel="noopener noreferrer">
          <img src={Jrx} alt="Projeto 1" className="projeto-imagem" />
        </a>
        <h3>Site JRX Seguros</h3>
        <p>Site institucional da corretora JRX Galasse, com layout responsivo e funcionalidades modernas.</p>

      <div className="tecnologias">
          <img src={htmlLogo} alt="HTML" className="logo-tecnologia" title="HTML" />
          <img src={cssLogo} alt="CSS" className="logo-tecnologia" title="CSS" />
          <img src={jsLogo} alt="JavaScript" className="logo-tecnologia" title="JavaScript" />
          <img src={reactLogo} alt="React" className="logo-tecnologia" title="React" />
          <img src={nodeLogo} alt="Node.js" className="logo-tecnologia" title="Node.js" />
          <img src={bootstrapLogo} alt="Bootstrap" className="logo-tecnologia" title="Bootstrap" />
        </div>
      </div>
      
      <div className="projeto">
        <a href="https://restaurante-delicia.vercel.app/" target="_blank" rel="noopener noreferrer">
          <img src={Delicia} alt="Projeto 2" className="projeto-imagem" />
        </a>
        <h3>Restaurante Delicia</h3>
        <p>Site Restaurante Delicia Projeto pessoal, pedido pela Ebac.</p>

        <div className="tecnologias">
        <img src={htmlLogo} alt="HTML" className="logo-tecnologia" title="HTML" />
        <img src={cssLogo} alt="CSS" className="logo-tecnologia" title="CSS" />
        <img src={bootstrapLogo} alt="Bootstrap" className="logo-tecnologia" title="Bootstrap" />
        </div>
      </div>

      <div className="projeto">
        <a href="https://seu-link-projeto-3.com" target="_blank" rel="noopener noreferrer">
          <img src="/images/projeto3.jpg" alt="Projeto 3" className="projeto-imagem" />
        </a>
        <h3>Projeto 3</h3>
        <p>Descrição do projeto 3.</p>
      </div>
    </section>
  );
}
