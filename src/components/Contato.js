import React, { useState } from "react";
import { FaWhatsapp, FaLinkedin, FaGithub } from "react-icons/fa";

export default function Contato() {
  // Estado para o formulário
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    mensagem: "",
  });

  // Atualiza o estado do formulário
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Envia o formulário usando Formspree (troque o action para o seu endpoint)
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Simples validação
    if (!formData.nome || !formData.email || !formData.mensagem) {
      alert("Por favor, preencha todos os campos.");
      return;
    }

    // Envio via fetch para Formspree (troque o link abaixo pelo seu)
    const formspreeEndpoint = "https://formspree.io/f/your-form-id";

    try {
      const response = await fetch(formspreeEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Mensagem enviada com sucesso! Obrigado pelo contato.");
        setFormData({ nome: "", email: "", mensagem: "" });
      } else {
        alert("Erro ao enviar a mensagem. Tente novamente mais tarde.");
      }
    } catch (error) {
      alert("Erro de rede. Tente novamente mais tarde.");
    }
  };

  return (
    <section className="contato">
      <div className="contatos-topo">
        <h2>📞 Conecte-se Comigo</h2>
        <div className="contatos-icons">
          <a
            href="https://wa.me/11997582512" // Troque "SEUNUMERO" pelo seu WhatsApp com código do país e DDD (ex: 5511999999999)
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
          >
            <FaWhatsapp className="contato-icon" />
            <span>WhatsApp</span>
          </a>
          <a
            href="https://www.linkedin.com/in/renatobonivegh/" // Troque pelo seu LinkedIn real
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin className="contato-icon" />
            <span>LinkedIn</span>
          </a>
          <a
            href="https://github.com/Veghing05" // Troque pelo seu GitHub real
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub className="contato-icon" />
            <span>GitHub</span>
          </a>
        </div>
      </div>

      <form className="form-contato" onSubmit={handleSubmit}>
        <h3>📬 Envie uma mensagem</h3>

        <label htmlFor="nome">Seu Nome</label>
        <input
          type="text"
          id="nome"
          name="nome"
          placeholder="Digite seu nome"
          value={formData.nome}
          onChange={handleChange}
          required
        />

        <label htmlFor="email">Seu Email</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Digite seu email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label htmlFor="mensagem">Sua Mensagem</label>
        <textarea
          id="mensagem"
          name="mensagem"
          placeholder="Escreva aqui sua mensagem"
          value={formData.mensagem}
          onChange={handleChange}
          required
          rows="5"
        ></textarea>

        <button type="submit">Enviar</button>
      </form>
    </section>
  );
}
