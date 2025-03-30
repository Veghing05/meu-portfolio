import React from "react";
import EbacShoes from "../assets/EbacShoes.png"; // Caminho correto dentro de src


export default function ProjetosEBAC() {
  return (
    <section className="projetos">
      <div className="projeto">
        <a href="https://ebac-shoes-ten-gamma.vercel.app/" target="_blank" rel="noopener noreferrer">
          <img src={EbacShoes} alt="Projeto EBAC 1" className="projeto-imagem" />
        </a>
        <h3>Projeto EBAC 1</h3>
        <p>Descrição do projeto EBAC 1.</p>
      </div>

      <div className="projeto">
        <a href="https://projeto-bootstrap-blue-six.vercel.app/" target="_blank" rel="noopener noreferrer">
          <img src="/images/projeto2.jpg" alt="Projeto EBAC 2" className="projeto-imagem" />
        </a>
        <h3>Projeto EBAC 2</h3>
        <p>Descrição do projeto EBAC 2.</p>
      </div>

      <div className="projeto">
        <a href="https://seu-link-projeto-3.com" target="_blank" rel="noopener noreferrer">
          <img src="/images/projeto3.jpg" alt="Projeto EBAC 3" className="projeto-imagem" />
        </a>
        <h3>Projeto EBAC 3</h3>
        <p>Descrição do projeto EBAC 3.</p>
      </div>
    </section>
  );
}
