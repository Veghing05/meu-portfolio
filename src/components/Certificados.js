import React from "react";

export default function Certificados() {
  const certificados = [
    { titulo: "Certificado React", descricao: "Emitido pela [Plataforma X]." },
    { titulo: "Certificado CSS Avançado", descricao: "Emitido pela [Plataforma Y]." },
  ];

  return (
    <section className="certificados">
      <h2>Meus Certificados</h2>
      <div className="certificados-lista">
        {certificados.map((certificado, index) => (
          <div className="certificado-card" key={index}>
            <h3>{certificado.titulo}</h3>
            <p>{certificado.descricao}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
