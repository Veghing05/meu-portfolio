import React from "react";
import { Link } from "react-router-dom"; // Importando o Link do react-router-dom
import '../App.css'; // Caminho correto, subindo um nível para a pasta src


const Home = () => {
  return (
    <section className="home">
      <div className="hero">
        <img
          src="./components/assets/CVFT.jpeg"
          alt="Foto do perfil"
          className="foto-destaque"
        />
        <h1>Bem-vindo ao Meu Portfólio</h1>
        <p>Transformando ideias em soluções digitais. Explore meus projetos!</p>
      </div>

      <div className="servicos">
        <h2>O que eu faço</h2>
        <br />
        <div className="servicos-itens">
          {[
            { title: "Desenvolvimento Web", description: "Criação de sites modernos e responsivos." },
            { title: "Design de Interfaces", description: "Experiências visuais e interativas excepcionais." },
            { title: "Soluções Personalizadas", description: "Projetos sob medida para atender às suas necessidades." }
          ].map((servico, index) => (
            <div key={index} className="servico">
              <h3>{servico.title}</h3>
              <p>{servico.description}</p>
            </div>
          ))}
        </div>
      </div>

<br></br>
      <div className="navegacao">
        <Link to="/projetos-ebac">Ver Projetos EBAC</Link> {/* Link para a nova página */}
      </div>
    </section>
  );
};

export default Home;
