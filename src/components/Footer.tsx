import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>
          &copy; {new Date().getFullYear()} Renato Vegh. Todos os direitos reservados.
        </p>
        <div className="footer-icons">
          <a href="https://github.com/seugithub" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/seulinkedin" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="mailto:seuemail@email.com">
            <FaEnvelope />
          </a>
        </div>
      </div>
    </footer>
  );
}
