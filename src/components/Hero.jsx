import React from 'react';
import './Hero.css';

const Hero = () => {
    const scrollToContact = () => {
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section id="home" className="hero-minimal">
            <div className="hero-minimal-content">
                <h1 className="hero-minimal-title">
                    <span className="title-line gradient-text">THANUSHEK MOHANARAJ</span>
                </h1>

                <p className="hero-minimal-subtitle">CREATIVE DESIGNER</p>

                <p className="hero-minimal-description">
                    Less is more with this streamlined approach.
                </p>

                <button className="hero-minimal-btn" onClick={scrollToContact}>
                    GET STARTED
                </button>
            </div>
        </section>
    );
};

export default Hero;
