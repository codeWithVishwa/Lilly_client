import { ArrowRight, Briefcase, Heart, Zap, Coffee } from 'lucide-react';

export default function Careers() {
  return (
    <div className="bg-background min-h-screen pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="max-w-3xl mb-20 text-center mx-auto">
          <h1 className="text-5xl md:text-6xl font-serif font-normal mb-6">
            Join Our <span className="text-brand-accent italic">Team</span>
          </h1>
          <p className="text-muted text-lg leading-relaxed">
            Help us shape the future of professional training. We're always looking for passionate educators, administrators, and innovators.
          </p>
        </div>

        {/* Why Join Us */}
        <div className="mb-24">
          <h2 className="text-3xl font-serif font-normal text-foreground mb-10 text-center">Why Work With Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Briefcase, title: 'Career Growth', desc: 'Continuous learning opportunities and clear paths for advancement.' },
              { icon: Heart, title: 'Health & Wellness', desc: 'Comprehensive health coverage and wellness programs for you and your family.' },
              { icon: Zap, title: 'Impactful Work', desc: 'Directly contribute to the success and career progression of thousands of students.' },
              { icon: Coffee, title: 'Flexible Environment', desc: 'Hybrid work options and flexible hours for a healthy work-life balance.' }
            ].map((perk, idx) => (
              <div key={idx} className="glass-panel p-8 rounded-xl border border-border-subtle text-center hover:border-brand-accent/30 transition-colors">
                <div className="w-14 h-14 mx-auto rounded-sm bg-brand-accent/10 flex items-center justify-center text-brand-accent mb-6 border border-brand-accent/20">
                  <perk.icon size={28} />
                </div>
                <h3 className="text-xl font-serif font-normal text-foreground mb-3">{perk.title}</h3>
                <p className="text-muted text-sm leading-relaxed">{perk.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Open Positions */}
        <div>
          <h2 className="text-3xl font-serif font-normal text-foreground mb-10">Open Positions</h2>
          <div className="space-y-4">
            {[
              { title: 'Senior SIA Instructor', department: 'Training', location: 'London, UK (Hybrid)', type: 'Full-time' },
              { title: 'Student Support Specialist', department: 'Customer Success', location: 'Remote', type: 'Full-time' },
              { title: 'Curriculum Developer', department: 'Education', location: 'London, UK', type: 'Contract' },
              { title: 'Marketing Manager', department: 'Marketing', location: 'London, UK (Hybrid)', type: 'Full-time' }
            ].map((job, idx) => (
              <div key={idx} className="glass-panel p-6 md:p-8 rounded-xl border border-border-subtle flex flex-col md:flex-row items-start md:items-center justify-between gap-6 hover:border-brand-accent/50 transition-all group cursor-pointer">
                <div>
                  <h3 className="text-xl font-serif font-normal text-foreground mb-2 group-hover:text-brand-accent transition-colors">{job.title}</h3>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-muted">
                    <span className="px-3 py-1 rounded-sm bg-surface-hover border border-border">{job.department}</span>
                    <span>{job.location}</span>
                    <span>•</span>
                    <span>{job.type}</span>
                  </div>
                </div>
                <button className="px-6 py-3 rounded-sm border border-border-strong text-foreground text-[11px] font-bold uppercase tracking-[1px] group-hover:bg-brand-accent group-hover:text-primary-foreground group-hover:border-brand-accent transition-all flex items-center gap-2 shrink-0">
                  Apply Now <ArrowRight size={16} />
                </button>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
