'use client';

import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to a server
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="contact" className="py-24 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent-secondary/10 rounded-full blur-3xl" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 rounded-full bg-accent/10 border border-accent/30 text-accent text-sm font-semibold">
              Get in Touch
            </span>
          </div>
          <h2 className="text-5xl sm:text-6xl font-bold mb-6">
            Let's Create Something <span className="text-accent">Amazing</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
            I'm always interested in hearing about new projects and opportunities. Feel free to reach out!
          </p>
        </div>

        {/* Contact Methods */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {[
            { icon: '📧', label: 'Email', value: 'hello@ahmadi-ayan.com' },
            { icon: '💬', label: 'WhatsApp', value: '+880 1XXXXXXXXX' },
            { icon: '🔗', label: 'LinkedIn', value: '/in/ahmadi-ayan' },
          ].map((item, index) => (
            <div key={index} className="p-6 bg-card border border-border rounded-xl hover:border-accent/50 transition-all duration-300 text-center">
              <div className="text-4xl mb-3">{item.icon}</div>
              <p className="text-sm text-muted-foreground mb-2">{item.label}</p>
              <p className="font-semibold text-foreground">{item.value}</p>
            </div>
          ))}
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="bg-card border border-border rounded-2xl p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-foreground mb-2">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-accent transition-colors"
                placeholder="Ahmadi Ayan"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-accent transition-colors"
                placeholder="your@email.com"
              />
            </div>
          </div>

          <div className="mb-6">
            <label htmlFor="subject" className="block text-sm font-semibold text-foreground mb-2">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-accent transition-colors"
              placeholder="Let's work together"
            />
          </div>

          <div className="mb-8">
            <label htmlFor="message" className="block text-sm font-semibold text-foreground mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={6}
              className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-accent transition-colors resize-none"
              placeholder="Tell me about your project..."
            />
          </div>

          {submitted && (
            <div className="mb-6 p-4 bg-accent/10 border border-accent/30 rounded-lg">
              <p className="text-accent font-semibold">✓ Message sent successfully! I'll get back to you soon.</p>
            </div>
          )}

          <button
            type="submit"
            className="w-full px-8 py-4 bg-gradient-to-r from-accent to-accent-secondary text-background font-semibold rounded-lg hover:shadow-lg hover:shadow-accent/50 transition-all duration-300 hover:-translate-y-1"
          >
            Send Message
          </button>
        </form>

        {/* Social Links */}
        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-6">Or connect with me on social media</p>
          <div className="flex gap-6 justify-center">
            {['Twitter', 'LinkedIn', 'Instagram', 'GitHub'].map((social) => (
              <a
                key={social}
                href="#"
                className="w-12 h-12 rounded-full border border-border hover:border-accent hover:bg-accent/10 flex items-center justify-center transition-all duration-300"
              >
                <span className="text-lg">{social[0]}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
