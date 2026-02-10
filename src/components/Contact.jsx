import React, { useState, useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [status, setStatus] = useState('idle'); // idle, submitting, success, error
    const [errorMsg, setErrorMsg] = useState('');
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('submitting');

        try {
            await emailjs.send(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                {
                    from_name: formData.name,
                    from_email: formData.email,
                    subject: formData.subject,
                    message: formData.message,
                },
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            );
            setStatus('success');
            setErrorMsg('');
            setFormData({ name: '', email: '', subject: '', message: '' });
            setTimeout(() => setStatus('idle'), 5000);
        } catch (error) {
            console.error('EmailJS Error:', error);
            setErrorMsg(error?.text || error?.message || 'Unknown error');
            setStatus('error');
        }
    };

    const contactMethods = [
        {
            id: 'REF_E',
            label: 'EMAIL_ADDR',
            value: 'mohan.thanu472@gmail.com',
            link: 'mailto:mohan.thanu472@gmail.com'
        },
        {
            id: 'REF_P',
            label: 'VOICE_LINK',
            value: '+94 762823837',
            link: 'tel:+94762823837'
        },
        {
            id: 'REF_L',
            label: 'LOC_COORD',
            value: 'Jaffna, Sri Lanka',
            link: null
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
        <section id="contact" className="contact-simple-hud" ref={sectionRef}>
            <div className="container">
                <div className="contact-header-simple">
                    <div className="status-container">
                        <span className="live-tag">GET IN TOUCH</span>
                        <div className="status-line"></div>
                    </div>
                    <h2>Contact</h2>
                </div>

                <div className="contact-grid-simple">
                    {/* Left: Info */}
                    <div className={`contact-info-simple ${isVisible ? 'reveal' : ''}`}>
                        <div className="info-intro">
                            <p>I'm open for new projects and collaborations. Feel free to reach out!</p>
                        </div>

                        <div className="method-stack">
                            {contactMethods.map((method, index) => (
                                <div key={index} className="method-item-simple">
                                    <div className="method-meta">
                                        <span className="method-label-simple">{method.label.replace('_', ' ')}</span>
                                    </div>
                                    {method.link ? (
                                        <a href={method.link} className="method-val-simple">{method.value}</a>
                                    ) : (
                                        <span className="method-val-simple">{method.value}</span>
                                    )}
                                </div>
                            ))}
                        </div>

                        <div className="social-nodes-simple">
                            <a href="https://www.linkedin.com/in/thanushek-mohanaraj/" target="_blank" rel="noopener noreferrer" className="social-node-mini">
                                <i className="fab fa-linkedin-in"></i>
                            </a>
                            <a href="https://www.instagram.com/thanushek_thanu?igsh=YzljYTk1ODg3Zg==" target="_blank" rel="noopener noreferrer" className="social-node-mini">
                                <i className="fab fa-instagram"></i>
                            </a>
                            <a href="https://www.facebook.com/mohanaraj.thanushek.9?mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer" className="social-node-mini">
                                <i className="fab fa-facebook-f"></i>
                            </a>
                        </div>
                    </div>

                    {/* Right: Form */}
                    <form className={`contact-form-simple ${isVisible ? 'reveal' : ''}`} onSubmit={handleSubmit}>
                        <div className="form-dec-line"></div>

                        <div className="field-group-simple">
                            <label>Name</label>
                            <input
                                type="text"
                                name="name"
                                placeholder="Enter your name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="field-group-simple">
                            <label>Email</label>
                            <input
                                type="email"
                                name="email"
                                placeholder="Enter your email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="field-group-simple">
                            <label>Subject</label>
                            <input
                                type="text"
                                name="subject"
                                placeholder="What is this about?"
                                value={formData.subject}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="field-group-simple">
                            <label>Message</label>
                            <textarea
                                name="message"
                                placeholder="Write your message here..."
                                rows="4"
                                value={formData.message}
                                onChange={handleChange}
                                required
                            ></textarea>
                        </div>

                        <button type="submit" className="submit-btn-simple" disabled={status === 'submitting'}>
                            <span className="btn-label-simple">
                                {status === 'submitting' ? 'Sending...' :
                                    status === 'success' ? 'Message Sent!' :
                                        status === 'error' ? 'Error! Try Again' : 'Send Message'}
                            </span>
                            <div className="btn-glow-simple"></div>
                        </button>
                        {status === 'success' && <p className="success-msg">Message sent successfully! You can also reach me at mohan.thanu472@gmail.com</p>}
                        {status === 'error' && <p className="error-msg">Failed: {errorMsg}</p>}
                    </form>
                </div>
            </div>
        </section>
    );
};



export default Contact;
