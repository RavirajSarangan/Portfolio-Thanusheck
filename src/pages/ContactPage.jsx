import React, { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import './ContactPage.css';

const ContactPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [status, setStatus] = useState('idle'); // idle, submitting, success, error

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
            setFormData({ name: '', email: '', subject: '', message: '' });
            setTimeout(() => setStatus('idle'), 5000);
        } catch (error) {
            console.error('EmailJS Error:', error);
            setStatus('error');
        }
    };

    const satelliteNodes = [
        { label: 'COMS_CHANNEL', value: 'mohan.thanu472@gmail.com', type: 'Email' },
        { label: 'VOICE_LINK', value: '+94 762823837', type: 'Phone' },
        { label: 'LOC_COORD', value: 'Jaffna, Sri Lanka', type: 'Location' }
    ];

    return (
        <main className="contact-page-hud">
            <div className="hud-grid-background"></div>

            <div className="contact-page-container">
                <header className="contact-page-header">
                    <div className="page-status-bar">
                        <div className="status-indicator">
                            <div className="indicator-dot"></div>
                            LINK_STABLE
                        </div>
                        <div className="status-line-page"></div>
                        <div className="status-indicator">
                            SECURE_TX
                        </div>
                    </div>
                    <h1>Mission <span className="header-accent">Control</span></h1>
                </header>

                <div className="contact-page-layout">
                    {/* Left: Tactical Info */}
                    <aside className="contact-sidebar-hud">
                        <div className="sidebar-panel">
                            <div className="panel-corner tl"></div>
                            <div className="panel-corner tr"></div>
                            <div className="panel-corner bl"></div>
                            <div className="panel-corner br"></div>

                            <h3 className="panel-title">SATELLITE_NODES</h3>
                            <div className="contact-method-list">
                                {satelliteNodes.map((node, index) => (
                                    <div key={index} className="method-item-page">
                                        <span className="method-label-page">{node.label}</span>
                                        <a
                                            href={node.type === 'Email' ? `mailto:${node.value}` : node.type === 'Phone' ? `tel:${node.value.replace(/\s/g, '')}` : '#'}
                                            className="method-value-page"
                                            onClick={(e) => node.type === 'Location' && e.preventDefault()}
                                        >
                                            {node.value}
                                        </a>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="sidebar-panel">
                            <div className="panel-corner tl"></div>
                            <div className="panel-corner tr"></div>
                            <div className="panel-corner bl"></div>
                            <div className="panel-corner br"></div>

                            <h3 className="panel-title">SOCIAL_GRID</h3>
                            <div className="social-grid-page">
                                <a href="https://www.linkedin.com/in/thanushek-mohanaraj/" target="_blank" rel="noopener noreferrer" className="social-link-page">
                                    <i className="fab fa-linkedin-in"></i>
                                </a>
                                <a href="https://www.instagram.com/thanushek_thanu?igsh=YzljYTk1ODg3Zg==" target="_blank" rel="noopener noreferrer" className="social-link-page">
                                    <i className="fab fa-instagram"></i>
                                </a>
                                <a href="https://www.facebook.com/mohanaraj.thanushek.9?mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer" className="social-link-page">
                                    <i className="fab fa-facebook-f"></i>
                                </a>
                            </div>
                        </div>
                    </aside>

                    {/* Right: Transmission Hub */}
                    <section className="contact-form-main-hud">
                        <div className="form-scanner-line"></div>

                        <form onSubmit={handleSubmit}>
                            <div className="form-field-hud">
                                <label>IDENT_NAME</label>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Enter identification name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="form-field-hud">
                                <label>REPLY_COORD (EMAIL)</label>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Enter return coordinates"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="form-field-hud">
                                <label>SUBJECT_LINE</label>
                                <input
                                    type="text"
                                    name="subject"
                                    placeholder="Transmission subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="form-field-hud">
                                <label>DATA_PAYLOAD (MESSAGE)</label>
                                <textarea
                                    name="message"
                                    placeholder="Enter message data..."
                                    rows="6"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                ></textarea>
                            </div>

                            <button type="submit" className="form-submit-hud" disabled={status === 'submitting'}>
                                <div className="submit-btn-dec"></div>
                                {status === 'submitting' ? 'UPLOADING...' : 'INITIATE_TRANSMISSION'}
                            </button>

                            {status === 'success' && (
                                <div className="submission-status-page success">
                                    TRANSMISSION_COMPLETE. Standby for response.
                                </div>
                            )}
                            {status === 'error' && (
                                <div className="submission-status-page error">
                                    TRANSMISSION_FAILED. Check network uplink.
                                </div>
                            )}
                        </form>
                    </section>
                </div>
            </div>
        </main>
    );
};

export default ContactPage;
