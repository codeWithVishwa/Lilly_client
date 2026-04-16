import { Link } from 'react-router-dom';
import { ArrowRight, Award, Clock } from 'lucide-react';
import { courses } from '../data';

export default function Courses() {
  const categories = ['All', ...new Set(courses.map((course) => course.category))];

  if (courses.length === 0) {
    return (
      <div className="bg-background min-h-screen pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="glass-panel border border-border rounded-2xl p-10">
            <p className="text-[11px] uppercase tracking-[2px] text-brand-accent mb-4">No Courses Yet</p>
            <h1 className="text-4xl font-serif font-normal mb-4">Sample courses will appear here</h1>
            <p className="text-foreground/80 leading-relaxed">
              Add course records to the shared data file and the catalogue will populate automatically.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-background min-h-screen pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <section className="mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-accent/10 text-brand-accent text-[11px] uppercase tracking-[2px] font-bold mb-6">
            {courses.length} sample courses live
          </div>
          <h1 className="text-5xl md:text-6xl font-serif font-normal mb-6 text-foreground">
            Our <span className="text-brand-accent italic">Courses</span>
          </h1>
          <p className="text-foreground/80 text-lg leading-relaxed max-w-3xl">
            Browse all sample training programs in one place. The cards below render directly from the
            shared course data, so they stay visible without relying on page-load animations.
          </p>
        </section>

        <section className="glass-panel rounded-2xl p-6 md:p-8 mb-12">
          <div className="flex flex-wrap gap-3">
            {categories.map((category, index) => (
              <span
                key={category}
                className={`px-4 py-2 rounded-full text-[11px] uppercase tracking-[2px] font-semibold ${
                  index === 0
                    ? 'bg-brand-accent text-primary-foreground'
                    : 'bg-surface-hover text-foreground border border-border'
                }`}
              >
                {category}
              </span>
            ))}
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {courses.map((course) => (
            <article
              key={course.id}
              className="bg-surface rounded-2xl overflow-hidden border border-border shadow-[0_20px_60px_rgba(15,23,42,0.08)] hover:-translate-y-1 transition-transform"
            >
              <div className="relative aspect-video overflow-hidden">
                <img src={course.image} alt={course.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/20 to-transparent" />
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-white/90 text-black text-[10px] font-bold uppercase tracking-[1px]">
                  {course.category}
                </div>
                <div className="absolute bottom-4 left-4 px-3 py-1 rounded-full bg-brand-accent text-primary-foreground text-[10px] font-bold uppercase tracking-[1px]">
                  {course.duration}
                </div>
              </div>

              <div className="p-7 flex flex-col h-[calc(100%-12rem)]">
                <h2 className="text-2xl font-serif font-normal text-foreground mb-3">{course.title}</h2>
                <p className="text-foreground/75 text-sm leading-relaxed mb-6 flex-grow">{course.description}</p>

                <div className="grid grid-cols-2 gap-3 text-sm text-foreground/85 mb-6">
                  <div className="flex items-center gap-2">
                    <Clock size={16} className="text-brand-accent" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Award size={16} className="text-brand-accent" />
                    <span>Accredited</span>
                  </div>
                </div>

                <div className="flex items-center justify-between gap-4 pt-5 border-t border-border">
                  <div>
                    <p className="text-[11px] uppercase tracking-[1px] text-foreground/60 mb-1">Course Fee</p>
                    <p className="text-2xl font-serif font-normal text-brand-accent">{course.price}</p>
                  </div>
                  <Link
                    to={`/courses/${course.id}`}
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-brand-accent text-primary-foreground text-[11px] uppercase tracking-[2px] font-bold hover:bg-brand-accent-hover transition-colors"
                  >
                    View Details <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </section>
      </div>
    </div>
  );
}
