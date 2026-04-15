import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-background pt-20 pb-10 border-t border-border">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div>
            <Link to="/" className="flex items-center gap-2 mb-6">
              <img 
                src="/LillyLogo.png" 
                alt="Lilly Angel Logo" 
                className="h-10 w-auto object-contain"
              />
            </Link>
            <p className="text-muted text-sm leading-relaxed mb-6">
              Empowering careers through industry-recognised training and professional development. Your success is our mission.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-sm glass-panel flex items-center justify-center text-muted hover:text-brand-accent hover:border-brand-accent/50 transition-all">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-sm glass-panel flex items-center justify-center text-muted hover:text-brand-accent hover:border-brand-accent/50 transition-all">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-sm glass-panel flex items-center justify-center text-muted hover:text-brand-accent hover:border-brand-accent/50 transition-all">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-sm glass-panel flex items-center justify-center text-muted hover:text-brand-accent hover:border-brand-accent/50 transition-all">
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-serif font-normal text-lg mb-6 text-foreground tracking-wider">Quick Links</h3>
            <ul className="space-y-4">
              <li><Link to="/about" className="text-muted hover:text-brand-accent transition-colors text-sm">About Us</Link></li>
              <li><Link to="/courses" className="text-muted hover:text-brand-accent transition-colors text-sm">All Courses</Link></li>
              <li><Link to="/blog" className="text-muted hover:text-brand-accent transition-colors text-sm">Blog & News</Link></li>
              <li><Link to="/faq" className="text-muted hover:text-brand-accent transition-colors text-sm">FAQ</Link></li>
              <li><Link to="/contact" className="text-muted hover:text-brand-accent transition-colors text-sm">Contact Us</Link></li>
              <li><Link to="/login" className="text-muted hover:text-brand-accent transition-colors text-sm">Student Portal</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-serif font-normal text-lg mb-6 text-foreground tracking-wider">Popular Courses</h3>
            <ul className="space-y-4">
              <li><Link to="/courses/1" className="text-muted hover:text-brand-accent transition-colors text-sm">SIA Door Supervisor</Link></li>
              <li><Link to="/courses/2" className="text-muted hover:text-brand-accent transition-colors text-sm">CCTV Operator Training</Link></li>
              <li><Link to="/courses/3" className="text-muted hover:text-brand-accent transition-colors text-sm">First Aid at Work</Link></li>
              <li><Link to="/courses/4" className="text-muted hover:text-brand-accent transition-colors text-sm">Customer Service Level 2</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-serif font-normal text-lg mb-6 text-foreground tracking-wider">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-muted text-sm">
                <MapPin size={18} className="text-brand-accent shrink-0 mt-0.5" />
                <span>123 Singanallur,<br />Coimbatore</span>
              </li>
              <li className="flex items-center gap-3 text-muted text-sm">
                <Phone size={18} className="text-brand-accent shrink-0" />
                <span>+91 9876543210</span>
              </li>
              <li className="flex items-center gap-3 text-muted text-sm">
                <Mail size={18} className="text-brand-accent shrink-0" />
                <span>info@lillyangle.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Stats matching the theme */}
        <div className="border-t border-border pt-10 pb-10 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col md:flex-row gap-12">
            <div className="flex flex-col">
              <span className="font-serif text-[32px] text-brand-accent">98%</span>
              <span className="text-[11px] uppercase text-muted tracking-[1px]">Exam Pass Rate</span>
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-[32px] text-brand-accent">15k+</span>
              <span className="text-[11px] uppercase text-muted tracking-[1px]">Certified Professionals</span>
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-[32px] text-brand-accent">24/7</span>
              <span className="text-[11px] uppercase text-muted tracking-[1px]">Student Support</span>
            </div>
          </div>
          <div className="flex flex-wrap gap-4">
            <div className="px-3 py-1 border border-border text-[10px] text-muted uppercase tracking-widest">SIA Accredited</div>
            <div className="px-3 py-1 border border-border text-[10px] text-muted uppercase tracking-widest">UK-Gov Recognized</div>
            <div className="px-3 py-1 border border-border text-[10px] text-muted uppercase tracking-widest">CPD Certified</div>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            &copy; {new Date().getFullYear()} Lilly Angel Training. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <Link to="/careers" className="hover:text-brand-accent transition-colors">Careers</Link>
            <Link to="/privacy" className="hover:text-brand-accent transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-brand-accent transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
