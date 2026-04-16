import { useEffect, useRef } from 'react';
import { Link, useParams } from 'react-router-dom';
import gsap from 'gsap';
import {
  ArrowLeft,
  ArrowRight,
  Award,
  BookOpen,
  Calendar,
  Clock,
  Shield,
  Users,
} from 'lucide-react';
import { courses, getCourseById } from '../data';

export default function CourseDetail() {
  const { id } = useParams();
  const contentRef = useRef<HTMLDivElement>(null);
  const courseId = Number(id);
  const course = getCourseById(courseId);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.anim-up', {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power3.out',
      });
    }, contentRef);

    return () => ctx.revert();
  }, [courseId]);

  if (!course) {
    return (
      <div className="bg-background min-h-screen pt-32 pb-20" ref={contentRef}>
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="glass-panel border border-border rounded-xl p-10 anim-up">
            <p className="text-[11px] uppercase tracking-[2px] text-brand-accent mb-4">Course Not Found</p>
            <h1 className="text-4xl font-serif font-normal mb-4">This sample course does not exist</h1>
            <p className="text-muted leading-relaxed mb-8">
              The course link is invalid or the sample course was removed. You can still browse the full
              sample course catalogue below.
            </p>
            <Link
              to="/courses"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-sm bg-brand-accent text-primary-foreground font-bold uppercase tracking-[1px] hover:bg-brand-accent-hover transition-all"
            >
              <ArrowLeft size={16} />
              Back to Courses
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const relatedCourses = courses.filter((item) => item.id !== course.id).slice(0, 3);
  const certificationLabel =
    course.category === 'Security' ? 'Security Certification' : 'Professional Certification';

  return (
    <div className="bg-background min-h-screen pt-24 pb-20">
      <div className="w-full h-[40vh] md:h-[50vh] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent z-10" />
        <img
          src={course.image}
          alt={course.title}
          className="w-full h-full object-cover opacity-90 dark:opacity-100"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-20 -mt-32" ref={contentRef}>
        <div className="mb-8 anim-up">
          <Link
            to="/courses"
            className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[2px] font-bold text-brand-accent hover:text-brand-accent-hover transition-colors"
          >
            <ArrowLeft size={16} />
            Back to All Courses
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
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
                  <BookOpen className="text-brand-accent" /> Course Modules
                </h2>
                <div className="grid gap-4">
                  {course.modules.map((module, index) => (
                    <div
                      key={module}
                      className="glass-panel p-6 rounded-xl flex items-start gap-4 border border-border-subtle"
                    >
                      <div className="w-8 h-8 rounded-sm bg-brand-accent/10 text-brand-accent flex items-center justify-center font-bold shrink-0 border border-brand-accent/20">
                        {index + 1}
                      </div>
                      <p className="text-foreground/80 font-medium text-lg pt-1">{module}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section className="anim-up">
                <h2 className="text-2xl font-serif font-normal mb-6 flex items-center gap-3">
                  <Award className="text-brand-accent" /> Career Opportunities
                </h2>
                <div className="glass-panel p-8 rounded-xl border-l-4 border-l-brand-accent border-y border-r border-border-subtle">
                  <p className="text-muted leading-relaxed text-lg">{course.career}</p>
                </div>
              </section>

              <section className="anim-up">
                <div className="flex items-center justify-between gap-4 mb-6">
                  <h2 className="text-2xl font-serif font-normal">More Sample Courses</h2>
                  <Link
                    to="/courses"
                    className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[2px] font-bold text-brand-accent hover:text-brand-accent-hover transition-colors"
                  >
                    View All {courses.length} <ArrowRight size={16} />
                  </Link>
                </div>
                <div className="grid md:grid-cols-3 gap-6">
                  {relatedCourses.map((relatedCourse) => (
                    <div
                      key={relatedCourse.id}
                      className="glass-panel rounded-xl overflow-hidden border border-border-subtle"
                    >
                      <img
                        src={relatedCourse.image}
                        alt={relatedCourse.title}
                        className="w-full h-44 object-cover"
                      />
                      <div className="p-5">
                        <p className="text-[10px] uppercase tracking-[1px] text-brand-accent mb-2">
                          {relatedCourse.category}
                        </p>
                        <h3 className="text-lg font-serif font-normal mb-3">{relatedCourse.title}</h3>
                        <Link
                          to={`/courses/${relatedCourse.id}`}
                          className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[2px] font-bold text-brand-accent hover:text-brand-accent-hover transition-colors"
                        >
                          View Course <ArrowRight size={16} />
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="glass-panel p-8 rounded-xl sticky top-32 anim-up border border-border">
              <div className="text-4xl font-serif font-normal text-brand-accent mb-8 pb-8 border-b border-border">
                {course.price}
                <span className="text-[11px] font-medium text-muted uppercase tracking-[1px] block mt-2">
                  Sample Course Fee
                </span>
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
                    <div className="font-medium">{certificationLabel}</div>
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
                <h3 className="text-[11px] font-medium tracking-[2px] uppercase text-brand-accent mb-4">
                  Upcoming Dates
                </h3>
                <div className="space-y-3">
                  {course.dates.map((date, index) => (
                    <label
                      key={date}
                      className="flex items-center justify-between p-4 rounded-xl border border-border cursor-pointer hover:border-brand-accent/50 transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <input
                          type="radio"
                          name="date"
                          className="accent-brand-accent"
                          defaultChecked={index === 0}
                        />
                        <span className="text-foreground/80">{date}</span>
                      </div>
                      <Calendar size={16} className="text-muted" />
                    </label>
                  ))}
                </div>
              </div>

              <button className="w-full py-4 rounded-sm bg-brand-accent text-primary-foreground font-bold uppercase tracking-[1px] hover:bg-brand-accent-hover transition-all flex items-center justify-center gap-2">
                Book This Sample Course <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
