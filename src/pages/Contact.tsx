import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock submit
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="bg-background min-h-screen pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="max-w-3xl mb-16 text-center mx-auto">
          <h1 className="text-5xl md:text-6xl font-serif font-normal mb-6">
            Get in <span className="text-brand-accent italic">Touch</span>
          </h1>
          <p className="text-muted text-lg leading-relaxed">
            Have questions about our courses or need help with enrollment? Our team is here to assist you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Form */}
          <div className="glass-panel p-8 md:p-12 rounded-xl border border-border-subtle">
            <h2 className="text-2xl font-serif font-normal text-foreground mb-8">Send us a message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[11px] font-medium tracking-[2px] uppercase text-muted mb-2">Your Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full bg-surface-hover border border-border rounded-sm py-3 px-4 text-foreground placeholder-white/20 focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-medium tracking-[2px] uppercase text-muted mb-2">Email Address</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full bg-surface-hover border border-border rounded-sm py-3 px-4 text-foreground placeholder-white/20 focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent transition-all"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-[11px] font-medium tracking-[2px] uppercase text-muted mb-2">Subject</label>
                <input
                  type="text"
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({...formData, subject: e.target.value})}
                  className="w-full bg-surface-hover border border-border rounded-sm py-3 px-4 text-foreground placeholder-white/20 focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent transition-all"
                  placeholder="Course Inquiry"
                />
              </div>

              <div>
                <label className="block text-[11px] font-medium tracking-[2px] uppercase text-muted mb-2">Message</label>
                <textarea
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full bg-surface-hover border border-border rounded-sm py-3 px-4 text-foreground placeholder-white/20 focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent transition-all resize-none"
                  placeholder="How can we help you?"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-sm bg-brand-accent text-primary-foreground font-bold uppercase tracking-[1px] hover:bg-brand-accent-hover transition-all flex items-center justify-center gap-2 group"
              >
                Send Message
                <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="glass-panel p-8 rounded-xl border border-border-subtle">
              <h3 className="text-xl font-serif font-normal text-foreground mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-sm bg-brand-accent/10 flex items-center justify-center text-brand-accent border border-brand-accent/20 shrink-0">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 className="text-[11px] font-medium tracking-[2px] uppercase text-muted mb-1">Our Location</h4>
                    <p className="text-foreground/80">123 Singanallur<br />Coimbatore</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-sm bg-brand-accent/10 flex items-center justify-center text-brand-accent border border-brand-accent/20 shrink-0">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h4 className="text-[11px] font-medium tracking-[2px] uppercase text-muted mb-1">Phone Number</h4>
                    <p className="text-foreground/80">+91 9876543210</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-sm bg-brand-accent/10 flex items-center justify-center text-brand-accent border border-brand-accent/20 shrink-0">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h4 className="text-[11px] font-medium tracking-[2px] uppercase text-muted mb-1">Email Address</h4>
                    <p className="text-foreground/80">info@lillyangle.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="glass-panel rounded-xl border border-border-subtle overflow-hidden h-64 relative group">
              <div className="absolute inset-0 bg-surface flex items-center justify-center">
                <div className="text-center">
                  <MapPin size={32} className="text-brand-accent mx-auto mb-2 opacity-50" />
                  <span className="text-muted-foreground text-sm uppercase tracking-[1px]">Interactive Map View</span>
                </div>
              </div>
              <div className="absolute inset-0 bg-brand-accent/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
