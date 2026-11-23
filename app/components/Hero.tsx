'use client';

import { useEffect, useRef } from 'react';

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Particle animation
    const particles: Array<{
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      opacity: number;
    }> = [];

    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2,
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5,
        opacity: Math.random() * 0.5,
      });
    }

    const animate = () => {
      ctx.fillStyle = '#0a0a0a';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        ctx.fillStyle = `rgba(212, 175, 55, ${particle.opacity})`;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
      });

      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 opacity-40"
      />

      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-muted opacity-80" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center animate-fadeIn">
        <div className="mb-6 inline-block">
          <div className="px-4 py-2 rounded-full border border-accent/30 bg-accent/5 backdrop-blur-sm">
            <p className="text-sm text-accent font-medium">✨ Welcome to Premium Design</p>
          </div>
        </div>

        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          <span className="block text-foreground">Crafting</span>
          <span className="block bg-gradient-to-r from-accent via-accent to-accent-secondary bg-clip-text text-transparent">
            Exceptional Experiences
          </span>
        </h1>

        <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
          Award-winning designer specializing in premium UI/UX design, design systems, and strategic brand direction for global companies.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <button className="px-8 py-4 bg-gradient-to-r from-accent to-accent-secondary text-background font-semibold rounded-lg hover:shadow-lg hover:shadow-accent/50 transition-all duration-300 hover:-translate-y-1">
            View My Work
          </button>
          <button className="px-8 py-4 border border-accent text-accent font-semibold rounded-lg hover:bg-accent/10 transition-all duration-300">
            Contact Me
          </button>
        </div>

        {/* Scroll Indicator */}
        <div className="flex justify-center animate-float">
          <div className="animate-bounce">
            <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
