'use client';

export default function About() {
  const skills = [
    'UI/UX Design',
    'Design Systems',
    'Brand Strategy',
    'Digital Products',
    'Web Design',
    'Mobile Apps',
    'Design Thinking',
    'User Research',
    'Figma',
    'Prototyping',
    'Visual Design',
    'Interaction Design',
  ];

  const expertise = [
    {
      title: 'Strategic Design',
      description: 'Aligning design with business goals to create measurable impact.',
    },
    {
      title: 'User-Centered',
      description: 'Deep research and empathy-driven approach to solving real problems.',
    },
    {
      title: 'Premium Craft',
      description: 'Meticulous attention to detail and high-quality execution on every project.',
    },
  ];

  return (
    <section id="about" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 rounded-full bg-accent/10 border border-accent/30 text-accent text-sm font-semibold">
              About Me
            </span>
          </div>
          <h2 className="text-5xl sm:text-6xl font-bold mb-6">
            Designing with <span className="text-accent">Purpose</span>
          </h2>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Bio */}
          <div>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              I'm Ahmadi Ayan, a premium designer and creative strategist based in Bangladesh with 5+ years of experience crafting exceptional digital experiences for startups and global brands.
            </p>

            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              My approach combines strategic thinking, user empathy, and meticulous craftsmanship to create designs that not only look beautiful but drive real business results. I've had the privilege of working with companies across fintech, e-commerce, SaaS, and enterprise sectors.
            </p>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              When I'm not designing, I'm exploring new design trends, mentoring junior designers, or working on personal creative projects.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mb-8">
              {[
                { number: '50+', label: 'Projects Completed' },
                { number: '5+', label: 'Years Experience' },
                { number: '15+', label: 'Happy Clients' },
              ].map((stat, index) => (
                <div key={index}>
                  <p className="text-3xl font-bold text-accent">{stat.number}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Image Placeholder */}
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-accent/20 to-accent-secondary/20 rounded-2xl flex items-center justify-center border border-accent/30 overflow-hidden group">
              <div className="text-9xl opacity-50 group-hover:scale-110 transition-transform duration-300">
                👨‍💼
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent/20 rounded-full blur-3xl" />
          </div>
        </div>

        {/* Expertise */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {expertise.map((item, index) => (
            <div
              key={index}
              className="p-6 bg-card border border-border rounded-xl hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent/10"
            >
              <h3 className="text-xl font-bold text-foreground mb-3">{item.title}</h3>
              <p className="text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Skills */}
        <div>
          <h3 className="text-2xl font-bold mb-8">Core Expertise</h3>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="px-4 py-2 bg-muted border border-border rounded-lg text-foreground hover:border-accent hover:bg-accent/10 transition-all duration-300 cursor-default"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
