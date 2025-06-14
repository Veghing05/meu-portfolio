import React, { useState, ChangeEvent, FormEvent } from "react";
import { FaWhatsapp, FaLinkedin, FaGithub } from "react-icons/fa";

interface FormData {
  nome: string;
  email: string;
  mensagem: string;
}

export default function Contato() {
  const [formData, setFormData] = useState<FormData>({
    nome: "",
    email: "",
    mensagem: "",
  });

  const [statusMessage, setStatusMessage] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formData.nome || !formData.email || !formData.mensagem) {
      setStatusMessage("Por favor, preencha todos os campos.");
      return;
    }

    const formspreeEndpoint = "https://formspree.io/f/your-form-id"; // substitua

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
        setStatusMessage("Mensagem enviada com sucesso! Obrigado pelo contato.");
        setFormData({ nome: "", email: "", mensagem: "" });
      } else {
        setStatusMessage("Erro ao enviar a mensagem. Tente novamente mais tarde.");
      }
    } catch {
      setStatusMessage("Erro de rede. Tente novamente mais tarde.");
    }
  };

  return (
    <section className="contato">
      <div className="contatos-topo">
        <h2>📞 Conecte-se Comigo</h2>
        <div className="contatos-icons">
          <a
            href="https://wa.me/11997582512"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
          >
            <FaWhatsapp className="contato-icon" />
            <span>WhatsApp</span>
          </a>
          <a
            href="https://www.linkedin.com/in/renatobonivegh/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin className="contato-icon" />
            <span>LinkedIn</span>
          </a>
          <a
            href="https://github.com/Veghing05"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub className="contato-icon" />
            <span>GitHub</span>
          </a>
        </div>
      </div>

      <form className="form-contato" onSubmit={handleSubmit} noValidate>
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
          rows={5} // aqui o número pode ser number
        ></textarea>

        <button type="submit">Enviar</button>
      </form>

      <div aria-live="polite" className="form-status-message">
        {statusMessage}
      </div>
    </section>
  );
}

