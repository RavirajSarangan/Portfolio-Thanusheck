import React, { useEffect, useRef, useState } from 'react';
import './Education.css';

const Education = () => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    const education = [
        {
            id: 'EDU-SE-01',
            degree: 'Software Engineering',
            institution: 'ESOFT Metro Campus',
            period: '2023 - Present',
            status: 'IN_PROGRESS',
            description: 'Focusing on advanced software architectures, system design, and large-scale deployment strategies.',
            metadata: 'CORE_ENGINEERING_MODULES'
        },
        {
            id: 'EDU-UI-02',
            degree: 'UI/UX Design Specialization',
            institution: 'Coursera',
            period: '2022 - 2023',
            status: 'VERIFIED',
            description: 'Mastered human-computer interaction, visual storytelling, and user-centric prototyping.',
            metadata: 'DESIGN_SYSTEMS_CERTIFIED'
        },
        {
            id: 'EDU-HS-03',
            degree: 'High School - Physical Science',
            institution: 'Veerasingam Central College',
            period: '2019 - 2021',
            status: 'COMPLETED',
            description: 'Intensive focus on mathematics and physics, building a strong logical foundation for engineering.',
            metadata: 'SCIENCE_STREAM_CREDITS'
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

        if (sectionRef.current) observer.observe(sectionRef.current);

        return () => {
            if (sectionRef.current) observer.unobserve(sectionRef.current);
        };
    }, []);

    return (
        <section id="education" className="education-2026" ref={sectionRef}>
            <div className="edu-grid-overlay"></div>

            <div className="container">
                <div className="edu-header-2026">
                    <h2 className="glitch-text" data-text="ACADEMIC_CORE">ACADEMIC_CORE</h2>
                    <div className="header-meta-2026">
                        <span className="meta-tag">LINK: ESTABLISHED</span>
                        <div className="meta-line"></div>
                        <span className="meta-tag">VER: 2026.04</span>
                    </div>
                </div>

                <div className="edu-timeline-2026">
                    <div className="edu-laser-line">
                        <div className={`laser-pulse ${isVisible ? 'active' : ''}`}></div>
                    </div>

                    <div className="edu-nodes-container">
                        {education.map((edu, index) => (
                            <div
                                key={index}
                                className={`edu-node-2026 ${isVisible ? 'reveal' : ''}`}
                                style={{ '--delay': `${index * 0.2}s` }}
                            >
                                <div className="node-marker">
                                    <div className="inner-dot"></div>
                                </div>

                                <div className="edu-card-2026">
                                    <div className="card-scanner"></div>
                                    <div className="card-corner tl"></div>
                                    <div className="card-corner br"></div>

                                    <div className="edu-card-top">
                                        <span className="edu-id">{edu.id}</span>
                                        <span className={`edu-status ${edu.status.toLowerCase()}`}>
                                            [{edu.status}]
                                        </span>
                                    </div>

                                    <h3 className="edu-degree">{edu.degree}</h3>
                                    <div className="edu-institute-wrapper">
                                        <span className="edu-period">{edu.period}</span>
                                        <span className="separator">|</span>
                                        <h4 className="edu-institution">{edu.institution}</h4>
                                    </div>

                                    <p className="edu-desc">{edu.description}</p>

                                    <div className="edu-card-footer">
                                        <span className="edu-meta">{edu.metadata}</span>
                                        <div className="footer-visual-acc">
                                            <div className="acc-bar"></div>
                                            <div className="acc-bar"></div>
                                            <div className="acc-bar"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Education;
