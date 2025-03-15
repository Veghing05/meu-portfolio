import React from "react";

export default function Projetos() {
  return (
    <section className="projetos">
      <div className="projeto">
        <img src="/path/to/image1.jpg" alt="Projeto 1" className="projeto-imagem" />
        <h3>Projeto 1</h3>
        <p>Descrição do projeto 1.</p>
      </div>
      <div className="projeto">
        <img src="/path/to/image2.jpg" alt="Projeto 2" className="projeto-imagem" />
        <h3>Projeto 2</h3>
        <p>Descrição do projeto 2.</p>
      </div>
      <div className="projeto">
        <img src="/path/to/image3.jpg" alt="Projeto 3" className="projeto-imagem" />
        <h3>Projeto 3</h3>
        <p>Descrição do projeto 3.</p>
      </div>
    </section>
  );
}
