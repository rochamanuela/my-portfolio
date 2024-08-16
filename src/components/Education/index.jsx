import React from 'react'
import './style.css'

export default function Education() {
  return (
    <div className="education">
      <div className="education-child">
        <div className="education-content filled">
          <h1>Educação</h1>
          <div className="education-content-child">
            <div className="item">
              <h2 className="year">2023 - 2025</h2>
              <div className="description">
                <p className="subtitle">Tecnologia em Análise e Desenvolvimento de Sistemas</p>
                <p className="location">Instituto Federal de São Paulo, Hortolândia - SP</p>
              </div>
            </div>
            <div className="item">
              <h2 className="year">2023 - 2024</h2>
              <div className="description">
                <p className="subtitle">Técnico Desenvolvimento de Sistemas</p>
                <p className="location">Escola e Faculdade Senai Roberto Mange, Campinas - SP</p>
              </div>
            </div>
            <div className="item">
              <h2 className="year"> 2019 - 2022</h2>
              <div className="description">
                <p className="subtitle">Técnico em Informática integrado ao Ensino Médio</p>
                <p className="location">Instituto Federal de São Paulo, Hortolândia - SP</p>
              </div>
            </div>
          </div>
        </div>
        <div className="tags-outline">
          <div className="tag">Português (língua materna)</div>
          <div className="tag">Inglês (nível básico)</div>
          <div className="tag">Espanhol (nível básico)</div>
        </div>
      </div>
      <div className="education-child last-child">
        <div className="tags-filled">
          <div className="tag">#User Experience</div>
          <div className="tag">#Development</div>
          <div className="tag">#Web Design</div>
          <div className="tag">#Tech</div>
        </div>
        <div className="education-content outline">
          <h1>Atividades</h1>
          <div className="education-content-child">
            <div className="item">
              <h2 className="year">2023</h2>
              <div className="description">
                <p className="subtitle">Exposição de Arte Super Heróis e Personagens Negros</p>
                <p className="location">Expositora de desenhos, Hortolândia - SP</p>
              </div>
            </div>
            <div className="item">
              <h2 className="year">2022</h2>
              <div className="description">
                <p className="subtitle">Exposição de Arte Semana da Consciência Negra</p>
                <p className="location">Expositora de obras, Hortolândia - SP</p>
              </div>
            </div>
            <div className="item">
              <h2 className="year">2022</h2>
              <div className="description">
                <p className="subtitle">Projeto Extensionista Café Filosófico</p>
                <p className="location">Bolsista publicitária do projeto, IFSP Hortolândia - SP</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
