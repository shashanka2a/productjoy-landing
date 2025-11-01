import { Card, CardContent } from "./ui/card";
import { Palette, Code, CheckCircle, Rocket } from "lucide-react";
import { AnimatedSection } from "./AnimatedSection";

export function Services() {
  const services = [
    {
      icon: <Palette className="h-8 w-8" />,
      title: "Brand & UI Design",
      description: "Build timeless brands and delightful product interfaces that convert users into fans."
    },
    {
      icon: <Code className="h-8 w-8" />,
      title: "Full-Stack Development",
      description: "From web apps to mobile, our code is clean, scalable, and lightning-fast."
    },
    {
      icon: <Rocket className="h-8 w-8" />,
      title: "Marketing & Growth",
      description: "Scale with content, ads, and community — all tailored to your audience."
    },
    {
      icon: <CheckCircle className="h-8 w-8" />,
      title: "Launch & Optimization",
      description: "Continuous iteration, analytics, and creative strategy to help you grow."
    }
  ];

  return (
    <section id="services" className="py-16 sm:py-20 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
            Everything you need to launch
          </h2>
          <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto px-4">
            A full-stack creative studio for founders who move fast.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <AnimatedSection key={index} delay={index * 100} direction="up">
              <Card className="bg-gray-900/50 border-gray-800 hover:bg-gray-800/50 transition-all duration-300 ease-out group">
                <CardContent className="p-6 sm:p-8">
                  <div className="text-purple-400 mb-4 group-hover:scale-110 transition-transform">
                    {service.icon}
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-white mb-3">
                    {service.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}