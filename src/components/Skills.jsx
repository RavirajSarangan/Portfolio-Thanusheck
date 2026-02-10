import React, { useState, useEffect, useRef } from 'react';
import './Skills.css';

const Skills = () => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    const skills = [
        { name: 'UI/UX Design', level: 95, logo: 'https://cdn-icons-png.flaticon.com/512/5968/5968705.png' },
        { name: 'Figma', level: 90, logo: 'https://cdn-icons-png.flaticon.com/512/5968/5968705.png' },
        { name: 'Adobe XD', level: 85, logo: 'https://upload.wikimedia.org/wikipedia/commons/c/c2/Adobe_XD_CC_icon.svg' },
        { name: 'Wireframing', level: 92, logo: 'https://cdn-icons-png.flaticon.com/512/2991/2991148.png' },
        { name: 'Prototyping', level: 88, logo: 'https://cdn-icons-png.flaticon.com/512/2920/2920277.png' },
        { name: 'HTML/CSS', level: 90, logo: 'https://cdn-icons-png.flaticon.com/512/732/732212.png' },
        { name: 'JavaScript', level: 85, logo: 'https://cdn-icons-png.flaticon.com/512/5968/5968292.png' },
        { name: 'React', level: 80, logo: 'https://cdn-icons-png.flaticon.com/512/1126/1126012.png' },
        { name: 'Responsive Design', level: 93, logo: 'https://cdn-icons-png.flaticon.com/512/2721/2721297.png' },
        { name: 'Social Media', level: 87, logo: 'https://cdn-icons-png.flaticon.com/512/3938/3938026.png' },
        { name: 'Content Creation', level: 90, logo: 'https://cdn-icons-png.flaticon.com/512/2920/2920349.png' },
        { name: 'Photo Editing', level: 88, logo: 'https://cdn-icons-png.flaticon.com/512/3342/3342137.png' },
    ];

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.2 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    const renderSkill = (skill, index, keyPrefix = '') => (
        <div
            key={`${keyPrefix}${index}`}
            className={`skill-hexagon-item ${isVisible ? 'visible' : ''}`}
            style={{ animationDelay: `${index * 0.1}s` }}
        >
            <div className="hexagon-wrapper">
                <div className="hexagon">
                    <div className="hexagon-inner">
                        <div className="skill-content">
                            <img
                                src={skill.logo}
                                alt={skill.name}
                                className="skill-logo"
                                onError={(e) => {
                                    e.target.style.display = 'none';
                                    e.target.nextSibling.style.display = 'block';
                                }}
                            />
                            <span className="skill-icon-fallback" style={{ display: 'none' }}>
                                {skill.name.charAt(0)}
                            </span>
                            <span className="skill-level-hex">{skill.level}%</span>
                        </div>
                    </div>
                </div>
                <div className="progress-bar-hex">
                    <div
                        className="progress-fill-hex"
                        style={{
                            width: isVisible ? `${skill.level}%` : '0%',
                            transitionDelay: `${index * 0.1}s`
                        }}
                    ></div>
                </div>
            </div>
            <h3 className="skill-name-hex">{skill.name}</h3>
        </div>
    );

    return (
        <section id="skills" className="section skills" ref={sectionRef}>
            <div className="container">
                <div className="section-title">
                    <h2>SKILLS</h2>
                    <p>My Technical & Creative Expertise</p>
                </div>

                <div className="skills-scroll-container">
                    <div className="skills-hexagon-grid">
                        {skills.map((skill, index) => renderSkill(skill, index))}
                        {skills.map((skill, index) => renderSkill(skill, index, 'dup1-'))}
                        {skills.map((skill, index) => renderSkill(skill, index, 'dup2-'))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
