'use client';

import { useEffect, useState } from 'react';

export default function Footer() {
  const [currentYear, setCurrentYear] = useState(2024);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="bg-muted border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-2">
              <span className="bg-gradient-to-r from-accent to-accent-secondary bg-clip-text text-transparent">
                AY
              </span>
            </h3>
            <p className="text-muted-foreground text-sm">
              Premium designer crafting exceptional digital experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['Work', 'About', 'Contact', 'Blog'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-muted-foreground hover:text-accent transition-colors text-sm">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Services</h4>
            <ul className="space-y-2">
              {['UI/UX Design', 'Branding', 'Design Systems', 'Web Design'].map((service) => (
                <li key={service}>
                  <a href="#" className="text-muted-foreground hover:text-accent transition-colors text-sm">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Follow</h4>
            <div className="flex gap-4">
              {[
                { name: 'Twitter', emoji: '𝕏' },
                { name: 'LinkedIn', emoji: '💼' },
                { name: 'Instagram', emoji: '📸' },
                { name: 'GitHub', emoji: '🐙' },
              ].map((social) => (
                <a
                  key={social.name}
                  href="#"
                  className="w-10 h-10 rounded-full bg-background border border-border hover:border-accent hover:bg-accent/10 flex items-center justify-center transition-all duration-300 text-sm"
                  title={social.name}
                >
                  {social.emoji}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border my-8" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
          <p>© {currentYear} Ahmadi Ayan. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-accent transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-accent transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
