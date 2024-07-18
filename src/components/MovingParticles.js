import React, { useEffect, useRef } from 'react';
import './Mycomponent.css'
import HomePage from './HomePage';




const MovingParticles = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        const container = containerRef.current;

        // Parameters (adjust for desired particle effect)
        const numParticles = 75;
        const minSpeed = 1;  // Pixels per second
        const maxSpeed = 4;  // Pixels per second
        // **Used here for calculating particle animation duration**
        //*const animationDuration = 20;  // Seconds for a particle to cross the screen

        function createParticle() {
            const particle = document.createElement('div');
            particle.classList.add('particle');
            container.appendChild(particle);
            animateParticle(particle);
        }

        function animateParticle(particle) {
            // Set random starting position
            particle.style.left = `${Math.random() * 100}%`;
            particle.style.top = `${Math.random() * 100}%`;

            // Set random speed and direction
            const speed = Math.random() * (maxSpeed - minSpeed) + minSpeed;
            const directionX = Math.random() > 0.5 ? -1 : 1;
            const directionY = Math.random() > 0.5 ? -1 : 1;

            // Calculate animation using animationDuration
            const distanceX = container.offsetWidth * directionX;
            const distanceY = container.offsetHeight * directionY;
            const duration = (Math.sqrt(distanceX ** 2 + distanceY ** 2) / speed) * 1000;  // In milliseconds

            particle.style.transition = `left ${duration}ms linear, top ${duration}ms linear`;
            particle.style.left = `${100 + distanceX}%`; // Offset to move beyond screen
            particle.style.top = `${100 + distanceY}%`;

            // Remove and recreate particle after animation ends
            setTimeout(() => {
                particle.remove();
                createParticle();
            }, duration);
        }

        // Create initial particles
        for (let i = 0; i < numParticles; i++) {
            createParticle();
        }

        return () => {
            // Clean up any resources here
        };
    }, []);

    return (
        <div ref={containerRef} className="particle-container">
            <HomePage />
            
            {/* Other content for your component */}
        </div>
    );
};

export default MovingParticles;
