import { useEffect, useRef } from 'react';
import { Link, useParams } from 'react-router-dom';
import gsap from 'gsap';
import { ArrowLeft, ArrowRight, Calendar, User } from 'lucide-react';
import { getPostById, posts } from '../data';

export default function BlogDetail() {
  const { id } = useParams();
  const contentRef = useRef<HTMLDivElement>(null);
  const postId = Number(id);
  const post = getPostById(postId);

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
  }, [postId]);

  if (!post) {
    return (
      <div className="bg-background min-h-screen pt-32 pb-20" ref={contentRef}>
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="glass-panel border border-border rounded-xl p-10 anim-up">
            <p className="text-[11px] uppercase tracking-[2px] text-brand-accent mb-4">Article Not Found</p>
            <h1 className="text-4xl font-serif font-normal mb-4">This sample article could not be found</h1>
            <p className="text-muted leading-relaxed mb-8">
              The article link is invalid or the sample post was removed. You can still browse all sample
              blog articles from the blog index.
            </p>
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-sm bg-brand-accent text-primary-foreground font-bold uppercase tracking-[1px] hover:bg-brand-accent-hover transition-all"
            >
              <ArrowLeft size={16} />
              Back to Blog
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const relatedPosts = posts.filter((item) => item.id !== post.id).slice(0, 3);

  return (
    <div className="bg-background min-h-screen pt-24 pb-20">
      <div className="w-full h-[36vh] md:h-[48vh] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/65 to-transparent z-10" />
        <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-20 -mt-24" ref={contentRef}>
        <div className="mb-8 anim-up">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[2px] font-bold text-brand-accent hover:text-brand-accent-hover transition-colors"
          >
            <ArrowLeft size={16} />
            Back to All Articles
          </Link>
        </div>

        <article className="glass-panel rounded-xl border border-border overflow-hidden anim-up">
          <div className="p-8 md:p-12">
            <p className="text-[11px] uppercase tracking-[2px] text-brand-accent mb-4">{post.category}</p>
            <h1 className="text-4xl md:text-6xl font-serif font-normal leading-tight mb-6">{post.title}</h1>
            <div className="flex flex-wrap items-center gap-6 text-sm text-muted mb-8">
              <span className="flex items-center gap-2">
                <Calendar size={16} className="text-brand-accent" />
                {post.date}
              </span>
              <span className="flex items-center gap-2">
                <User size={16} className="text-brand-accent" />
                {post.author}
              </span>
            </div>
            <p className="text-xl text-muted leading-relaxed mb-8">{post.excerpt}</p>
            <div className="space-y-6 text-lg leading-relaxed text-foreground/85">
              {splitIntoParagraphs(post.content).map((paragraph, index) => (
                <p key={`${post.id}-${index}`}>{paragraph}</p>
              ))}
            </div>
          </div>
        </article>

        <section className="mt-16 anim-up">
          <div className="flex items-center justify-between gap-4 mb-8">
            <div>
              <p className="text-[11px] uppercase tracking-[2px] text-brand-accent mb-2">More Sample Reading</p>
              <h2 className="text-3xl font-serif font-normal">Related Articles</h2>
            </div>
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[2px] font-bold text-brand-accent hover:text-brand-accent-hover transition-colors"
            >
              View All {posts.length} <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {relatedPosts.map((relatedPost) => (
              <div
                key={relatedPost.id}
                className="glass-panel rounded-xl overflow-hidden border border-border-subtle"
              >
                <img src={relatedPost.image} alt={relatedPost.title} className="w-full h-44 object-cover" />
                <div className="p-5">
                  <p className="text-[10px] uppercase tracking-[1px] text-brand-accent mb-2">
                    {relatedPost.category}
                  </p>
                  <h3 className="text-lg font-serif font-normal mb-3">{relatedPost.title}</h3>
                  <p className="text-sm text-muted mb-4 line-clamp-3">{relatedPost.excerpt}</p>
                  <Link
                    to={`/blog/${relatedPost.id}`}
                    className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[2px] font-bold text-brand-accent hover:text-brand-accent-hover transition-colors"
                  >
                    Read Article <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

function splitIntoParagraphs(content: string) {
  const sentences = content.split('. ').filter(Boolean);
  const paragraphs: string[] = [];

  for (let index = 0; index < sentences.length; index += 2) {
    const chunk = sentences.slice(index, index + 2).join('. ');
    paragraphs.push(chunk.endsWith('.') ? chunk : `${chunk}.`);
  }

  return paragraphs;
}
