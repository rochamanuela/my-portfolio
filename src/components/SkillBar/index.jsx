import React, { useEffect, useRef } from 'react';
import './styles.css';

const SkillBar = ({ value, color, title, description }) => {
    const barFilledRef = useRef(null);
    const barBackgroundRef = useRef(null);

    useEffect(() => {
        if (barFilledRef.current) {
            barFilledRef.current.style.width = value;
            barFilledRef.current.style.backgroundColor = color;
        }

        if (barBackgroundRef.current) {
            barBackgroundRef.current.style.backgroundColor = color;
        }
    }, [value, color]);

    return (
        <div className="bar-content">
            <p className="title-bar">{title}</p>
            <div className="line-bar">
                <div className="bar">
                    <div className="bar-background" ref={barBackgroundRef}></div>
                    <div className="bar-filled" ref={barFilledRef}></div>
                </div>
                <div className="bar-value">{value}</div>
            </div>
            <p className="skill-description">{description}</p>
        </div>
    );
};

export default SkillBar;
