import { Shield, Users, Award, Target, CheckCircle2 } from 'lucide-react';

export default function About() {
  return (
    <div className="bg-background min-h-screen pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="max-w-3xl mb-20 text-center mx-auto">
          <h1 className="text-5xl md:text-6xl font-serif font-normal mb-6">
            About <span className="text-brand-accent italic">Lilly Angel</span>
          </h1>
          <p className="text-muted text-lg leading-relaxed">
            We are a premier training provider dedicated to empowering individuals with industry-recognised qualifications and practical skills for real-world success.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          <div className="glass-panel p-10 rounded-xl border border-border-subtle relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-accent/5 rounded-full blur-[50px]"></div>
            <Target size={32} className="text-brand-accent mb-6" />
            <h2 className="text-2xl font-serif font-normal text-foreground mb-4">Our Mission</h2>
            <p className="text-muted leading-relaxed">
              To deliver exceptional, accessible, and accredited training that equips our students with the confidence and competence to excel in their chosen professions, particularly within the security and health & safety sectors.
            </p>
          </div>
          
          <div className="glass-panel p-10 rounded-xl border border-border-subtle relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-accent/5 rounded-full blur-[50px]"></div>
            <Award size={32} className="text-brand-accent mb-6" />
            <h2 className="text-2xl font-serif font-normal text-foreground mb-4">Our Vision</h2>
            <p className="text-muted leading-relaxed">
              To be the UK's most trusted and innovative training institute, recognized for our commitment to student success, high educational standards, and strong industry partnerships.
            </p>
          </div>
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <div className="relative">
            <div className="aspect-[4/5] rounded-xl overflow-hidden border border-border">
              <img 
                src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2070&auto=format&fit=crop" 
                alt="Our history" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 glass-panel p-8 rounded-xl border border-border hidden md:block">
              <div className="text-5xl font-serif font-normal text-brand-accent mb-2">10+</div>
              <div className="text-[11px] uppercase tracking-[2px] text-muted">Years of Excellence</div>
            </div>
          </div>
          
          <div>
            <h2 className="text-[11px] font-medium tracking-[2px] uppercase text-brand-accent mb-4">Our Story</h2>
            <h3 className="text-4xl font-serif font-normal text-foreground mb-6">A Decade of Empowering Professionals</h3>
            <div className="space-y-6 text-muted leading-relaxed">
              <p>
                Founded in 2016, Lilly Angel Training began with a simple goal: to raise the standard of training in the private security industry. We recognized a gap between theoretical knowledge and practical, on-the-job readiness.
              </p>
              <p>
                Over the years, we have expanded our curriculum to include comprehensive health and safety courses, customer service training, and professional development programs. Our growth has been driven by our unwavering commitment to quality and the success of our students.
              </p>
              <p>
                Today, we are proud to be an SIA-approved and CPD-certified training provider, having helped over 15,000 individuals achieve their career goals and secure employment in top organizations across the UK.
              </p>
              <p>
                <strong>Our Mission:</strong> To provide accessible, high-quality training that equips individuals with the practical skills, knowledge, and confidence needed to excel in their professional lives and contribute positively to their communities.
              </p>
              <p>
                <strong>Our Vision:</strong> To be the leading provider of vocational and professional training globally, recognized for our innovative teaching methods, expert instructors, and the outstanding success of our graduates.
              </p>
              <p>
                <strong>Core Values:</strong> We believe in Excellence, Integrity, Inclusivity, and Continuous Improvement. These values guide everything we do, from curriculum design to student support, ensuring every learner receives the best possible experience.
              </p>
            </div>
            
            <div className="mt-10 grid grid-cols-2 gap-4">
              {['SIA Approved', 'CPD Certified', 'Expert Instructors', 'Modern Facilities'].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <CheckCircle2 size={18} className="text-brand-accent shrink-0" />
                  <span className="text-sm text-foreground/80">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="text-center mb-16">
          <h2 className="text-[11px] font-medium tracking-[2px] uppercase text-brand-accent mb-4">Our Experts</h2>
          <h3 className="text-4xl font-serif font-normal text-foreground">Meet The Instructors</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { name: 'James Wilson', role: 'Lead Security Instructor', image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=2000&auto=format&fit=crop' },
            { name: 'Elena Rodriguez', role: 'Health & Safety Expert', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2000&auto=format&fit=crop' },
            { name: 'Marcus Johnson', role: 'Conflict Management', image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=2000&auto=format&fit=crop' }
          ].map((member, idx) => (
            <div key={idx} className="glass-panel p-6 rounded-xl border border-border-subtle group text-center">
              <div className="w-32 h-32 mx-auto rounded-full overflow-hidden mb-6 border-2 border-border group-hover:border-brand-accent transition-colors">
                <img src={member.image} alt={member.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
              </div>
              <h4 className="text-xl font-serif font-normal text-foreground mb-1">{member.name}</h4>
              <p className="text-[11px] uppercase tracking-[1px] text-brand-accent">{member.role}</p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
