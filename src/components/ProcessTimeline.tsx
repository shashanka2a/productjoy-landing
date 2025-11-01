import { Card, CardContent } from "./ui/card";
import { FileText, Zap, Rocket } from "lucide-react";

export function ProcessTimeline() {
  const steps = [
    {
      icon: <FileText className="h-8 w-8" />,
      title: "Brief",
      description: "Align on goals, audience, and brand direction to kickstart your vision.",
      duration: "1 day"
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Build",
      description: "Design, develop, and launch your product or campaign with startup speed.",
      duration: "1–2 weeks"
    },
    {
      icon: <Rocket className="h-8 w-8" />,
      title: "Boost",
      description: "Market, optimize, and scale your impact with data-backed strategies.",
      duration: "Ongoing"
    }
  ];

  return (
    <section id="process" className="py-16 sm:py-20 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
            How we bring ideas to life
          </h2>
          <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto px-4">
            Brief → Build → Boost
          </p>
        </div>

        <div className="relative">
          {/* Timeline line - hidden on mobile, visible on desktop */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-purple-500 to-pink-500"></div>
          
          <div className="space-y-8 sm:space-y-12">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className={`flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className="w-full md:w-5/12">
                    <Card className="bg-gray-900/50 border-gray-800 hover:bg-gray-800/50 transition-colors">
                      <CardContent className="p-6 sm:p-8">
                        <div className="flex items-center mb-4">
                          <div className="p-3 bg-purple-500/20 rounded-lg text-purple-400 mr-4">
                            {step.icon}
                          </div>
                          <div>
                            <h3 className="text-lg sm:text-xl font-semibold text-white">{step.title}</h3>
                            <span className="text-xs sm:text-sm text-purple-400">{step.duration}</span>
                          </div>
                        </div>
                        <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                          {step.description}
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                  
                  {/* Timeline dot - hidden on mobile, visible on desktop */}
                  <div className="hidden md:flex w-2/12 justify-center">
                    <div className="w-4 h-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full border-4 border-background"></div>
                  </div>
                  
                  <div className="hidden md:block w-5/12"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}