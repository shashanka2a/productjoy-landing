import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";
import { AnimatedSection } from "./AnimatedSection";

export function FAQ() {
  const faqs = [
    {
      question: "What services does ProductJoy offer?",
      answer: "We offer three core verticals — Design, Development, and Marketing — that work together to take startups from idea to market."
    },
    {
      question: "What if I need revisions?",
      answer: "All plans include revisions. Sprint includes code review, Launch includes 2 rounds of revisions, and Scale includes unlimited revisions. We work closely with you to ensure the final product meets your expectations."
    },
    {
      question: "Do you provide ongoing support?",
      answer: "Yes! We offer 24/7 support and can provide ongoing maintenance, updates, and feature additions after launch. Our Scale plan includes ongoing support, and we offer support packages for other plans."
    },
    {
      question: "What technologies do you use?",
      answer: "We use modern, proven technologies including React, Next.js, React Native, Node.js, TypeScript, and cloud platforms like AWS and Vercel. We choose the best stack for each project's specific needs."
    },
    {
      question: "Can you work with my existing team?",
      answer: "Absolutely! We can integrate with your existing development team, provide code reviews, mentoring, or take on specific features while collaborating closely with your internal developers."
    },
    {
      question: "What's included in the price?",
      answer: "Our prices include everything needed to deliver your project: design, development, testing, deployment, and initial support. No hidden fees or surprise costs. You'll know exactly what you're getting upfront."
    },
    {
      question: "How do we get started?",
      answer: "Simply click 'Get Started' and we'll schedule a discovery call to understand your needs. We'll then provide a detailed proposal with timeline and deliverables. Most projects can start within 24-48 hours."
    },
    {
      question: "Do you sign NDAs?",
      answer: "Yes, we're happy to sign NDAs and take confidentiality seriously. Your ideas and business information are always protected, and we can discuss additional security measures if needed."
    }
  ];

  return (
    <section id="faq" className="py-16 sm:py-20 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
            Frequently asked questions
          </h2>
          <p className="text-base sm:text-lg text-gray-300 px-4">
            Everything you need to know about working with us
          </p>
        </div>

        <AnimatedSection direction="fade" delay={200}>
          <Accordion type="single" collapsible className="space-y-3 sm:space-y-4">
            {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="bg-gray-900/50 border border-gray-800 rounded-lg px-4 sm:px-6 hover:bg-gray-800/50 transition-all duration-300 ease-out"
            >
              <AccordionTrigger className="text-left text-white hover:text-purple-400 py-4 sm:py-6 text-sm sm:text-base">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-300 pb-4 sm:pb-6 leading-relaxed text-sm sm:text-base">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
            ))}
          </Accordion>
        </AnimatedSection>
        </div>
    </section>
  );
}