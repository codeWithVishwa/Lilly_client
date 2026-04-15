import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ArrowRight, Clock, Award, Shield } from 'lucide-react';
import { courses } from '../data';

export default function Courses() {
  const headerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.header-anim', {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power3.out'
      });

      gsap.from('.course-card', {
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power3.out',
        delay: 0.3
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="bg-background min-h-screen pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div ref={headerRef} className="max-w-3xl mb-16">
          <h1 className="text-5xl md:text-6xl font-serif font-normal mb-6 header-anim">
            Our <span className="text-brand-accent italic">Courses</span>
          </h1>
          <p className="text-muted text-lg leading-relaxed header-anim">
            Browse our comprehensive range of industry-recognised training programs. Whether you're starting a new career or upgrading your skills, we have the right course for you.
          </p>
        </div>

        {/* Filters (Static for UI) */}
        <div className="flex flex-wrap gap-4 mb-12 header-anim">
          {['All', 'Security', 'Health & Safety', 'Professional Skills'].map((filter, idx) => (
            <button 
              key={filter}
              className={`px-6 py-2 rounded-sm text-[11px] uppercase tracking-[2px] font-medium transition-all ${
                idx === 0 
                  ? 'bg-brand-accent text-primary-foreground' 
                  : 'glass-panel text-muted hover:text-foreground hover:border-brand-accent/50'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Course Grid */}
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <div key={course.id} className="course-card group flex flex-col glass-panel rounded-xl overflow-hidden border border-border-subtle hover:border-brand-accent/30 transition-all">
              <div className="relative aspect-video overflow-hidden">
                <img 
                  src={course.image} 
                  alt={course.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                />
                <div className="absolute top-4 left-4 glass-panel px-3 py-1 rounded-sm text-[10px] font-medium tracking-[1px] uppercase text-foreground backdrop-blur-md">
                  {course.category}
                </div>
              </div>
              
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-serif font-normal group-hover:text-brand-accent transition-colors">{course.title}</h3>
                </div>
                
                <p className="text-muted text-sm mb-6 flex-grow line-clamp-3">
                  {course.description}
                </p>
                
                <div className="flex items-center gap-6 mb-8 text-sm text-foreground/80">
                  <div className="flex items-center gap-2">
                    <Clock size={16} className="text-brand-accent" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Award size={16} className="text-brand-accent" />
                    <span>Accredited</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between pt-6 border-t border-border mt-auto">
                  <div className="font-serif font-normal text-2xl text-brand-accent">
                    {course.price}
                  </div>
                  <Link 
                    to={`/courses/${course.id}`} 
                    className="px-6 py-3 rounded-sm bg-surface-hover hover:bg-brand-accent hover:text-primary-foreground text-foreground text-[11px] uppercase tracking-[2px] font-bold transition-all flex items-center gap-2"
                  >
                    Details <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
