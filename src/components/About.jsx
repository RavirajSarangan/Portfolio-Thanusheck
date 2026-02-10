import React, { useState, useEffect, useRef } from 'react';
import './About.css';

const About = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [counters, setCounters] = useState({
        experience: 0,
        projects: 0,
        clients: 0,
        satisfaction: 0
    });
    const sectionRef = useRef(null);

    const personalInfo = [
        { label: 'Birthday', value: 'October 20, 2003', icon: '🎂' },
        { label: 'Phone', value: '+94 762823837', icon: '📱' },
        { label: 'Email', value: 'mohan.thanu472@gmail.com', icon: '📧' },
        { label: 'From', value: 'Jaffna District, Sri Lanka', icon: '📍' },
        { label: 'Language', value: 'English, Tamil', icon: '🌐' },
        { label: 'Freelance', value: 'Available', icon: '✅' },
    ];

    const stats = [
        { number: 3, suffix: '+', label: 'Years Experience', key: 'experience' },
        { number: 50, suffix: '+', label: 'Projects Completed', key: 'projects' },
        { number: 30, suffix: '+', label: 'Happy Clients', key: 'clients' },
        { number: 100, suffix: '%', label: 'Client Satisfaction', key: 'satisfaction' }
    ];

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !isVisible) {
                    setIsVisible(true);
                    animateCounters();
                }
            },
            { threshold: 0.3 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, [isVisible]);

    const animateCounters = () => {
        const duration = 2000;
        const targets = { experience: 3, projects: 50, clients: 30, satisfaction: 100 };
        const steps = 60;
        const stepDuration = duration / steps;

        let currentStep = 0;
        const interval = setInterval(() => {
            currentStep++;
            const progress = currentStep / steps;

            setCounters({
                experience: Math.floor(targets.experience * progress),
                projects: Math.floor(targets.projects * progress),
                clients: Math.floor(targets.clients * progress),
                satisfaction: Math.floor(targets.satisfaction * progress)
            });

            if (currentStep >= steps) {
                clearInterval(interval);
                setCounters(targets);
            }
        }, stepDuration);
    };

    return (
        <section id="about" className="section about" ref={sectionRef}>
            <div className="about-background">
                <div className="bg-circle circle-1"></div>
                <div className="bg-circle circle-2"></div>
                <div className="bg-circle circle-3"></div>
            </div>

            <div className="container">
                <div className="section-title">
                    <h2>About Me</h2>
                    <p>Discover my journey and expertise</p>
                </div>

                <div className="about-main">
                    <div className="about-left">
                        <div className={`about-image-card ${isVisible ? 'visible' : ''}`}>
                            <div className="image-frame">
                                <img
                                    src="/profile.png"
                                    alt="Thanushek Mohanaraj"
                                    className="profile-img"
                                />
                                <div className="img-overlay"></div>
                            </div>
                        </div>
                    </div>

                    <div className="about-right">
                        <div className={`intro-text ${isVisible ? 'visible' : ''}`}>
                            <h3>
                                Hi There! I'm <span className="name-highlight">Thanushek</span>
                            </h3>
                            <h4 className="role-title">UI/UX Designer & Front-End Developer</h4>
                            <p className="description">
                                I am a passionate UI/UX Designer dedicated to creating intuitive, user-friendly,
                                and visually engaging digital experiences. With a strong foundation in user-centered
                                design, wireframing, prototyping, and interactive interfaces, I specialize in
                                transforming ideas into seamless and engaging products.
                            </p>
                            <p className="description">
                                My approach combines creativity with technical expertise to deliver designs that
                                not only look beautiful but also provide exceptional user experiences.
                            </p>
                        </div>


                        <div className={`action-buttons ${isVisible ? 'visible' : ''}`}>
                            <a href="/assets/cv.pdf" className="btn-primary" download>
                                <span>Download CV</span>
                                <span className="btn-icon">📄</span>
                            </a>
                            <a href="#contact" className="btn-secondary">
                                <span>Contact Me</span>
                                <span className="btn-icon">💬</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
