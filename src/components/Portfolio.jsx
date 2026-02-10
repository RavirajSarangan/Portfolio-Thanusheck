import React, { useState, useEffect, useRef } from 'react';
import './Portfolio.css';

const Portfolio = () => {
    const [filter, setFilter] = useState('all');
    const [selectedCard, setSelectedCard] = useState(null);
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    const projects = [
        {
            id: 'PROJ-LV01',
            title: "Leave Management",
            category: "frontend",
            description: "Modern leave management system with intuitive UI",
            fullDescription: "A comprehensive leave management system built with React, featuring employee dashboards, leave requests, approval workflows, and real-time notifications.",
            image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            tags: ['React', 'UI/UX', 'Frontend'],
            coords: "40.7128° N, 74.0060° W"
        },
        {
            id: 'PROJ-ES02',
            title: "E-Space Solutions",
            category: "design",
            description: "Complete design system for modern workspace",
            fullDescription: "A comprehensive design system for E-Space Solutions, including brand identity, UI components, design tokens, and guidelines.",
            image: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            tags: ['Figma', 'Branding', 'UI/UX'],
            coords: "34.0522° N, 118.2437° W"
        },
        {
            id: 'PROJ-EF03',
            title: "Enomy Finance",
            category: "design",
            isFeatured: false,
            description: "Mobile banking app with seamless UX",
            fullDescription: "A modern fintech mobile application designed to provide seamless banking experiences. Features include account management, transactions, and budgeting tools.",
            image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            tags: ['UI/UX', 'Mobile', 'Finance'],
            coords: "51.5074° N, 0.1278° W"
        },
        {
            id: 'PROJ-LP04',
            title: "Luxury Perfume",
            category: "frontend",
            isFeatured: true,
            description: "Luxury perfume online store",
            fullDescription: "An elegant e-commerce platform for luxury perfumes, featuring product showcases, shopping cart, and secure checkout.",
            image: "https://images.unsplash.com/photo-1541643600914-78b084683601?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            tags: ['React', 'E-commerce', 'Frontend'],
            coords: "48.8566° N, 2.3522° E"
        },
        {
            id: 'PROJ-BS05',
            title: "Booksky Platforms",
            category: "frontend",
            isFeatured: false,
            description: "Online bookstore with advanced search",
            fullDescription: "A comprehensive online bookstore platform featuring advanced search capabilities, personalized recommendations, and reading lists.",
            image: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            tags: ['Frontend', 'UI/UX', 'React'],
            coords: "35.6895° N, 139.6917° E"
        },
        {
            id: 'PROJ-FH06',
            title: "Fitness Hub",
            category: "fullstack",
            isFeatured: false,
            description: "Complete gym management solution",
            fullDescription: "A full-stack gym management system with member portals, class scheduling, trainer assignments, and progress tracking.",
            image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            tags: ['Full Stack', 'Design', 'Development'],
            coords: "25.2048° N, 55.2708° E"
        }
    ];

    const categories = [
        { id: 'all', label: 'ALL SYSTEMS' },
        { id: 'design', label: 'UI/UX DESIGN' },
        { id: 'frontend', label: 'FRONTEND DEV' },
        { id: 'fullstack', label: 'FULL STACK' }
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

    const filteredProjects = filter === 'all'
        ? projects
        : projects.filter(project => project.category === filter);

    return (
        <section id="portfolio" className="portfolio-hud" ref={sectionRef}>
            <div className="hud-overlay-grid"></div>

            <div className="container">
                <div className="portfolio-header-hud">
                    <div className="header-hud-top">
                        <span className="hud-tag">STATUS: OPERATIONAL</span>
                        <span className="hud-tag">ID: {filter.toUpperCase()}</span>
                    </div>
                    <h2 className="glitch-text" data-text="PORTFOLIO CORE">PORTFOLIO CORE</h2>
                    <div className="header-hud-bottom">
                        <div className="hud-line"></div>
                        <span className="hud-version">VER: 4.0.0_APEX</span>
                    </div>
                </div>

                <div className="portfolio-filters-hud">
                    {categories.map(cat => (
                        <button
                            key={cat.id}
                            className={`filter-btn-hud ${filter === cat.id ? 'active' : ''}`}
                            onClick={() => setFilter(cat.id)}
                        >
                            <span className="filter-bracket">[</span>
                            <span className="filter-text">{cat.label}</span>
                            <span className="filter-bracket">]</span>
                        </button>
                    ))}
                </div>

                <div className="portfolio-grid-hud">
                    {filteredProjects.map((project, index) => (
                        <div
                            key={index}
                            className={`portfolio-card-hud ${isVisible ? 'reveal' : ''}`}
                            style={{ '--delay': `${index * 0.1}s` }}
                            onClick={() => setSelectedCard(project)}
                        >
                            <div className="card-hud-ornaments">
                                <div className="ornament tl"></div>
                                <div className="ornament tr"></div>
                                <div className="ornament bl"></div>
                                <div className="ornament br"></div>
                            </div>

                            <div className="card-hud-scanner"></div>

                            <div className="project-id-hud">{project.id}</div>

                            <div className="portfolio-image-hud">
                                <img src={project.image} alt={project.title} />
                                <div className="image-scanlines"></div>
                                <div className="image-overlay-hud">
                                    <div className="overlay-brackets">
                                        <div className="bracket tl"></div>
                                        <div className="bracket tr"></div>
                                        <div className="bracket bl"></div>
                                        <div className="bracket br"></div>
                                    </div>
                                    <span className="view-text-hud">INITIALIZE_SEQUENCE</span>
                                </div>
                            </div>

                            <div className="portfolio-info-hud">
                                <div className="info-hud-header">
                                    <span className="project-category-hud">{project.category}</span>
                                    <span className="project-coords-hud">{project.coords}</span>
                                </div>
                                <h3 className="project-title-hud">{project.title}</h3>
                                <div className="portfolio-tags-hud">
                                    {project.tags.map((tag, idx) => (
                                        <span key={idx} className="tag-hud">
                                            <span className="tag-dot"></span>
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="card-hud-border-acc"></div>
                        </div>
                    ))}
                </div>

                {selectedCard && (
                    <div className="modal-overlay-hud" onClick={() => setSelectedCard(null)}>
                        <div className="modal-content-hud" onClick={(e) => e.stopPropagation()}>
                            <div className="modal-hud-decor">
                                <div className="decor-line top"></div>
                                <div className="decor-line bottom"></div>
                                <div className="decor-text-left">SYSTEM_CORE_OVERRIDE</div>
                                <div className="decor-text-right">A7X_SECURE_LINK</div>
                            </div>

                            <button className="modal-close-hud" onClick={() => setSelectedCard(null)}>
                                EXIT_SEQUENCE
                                <span className="close-x">×</span>
                            </button>

                            <div className="modal-body-hud">
                                <div className="modal-image-hud-box">
                                    <img src={selectedCard.image} alt={selectedCard.title} />
                                    <div className="modal-image-scan"></div>
                                    <div className="modal-image-hue"></div>
                                </div>

                                <div className="modal-text-hud">
                                    <div className="modal-meta-hud">
                                        <span className="meta-category">{selectedCard.category}</span>
                                        <span className="meta-coords">{selectedCard.coords}</span>
                                    </div>
                                    <h2 className="modal-title-hud">{selectedCard.title}</h2>
                                    <div className="modal-divider-hud"></div>
                                    <p className="modal-desc-hud">{selectedCard.fullDescription}</p>

                                    <div className="modal-tags-hud">
                                        {selectedCard.tags.map((tag, idx) => (
                                            <span key={idx} className="tag-hud">
                                                <span className="tag-dot"></span>
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="modal-footer-hud">
                                        <button className="modal-action-btn-hud" onClick={() => setSelectedCard(null)}>
                                            TERM_PROCESS
                                        </button>
                                        <div className="modal-status-bar">
                                            <div className="status-segment active"></div>
                                            <div className="status-segment active"></div>
                                            <div className="status-segment active"></div>
                                            <div className="status-segment"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Portfolio;
