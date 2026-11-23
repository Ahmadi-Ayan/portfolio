'use client';

import { useState } from 'react';

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  tags: string[];
  impact: string;
  year: number;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Premium Fintech App',
    category: 'Mobile App',
    description: 'Redesigned mobile banking experience for 500K+ users with enhanced security and intuitive navigation.',
    image: '🏦',
    tags: ['UI/UX', 'Mobile', 'FinTech'],
    impact: '+45% User Engagement',
    year: 2024,
  },
  {
    id: 2,
    title: 'Luxury E-commerce Platform',
    category: 'Web Design',
    description: 'High-end e-commerce platform with premium design system and seamless checkout experience.',
    image: '🛍️',
    tags: ['Design System', 'Web', 'E-commerce'],
    impact: '+67% Conversion Rate',
    year: 2024,
  },
  {
    id: 3,
    title: 'Enterprise Dashboard',
    category: 'SaaS',
    description: 'Complex data visualization dashboard for enterprise analytics with real-time updates.',
    image: '📊',
    tags: ['Dashboard', 'Data Viz', 'SaaS'],
    impact: '+3x Productivity',
    year: 2023,
  },
  {
    id: 4,
    title: 'Global Brand Identity',
    category: 'Branding',
    description: 'Complete brand identity system including logo, guidelines, and digital assets.',
    image: '🎨',
    tags: ['Branding', 'Identity', 'Strategy'],
    impact: 'Award Winner',
    year: 2023,
  },
  {
    id: 5,
    title: 'Social Media Campaign',
    category: 'Digital Marketing',
    description: 'Integrated campaign design across multiple platforms with 2M+ impressions.',
    image: '📱',
    tags: ['Social', 'Marketing', 'Campaign'],
    impact: '2M+ Impressions',
    year: 2023,
  },
  {
    id: 6,
    title: 'Corporate Website',
    category: 'Web Design',
    description: 'Modern corporate website with advanced animations and SEO optimization.',
    image: '🌐',
    tags: ['Web Design', 'SEO', 'Corporate'],
    impact: '+2.5x Traffic',
    year: 2022,
  },
];

export default function Work() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const categories = ['All', ...new Set(projects.map((p) => p.category))];
  const filtered = selectedCategory === 'All' ? projects : projects.filter((p) => p.category === selectedCategory);

  return (
    <section id="work" className="py-24 bg-gradient-to-b from-background to-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 rounded-full bg-accent/10 border border-accent/30 text-accent text-sm font-semibold">
              Portfolio
            </span>
          </div>
          <h2 className="text-5xl sm:text-6xl font-bold mb-6">
            Featured <span className="text-accent">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A selection of my recent work spanning design strategy, digital products, and brand experiences.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-3 justify-center mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-6 py-2 rounded-lg font-medium transition-all duration-300 ${
                selectedCategory === cat
                  ? 'bg-accent text-background shadow-lg shadow-accent/50'
                  : 'bg-muted text-foreground hover:bg-muted/80 border border-border'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project, index) => (
            <div
              key={project.id}
              className="group relative bg-card border border-border rounded-xl overflow-hidden hover:border-accent transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-accent/20 animate-slideInUp"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Image */}
              <div className="relative h-48 bg-gradient-to-br from-accent/20 to-accent-secondary/20 flex items-center justify-center overflow-hidden">
                <div className="text-6xl group-hover:scale-110 transition-transform duration-300">
                  {project.image}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <p className="text-xs text-accent font-semibold uppercase tracking-widest">{project.category}</p>
                    <h3 className="text-xl font-bold text-foreground mt-1">{project.title}</h3>
                  </div>
                  <span className="text-xs text-muted-foreground">{project.year}</span>
                </div>

                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{project.description}</p>

                {/* Impact */}
                <div className="mb-4 p-3 bg-accent/10 rounded-lg border border-accent/20">
                  <p className="text-accent font-semibold text-sm">{project.impact}</p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 rounded-full bg-muted text-xs text-muted-foreground">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Hover CTA */}
              <div className="absolute inset-0 bg-background/80 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl">
                <button className="px-6 py-2 bg-accent text-background font-semibold rounded-lg hover:bg-accent-secondary transition-colors">
                  View Case Study
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View All Projects */}
        <div className="mt-16 text-center">
          <button className="px-8 py-4 border border-accent text-accent font-semibold rounded-lg hover:bg-accent/10 transition-all duration-300">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
}
