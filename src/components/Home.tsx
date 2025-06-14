import React from "react";
import { Link } from "react-router-dom";
import fotoDestaque from "../assets/CVFT.jpeg";

interface Servico {
  title: string;
  description: string;
}

const servicos: Servico[] = [
  { title: "Desenvolvimento Web", description: "Criação de sites modernos e responsivos." },
  { title: "Design de Interfaces", description: "Experiências visuais e interativas excepcionais." },
  { title: "Soluções Personalizadas", description: "Projetos sob medida para atender às suas necessidades." },
];

const Home: React.FC = () => {
  return (
    <section className="home">
      <div className="hero">
        <img src={fotoDestaque} alt="Foto do desenvolvedor" className="foto-destaque" />
        <h1>Bem-vindo ao Meu Portfólio</h1>
        <p>Transformando ideias em soluções digitais. Explore meus projetos!</p>
      </div>

      <div className="servicos">
        <h2>O que eu faço</h2>
        <div className="servicos-itens">
          {servicos.map((servico, index) => (
            <div key={index} className="servico">
              <h3>{servico.title}</h3>
              <p>{servico.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="navegacao">
        <Link to="/ProjetosEbac" className="btn-ver-projetos">
          Ver Projetos EBAC
        </Link>
      </div>
    </section>
  );
};

export default Home;
