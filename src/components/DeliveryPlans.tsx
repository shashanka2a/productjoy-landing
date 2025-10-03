import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Check, Zap, Clock, Calendar } from "lucide-react";
import { AnimatedSection } from "./AnimatedSection";

export function DeliveryPlans() {
  const plans = [
    {
      name: "Sprint",
      duration: "2 Days",
      icon: <Zap className="h-6 w-6" />,
      description: "Perfect for quick wins and focused features",
      price: "$3,500",
      features: [
        "Single feature development",
        "Bug fixes and improvements", 
        "Code review and testing",
        "Same-day communication",
        "48-hour delivery"
      ],
      popular: false
    },
    {
      name: "Launch",
      duration: "1 Week", 
      icon: <Clock className="h-6 w-6" />,
      description: "Ideal for complete features and small products",
      price: "$12,500",
      features: [
        "Full feature development",
        "UI/UX design included",
        "API integration",
        "7-day delivery guarantee",
        "2 rounds of revisions"
      ],
      popular: true
    },
    {
      name: "Scale",
      duration: "1 Month",
      icon: <Calendar className="h-6 w-6" />,
      description: "For comprehensive products and solutions", 
      price: "$35,000",
      features: [
        "Complete product development",
        "Advanced integrations",
        "Custom design system",
        "DevOps and deployment",
        "Unlimited revisions",
      ],
      popular: false
    }
  ];

  return (
    <section id="plans" className="py-16 sm:py-20 px-4 sm:px-6 bg-gray-950/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
            Choose your timeline
          </h2>
          <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto px-4">
            Premium development at startup speed. Choose your timeline, we&apos;ll deliver excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          {plans.map((plan, index) => (
            <AnimatedSection key={index} delay={index * 150} direction="up">
              <Card 
                className={`relative bg-gray-900/50 border-gray-800 hover:border-purple-500/50 transition-all duration-300 ease-out ${
                  plan.popular ? 'ring-2 ring-purple-500/20 lg:scale-105' : ''
                }`}
              >
              {plan.popular && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs sm:text-sm">
                  Most Popular
                </Badge>
              )}
              
              <CardHeader className="text-center pb-6 sm:pb-8 px-4 sm:px-6">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-purple-500/20 rounded-lg text-purple-400">
                    {plan.icon}
                  </div>
                </div>
                <CardTitle className="text-xl sm:text-2xl text-white mb-2">{plan.name}</CardTitle>
                <div className="text-2xl sm:text-3xl font-bold text-white mb-2">{plan.duration}</div>
                <p className="text-sm sm:text-base text-gray-400">{plan.description}</p>
                <div className="text-3xl sm:text-4xl font-bold text-white mt-4">{plan.price}</div>
              </CardHeader>
              
              <CardContent className="pt-0 px-4 sm:px-6">
                <ul className="space-y-3 mb-6 sm:mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <Check className="h-4 w-4 sm:h-5 sm:w-5 text-green-400 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-sm sm:text-base text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <a 
                  href="https://pay.productjoy.co" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={`w-full transition-all duration-300 ease-out ${
                    plan.popular 
                      ? 'bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600' 
                      : 'bg-gray-800 hover:bg-gray-700'
                  } text-white inline-flex items-center justify-center h-10 sm:h-12 px-4 rounded-md text-sm sm:text-base`}
                >
                  Get Started
                </a>
              </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}