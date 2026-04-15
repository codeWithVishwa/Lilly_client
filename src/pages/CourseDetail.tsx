import { useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import gsap from 'gsap';
import { Clock, Award, Shield, CheckCircle2, Calendar, Users, ArrowRight } from 'lucide-react';

export default function CourseDetail() {
  const { id } = useParams();
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.anim-up', {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power3.out'
      });
    });

    return () => ctx.revert();
  }, [id]);

  // Mock data for the specific course
  const course = {
    title: 'SIA Door Supervisor',
    category: 'Security',
    duration: '6 Days',
    price: '£220',
    image: 'https://images.unsplash.com/photo-1582139329536-e7284fece509?q=80&w=2080&auto=format&fit=crop',
    description: 'The SIA Door Supervisor course is required if you want to obtain your SIA Licence and work in the private security industry. This comprehensive 6-day course covers everything from behavior management to physical intervention.',
    modules: [
      'Principles of Working in the Private Security Industry',
      'Principles of Working as a Door Supervisor',
      'Application of Conflict Management',
      'Application of Physical Intervention Skills'
    ],
    career: 'Upon successful completion, you can apply for an SIA Door Supervisor licence, allowing you to work in retail, corporate, events, and licensed premises.',
    dates: ['15 May 2026', '02 Jun 2026', '20 Jun 2026']
  };

  return (
    <div className="bg-background min-h-screen pt-24 pb-20">
      {/* Hero Image */}
      <div className="w-full h-[40vh] md:h-[50vh] relative overflow-hidden">
        {/* Dark mode gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent z-10 hidden dark:block"></div>
        {/* Light mode gradient - stronger at the bottom to protect text */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-white/20 z-10 dark:hidden"></div>
        <img 
          src={course.image} 
          alt={course.title} 
          className="w-full h-full object-cover opacity-90 dark:opacity-100"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-20 -mt-32" ref={contentRef}>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="anim-up mb-4">
              <span className="glass-panel px-4 py-1.5 rounded-sm text-[10px] font-medium tracking-[1px] uppercase text-brand-accent">
                {course.category}
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-serif font-normal mb-6 anim-up leading-tight">
              {course.title}
            </h1>
            <p className="text-xl text-muted leading-relaxed mb-12 anim-up font-light">
              {course.description}
            </p>

            <div className="space-y-16">
              <section className="anim-up">
                <h2 className="text-2xl font-serif font-normal mb-6 flex items-center gap-3">
                  <BookOpenIcon className="text-brand-accent" /> Course Modules
                </h2>
                <div className="grid gap-4">
                  {course.modules.map((mod, idx) => (
                    <div key={idx} className="glass-panel p-6 rounded-xl flex items-start gap-4 border border-border-subtle">
                      <div className="w-8 h-8 rounded-sm bg-brand-accent/10 text-brand-accent flex items-center justify-center font-bold shrink-0 border border-brand-accent/20">
                        {idx + 1}
                      </div>
                      <p className="text-foreground/80 font-medium text-lg pt-1">{mod}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section className="anim-up">
                <h2 className="text-2xl font-serif font-normal mb-6 flex items-center gap-3">
                  <Award className="text-brand-accent" /> Career Opportunities
                </h2>
                <div className="glass-panel p-8 rounded-xl border-l-4 border-l-brand-accent border-y border-r border-border-subtle">
                  <p className="text-muted leading-relaxed text-lg">
                    {course.career}
                  </p>
                </div>
              </section>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="glass-panel p-8 rounded-xl sticky top-32 anim-up border border-border">
              <div className="text-4xl font-serif font-normal text-brand-accent mb-8 pb-8 border-b border-border">
                {course.price}
                <span className="text-[11px] font-medium text-muted uppercase tracking-[1px] block mt-2">Total Course Fee</span>
              </div>

              <div className="space-y-6 mb-10">
                <div className="flex items-center gap-4 text-foreground/80">
                  <div className="w-10 h-10 rounded-sm bg-brand-accent/10 flex items-center justify-center text-brand-accent border border-brand-accent/20">
                    <Clock size={20} />
                  </div>
                  <div>
                    <div className="text-[11px] text-muted uppercase tracking-[1px]">Duration</div>
                    <div className="font-medium">{course.duration}</div>
                  </div>
                </div>
                <div className="flex items-center gap-4 text-foreground/80">
                  <div className="w-10 h-10 rounded-sm bg-brand-accent/10 flex items-center justify-center text-brand-accent border border-brand-accent/20">
                    <Shield size={20} />
                  </div>
                  <div>
                    <div className="text-[11px] text-muted uppercase tracking-[1px]">Certification</div>
                    <div className="font-medium">SIA Recognised</div>
                  </div>
                </div>
                <div className="flex items-center gap-4 text-foreground/80">
                  <div className="w-10 h-10 rounded-sm bg-brand-accent/10 flex items-center justify-center text-brand-accent border border-brand-accent/20">
                    <Users size={20} />
                  </div>
                  <div>
                    <div className="text-[11px] text-muted uppercase tracking-[1px]">Class Size</div>
                    <div className="font-medium">Max 15 Students</div>
                  </div>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-[11px] font-medium tracking-[2px] uppercase text-brand-accent mb-4">Upcoming Dates</h3>
                <div className="space-y-3">
                  {course.dates.map((date, idx) => (
                    <label key={idx} className="flex items-center justify-between p-4 rounded-xl border border-border cursor-pointer hover:border-brand-accent/50 transition-colors">
                      <div className="flex items-center gap-3">
                        <input type="radio" name="date" className="accent-brand-accent" defaultChecked={idx === 0} />
                        <span className="text-foreground/80">{date}</span>
                      </div>
                      <Calendar size={16} className="text-muted" />
                    </label>
                  ))}
                </div>
              </div>

              <button className="w-full py-4 rounded-sm bg-brand-accent text-primary-foreground font-bold uppercase tracking-[1px] hover:bg-brand-accent-hover transition-all flex items-center justify-center gap-2">
                Book This Course <ArrowRight size={18} />
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

function BookOpenIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
    </svg>
  )
}
