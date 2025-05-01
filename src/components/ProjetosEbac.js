import React from "react";
import EbacShoes from "../assets/EbacShoes.png";

// Logos das tecnologias
import htmlLogo from "../assets/logos/html.png";
import cssLogo from "../assets/logos/css.png";
import jsLogo from "../assets/logos/javascript.png";
import bootstrapLogo from "../assets/logos/bootstrap.png";

export default function ProjetosEBAC() {
  return (
    <section className="projetos">  
      <div className="projeto">
        <a 
          href="https://ebac-shoes-ten-gamma.vercel.app/" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <img src={EbacShoes} alt="Projeto EBAC 1" className="projeto-imagem" />
        </a>
        <h3>EbacShoes</h3>
        <p>Criação do site EbacShoes, loja de calçados.</p>

        {/* Tecnologias usadas nesse projeto */}
        <div className="tecnologias">
          <img src={htmlLogo} alt="HTML" className="logo-tecnologia" title="HTML" />
          <img src={cssLogo} alt="CSS" className="logo-tecnologia" title="CSS" />
          <img src={jsLogo} alt="JavaScript" className="logo-tecnologia" title="JavaScript" />
          <img src={bootstrapLogo} alt="Bootstrap" className="logo-tecnologia" title="Bootstrap" />
        </div>
      </div>

      <div className="projeto">
        <a 
          href="https://projeto-bootstrap-blue-six.vercel.app/" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <img src="/images/projeto2.jpg" alt="Projeto EBAC 2" className="projeto-imagem" />
        </a>
        <h3>Projeto EBAC 2</h3>
        <p>Descrição do projeto EBAC 2.</p>
      </div>

      <div className="projeto">
        <a 
          href="https://seu-link-projeto-3.com" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <img src="/images/projeto3.jpg" alt="Projeto EBAC 3" className="projeto-imagem" />
        </a>
        <h3>Projeto EBAC 3</h3>
        <p>Descrição do projeto EBAC 3.</p>
      </div>

    </section>
  );
}
