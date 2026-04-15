import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: "What do I need to bring to my SIA training course?",
    answer: "You must bring 3 forms of ID (e.g., Passport, Driving Licence, and a recent utility bill or bank statement). You will also need a passport-sized photograph and a notepad/pen. Full details will be provided in your joining instructions."
  },
  {
    question: "Do you guarantee a pass?",
    answer: "While we cannot legally guarantee a pass, we boast a 98% first-time pass rate. Our expert instructors provide comprehensive support, mock tests, and extra help to ensure you are fully prepared for your assessments."
  },
  {
    question: "How long does it take to get my SIA licence after the course?",
    answer: "Once you pass the course, you must apply to the SIA directly. The application process, including background checks, typically takes between 4 to 6 weeks, though it can sometimes be quicker."
  },
  {
    question: "Are your courses online or in-person?",
    answer: "We offer a blended approach. Some courses, like First Aid and Physical Intervention, require mandatory in-person attendance for practical assessments. Other theoretical modules can be completed via our online student portal or live Zoom classes."
  },
  {
    question: "Do you offer payment plans?",
    answer: "Yes, we offer flexible payment plans for our more comprehensive courses. You can secure your place with a deposit and pay the remaining balance in installments before the course completion date. Contact our support team for details."
  },
  {
    question: "What happens if I fail an exam?",
    answer: "Don't worry! If you fail an exam, we offer one free retake for most of our courses. We will provide additional support and feedback to help you pass on your next attempt."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-background min-h-screen pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-serif font-normal mb-6">
            Frequently Asked <span className="text-brand-accent italic">Questions</span>
          </h1>
          <p className="text-muted text-lg leading-relaxed">
            Find answers to common questions about our courses, enrollment, and certification processes.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div 
              key={idx} 
              className={`glass-panel rounded-xl border transition-all duration-300 overflow-hidden ${
                openIndex === idx ? 'border-brand-accent/50 bg-surface-hover' : 'border-border-subtle hover:border-border-strong'
              }`}
            >
              <button 
                onClick={() => toggleFaq(idx)}
                className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
              >
                <span className="text-lg font-serif font-normal text-foreground pr-8">{faq.question}</span>
                <ChevronDown 
                  size={20} 
                  className={`text-brand-accent shrink-0 transition-transform duration-300 ${openIndex === idx ? 'rotate-180' : ''}`} 
                />
              </button>
              
              <div 
                className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === idx ? 'max-h-96 pb-6 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <p className="text-muted leading-relaxed border-t border-border pt-4">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Still have questions? */}
        <div className="mt-16 glass-panel p-10 rounded-xl border border-border-subtle text-center">
          <h3 className="text-2xl font-serif font-normal text-foreground mb-4">Still have questions?</h3>
          <p className="text-muted mb-8">Can't find the answer you're looking for? Please chat to our friendly team.</p>
          <a href="/contact" className="inline-block px-8 py-4 rounded-sm bg-brand-accent text-primary-foreground font-bold uppercase tracking-[1px] hover:bg-brand-accent-hover transition-all">
            Get in Touch
          </a>
        </div>

      </div>
    </div>
  );
}
