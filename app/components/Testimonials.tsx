'use client';

export default function Testimonials() {
  const testimonials = [
    {
      quote: "Ahmadi's design approach transformed our entire product vision. The attention to detail and strategic thinking was exceptional.",
      author: 'Sarah Johnson',
      role: 'CEO, TechStartup Inc',
      company: 'TechStartup Inc',
      avatar: '👩‍💼',
    },
    {
      quote: 'Working with Ahmadi was a game-changer. Our conversion rates increased by 67% after the redesign. Highly recommended!',
      author: 'Ahmed Hassan',
      role: 'Founder, E-commerce Pro',
      company: 'E-commerce Pro',
      avatar: '👨‍💼',
    },
    {
      quote: 'The design system Ahmadi created streamlined our entire workflow. Best investment we made for our design team.',
      author: 'Lisa Chen',
      role: 'Design Director, Global Corp',
      company: 'Global Corp',
      avatar: '👩‍💻',
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-muted to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 rounded-full bg-accent/10 border border-accent/30 text-accent text-sm font-semibold">
              Testimonials
            </span>
          </div>
          <h2 className="text-5xl sm:text-6xl font-bold mb-6">
            Loved by <span className="text-accent">Clients</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Here's what some of my amazing clients have to say about working together.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-8 bg-card border border-border rounded-xl hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent/10 flex flex-col"
            >
              {/* Star Rating */}
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-accent text-lg">
                    ★
                  </span>
                ))}
              </div>

              {/* Quote */}
              <p className="text-foreground text-lg mb-6 flex-grow">"{testimonial.quote}"</p>

              {/* Author */}
              <div className="flex items-center gap-4 pt-6 border-t border-border">
                <div className="text-3xl">{testimonial.avatar}</div>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
