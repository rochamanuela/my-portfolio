import React, { useState } from 'react';
import './style.css';

import { IoMdClose, IoMdMenu } from "react-icons/io";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <div className="navbar">
            <div className="menu-icon" onClick={toggleMenu}>
                {isMenuOpen ? <IoMdClose size={28} /> : <IoMdMenu size={28} />}
            </div>
            <h1>Manuela Souza</h1>

            <div className={`overlay ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}></div>

            <div className={`internal-links ${isMenuOpen ? 'open' : ''}`}>
                <div className="menu-icon" onClick={toggleMenu}>
                    {isMenuOpen ? <IoMdClose className='close' size={28} /> : <IoMdMenu size={28} />}
                </div>
                <h1>Manuela Souza</h1>
                <a href="#about">Sobre Mim</a>
                <a href="#education">Educação</a>
                <a href="#skills">Habilidades</a>
                <a href="#experience">Experiência</a>
            </div>
        </div>
    );
}
