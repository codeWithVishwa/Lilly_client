import { useState } from 'react';
import { BookOpen, PlayCircle, FileText, CheckCircle2, Download, Clock, Award } from 'lucide-react';

export default function StudentPortal() {
  const [activeTab, setActiveTab] = useState('dashboard');

  return (
    <div className="bg-background min-h-screen pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Portal Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
          <div>
            <h1 className="text-3xl md:text-4xl font-serif font-normal text-foreground mb-2">Welcome back, Sarah</h1>
            <p className="text-muted">Track your progress and access your learning materials.</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-right hidden md:block">
              <div className="text-sm text-muted">Student ID</div>
              <div className="font-mono text-brand-accent">LA-2026-8492</div>
            </div>
            <div className="w-12 h-12 rounded-full bg-background overflow-hidden border border-brand-accent">
              <img src="https://i.pravatar.cc/150?img=10" alt="Profile" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          
          {/* Sidebar Navigation */}
          <div className="lg:col-span-1">
            <div className="glass-panel rounded-xl p-4 sticky top-32 border border-border-subtle">
              <nav className="space-y-2">
                <button 
                  onClick={() => setActiveTab('dashboard')}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-sm text-[11px] uppercase tracking-[1px] font-medium transition-all ${activeTab === 'dashboard' ? 'bg-brand-accent text-primary-foreground' : 'text-muted hover:bg-surface-hover hover:text-foreground'}`}
                >
                  <BookOpen size={18} />
                  My Courses
                </button>
                <button 
                  onClick={() => setActiveTab('materials')}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-sm text-[11px] uppercase tracking-[1px] font-medium transition-all ${activeTab === 'materials' ? 'bg-brand-accent text-primary-foreground' : 'text-muted hover:bg-surface-hover hover:text-foreground'}`}
                >
                  <FileText size={18} />
                  Study Materials
                </button>
                <button 
                  onClick={() => setActiveTab('tests')}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-sm text-[11px] uppercase tracking-[1px] font-medium transition-all ${activeTab === 'tests' ? 'bg-brand-accent text-primary-foreground' : 'text-muted hover:bg-surface-hover hover:text-foreground'}`}
                >
                  <CheckCircle2 size={18} />
                  Mock Tests
                </button>
                <button 
                  onClick={() => setActiveTab('certificates')}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-sm text-[11px] uppercase tracking-[1px] font-medium transition-all ${activeTab === 'certificates' ? 'bg-brand-accent text-primary-foreground' : 'text-muted hover:bg-surface-hover hover:text-foreground'}`}
                >
                  <Award size={18} />
                  Certificates
                </button>
              </nav>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="lg:col-span-3">
            {activeTab === 'dashboard' && (
              <div className="space-y-8">
                <h2 className="text-2xl font-serif font-normal text-foreground mb-6">Enrolled Courses</h2>
                
                {/* Active Course Card */}
                <div className="glass-panel rounded-xl p-8 border border-border relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-brand-accent/5 rounded-full blur-[80px] pointer-events-none"></div>
                  
                  <div className="flex flex-col md:flex-row gap-8 relative z-10">
                    <div className="w-full md:w-1/3 aspect-video rounded-lg overflow-hidden shrink-0">
                      <img src="https://images.unsplash.com/photo-1582139329536-e7284fece509?q=80&w=2080&auto=format&fit=crop" alt="Course" className="w-full h-full object-cover" />
                    </div>
                    
                    <div className="flex-grow flex flex-col justify-center">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-2xl font-serif font-normal text-foreground">SIA Door Supervisor</h3>
                        <span className="px-3 py-1 rounded-sm bg-brand-accent/10 text-brand-accent text-[10px] font-medium uppercase tracking-[1px] border border-brand-accent/20">In Progress</span>
                      </div>
                      <p className="text-muted text-sm mb-6">Next live session: Tomorrow, 10:00 AM via Zoom</p>
                      
                      <div className="mb-6">
                        <div className="flex justify-between text-sm mb-2">
                          <span className="text-muted">Course Progress</span>
                          <span className="text-brand-accent font-medium">65%</span>
                        </div>
                        <div className="w-full h-1 bg-surface-active rounded-full overflow-hidden">
                          <div className="h-full bg-brand-accent rounded-full" style={{ width: '65%' }}></div>
                        </div>
                      </div>
                      
                      <div className="flex gap-4">
                        <button className="px-6 py-3 rounded-sm bg-brand-accent text-primary-foreground text-[11px] font-bold uppercase tracking-[1px] hover:bg-brand-accent-hover transition-colors flex items-center gap-2">
                          <PlayCircle size={18} /> Continue Learning
                        </button>
                        <button className="px-6 py-3 rounded-sm border border-border-strong text-foreground text-[11px] font-bold uppercase tracking-[1px] hover:bg-surface-hover transition-colors">
                          Join Zoom
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Completed Course */}
                <div className="glass-panel rounded-xl p-6 border border-border-subtle flex flex-col md:flex-row items-center justify-between gap-6 opacity-70 hover:opacity-100 transition-opacity">
                  <div className="flex items-center gap-6">
                    <div className="w-16 h-16 rounded-sm bg-green-500/10 text-green-500 flex items-center justify-center shrink-0 border border-green-500/20">
                      <CheckCircle2 size={32} />
                    </div>
                    <div>
                      <h3 className="text-lg font-serif font-normal text-foreground mb-1">Emergency First Aid</h3>
                      <p className="text-muted text-sm">Completed on 12 Mar 2026</p>
                    </div>
                  </div>
                  <button className="px-6 py-2 rounded-sm border border-border-strong text-foreground text-[11px] font-bold uppercase tracking-[1px] hover:bg-surface-hover transition-colors flex items-center gap-2">
                    <Download size={16} /> Certificate
                  </button>
                </div>
              </div>
            )}

            {activeTab === 'materials' && (
              <div>
                <h2 className="text-2xl font-serif font-normal text-foreground mb-6">Study Materials</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    { title: 'Module 1: Introduction to Security', type: 'PDF Document', size: '2.4 MB' },
                    { title: 'Module 2: Conflict Management Guide', type: 'PDF Document', size: '4.1 MB' },
                    { title: 'Physical Intervention Techniques', type: 'Video Tutorial', size: '45 Mins' },
                    { title: 'Health & Safety Regulations 2026', type: 'PDF Document', size: '1.8 MB' },
                  ].map((doc, idx) => (
                    <div key={idx} className="glass-panel p-6 rounded-xl border border-border-subtle flex items-start justify-between group hover:border-brand-accent/30 transition-colors">
                      <div className="flex gap-4">
                        <div className="w-10 h-10 rounded-sm bg-surface-hover flex items-center justify-center text-brand-accent shrink-0 border border-border">
                          {doc.type.includes('Video') ? <PlayCircle size={20} /> : <FileText size={20} />}
                        </div>
                        <div>
                          <h4 className="font-medium text-foreground mb-1 group-hover:text-brand-accent transition-colors">{doc.title}</h4>
                          <div className="text-[11px] text-muted uppercase tracking-[1px]">{doc.type} • {doc.size}</div>
                        </div>
                      </div>
                      <button className="text-muted-foreground hover:text-foreground transition-colors">
                        <Download size={20} />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'tests' && (
              <div>
                <h2 className="text-2xl font-serif font-normal text-foreground mb-6">Mock Tests</h2>
                <div className="space-y-4">
                  {[
                    { title: 'Working in the Private Security Industry', questions: 40, time: '60 mins', status: 'Passed', score: '85%' },
                    { title: 'Working as a Door Supervisor', questions: 45, time: '75 mins', status: 'Pending', score: '-' },
                    { title: 'Conflict Management', questions: 20, time: '30 mins', status: 'Pending', score: '-' },
                  ].map((test, idx) => (
                    <div key={idx} className="glass-panel p-6 rounded-xl border border-border-subtle flex flex-col md:flex-row items-center justify-between gap-6">
                      <div>
                        <h4 className="font-medium text-foreground mb-2">{test.title}</h4>
                        <div className="flex gap-4 text-[11px] uppercase tracking-[1px] text-muted">
                          <span className="flex items-center gap-1"><FileText size={14} /> {test.questions} Questions</span>
                          <span className="flex items-center gap-1"><Clock size={14} /> {test.time}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-6 w-full md:w-auto justify-between md:justify-end">
                        {test.status === 'Passed' ? (
                          <div className="text-green-500 font-medium flex items-center gap-2 text-sm">
                            <CheckCircle2 size={18} /> {test.score}
                          </div>
                        ) : (
                          <div className="text-muted-foreground font-medium text-sm">Not started</div>
                        )}
                        <button className={`px-6 py-2 rounded-sm text-[11px] font-bold uppercase tracking-[1px] transition-colors ${test.status === 'Passed' ? 'border border-border-strong text-foreground hover:bg-surface-hover' : 'bg-brand-accent text-primary-foreground hover:bg-brand-accent-hover'}`}>
                          {test.status === 'Passed' ? 'Retake' : 'Start Test'}
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            {activeTab === 'certificates' && (
              <div>
                 <h2 className="text-2xl font-serif font-normal text-foreground mb-6">My Certificates</h2>
                 <div className="glass-panel p-12 rounded-xl border border-border-subtle text-center">
                    <Award size={48} className="text-brand-accent mx-auto mb-4 opacity-50" />
                    <h3 className="text-xl font-serif font-normal text-foreground mb-2">No certificates yet</h3>
                    <p className="text-muted max-w-md mx-auto text-sm">Complete your enrolled courses and pass the required assessments to earn your certificates.</p>
                 </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
