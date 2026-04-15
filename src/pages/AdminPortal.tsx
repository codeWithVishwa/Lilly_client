import { useState } from 'react';
import { Users, BookOpen, Video, FileText, Plus, Edit2, Trash2, Search, LayoutDashboard, Settings, BarChart3, Download } from 'lucide-react';

export default function AdminPortal() {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="bg-background min-h-screen pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Admin Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
          <div>
            <h1 className="text-3xl md:text-4xl font-serif font-normal text-foreground mb-2">Admin Dashboard</h1>
            <p className="text-muted">Manage courses, students, and learning materials.</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-right hidden md:block">
              <div className="text-sm text-muted">Role</div>
              <div className="font-mono text-brand-accent">Administrator</div>
            </div>
            <div className="w-12 h-12 rounded-full bg-brand-accent flex items-center justify-center text-primary-foreground font-bold text-xl">
              A
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          
          {/* Sidebar Navigation */}
          <div className="lg:col-span-1">
            <div className="glass-panel rounded-xl p-4 sticky top-32 border border-border-subtle">
              <nav className="space-y-2">
                <button 
                  onClick={() => setActiveTab('overview')}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-sm text-[11px] uppercase tracking-[1px] font-medium transition-all ${activeTab === 'overview' ? 'bg-brand-accent text-primary-foreground' : 'text-muted hover:bg-surface-hover hover:text-foreground'}`}
                >
                  <LayoutDashboard size={18} />
                  Overview
                </button>
                <button 
                  onClick={() => setActiveTab('courses')}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-sm text-[11px] uppercase tracking-[1px] font-medium transition-all ${activeTab === 'courses' ? 'bg-brand-accent text-primary-foreground' : 'text-muted hover:bg-surface-hover hover:text-foreground'}`}
                >
                  <BookOpen size={18} />
                  Manage Courses
                </button>
                <button 
                  onClick={() => setActiveTab('students')}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-sm text-[11px] uppercase tracking-[1px] font-medium transition-all ${activeTab === 'students' ? 'bg-brand-accent text-primary-foreground' : 'text-muted hover:bg-surface-hover hover:text-foreground'}`}
                >
                  <Users size={18} />
                  Student Accounts
                </button>
                <button 
                  onClick={() => setActiveTab('materials')}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-sm text-[11px] uppercase tracking-[1px] font-medium transition-all ${activeTab === 'materials' ? 'bg-brand-accent text-primary-foreground' : 'text-muted hover:bg-surface-hover hover:text-foreground'}`}
                >
                  <FileText size={18} />
                  Course Materials
                </button>
                <button 
                  onClick={() => setActiveTab('zoom')}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-sm text-[11px] uppercase tracking-[1px] font-medium transition-all ${activeTab === 'zoom' ? 'bg-brand-accent text-primary-foreground' : 'text-muted hover:bg-surface-hover hover:text-foreground'}`}
                >
                  <Video size={18} />
                  Live Classes (Zoom)
                </button>
                <div className="h-px bg-surface-active my-4"></div>
                <button 
                  onClick={() => setActiveTab('reports')}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-sm text-[11px] uppercase tracking-[1px] font-medium transition-all ${activeTab === 'reports' ? 'bg-brand-accent text-primary-foreground' : 'text-muted hover:bg-surface-hover hover:text-foreground'}`}
                >
                  <BarChart3 size={18} />
                  Reports & Analytics
                </button>
                <button 
                  onClick={() => setActiveTab('settings')}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-sm text-[11px] uppercase tracking-[1px] font-medium transition-all ${activeTab === 'settings' ? 'bg-brand-accent text-primary-foreground' : 'text-muted hover:bg-surface-hover hover:text-foreground'}`}
                >
                  <Settings size={18} />
                  Platform Settings
                </button>
              </nav>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="lg:col-span-3">
            {activeTab === 'overview' && (
              <div>
                <h2 className="text-2xl font-serif font-normal text-foreground mb-6">Dashboard Overview</h2>
                
                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                  {[
                    { label: 'Total Revenue', value: '£45,200', change: '+12%', positive: true },
                    { label: 'Active Students', value: '1,248', change: '+5%', positive: true },
                    { label: 'Course Completions', value: '892', change: '+18%', positive: true },
                    { label: 'Avg. Pass Rate', value: '98%', change: '-1%', positive: false },
                  ].map((stat, idx) => (
                    <div key={idx} className="glass-panel p-6 rounded-xl border border-border-subtle">
                      <div className="text-[11px] uppercase tracking-[1px] text-muted-foreground mb-2">{stat.label}</div>
                      <div className="text-3xl font-serif font-normal text-foreground mb-2">{stat.value}</div>
                      <div className={`text-xs font-medium ${stat.positive ? 'text-green-500' : 'text-red-500'}`}>
                        {stat.change} from last month
                      </div>
                    </div>
                  ))}
                </div>

                {/* Recent Activity */}
                <div className="glass-panel rounded-xl border border-border-subtle p-6">
                  <h3 className="text-lg font-serif font-normal text-foreground mb-6">Recent Activity</h3>
                  <div className="space-y-4">
                    {[
                      { action: 'New Enrollment', details: 'Sarah Jenkins enrolled in SIA Door Supervisor', time: '2 hours ago' },
                      { action: 'Course Completed', details: 'Michael Chen completed CCTV Operator Training', time: '5 hours ago' },
                      { action: 'Payment Received', details: '£220 received from David Smith', time: '1 day ago' },
                      { action: 'Material Uploaded', details: 'New PDF added to First Aid at Work', time: '1 day ago' },
                    ].map((activity, idx) => (
                      <div key={idx} className="flex items-start gap-4 pb-4 border-b border-border-subtle last:border-0 last:pb-0">
                        <div className="w-2 h-2 rounded-full bg-brand-accent mt-2 shrink-0"></div>
                        <div>
                          <div className="text-sm font-medium text-foreground">{activity.action}</div>
                          <div className="text-xs text-muted">{activity.details}</div>
                        </div>
                        <div className="ml-auto text-xs text-muted-foreground whitespace-nowrap">{activity.time}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'courses' && (
              <div>
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-serif font-normal text-foreground">Manage Courses</h2>
                  <button className="px-4 py-2 rounded-sm bg-brand-accent text-primary-foreground text-[11px] font-bold uppercase tracking-[1px] hover:bg-brand-accent-hover transition-colors flex items-center gap-2">
                    <Plus size={16} /> Add Course
                  </button>
                </div>
                
                <div className="glass-panel rounded-xl overflow-hidden border border-border-subtle">
                  <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                      <thead>
                        <tr className="border-b border-border text-[10px] uppercase tracking-[1px] text-muted-foreground bg-surface-hover">
                          <th className="p-4 font-medium">Course Name</th>
                          <th className="p-4 font-medium">Category</th>
                          <th className="p-4 font-medium">Price</th>
                          <th className="p-4 font-medium">Status</th>
                          <th className="p-4 font-medium text-right">Actions</th>
                        </tr>
                      </thead>
                      <tbody className="text-sm text-foreground/80">
                        {[
                          { name: 'SIA Door Supervisor', cat: 'Security', price: '£220', status: 'Active' },
                          { name: 'CCTV Operator Training', cat: 'Security', price: '£180', status: 'Active' },
                          { name: 'First Aid at Work', cat: 'Health & Safety', price: '£150', status: 'Draft' },
                        ].map((course, idx) => (
                          <tr key={idx} className="border-b border-border-subtle hover:bg-surface-hover transition-colors">
                            <td className="p-4 font-medium text-foreground">{course.name}</td>
                            <td className="p-4">{course.cat}</td>
                            <td className="p-4">{course.price}</td>
                            <td className="p-4">
                              <span className={`px-2 py-1 rounded-sm text-[10px] uppercase tracking-[1px] font-medium border ${course.status === 'Active' ? 'bg-green-500/10 text-green-500 border-green-500/20' : 'bg-yellow-500/10 text-yellow-500 border-yellow-500/20'}`}>
                                {course.status}
                              </span>
                            </td>
                            <td className="p-4 flex justify-end gap-2">
                              <button className="p-2 rounded-sm hover:bg-surface-active text-muted-foreground hover:text-foreground transition-colors">
                                <Edit2 size={16} />
                              </button>
                              <button className="p-2 rounded-sm hover:bg-red-500/10 text-muted-foreground hover:text-red-500 transition-colors">
                                <Trash2 size={16} />
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'students' && (
              <div>
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
                  <h2 className="text-2xl font-serif font-normal text-foreground">Student Accounts</h2>
                  <div className="relative w-full sm:w-auto">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-muted-foreground">
                      <Search size={16} />
                    </div>
                    <input 
                      type="text" 
                      placeholder="Search students..." 
                      className="w-full sm:w-64 bg-surface-hover border border-border rounded-sm py-2 pl-10 pr-4 text-sm text-foreground focus:outline-none focus:border-brand-accent transition-colors"
                    />
                  </div>
                </div>
                
                <div className="grid gap-4">
                  {[
                    { name: 'Sarah Jenkins', email: 'sarah.j@example.com', enrolled: 2, joined: '10 Mar 2026' },
                    { name: 'Michael Chen', email: 'm.chen@example.com', enrolled: 1, joined: '12 Mar 2026' },
                    { name: 'David Smith', email: 'david.s@example.com', enrolled: 3, joined: '05 Feb 2026' },
                  ].map((student, idx) => (
                    <div key={idx} className="glass-panel p-4 rounded-xl border border-border-subtle flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-background border border-border flex items-center justify-center text-muted font-bold">
                          {student.name.charAt(0)}
                        </div>
                        <div>
                          <div className="font-medium text-foreground">{student.name}</div>
                          <div className="text-xs text-muted-foreground">{student.email}</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-6 text-sm">
                        <div className="text-center">
                          <div className="text-muted-foreground text-[10px] uppercase tracking-[1px]">Enrolled</div>
                          <div className="text-foreground font-medium">{student.enrolled} Courses</div>
                        </div>
                        <div className="text-center hidden sm:block">
                          <div className="text-muted-foreground text-[10px] uppercase tracking-[1px]">Joined</div>
                          <div className="text-foreground font-medium">{student.joined}</div>
                        </div>
                        <button className="px-4 py-2 rounded-sm border border-border-strong text-foreground text-[11px] font-bold uppercase tracking-[1px] hover:bg-surface-hover transition-colors">
                          View
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'zoom' && (
              <div>
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-serif font-normal text-foreground">Live Classes</h2>
                  <button className="px-4 py-2 rounded-sm bg-brand-accent text-primary-foreground text-[11px] font-bold uppercase tracking-[1px] hover:bg-brand-accent-hover transition-colors flex items-center gap-2">
                    <Plus size={16} /> Schedule Class
                  </button>
                </div>

                <div className="space-y-4">
                  {[
                    { course: 'SIA Door Supervisor', topic: 'Conflict Management', time: 'Tomorrow, 10:00 AM', status: 'Scheduled' },
                    { course: 'CCTV Operator', topic: 'Equipment Operation', time: 'Today, 14:00 PM', status: 'Live Now' },
                  ].map((session, idx) => (
                    <div key={idx} className="glass-panel p-6 rounded-xl border border-border-subtle flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                      <div>
                        <div className="flex items-center gap-3 mb-2">
                          <span className={`w-2 h-2 rounded-full ${session.status === 'Live Now' ? 'bg-red-500 animate-pulse' : 'bg-blue-500'}`}></span>
                          <span className="text-[10px] font-medium tracking-[1px] uppercase text-muted-foreground">{session.status}</span>
                        </div>
                        <h4 className="font-serif font-normal text-lg text-foreground">{session.topic}</h4>
                        <p className="text-sm text-muted">{session.course} • {session.time}</p>
                      </div>
                      <div className="flex gap-3 w-full md:w-auto">
                        <button className="flex-1 md:flex-none px-4 py-2 rounded-sm border border-border-strong text-foreground text-[11px] font-bold uppercase tracking-[1px] hover:bg-surface-hover transition-colors">
                          Edit Link
                        </button>
                        <button className={`flex-1 md:flex-none px-4 py-2 rounded-sm text-primary-foreground text-[11px] font-bold uppercase tracking-[1px] transition-colors ${session.status === 'Live Now' ? 'bg-red-500 hover:bg-red-600 text-foreground' : 'bg-brand-accent hover:bg-brand-accent-hover'}`}>
                          {session.status === 'Live Now' ? 'Join as Host' : 'Start Meeting'}
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            {activeTab === 'materials' && (
              <div>
                 <h2 className="text-2xl font-serif font-normal text-foreground mb-6">Course Materials</h2>
                 <div className="glass-panel p-12 rounded-xl border border-border-subtle text-center border-dashed">
                    <FileText size={48} className="text-muted-foreground mx-auto mb-4" />
                    <h3 className="text-xl font-serif font-normal text-foreground mb-2">Upload Materials</h3>
                    <p className="text-muted max-w-md mx-auto mb-6 text-sm">Drag and drop PDF documents, presentations, or video files here to add them to a course.</p>
                    <button className="px-6 py-3 rounded-sm bg-surface-active text-foreground text-[11px] font-bold uppercase tracking-[1px] hover:bg-surface-active transition-colors">
                      Browse Files
                    </button>
                 </div>
              </div>
            )}
            {activeTab === 'reports' && (
              <div>
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-serif font-normal text-foreground">Reports & Analytics</h2>
                  <button className="px-4 py-2 rounded-sm border border-border-strong text-foreground text-[11px] font-bold uppercase tracking-[1px] hover:bg-surface-hover transition-colors flex items-center gap-2">
                    <Download size={16} /> Export CSV
                  </button>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="glass-panel p-6 rounded-xl border border-border-subtle h-64 flex flex-col justify-center items-center text-center">
                    <BarChart3 size={48} className="text-foreground/10 mb-4" />
                    <div className="text-muted text-sm">Revenue Chart Placeholder</div>
                  </div>
                  <div className="glass-panel p-6 rounded-xl border border-border-subtle h-64 flex flex-col justify-center items-center text-center">
                    <BarChart3 size={48} className="text-foreground/10 mb-4" />
                    <div className="text-muted text-sm">Enrollment Trends Placeholder</div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'settings' && (
              <div>
                <h2 className="text-2xl font-serif font-normal text-foreground mb-6">Platform Settings</h2>
                
                <div className="glass-panel p-8 rounded-xl border border-border-subtle space-y-8">
                  <div>
                    <h3 className="text-lg font-serif font-normal text-foreground mb-4">General Information</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-[11px] font-medium tracking-[2px] uppercase text-muted mb-2">Platform Name</label>
                        <input type="text" defaultValue="Lilly Angel Training" className="w-full bg-surface-hover border border-border rounded-sm py-2 px-4 text-foreground focus:outline-none focus:border-brand-accent transition-colors" />
                      </div>
                      <div>
                        <label className="block text-[11px] font-medium tracking-[2px] uppercase text-muted mb-2">Support Email</label>
                        <input type="email" defaultValue="info@lilly-angel.co.uk" className="w-full bg-surface-hover border border-border rounded-sm py-2 px-4 text-foreground focus:outline-none focus:border-brand-accent transition-colors" />
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-border pt-8">
                    <h3 className="text-lg font-serif font-normal text-foreground mb-4">Payment Integrations</h3>
                    <div className="flex items-center justify-between p-4 border border-border rounded-sm bg-surface-hover">
                      <div>
                        <div className="font-medium text-foreground">Stripe Checkout</div>
                        <div className="text-xs text-muted">Accept credit cards and Apple Pay</div>
                      </div>
                      <button className="px-4 py-2 rounded-sm bg-green-500/20 text-green-500 text-[11px] font-bold uppercase tracking-[1px]">
                        Connected
                      </button>
                    </div>
                  </div>

                  <div className="border-t border-border pt-8 flex justify-end">
                    <button className="px-6 py-3 rounded-sm bg-brand-accent text-primary-foreground text-[11px] font-bold uppercase tracking-[1px] hover:bg-brand-accent-hover transition-colors">
                      Save Changes
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
