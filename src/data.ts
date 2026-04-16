export type Course = {
  id: number;
  title: string;
  category: string;
  duration: string;
  price: string;
  image: string;
  description: string;
  modules: string[];
  career: string;
  dates: string[];
};

export type Post = {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  date: string;
  author: string;
  image: string;
};

export const courses: Course[] = [
  {
    id: 1,
    title: 'SIA Door Supervisor',
    category: 'Security',
    duration: '6 Days',
    price: '£220',
    image: 'https://images.unsplash.com/photo-1582139329536-e7284fece509?q=80&w=2080&auto=format&fit=crop',
    description: 'Get your SIA licence and start working in the private security industry. Comprehensive training covering behavior management, physical intervention, and more.',
    modules: [
      'Principles of Working in the Private Security Industry',
      'Principles of Working as a Door Supervisor',
      'Application of Conflict Management',
      'Application of Physical Intervention Skills'
    ],
    career: 'Upon successful completion, you can apply for an SIA Door Supervisor licence, allowing you to work in retail, corporate, events, and licensed premises.',
    dates: ['15 May 2026', '02 Jun 2026', '20 Jun 2026']
  },
  {
    id: 2,
    title: 'CCTV Operator Training',
    category: 'Security',
    duration: '3 Days',
    price: '£180',
    image: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?q=80&w=2064&auto=format&fit=crop',
    description: 'Learn the essential skills to operate CCTV equipment effectively and legally within the private security industry.',
    modules: [
      'Principles of Working in the Private Security Industry',
      'Principles and Practices of Working as a CCTV Operator',
      'Practical Operation of CCTV Equipment'
    ],
    career: 'Work in control rooms, retail monitoring, and corporate security centers.',
    dates: ['18 May 2026', '05 Jun 2026', '25 Jun 2026']
  },
  {
    id: 3,
    title: 'First Aid at Work',
    category: 'Health & Safety',
    duration: '3 Days',
    price: '£150',
    image: 'https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?q=80&w=2070&auto=format&fit=crop',
    description: 'Comprehensive first aid training to meet HSE requirements. Learn life-saving skills for the workplace.',
    modules: [
      'Emergency First Aid in the Workplace',
      'Recognition and Management of Illness and Injury',
      'Using an Automated External Defibrillator (AED)'
    ],
    career: 'Become a designated First Aider in your workplace, a highly valued skill across all industries.',
    dates: ['20 May 2026', '10 Jun 2026', '28 Jun 2026']
  },
  {
    id: 4,
    title: 'Customer Service Level 2',
    category: 'Professional Skills',
    duration: '2 Days',
    price: '£120',
    image: 'https://images.unsplash.com/photo-1556745968-68a172332f25?q=80&w=2070&auto=format&fit=crop',
    description: 'Enhance your communication skills and learn how to deliver exceptional customer service in any environment.',
    modules: [
      'Principles of Customer Service',
      'Understanding Customer Needs',
      'Handling Complaints and Difficult Situations'
    ],
    career: 'Ideal for retail, hospitality, and corporate reception roles.',
    dates: ['22 May 2026', '12 Jun 2026', '30 Jun 2026']
  },
  {
    id: 5,
    title: 'Emergency First Aid',
    category: 'Health & Safety',
    duration: '1 Day',
    price: '£80',
    image: 'https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=2070&auto=format&fit=crop',
    description: 'Basic life-saving skills for low-risk work environments. Quick, effective, and fully accredited.',
    modules: [
      'Roles and Responsibilities of a First Aider',
      'Assessing an Incident',
      'Managing an Unresponsive Casualty'
    ],
    career: 'Fulfill minimum HSE requirements for low-risk workplaces.',
    dates: ['25 May 2026', '15 Jun 2026', '02 Jul 2026']
  },
  {
    id: 6,
    title: 'Security Guarding',
    category: 'Security',
    duration: '4 Days',
    price: '£190',
    image: 'https://images.unsplash.com/photo-1541888062836-819777263595?q=80&w=2070&auto=format&fit=crop',
    description: 'Essential training for manned guarding roles. Learn conflict management, patrolling, and incident reporting.',
    modules: [
      'Principles of Working in the Private Security Industry',
      'Principles of Working as a Security Officer',
      'Application of Conflict Management'
    ],
    career: 'Work as a static guard, patrol officer, or retail security officer.',
    dates: ['28 May 2026', '18 Jun 2026', '05 Jul 2026']
  },
  {
    id: 7,
    title: 'Close Protection',
    category: 'Security',
    duration: '14 Days',
    price: '£1200',
    image: 'https://images.unsplash.com/photo-1555597673-b21d5c935865?q=80&w=2070&auto=format&fit=crop',
    description: 'Advanced training for close protection operatives. Covers risk assessment, surveillance, and VIP protection.',
    modules: [
      'Threat and Risk Assessment',
      'Operational Planning',
      'Surveillance Awareness',
      'Close Protection Foot Drills'
    ],
    career: 'Work as a bodyguard or close protection operative for VIPs, executives, and high-net-worth individuals.',
    dates: ['01 Jun 2026', '01 Jul 2026', '01 Aug 2026']
  },
  {
    id: 8,
    title: 'Fire Safety Awareness',
    category: 'Health & Safety',
    duration: '1 Day',
    price: '£90',
    image: 'https://images.unsplash.com/photo-1599708153386-62bf2f034eb1?q=80&w=2070&auto=format&fit=crop',
    description: 'Learn to identify fire hazards, use fire extinguishers, and understand emergency evacuation procedures.',
    modules: [
      'Causes of Fire',
      'Fire Safety Precautions',
      'Using Fire Extinguishers safely'
    ],
    career: 'Become a designated Fire Warden or Fire Marshal in your organization.',
    dates: ['05 Jun 2026', '20 Jun 2026', '10 Jul 2026']
  },
  {
    id: 9,
    title: 'Conflict Management',
    category: 'Professional Skills',
    duration: '2 Days',
    price: '£140',
    image: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=2069&auto=format&fit=crop',
    description: 'Develop skills to de-escalate tense situations, communicate effectively, and resolve conflicts peacefully.',
    modules: [
      'Understanding Conflict',
      'Communication Skills for De-escalation',
      'Resolving Conflict Safely'
    ],
    career: 'Essential for retail, healthcare, and public-facing roles.',
    dates: ['08 Jun 2026', '22 Jun 2026', '12 Jul 2026']
  },
  {
    id: 10,
    title: 'Health and Safety in the Workplace',
    category: 'Health & Safety',
    duration: '2 Days',
    price: '£130',
    image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=2070&auto=format&fit=crop',
    description: 'Comprehensive overview of workplace health and safety regulations, risk assessments, and safe practices.',
    modules: [
      'Health and Safety Legislation',
      'Risk Assessment Principles',
      'Workplace Hazards and Controls'
    ],
    career: 'Ideal for supervisors, managers, and health & safety representatives.',
    dates: ['12 Jun 2026', '25 Jun 2026', '15 Jul 2026']
  }
];

