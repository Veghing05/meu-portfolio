import React from "react";
import Jrx from "../assets/Jrx.png"; // Caminho correto dentro de src

export default function Projetos() {
  return (
    <section className="projetos">
      <div className="projeto">
        <a href="https://jrx-seguros.vercel.app/" target="_blank" rel="noopener noreferrer">
          <img src={Jrx} alt="Projeto 1" className="projeto-imagem" />
        </a>
        <h3>Site JRX Seguros</h3>
        <p>Site institucional da corretora JRX Galasse, com layout responsivo e funcionalidades modernas.</p>
      </div>

      <div className="projeto">
        <a href="https://seu-link-projeto-2.com" target="_blank" rel="noopener noreferrer">
          <img src="/images/projeto2.jpg" alt="Projeto 2" className="projeto-imagem" />
        </a>
        <h3>Projeto 2</h3>
        <p>Descrição do projeto EBAC 2.</p>
      </div>

      <div className="projeto">
        <a href="https://seu-link-projeto-3.com" target="_blank" rel="noopener noreferrer">
          <img src="/images/projeto3.jpg" alt="Projeto 3" className="projeto-imagem" />
        </a>
        <h3>Projeto 3</h3>
        <p>Descrição do projeto EBAC 3.</p>
      </div>
    </section>
  );
}
