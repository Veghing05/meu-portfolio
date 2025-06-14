import React from "react";
import perfilFoto from "../assets/CVFT.jpeg"; // coloque sua foto aqui

export default function Sobre() {
  return (
    <section className="page sobre">
      <h2>Sobre Mim</h2>
      <div className="sobre-container">
        <img src={perfilFoto} alt="Foto de perfil" className="foto-perfil" />
        <div className="sobre-texto">
          <p>
            Olá! Meu nome é <strong>[Seu Nome]</strong>, sou um desenvolvedor apaixonado por tecnologia
            e por criar soluções que fazem a diferença. Tenho experiência em React,
            CSS e outras ferramentas modernas. Adoro transformar ideias em realidade digital
            e estou sempre aprendendo coisas novas para evoluir.
          </p>
          <p>
            Meu objetivo é criar projetos elegantes, acessíveis e funcionais.
            Vamos construir algo incrível juntos!
          </p>
          <div className="redes-sociais">
            <a href="https://linkedin.com/in/seulinkedin" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>{" "}
            |{" "}
            <a href="https://github.com/seugithub" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
