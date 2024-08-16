import React from 'react'
import MyLegs from '../../assets/images/my-legs.png'
import './style.css'

export default function About() {
  return (
    <div className="about-me" id="about">
      <div className="about-me-child">
        <h1 className="about-me-title">Hello,<br></br>I'm Manu</h1>
        <p>Sou Desenvolvedora de Software com foco em Desenvolvimento Front End e UI/UX Designer.
          Minha paixão por arte, expressão e criatividade me guiou até aqui. Sou brasileira,
          nascida em Campinas, e, atualmente, universitária. Acredito na importância de criar
          interfaces intuitivas e visualmente atraentes, sempre buscando unir funcionalidade e
          estética em meus projetos.</p>
        <a href="">
          <div className="linkedin">linkedin.com/manuela-rocha</div>
        </a>
      </div>
      <div className="about-me-child contact">
        <img src={MyLegs} className="legs-image" />
        <div className="legend">
          <p>São Paulo, Brasil</p>
          <p>(19) 9 8224-8477</p>
          <p>rochadesouzamanuela@gmail.com</p>
          <span className="span-1">Abril 28, 2004</span>
          <span className="span-2">Brasileira</span>
        </div>
      </div>
    </div>
  )
}
