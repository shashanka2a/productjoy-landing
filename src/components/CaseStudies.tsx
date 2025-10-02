import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ExternalLink, ArrowRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { AnimatedSection } from "./AnimatedSection";

export function CaseStudies() {
  const cases = [
    {
      title: "MenuPRO",
      description: "Digital Menu Platform for Restaurants. Scan, Order, and Serve — no tablets, no delays. Customers order directly from their table. No waiters needed. Add allergies, special instructions, and customize orders exactly how they want them.",
      image: "/m.png",
      tags: ["Restaurant Tech", "QR Code", "Mobile"],
      timeline: "2 Weeks",
      results: "+300% order efficiency",
      link: "https://www.menupro.biz/"
    },
    {
      title: "Aura Art",
      description: "AI meets creativity. The ultimate creative platform combining stunning templates, powerful editing tools, and intelligent AI assistance. Create professional content in seconds, not hours.",
      image: "/p.png",
      tags: ["AI", "Design", "Templates"],
      timeline: "3 Weeks",
      results: "+250% creation speed",
      link: "https://www.tryaura.art/"
    },
    {
      title: "InOrbyt",
      description: "Launch your own creator token and grow with your community. Every creator and fan gets a built-in wallet — no crypto setup needed.",
      image: "/p2.png",
      tags: ["Web3", "Creator Economy", "Tokens"],
      timeline: "1 Month",
      results: "$50M+ volume traded",
      link: "https://inorbyt-landing.vercel.app/"
    }
  ];

  return (
    <section id="work" className="py-20 px-6 bg-gray-950/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Recent work
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Real projects, real results. See how we&apos;ve helped businesses transform their ideas into successful products.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {cases.map((caseStudy, index) => (
            <AnimatedSection key={index} delay={index * 200} direction="up">
              <Card className="bg-gray-900/50 border-gray-800 hover:border-purple-500/50 transition-all duration-300 ease-out group overflow-hidden">
              <div className="relative overflow-hidden">
                <ImageWithFallback
                  src={caseStudy.image}
                  alt={caseStudy.title}
                  width={400}
                  height={192}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
                <div className="absolute top-4 right-4">
                  <Button 
                    size="sm" 
                    variant="secondary" 
                    className="bg-white/10 backdrop-blur-sm hover:bg-white/20"
                    onClick={() => window.open(caseStudy.link, '_blank')}
                  >
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              
              <CardContent className="p-6">
                <div className="flex flex-wrap gap-2 mb-3">
                  {caseStudy.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="secondary" className="bg-purple-500/20 text-purple-300 border-purple-500/30">
                      {tag}
                    </Badge>
                  ))}
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-3">
                  {caseStudy.title}
                </h3>
                
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {caseStudy.description}
                </p>
                
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-400">Timeline: {caseStudy.timeline}</span>
                  <span className="text-green-400 font-medium">{caseStudy.results}</span>
                </div>
                
                <Button 
                  variant="ghost" 
                  className="w-full mt-4 text-purple-400 hover:text-white hover:bg-purple-500/20 group"
                  onClick={() => window.open(caseStudy.link, '_blank')}
                >
                  View Live Project
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}