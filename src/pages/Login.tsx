import { useState, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { Mail, Lock, ArrowRight } from 'lucide-react';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e: FormEvent) => {
    e.preventDefault();
    // Mock login logic
    if (email.includes('admin')) {
      navigate('/admin');
    } else {
      navigate('/portal');
    }
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center pt-20 px-6 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-accent/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="w-full max-w-md relative z-10">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-serif font-normal text-foreground mb-2">Welcome Back</h1>
          <p className="text-muted">Sign in to access your learning portal</p>
        </div>

        <form onSubmit={handleLogin} className="glass-panel p-8 rounded-xl border border-border">
          <div className="space-y-6 mb-8">
            <div>
              <label className="block text-[11px] font-medium tracking-[2px] uppercase text-muted mb-2">Email Address</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-muted-foreground">
                  <Mail size={18} />
                </div>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-surface-hover border border-border rounded-sm py-3 pl-12 pr-4 text-foreground placeholder-white/20 focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent transition-all"
                  placeholder="student@example.com"
                />
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="block text-[11px] font-medium tracking-[2px] uppercase text-muted">Password</label>
                <a href="#" className="text-[11px] uppercase tracking-[1px] text-brand-accent hover:text-brand-accent-hover transition-colors">Forgot?</a>
              </div>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-muted-foreground">
                  <Lock size={18} />
                </div>
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-surface-hover border border-border rounded-sm py-3 pl-12 pr-4 text-foreground placeholder-white/20 focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent transition-all"
                  placeholder="••••••••"
                />
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-4 rounded-sm bg-brand-accent text-primary-foreground font-bold uppercase tracking-[1px] hover:bg-brand-accent-hover transition-all flex items-center justify-center gap-2 group"
          >
            Sign In
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
          
          <div className="mt-6 text-center text-sm text-muted-foreground">
            Don't have an account? <span className="text-foreground/80">Book a course to get access.</span>
          </div>
        </form>
      </div>
    </div>
  );
}
