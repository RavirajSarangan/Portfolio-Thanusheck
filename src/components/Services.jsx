import React, { useState, useEffect, useRef } from 'react';
import './Services.css';

const Services = () => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    const services = [
        {
            icon: '🎬',
            title: 'Video Editing',
            description: 'Professional video editing that elevates your content with precision and creativity, from social media clips to cinematic projects.',
            features: ['Social Media Clips', 'Cinematic Projects', 'Seamless Transitions', 'Creative Enhancement']
        },
        {
            icon: '🎨',
            title: 'UI/UX Design',
            description: 'Expert UI/UX design creating intuitive, user-friendly interfaces that deliver seamless and visually appealing experiences.',
            features: ['User Research', 'Wireframing', 'Prototyping', 'Visual Design']
        },
        {
            icon: '📦',
            title: 'Product Design',
            description: 'Innovative product designs blending functionality and aesthetics, creating user-centric solutions from concept to final prototype.',
            features: ['Concept Development', 'User-Centric Design', 'Prototyping', 'Design Systems']
        },
        {
            icon: '📸',
            title: 'Photo Editing',
            description: 'Expert photo editing with retouching, color correction, and creative enhancements to make your images captivating.',
            features: ['Retouching', 'Color Correction', 'Creative Enhancement', 'Visual Polish']
        },
        {
            icon: '💻',
            title: 'Front-End Development',
            description: 'Creating responsive, visually appealing websites with modern frameworks, ensuring seamless user experiences across devices.',
            features: ['React & Vite', 'Modern CSS', 'Responsive Layouts', 'Cross-Device Compatibility']
        },
        {
            icon: '📱',
            title: 'Digital Marketing',
            description: 'Strategic social media content creation, engagement, and growth tracking to maximize your brand visibility and impact.',
            features: ['Content Creation', 'Growth Strategy', 'Profile Optimization', 'Analytics']
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
        <section id="services" className="services-minimal" ref={sectionRef}>
            <div className="container">
                <div className="services-header">
                    <h2 className="glitch-text" data-text="SERVICES">SERVICES</h2>
                    <div className="header-line"></div>
                </div>

                <div className="services-grid-minimal">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className={`service-card-minimal ${isVisible ? 'reveal' : ''}`}
                            style={{ '--delay': `${index * 0.15}s` }}
                        >
                            <div className="service-card-scanner"></div>

                            <div className="service-card-content">
                                <div className="service-icon-box">
                                    <span className="service-emoji">{service.icon}</span>
                                    <div className="icon-glow"></div>
                                </div>

                                <h3 className="service-card-title">{service.title}</h3>
                                <p className="service-card-desc">{service.description}</p>

                                <ul className="service-card-features">
                                    {service.features.slice(0, 3).map((feature, idx) => (
                                        <li key={idx}>
                                            <span className="bullet">/</span>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="service-card-border"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
