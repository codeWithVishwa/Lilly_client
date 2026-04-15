import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { posts } from '../data';

export default function Blog() {
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.header-anim', {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power3.out'
      });

      gsap.from('.blog-card', {
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
        <div ref={headerRef} className="max-w-3xl mb-16 text-center mx-auto">
          <h1 className="text-5xl md:text-6xl font-serif font-normal mb-6 header-anim">
            Latest <span className="text-brand-accent italic">News & Insights</span>
          </h1>
          <p className="text-muted text-lg leading-relaxed header-anim">
            Stay updated with the latest industry news, career advice, and training guides from the experts at Lilly Angel Institute.
          </p>
        </div>

        {/* Featured Post */}
        <div className="mb-16 blog-card">
          <div className="glass-panel rounded-xl overflow-hidden border border-border-subtle group cursor-pointer flex flex-col md:flex-row">
            <div className="w-full md:w-1/2 aspect-video md:aspect-auto relative overflow-hidden">
              <img 
                src={posts[0].image} 
                alt={posts[0].title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
              />
              <div className="absolute top-6 left-6 glass-panel px-4 py-1.5 rounded-sm text-[10px] font-medium tracking-[1px] uppercase text-foreground backdrop-blur-md border border-border">
                {posts[0].category}
              </div>
            </div>
            <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
              <div className="flex items-center gap-6 text-sm text-muted mb-6">
                <span className="flex items-center gap-2"><Calendar size={16} className="text-brand-accent" /> {posts[0].date}</span>
                <span className="flex items-center gap-2"><User size={16} className="text-brand-accent" /> {posts[0].author}</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-serif font-normal text-foreground mb-6 group-hover:text-brand-accent transition-colors">
                {posts[0].title}
              </h2>
              <p className="text-muted text-lg mb-8 leading-relaxed">
                {posts[0].excerpt}
              </p>
              <Link to={`/blog/${posts[0].id}`} className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[2px] font-bold text-brand-accent hover:text-brand-accent-hover transition-colors w-fit">
                Read Full Article <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>

        {/* Grid Posts */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.slice(1).map((post) => (
            <div key={post.id} className="blog-card group flex flex-col glass-panel rounded-xl overflow-hidden border border-border-subtle hover:border-brand-accent/30 transition-all">
              <div className="relative aspect-[16/10] overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                />
                <div className="absolute top-4 left-4 glass-panel px-3 py-1 rounded-sm text-[10px] font-medium tracking-[1px] uppercase text-foreground backdrop-blur-md border border-border">
                  {post.category}
                </div>
              </div>
              
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex items-center gap-4 text-xs text-muted mb-4">
                  <span className="flex items-center gap-1"><Calendar size={14} className="text-brand-accent" /> {post.date}</span>
                </div>
                
                <h3 className="text-xl font-serif font-normal mb-4 group-hover:text-brand-accent transition-colors line-clamp-2">
                  {post.title}
                </h3>
                
                <p className="text-muted mb-8 flex-grow line-clamp-3 text-sm">
                  {post.excerpt}
                </p>
                
                <Link to={`/blog/${post.id}`} className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[2px] font-bold text-brand-accent hover:text-brand-accent-hover transition-colors mt-auto">
                  Read More <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16 blog-card">
           <button className="px-9 py-[18px] rounded-sm border border-border-strong text-foreground font-bold uppercase tracking-[1px] hover:bg-surface-hover transition-all">
              Load More Articles
           </button>
        </div>
      </div>
    </div>
  );
}
