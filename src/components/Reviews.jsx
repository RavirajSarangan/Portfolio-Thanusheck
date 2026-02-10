import React, { useEffect, useRef, useState } from 'react';
import './Reviews.css';

const Reviews = () => {
    const scrollContainerRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    const reviews = [
        {
            name: 'Kajinthan',
            role: 'Managing Director',
            review: 'Thanushek transformed our website with a sleek and modern UI. His attention to detail and UX expertise made a huge difference!',
            avatar: 'https://randomuser.me/api/portraits/men/32.jpg'
        },
        {
            name: 'Sarangan',
            role: 'Chairman',
            review: 'Excellent UX designer! Thanushek truly understands user behavior and creates interfaces that feel effortless to navigate.',
            avatar: 'https://randomuser.me/api/portraits/men/45.jpg'
        },
        {
            name: 'Alex Shanjay',
            role: 'Instagram Influencer',
            review: 'Thanushek\'s UI/UX skills are top-notch. He redesigned our app interface, making it much more intuitive and user-friendly.',
            avatar: 'https://randomuser.me/api/portraits/men/67.jpg'
        },
        {
            name: 'Priya Kumar',
            role: 'Marketing Director',
            review: 'Working with Thanushek was a pleasure. His creative approach and professional execution exceeded our expectations.',
            avatar: 'https://randomuser.me/api/portraits/women/44.jpg'
        },
        {
            name: 'Michael Chen',
            role: 'Tech Lead',
            review: 'Outstanding work on our design system. Thanushek delivered pixel-perfect designs that our developers loved implementing.',
            avatar: 'https://randomuser.me/api/portraits/men/22.jpg'
        },
        {
            name: 'Sarah Johnson',
            role: 'Product Manager',
            review: 'Incredible attention to detail and user-centric design approach. Thanushek consistently delivers exceptional results.',
            avatar: 'https://randomuser.me/api/portraits/women/65.jpg'
        }
    ];

    const duplicatedReviews = [...reviews, ...reviews, ...reviews];

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

        const scrollContainer = scrollContainerRef.current;
        if (!scrollContainer) return;

        let scrollInterval;
        let isPaused = false;

        const startAutoScroll = () => {
            scrollInterval = setInterval(() => {
                if (!isPaused && scrollContainer) {
                    scrollContainer.scrollLeft += 1;
                    const maxScroll = scrollContainer.scrollWidth / 3;
                    if (scrollContainer.scrollLeft >= maxScroll) {
                        scrollContainer.scrollLeft = 0;
                    }
                }
            }, 20);
        };

        const handleMouseEnter = () => isPaused = true;
        const handleMouseLeave = () => isPaused = false;

        scrollContainer.addEventListener('mouseenter', handleMouseEnter);
        scrollContainer.addEventListener('mouseleave', handleMouseLeave);

        startAutoScroll();

        return () => {
            if (sectionRef.current) observer.unobserve(sectionRef.current);
            clearInterval(scrollInterval);
            scrollContainer.removeEventListener('mouseenter', handleMouseEnter);
            scrollContainer.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, []);

    return (
        <section id="reviews" className="reviews-minimal" ref={sectionRef}>
            <div className="container-full">
                <div className="reviews-header">
                    <h2 className="glitch-text" data-text="REVIEWS">REVIEWS</h2>
                    <div className="header-line"></div>
                </div>

                <div className="reviews-carousel-minimal" ref={scrollContainerRef}>
                    {duplicatedReviews.map((review, index) => (
                        <div
                            key={index}
                            className={`review-card-minimal-wrapper ${isVisible ? 'reveal' : ''}`}
                            style={{ '--delay': `${(index % reviews.length) * 0.15}s` }}
                        >
                            <div className="review-card-minimal">
                                <div className="review-card-scanner"></div>

                                <div className="review-card-content">
                                    <p className="review-quote-minimal">"{review.review}"</p>

                                    <div className="review-footer-minimal">
                                        <div className="review-avatar-box">
                                            <img src={review.avatar} alt={review.name} className="review-avatar-minimal" />
                                            <div className="avatar-border"></div>
                                        </div>
                                        <div className="review-meta-minimal">
                                            <h4 className="review-name-minimal">{review.name}</h4>
                                            <p className="review-role-minimal">{review.role}</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="review-card-border-acc"></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Reviews;
