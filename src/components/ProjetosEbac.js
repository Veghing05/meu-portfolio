import React from "react";

export default function ProjetosEBAC() {
  return (
    <section className="projetos">
      <div className="projeto">
        <img
          src="/path/to/image1.jpg"  // Substitua o caminho da imagem
          alt="Projeto EBAC 1"
          className="projeto-imagem"
        />
        <h3>Projeto EBAC 1</h3>
        <p>Descrição do projeto EBAC 1.</p>
      </div>

      <div className="projeto">
        <img
          src="/path/to/image2.jpg"  // Substitua o caminho da imagem
          alt="Projeto EBAC 2"
          className="projeto-imagem"
        />
        <h3>Projeto EBAC 2</h3>
        <p>Descrição do projeto EBAC 2.</p>
      </div>

      <div className="projeto">
        <img
          src="/path/to/image3.jpg"  // Substitua o caminho da imagem
          alt="Projeto EBAC 3"
          className="projeto-imagem"
        />
        <h3>Projeto EBAC 3</h3>
        <p>Descrição do projeto EBAC 3.</p>
      </div>
    </section>
  );
}
