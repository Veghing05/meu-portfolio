import React from "react";

type Certificado = {
  titulo: string;
  descricao: string;
  link: string;
};

const Certificados: React.FC = () => {
  const certificados: Certificado[] = [
    {
      titulo: "React Developer",
      descricao: "Emitido pela EBAC - Escola Britânica de Artes Criativas.",
      link: "https://example.com/certificado-react",
    },
    {
      titulo: "CSS Avançado",
      descricao: "Emitido pela Digital Innovation One (DIO).",
      link: "https://example.com/certificado-css",
    },
    {
      titulo: "JavaScript Moderno",
      descricao: "Emitido pela Udemy.",
      link: "https://example.com/certificado-js",
    },
  ];

  return (
    <section className="certificados">
      <h2 className="titulo-secao">📜 Meus Certificados</h2>
      <div className="certificados-lista">
        {certificados.map((certificado, index) => (
          <div className="certificado-card" key={index}>
            <h3>{certificado.titulo}</h3>
            <p>{certificado.descricao}</p>
            <a
              href={certificado.link}
              target="_blank"
              rel="noopener noreferrer"
              className="certificado-link"
            >
              Visualizar
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="icon-link"
                style={{
                  marginLeft: "6px",
                  verticalAlign: "middle",
                }}
              >
                <path d="M18 13v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" y1="14" x2="21" y2="3" />
              </svg>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certificados;
