import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, CheckCircle2, Star, PlayCircle, Shield, Award, Users, BookOpen, Calendar, User } from 'lucide-react';
import { courses, posts } from '../data';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const coursesRef = useRef<HTMLDivElement>(null);
  const whyUsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero Animations
      gsap.from('.hero-title', {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: 'power4.out',
        stagger: 0.15,
        delay: 0.1
      });

      gsap.from('.hero-text', {
        y: 30,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        delay: 0.4
      });

      gsap.fromTo('.hero-btn-anim', 
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power3.out',
          stagger: 0.15,
          delay: 0.6
        }
      );

      // Scroll Animations
      gsap.from('.about-content > *', {
        scrollTrigger: {
          trigger: aboutRef.current,
          start: 'top 80%',
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out'
      });

      gsap.from('.course-card', {
        scrollTrigger: {
          trigger: coursesRef.current,
          start: 'top 75%',
        },
        y: 60,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out'
      });

      gsap.from('.feature-item', {
        scrollTrigger: {
          trigger: whyUsRef.current,
          start: 'top 80%',
        },
        x: -40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out'
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-[#0A0A0B] text-white">
        {/* Cinematic Background */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2070&auto=format&fit=crop" 
            alt="Students learning" 
            className="w-full h-full object-cover scale-105 transform origin-center"
            style={{ filter: 'brightness(0.4) contrast(1.2)' }}
          />
          <div className="absolute inset-0 bg-black/50 z-10"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0B]/10 via-[#0A0A0B]/80 to-[#0A0A0B] z-10"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#0A0A0B_100%)] z-10 opacity-90"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-20 w-full">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-sm bg-white/5 border border-white/10 backdrop-blur-md mb-8 hero-title">
              <span className="w-2 h-2 rounded-sm bg-brand-accent animate-pulse"></span>
              <span className="text-[11px] font-medium tracking-[2px] uppercase text-brand-accent">Elevate Your Career</span>
            </div>
            
            <h1 className="text-6xl md:text-[72px] font-serif font-normal leading-[1.1] mb-6">
              <div className="overflow-hidden"><div className="hero-title">Excellence in</div></div>
              <div className="overflow-hidden"><div className="hero-title text-brand-accent italic">Professional Training</div></div>
            </h1>
            
            <p className="text-[18px] text-muted mb-8 max-w-[500px] leading-[1.6] hero-text">
              Accredited SIA security licensing, corporate safety training, and vocational certification designed for the modern professional. Achieve more with Lilly Angel Training.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Link to="/courses" className="hero-btn-anim px-9 py-[18px] rounded-sm bg-brand-accent text-white font-bold uppercase tracking-[1px] hover:bg-brand-accent-hover transition-all flex items-center gap-2 group shadow-[0_0_20px_rgba(0,82,255,0.3)]">
                Enroll Now
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/courses" className="hero-btn-anim px-9 py-[18px] rounded-sm border border-white/20 bg-transparent text-white font-bold uppercase tracking-[1px] hover:bg-white/5 transition-all">
                Explore Courses
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted By / Accreditations Banner */}
      <section className="py-12 border-b border-border-subtle bg-surface/50">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-[11px] font-medium tracking-[2px] uppercase text-muted-foreground mb-8">
            Accredited & Trusted By Leading Organizations
          </p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
            {/* Placeholder logos for accreditations */}
            <div className="flex items-center gap-2 font-serif text-xl font-bold text-foreground"><Shield className="text-brand-accent" /> SIA Approved</div>
            <div className="flex items-center gap-2 font-serif text-xl font-bold text-foreground"><Award className="text-brand-accent" /> Highfield</div>
            <div className="flex items-center gap-2 font-serif text-xl font-bold text-foreground"><CheckCircle2 className="text-brand-accent" /> CPD Certified</div>
            <div className="flex items-center gap-2 font-serif text-xl font-bold text-foreground"><Users className="text-brand-accent" /> Skills for Security</div>
          </div>
        </div>
      </section>

      {/* About Us */}
      <section ref={aboutRef} className="py-32 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="about-content">
              <h2 className="text-[11px] font-medium tracking-[2px] uppercase text-brand-accent mb-4">About Us</h2>
              <h3 className="text-4xl md:text-5xl font-serif font-normal mb-6 leading-tight">
                Excellence in Professional Training
              </h3>
              <p className="text-muted text-lg leading-relaxed mb-8">
                Lilly Angel Institute is a premier training provider dedicated to delivering high-quality, industry-recognised qualifications. We believe in empowering individuals with the skills and knowledge needed to excel in their chosen careers.
              </p>
              <p className="text-muted text-lg leading-relaxed mb-10">
                Whether you're looking to enter the security sector, improve your customer service skills, or gain essential first aid knowledge, our expert trainers provide comprehensive support every step of the way.
              </p>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <div className="text-4xl font-serif font-normal text-brand-accent mb-2">10k+</div>
                  <div className="text-[11px] text-muted uppercase tracking-[1px]">Students Trained</div>
                </div>
                <div>
                  <div className="text-4xl font-serif font-normal text-brand-accent mb-2">98%</div>
                  <div className="text-[11px] text-muted uppercase tracking-[1px]">Pass Rate</div>
                </div>
              </div>
            </div>
            <div className="relative about-content">
              <div className="aspect-[4/5] rounded-xl overflow-hidden relative border border-border">
                <img 
                  src="https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=2070&auto=format&fit=crop" 
                  alt="Training session" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-10 -left-10 glass-panel p-8 rounded-xl max-w-xs hidden md:block">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-sm bg-brand-accent/10 flex items-center justify-center text-brand-accent border border-brand-accent/20">
                    <Award size={24} />
                  </div>
                  <div>
                    <div className="font-bold text-foreground">Accredited</div>
                    <div className="text-[11px] uppercase tracking-[1px] text-muted">By top UK boards</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Overview */}
      <section ref={coursesRef} className="py-32 bg-surface border-y border-border-subtle relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <h2 className="text-[11px] font-medium tracking-[2px] uppercase text-brand-accent mb-4">Our Programs</h2>
              <h3 className="text-4xl md:text-5xl font-serif font-normal">Featured Courses</h3>
            </div>
            <Link to="/courses" className="px-6 py-3 rounded-sm border border-border-strong text-foreground text-[11px] uppercase tracking-[2px] hover:bg-surface-hover transition-all flex items-center gap-2">
              View All Courses <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.slice(0, 3).map((course) => (
              <div key={course.id} className="course-card group cursor-pointer glass-panel p-4 rounded-xl">
                <div className="relative aspect-[4/3] rounded-lg overflow-hidden mb-6">
                  <img src={course.image} alt={course.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-80"></div>
                  <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                    <div className="glass-panel px-3 py-1 rounded-sm text-[10px] font-medium tracking-[1px] uppercase text-foreground">
                      {course.duration}
                    </div>
                    <div className="font-serif font-normal text-xl text-brand-accent">
                      {course.price}
                    </div>
                  </div>
                </div>
                <h4 className="text-lg font-serif font-normal mb-2 group-hover:text-brand-accent transition-colors">{course.title}</h4>
                <p className="text-muted text-sm mb-4 line-clamp-2">{course.description}</p>
                <Link to={`/courses/${course.id}`} className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[2px] font-bold text-brand-accent hover:text-brand-accent-hover transition-colors">
                  Learn More <ArrowRight size={16} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section ref={whyUsRef} className="py-32 relative overflow-hidden">
        <div className="absolute right-0 top-0 w-1/2 h-full bg-brand-accent/5 blur-[150px] rounded-full pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-[11px] font-medium tracking-[2px] uppercase text-brand-accent mb-4">The Lilly Angel Advantage</h2>
            <h3 className="text-4xl md:text-5xl font-serif font-normal">Why Choose Us</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {[
              { icon: Shield, title: 'Industry Recognised', desc: 'All our qualifications are accredited by leading UK awarding bodies.' },
              { icon: Users, title: 'Experienced Trainers', desc: 'Learn from professionals with years of real-world industry experience.' },
              { icon: BookOpen, title: 'Flexible Learning', desc: 'Online, classroom, and blended learning options to suit your schedule.' },
              { icon: Star, title: 'Student Support', desc: 'Dedicated support team to help you from enrollment to certification.' },
            ].map((feature, idx) => (
              <div key={idx} className="feature-item glass-panel p-8 rounded-xl border border-border-subtle hover:border-brand-accent/30 transition-colors">
                <div className="w-14 h-14 rounded-sm bg-brand-accent/10 flex items-center justify-center text-brand-accent mb-6 border border-brand-accent/20">
                  <feature.icon size={28} />
                </div>
                <h4 className="text-xl font-serif font-normal mb-3">{feature.title}</h4>
                <p className="text-muted text-sm leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 bg-surface border-t border-border-subtle">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-serif font-normal text-center mb-16">Student Success Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="glass-panel p-8 rounded-xl relative">
                <div className="flex gap-1 text-brand-accent mb-6">
                  {[1, 2, 3, 4, 5].map((star) => <Star key={star} size={16} fill="currentColor" />)}
                </div>
                <p className="text-muted italic mb-8 leading-relaxed">
                  "The training I received was exceptional. The instructors were knowledgeable and the online portal made studying from home incredibly easy. Highly recommended!"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-background overflow-hidden border border-border">
                    <img src={`https://i.pravatar.cc/150?img=${i + 10}`} alt="Student" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <div className="font-serif font-normal text-lg text-foreground">Sarah Jenkins</div>
                    <div className="text-[11px] uppercase tracking-[1px] text-brand-accent">SIA Door Supervisor Graduate</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest News / Blog Preview */}
      <section className="py-32 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <h2 className="text-[11px] font-medium tracking-[2px] uppercase text-brand-accent mb-4">Latest Insights</h2>
              <h3 className="text-4xl md:text-5xl font-serif font-normal">News & Articles</h3>
            </div>
            <Link to="/blog" className="px-6 py-3 rounded-sm border border-border-strong text-foreground text-[11px] uppercase tracking-[2px] hover:bg-surface-hover transition-all flex items-center gap-2">
              Read All News <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {posts.slice(0, 3).map((post, idx) => (
              <div key={idx} className="glass-panel rounded-xl overflow-hidden group border border-border-subtle hover:border-brand-accent/30 transition-all cursor-pointer">
                <div className="aspect-[16/10] overflow-hidden relative">
                  <img src={post.image} alt={post.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute top-4 left-4 glass-panel px-3 py-1 rounded-sm text-[10px] font-medium tracking-[1px] uppercase text-foreground backdrop-blur-md">
                    {post.category}
                  </div>
                </div>
                <div className="p-6">
                  <div className="text-[11px] text-muted-foreground uppercase tracking-[1px] mb-3">{post.date}</div>
                  <h4 className="text-xl font-serif font-normal text-foreground group-hover:text-brand-accent transition-colors mb-4 line-clamp-2">{post.title}</h4>
                  <Link to="/blog" className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[2px] font-bold text-brand-accent hover:text-brand-accent-hover transition-colors">
                    Read Article <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-surface"></div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10 mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-80"></div>
        
        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
          <h2 className="text-5xl md:text-7xl font-serif font-normal text-foreground mb-6 tracking-tight">
            Ready to Start Your Journey?
          </h2>
          <p className="text-[18px] text-muted mb-10 max-w-2xl mx-auto font-medium">
            Join thousands of professionals who have advanced their careers with our industry-leading training programs.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/courses" className="px-9 py-[18px] rounded-sm bg-brand-accent text-primary-foreground font-bold uppercase tracking-[1px] hover:bg-brand-accent-hover transition-all">
              Enrol Now
            </Link>
            <Link to="/contact" className="px-9 py-[18px] rounded-sm border border-border-strong text-foreground font-bold uppercase tracking-[1px] hover:bg-surface-hover transition-all">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
