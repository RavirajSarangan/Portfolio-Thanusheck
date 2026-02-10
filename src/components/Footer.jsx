import React from 'react';
import './Footer.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-brand">
                        <h3>Thanushek<span className="dot">.</span></h3>
                        <p>Creating beautiful and functional digital experiences</p>
                    </div>

                    <div className="footer-links">
                        <h4>Quick Links</h4>
                        <ul>
                            <li><a href="#home">Home</a></li>
                            <li><a href="#about">About</a></li>
                            <li><a href="#services">Services</a></li>
                            <li><a href="#portfolio">Portfolio</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                    </div>

                    <div className="footer-contact">
                        <h4>Contact</h4>
                        <p>mohan.thanu472@gmail.com</p>
                        <p>+94 762823837</p>
                        <p>Jaffna District, Sri Lanka</p>
                    </div>

                    <div className="footer-social">
                        <h4>Follow Me</h4>
                        <div className="social-links">
                            <a href="https://www.instagram.com/thanushek_thanu?igsh=YzljYTk1ODg3Zg==" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-instagram"></i>
                            </a>
                            <a href="https://www.linkedin.com/in/thanushek-mohanaraj/" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-linkedin"></i>
                            </a>
                            <a href="https://www.facebook.com/mohanaraj.thanushek.9?mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-facebook"></i>
                            </a>
                            <a href="https://www.pinterest.com/Thanushek_Mohanaraj/_profile/" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-pinterest"></i>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {currentYear} Thanushek Mohanaraj. All rights reserved.</p>
                    <p>Designed & Developed by Thanushek</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