export const posts: Post[] = [
  {
    id: 1,
    title: 'How to get an SIA licence in the UK',
    excerpt: 'A complete step-by-step guide to obtaining your Security Industry Authority licence, from training to application.',
    content: 'Getting an SIA licence is your first step to working in the UK private security industry. The process involves taking a recognized training course, passing the exams, and then applying through the SIA portal. You will need to undergo identity and criminal record checks. Once approved, your licence is valid for three years.',
    category: 'Guides',
    date: '12 Apr 2026',
    author: 'John Smith',
    image: 'https://images.unsplash.com/photo-1582139329536-e7284fece509?q=80&w=2080&auto=format&fit=crop'
  },
  {
    id: 2,
    title: 'Top 5 Security Jobs in the UK for 2026',
    excerpt: 'Discover the most in-demand roles in the private security sector and what qualifications you need to secure them.',
    content: 'The security industry is booming. The top roles for 2026 include Door Supervisors, CCTV Operators, Close Protection Officers, Cyber Security Analysts, and Event Security Staff. Each role requires specific training and licensing, but all offer excellent career progression opportunities.',
    category: 'Career',
    date: '05 Apr 2026',
    author: 'Sarah Jenkins',
    image: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?q=80&w=2064&auto=format&fit=crop'
  },
  {
    id: 3,
    title: 'Best Part-Time Jobs for Students in London',
    excerpt: 'Looking for flexible work while studying? Here are the best part-time opportunities that fit around your schedule.',
    content: 'Event security and door supervision are fantastic part-time jobs for students. They offer flexible hours, usually during evenings and weekends, allowing you to earn good money without interfering with your studies. Plus, the communication skills you learn are invaluable.',
    category: 'Student Life',
    date: '28 Mar 2026',
    author: 'Emma Wilson',
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: 4,
    title: 'Why First Aid Training is Essential for Everyone',
    excerpt: 'First aid isn\'t just for the workplace. Learn why these life-saving skills are crucial for everyday situations.',
    content: 'Accidents can happen anywhere. Having basic first aid knowledge means you can confidently respond to emergencies, potentially saving a life. From treating minor burns to performing CPR, these skills are essential for parents, caregivers, and everyone in the community.',
    category: 'Health & Safety',
    date: '15 Mar 2026',
    author: 'David Brown',
    image: 'https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: 5,
    title: 'How to Handle Difficult Customers',
    excerpt: 'Customer service can be challenging. Here are proven strategies to de-escalate situations and turn unhappy customers into loyal ones.',
    content: 'Dealing with difficult customers requires patience and empathy. Always listen actively, acknowledge their frustration, and avoid taking things personally. Use the LEAP method: Listen, Empathize, Apologize, and Problem-solve. Effective communication is the key to resolving conflicts.',
    category: 'Professional Skills',
    date: '10 Mar 2026',
    author: 'Lisa Taylor',
    image: 'https://images.unsplash.com/photo-1556745968-68a172332f25?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: 6,
    title: 'The Future of CCTV and Surveillance',
    excerpt: 'Explore how AI and machine learning are revolutionizing CCTV monitoring and what it means for operators.',
    content: 'Artificial Intelligence is transforming CCTV. Smart cameras can now detect unusual behavior, recognize faces, and track objects automatically. While this technology is powerful, human operators are still essential for verifying alerts and making critical decisions.',
    category: 'Security',
    date: '02 Mar 2026',
    author: 'James Wilson',
    image: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?q=80&w=2064&auto=format&fit=crop'
  },
  {
    id: 7,
    title: 'Mental Health in the Security Industry',
    excerpt: 'Working in security can be stressful. We discuss the importance of mental health awareness and support for security professionals.',
    content: 'Security professionals often face high-stress situations and long hours. It is crucial to prioritize mental health. Employers must provide support systems, and individuals should practice self-care, seek help when needed, and look out for their colleagues.',
    category: 'Health & Safety',
    date: '25 Feb 2026',
    author: 'Sarah Jenkins',
    image: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=2069&auto=format&fit=crop'
  },
  {
    id: 8,
    title: 'Preparing for Your Close Protection Course',
    excerpt: 'Close protection is demanding. Find out how to physically and mentally prepare for this intensive training program.',
    content: 'Close protection training is rigorous. You need a good level of physical fitness, sharp situational awareness, and the ability to remain calm under pressure. Start preparing months in advance by improving your stamina and studying basic risk assessment principles.',
    category: 'Guides',
    date: '18 Feb 2026',
    author: 'Michael Chang',
    image: 'https://images.unsplash.com/photo-1555597673-b21d5c935865?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: 9,
    title: 'Fire Safety: Common Workplace Hazards',
    excerpt: 'Identify the most common fire risks in the workplace and learn how to mitigate them effectively.',
    content: 'Common workplace fire hazards include overloaded electrical outlets, accumulated waste, and improperly stored flammable liquids. Regular risk assessments, proper housekeeping, and ensuring all staff are trained in fire safety are vital steps in preventing disasters.',
    category: 'Health & Safety',
    date: '10 Feb 2026',
    author: 'David Brown',
    image: 'https://images.unsplash.com/photo-1599708153386-62bf2f034eb1?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: 10,
    title: 'Building a Career in Event Security',
    excerpt: 'From music festivals to corporate events, discover what it takes to succeed in the dynamic world of event security.',
    content: 'Event security is fast-paced and exciting. It requires excellent communication skills, the ability to work in a team, and a strong focus on customer service. Gaining experience at smaller events and networking with industry professionals can help you build a successful career.',
    category: 'Career',
    date: '05 Feb 2026',
    author: 'Emma Wilson',
    image: 'https://images.unsplash.com/photo-1541888062836-819777263595?q=80&w=2070&auto=format&fit=crop'
  }
];

export function getCourseById(id: number) {
  return courses.find((course) => course.id === id);
}

export function getPostById(id: number) {
  return posts.find((post) => post.id === id);
}
