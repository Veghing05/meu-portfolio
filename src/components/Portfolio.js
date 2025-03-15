import React from "react";

export default function Portfolio() {
  const projetosPrincipais = [
    {
      titulo: "Projeto Destaque 1",
      descricao: "Descrição breve do projeto destaque 1.",
    },
    {
      titulo: "Projeto Destaque 2",
      descricao: "Descrição breve do projeto destaque 2.",
    },
    {
      titulo: "Projeto Destaque 3",
      descricao: "Descrição breve do projeto destaque 3.",
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
          </div>
        ))}
      </div>
    </section>
  );
}
