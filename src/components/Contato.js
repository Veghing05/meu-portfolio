import React from "react";

export default function Contato() {
  return (
    <section className="contato">
      {/* Seção de Contatos abaixo do menu */}
      <div className="contatos-topo">
        <h3>Conecte-se Comigo</h3>
        <div className="contatos-icons">
          <a href="https://wa.me/seunumerodetelefone" target="_blank" rel="noopener noreferrer">
            <img 
              src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/svgs/brands/whatsapp.svg" 
              alt="WhatsApp" 
              className="icon" 
            />
            <span>WhatsApp</span>
          </a>
          <a href="https://www.linkedin.com/in/seulinkedin" target="_blank" rel="noopener noreferrer">
            <img 
              src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/svgs/brands/linkedin.svg" 
              alt="LinkedIn" 
              className="icon" 
            />
            <span>LinkedIn</span>
          </a>
          <a href="https://github.com/seugithub" target="_blank" rel="noopener noreferrer">
            <img 
              src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/svgs/brands/github.svg" 
              alt="GitHub" 
              className="icon" 
            />
            <span>GitHub</span>
          </a>
        </div>
      </div>

      {/* Formulário de Contato */}
      <h2>Contato</h2>
      <form>
        <label htmlFor="nome">Seu Nome</label>
        <input type="text" id="nome" name="nome" placeholder="Digite seu nome" />

        <label htmlFor="email">Seu Email</label>
        <input type="email" id="email" name="email" placeholder="Digite seu email" />

        <label htmlFor="mensagem">Sua Mensagem</label>
        <textarea id="mensagem" name="mensagem" placeholder="Escreva aqui"></textarea>

        <button type="submit">Enviar</button>
      </form>
    </section>
  );
}
