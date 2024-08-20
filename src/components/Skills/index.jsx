import React from 'react'
import SkillBar from '../SkillBar'
import Title from '../../assets/images/title.png'
import './style.css'

export default function Skills() {
  return (
    <div className="skills">
      <div className="skills-section-title">
        <h1>Habilidades</h1>
      </div>
      <img src={Title} alt="" className="title-image" />
      <div className="skills-content">
        <div className="skills-child">
          <SkillBar
            value="90%"
            color="#801A6A"
            title="Desenvolvimento Web Front-End"
            description="HTML - CSS - JS - React - Angular - Vue"
          />
          <SkillBar
            value="50%"
            color="#FF7F51"
            title="Desenvolvimento de Interface para Desktop"
            description="Java Swing - TKinter"
          />
          <SkillBar
            value="70%"
            color="#CE4257"
            title="Desenvolvimento Back-End"
            description="Java - Python - Django - Django Rest Framework - Fast API"
          />
        </div>
        <div className="skills-child">
          <SkillBar
            value="75%"
            color="#CE4257"
            title="Desenvolvimento Mobile"
            description="JSX - XML - React Native - Android Studio"
          />
          <SkillBar
            value="95%"
            color="#801A6A"
            title="Design de Interfaces (UI)"
            description="Criação de Brand - Criação de interfaces - Prototipagem - Figma"
          />
          <SkillBar
            value="80%"
            color="#FF7F51"
            title="Design de Experiência (UX)"
            description="Criação e análise de Personas - Pesquisa de aceitação"
          />
        </div>
      </div>
    </div>
  )
}
