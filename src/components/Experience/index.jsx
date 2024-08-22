import React from 'react'
import './style.css'

import MockupEsy from '../../assets/images/mockups/mockup-esy-project.png'
import MockupYoung from '../../assets/images/mockups/mockup-young-bank-project.png'
import MockupRexroute from '../../assets/images/mockups/mockup-rexroute-project.png'

export default function Experience() {
  return (
    <div className="experience">
      <div className="experience-section-title">
        <div className="child">
          <h1>Experiência</h1>
          <hr />
          <p className='lide-experience-1'>Desenvolvedora de Software e UI/UX Designer | Robert 
            Bosch <br />Campinas, Brasil | Janeiro de 2023 - Presente</p>
        </div>
        <div className="child">
          <p className='lide-experience-2'>Na Bosch foi onde tive e tenho a oportunidade de 
            aprender, evoluir e crescer na minha área. Durante este período participei de diversos 
            projetos, tais como:</p>
        </div>
      </div>
      <section className="experience-content" id="first-content">
        <div className="text">
          <h1>BOSCH ESY - TCC 2024</h1>
          <p>Desenvolvi, junto com minha equipe, um software de gerenciamento de eventos
            corporativos. Neste projeto, atuei como UX/UI Designer, criando uma interface
            simples e intuitiva para facilitar o uso dos usuários, utilizando o Figma.
            Além disso, participei do desenvolvimento front-end, empregando React para
            construir a aplicação.</p>
        </div>
        <div className="mockup coral">
          <img src={MockupEsy} />
          {/*<div className="coral-rectangle"></div>*/}
        </div>
      </section>
      <section className="experience-content">
        <div className="mockup dark-purple">
          <img src={MockupYoung} />
          {/*<div className="dark-purple-rectangle"></div>*/}
        </div>
        <div className="text" id="last-content">
        {/* <div className="text" style={{ paddingRight: '10%', paddingLeft: '5%' }}> */}
          <h1>YOUNG BANK - Senai 2023</h1>
          <p>Como parte do projeto integrador do Senai, projetei a interface de um banco
            digital com um estilo moderno e voltado para o público jovem. O desenvolvimento
            mobile foi realizado utilizando React Native, resultando em uma experiência de
            usuário fluida e acessível.</p>
        </div>
      </section>
      <section className="experience-content" id="last-content">
        {/* <div className="text" style={{ paddingLeft: '10%', paddingRight: '5%' }}> */}
        <div className="text">
          <h1>REX ROUTE - Rexroth 2023</h1>
          <p>Desenvolvi a interface de uma aplicação de compartilhamento de rota para a
            filial Rexroth, com o objetivo de diminuir custos. Trabalhei em estreita
            colaboração com os usuários, recebendo feedback constante para criar a
            melhor experiência possível para eles.</p>
        </div>
        <div className="mockup amaranth">
          <img src={MockupRexroute} />
          {/*<div className="amaranth-rectangle"></div>*/}
        </div>
      </section>
    </div>
  )
}
