import React from 'react'
import MyFace from '../../assets/images/my-face.png'
import './style.css'

export default function Header() {
  return (
    <div className="header">
      <div className="header-child">
        {/* <p className="name">Manuela Souza</p> */}
        <img src={MyFace} />
      </div>
      <div className="header-child">
        <h1 className="portfolio-title">Portfolio</h1>
        <h1 className="portfolio-title-broken">Port<br />folio</h1>
        <p className="introduction">Apaixonada por design e tudo relacionado à arte e criatividade. Sempre buscando
          soluções simples para problemas complexos, afinal “a simplicidade é a sofisticação
          máxima” (Leonardo Da Vinci)</p>
      </div>
    </div>
  )
}
