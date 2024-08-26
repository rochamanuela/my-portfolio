import React from 'react'

import Img1 from '../../../public/images/img1.png'
import Img2 from '../../../public/images/img2.png'
import Img3 from '../../../public/images/img3.png'
import Img4 from '../../../public/images/img4.png'
import Img5 from '../../../public/images/img5.png'
import Img6 from '../../../public/images/img6.png'
import Img7 from '../../../public/images/img7.png'
import Img8 from '../../../public/images/img8.png'
import Img9 from '../../../public/images/img9.png'
import Img10 from '../../../public/images/img10.png'
import Img11 from '../../../public/images/img11.png'
import Img12 from '../../../public/images/img12.png'

import Slider from '../Slider'
import './style.css'

export default function About() {
  const images = [
    Img1, Img2, Img3, Img4, Img5, Img6, Img7, Img8, Img9, Img10, Img11, Img12
  ]

  return (
    <div className="about-me" id="about">
      <div className="about-me-child">
        <h1 className="about-me-title">Hello, <br></br>I'm Manu</h1>
        <p>Sou Desenvolvedora de Software com foco em Desenvolvimento Front End e UI/UX Designer.
          Minha paixão por arte, expressão e criatividade me guiou até aqui. Sou brasileira,
          nascida em Campinas, e, atualmente, universitária. Acredito na importância de criar
          interfaces intuitivas e visualmente atraentes, sempre buscando unir funcionalidade e
          estética em meus projetos. Nos momentos tranquilos (e nos agitados também) gosto de
          apreciar a música, fotografia, desenhos, natureza e um bom chá mate ou um milk shake
          (e frutas para dar uma equilibrada).</p>
        <a href="https://www.linkedin.com/in/rocha-manuela/">
          <div className="linkedin">linkedin.com/rocha-manuela</div>
        </a>
      </div>
      {/* animações https://codesandbox.io/p/sandbox/react-awesome-reveal-typescript-177uom */}
      <div className="about-me-child">
        <Slider images={images} />
      </div>
    </div>
  )
}
