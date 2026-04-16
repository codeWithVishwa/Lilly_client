import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, User } from 'lucide-react';
import { posts } from '../data';

export default function Blog() {
  const featuredPost = posts[0];

  if (!featuredPost) {
    return (
      <div className="bg-background min-h-screen pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="glass-panel border border-border rounded-2xl p-10">
            <p className="text-[11px] uppercase tracking-[2px] text-brand-accent mb-4">No Articles Yet</p>
            <h1 className="text-4xl font-serif font-normal mb-4">Sample blog content is coming soon</h1>
            <p className="text-foreground/80 leading-relaxed">
              Add blog posts to the shared data file and they will appear here automatically.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-background min-h-screen pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <section className="max-w-4xl mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-accent/10 text-brand-accent text-[11px] uppercase tracking-[2px] font-bold mb-6">
            {posts.length} sample articles live
          </div>
          <h1 className="text-5xl md:text-6xl font-serif font-normal mb-6 text-foreground">
            News & <span className="text-brand-accent italic">Insights</span>
          </h1>
          <p className="text-foreground/80 text-lg leading-relaxed">
            Every card below is rendered directly from the shared blog data. The layout is intentionally
            static, so your sample posts stay visible even if GSAP or delayed transitions fail.
          </p>
        </section>

        <section className="bg-surface rounded-2xl overflow-hidden border border-border shadow-[0_24px_70px_rgba(15,23,42,0.08)] mb-12">
          <div className="grid md:grid-cols-2">
            <div className="relative min-h-[320px]">
              <img src={featuredPost.image} alt={featuredPost.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent" />
              <div className="absolute top-6 left-6 px-3 py-1 rounded-full bg-white/90 text-black text-[10px] font-bold uppercase tracking-[1px]">
                Featured
              </div>
            </div>

            <div className="p-8 md:p-10 flex flex-col justify-center">
              <div className="flex flex-wrap items-center gap-5 text-sm text-foreground/70 mb-5">
                <span className="flex items-center gap-2">
                  <Calendar size={16} className="text-brand-accent" />
                  {featuredPost.date}
                </span>
                <span className="flex items-center gap-2">
                  <User size={16} className="text-brand-accent" />
                  {featuredPost.author}
                </span>
              </div>
              <p className="text-[11px] uppercase tracking-[2px] text-brand-accent mb-3">
                {featuredPost.category}
              </p>
              <h2 className="text-3xl md:text-4xl font-serif font-normal text-foreground mb-4">
                {featuredPost.title}
              </h2>
              <p className="text-foreground/75 text-base leading-relaxed mb-8">{featuredPost.excerpt}</p>
              <Link
                to={`/blog/${featuredPost.id}`}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-brand-accent text-primary-foreground text-[11px] uppercase tracking-[2px] font-bold hover:bg-brand-accent-hover transition-colors w-fit"
              >
                Read Full Article <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {posts.slice(1).map((post) => (
            <article
              key={post.id}
              className="bg-surface rounded-2xl overflow-hidden border border-border shadow-[0_20px_60px_rgba(15,23,42,0.08)] hover:-translate-y-1 transition-transform"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-white/90 text-black text-[10px] font-bold uppercase tracking-[1px]">
                  {post.category}
                </div>
              </div>

              <div className="p-7 flex flex-col h-[calc(100%-12rem)]">
                <div className="flex items-center gap-4 text-sm text-foreground/65 mb-4">
                  <span className="flex items-center gap-2">
                    <Calendar size={14} className="text-brand-accent" />
                    {post.date}
                  </span>
                </div>

                <h3 className="text-2xl font-serif font-normal text-foreground mb-3">{post.title}</h3>
                <p className="text-foreground/75 text-sm leading-relaxed mb-6 flex-grow">{post.excerpt}</p>

                <Link
                  to={`/blog/${post.id}`}
                  className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[2px] font-bold text-brand-accent hover:text-brand-accent-hover transition-colors"
                >
                  Read Article <ArrowRight size={16} />
                </Link>
              </div>
            </article>
          ))}
        </section>

        <section className="mt-12 text-center">
          <p className="text-foreground/65 text-sm">
            Showing all {posts.length} sample blog articles.
          </p>
        </section>
      </div>
    </div>
  );
}
