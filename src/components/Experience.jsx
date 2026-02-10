import React, { useState, useEffect, useRef } from 'react';
import './Experience.css';

const Experience = () => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    const experiences = [
        {
            title: 'WordPress Developer',
            company: 'Lanka job Designs',
            period: '2025 - Present',
            year: '2025',
            description: 'As a dedicated WordPress Developer, I specialize in designing, developing, and maintaining dynamic, responsive, and user-friendly websites using the WordPress platform. I have hands-on experience in customizing themes and plugins.',
            skills: ['WordPress', 'PHP', 'Theme Customization', 'Plugin Development'],
            icon: 'W'
        },
        {
            title: 'UI/UX Designer',
            company: 'Venom X Technology',
            period: '2023 - 2025',
            year: '2023',
            description: 'As a UI/UX Designer, I specialize in creating intuitive and visually appealing digital experiences. From wireframing to final designs, I focus on crafting user-centered interfaces that are both functional and engaging.',
            skills: ['Figma', 'User Research', 'Prototyping', 'Design Systems'],
            icon: 'D'
        },
        {
            title: 'Social Media Manager',
            company: 'SPN Supermarket',
            period: '2022 - 2023',
            year: '2022',
            description: 'I create and implement strategies that engage audiences, build brand awareness, and drive growth across platforms. I specialize in content creation, scheduling, analytics, and community engagement.',
            skills: ['Content Strategy', 'Analytics', 'Community Management', 'Brand Building'],
            icon: 'S'
        },
        {
            title: 'Photo & Video Editor',
            company: 'Freelance',
            period: '2021 - Present',
            year: '2021',
            description: 'I bring creativity and precision to every project, enhancing content with seamless transitions, stunning visuals, and engaging storytelling. From social media clips to cinematic masterpieces.',
            skills: ['Adobe Premiere', 'After Effects', 'Color Grading', 'Motion Graphics'],
            icon: 'V'
        }
    ];

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
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

    return (
        <section id="experience" className="experience-minimal" ref={sectionRef}>
            <div className="container">
                <div className="experience-header">
                    <h2 className="glitch-text" data-text="EXPERIENCE">EXPERIENCE</h2>
                    <div className="header-line"></div>
                </div>

                <div className="experience-list">
                    {experiences.map((exp, index) => (
                        <div
                            key={index}
                            className={`experience-row ${isVisible ? 'reveal' : ''}`}
                            style={{ '--delay': `${index * 0.2}s` }}
                        >
                            <div className="experience-year-column">
                                <span className="exp-year">{exp.year}</span>
                                <div className="vertical-dash"></div>
                            </div>

                            <div className="experience-content-column">
                                <div className="exp-info">
                                    <div className="exp-meta">
                                        <span className="exp-company">{exp.company}</span>
                                        <span className="exp-period">{exp.period}</span>
                                    </div>
                                    <h3 className="exp-title">{exp.title}</h3>
                                    <p className="exp-description">{exp.description}</p>

                                    <div className="exp-skills">
                                        {exp.skills.map((skill, idx) => (
                                            <span key={idx} className="exp-skill-tag">{skill}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="experience-icon-column">
                                <div className="exp-icon-box">
                                    <span className="exp-icon-letter">{exp.icon}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
