import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";

export function FAQ() {
  const faqs = [
    {
      question: "How do you deliver so quickly?",
      answer: "We have a streamlined process with dedicated teams, pre-built components, and efficient project management. Our experience allows us to avoid common pitfalls and deliver faster without compromising quality."
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
    <section id="faq" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Frequently asked questions
          </h2>
          <p className="text-lg text-gray-300">
            Everything you need to know about working with us
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="bg-gray-900/50 border border-gray-800 rounded-lg px-6 hover:bg-gray-800/50 transition-colors"
            >
              <AccordionTrigger className="text-left text-white hover:text-purple-400 py-6">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-300 pb-6 leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}