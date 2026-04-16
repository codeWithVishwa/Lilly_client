import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, User, BookOpen } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Courses', path: '/courses' },
    { name: 'About Institute', path: '/about' },
    { name: 'Resources', path: '/portal' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  const isHomePage = location.pathname === '/';
  const isCourseDetail = location.pathname.startsWith('/courses/');
  const hasDarkHero = isHomePage;

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-background/95 backdrop-blur-md border-b border-border py-4' 
          : `bg-transparent py-6 border-b ${hasDarkHero ? 'border-white/10 dark text-foreground' : 'border-border'}`
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 group">
          <img 
            src="/logo.png" 
            alt="Lilly Angel Logo" 
            className="h-12 md:h-12 w-auto object-contain"
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-[13px] uppercase tracking-[1px] font-medium transition-colors ${
                  location.pathname === link.path
                    ? 'text-brand-accent'
                    : 'text-muted hover:text-brand-accent'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
          <div className="flex items-center gap-4 border-l border-border pl-8">
            <ThemeToggle />
            <Link
              to="/login"
              className="px-6 py-2.5 rounded-sm border border-brand-accent text-brand-accent bg-transparent text-xs uppercase tracking-[1px] font-semibold hover:bg-brand-accent hover:text-primary-foreground transition-colors"
            >
              Student Portal
            </Link>
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center gap-4">
          <ThemeToggle />
          <button
            className="text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-background border-b border-border py-6 px-6 flex flex-col gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-sm uppercase tracking-[1px] font-medium text-muted hover:text-brand-accent"
            >
              {link.name}
            </Link>
          ))}
          <div className="h-px bg-surface-active w-full my-2"></div>
          <Link
            to="/login"
            onClick={() => setIsMobileMenuOpen(false)}
            className="px-6 py-3 rounded-sm border border-brand-accent text-brand-accent text-center text-xs uppercase tracking-[1px] font-semibold hover:bg-brand-accent hover:text-black transition-colors"
          >
            Student Portal
          </Link>
        </div>
      )}
    </nav>
  );
}
