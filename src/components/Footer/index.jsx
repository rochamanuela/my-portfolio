import React from 'react'
import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";
import './style.css'

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="footer-content-child">
          <p>Manuela Souza</p>
          <p>São Paulo, Brasil</p>
        </div>
        <div className="footer-content-child">
          <p>“Criatividade é a inteligência se divertindo.”</p>
          <p>Albert Einstein</p>
        </div>
        <div className="footer-content-child">
          <p>Contate-me</p>
          <div className="btn-container">
            <a href="">
              <button className="primary-btn">Ir para o WhatsApp</button>
            </a>
            <a href="">
              <button className="secondary-btn">Enviar e-mail</button>
            </a>
          </div>
        </div>
      </div>
      <hr />
      <div className="footer-content-links">
        <p>© Todos os direitos reservados por Manuela Souza</p>
        <div className="social-media-links">
          <a href="">
            <FaLinkedin size={24} />
            <p>manuela-rocha</p>
          </a>
          <a href="">
            <FaInstagram size={24} />
            <p>manuela_rocha__</p>
          </a>
          <a href="">
            <FaGithub size={24} />
            <p>rochamanuela</p>
          </a>
        </div>
      </div>
    </div>
  )
}
