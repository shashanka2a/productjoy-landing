import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ExternalLink, ArrowRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function CaseStudies() {
  const cases = [
    {
      title: "FinTech Dashboard",
      description: "A comprehensive financial management platform with real-time analytics and automated reporting features.",
      image: "https://images.unsplash.com/photo-1665470909939-959569b20021?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBhcHBsaWNhdGlvbiUyMGRhc2hib2FyZHxlbnwxfHx8fDE3NTkyNDc5NzV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["Web App", "React", "TypeScript"],
      timeline: "1 Week",
      results: "+150% user engagement"
    },
    {
      title: "E-commerce Mobile App",
      description: "Native mobile shopping experience with seamless checkout, push notifications, and personalized recommendations.",
      image: "https://images.unsplash.com/photo-1658953229625-aad99d7603b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzU5MTkyODYyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["Mobile", "React Native", "iOS"],
      timeline: "3 Weeks",
      results: "+200% conversion rate"
    },
    {
      title: "SaaS Platform",
      description: "Modern workspace collaboration tool with team management, project tracking, and integrated communication features.",
      image: "https://images.unsplash.com/photo-1705909773420-8d7af2a343f9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3b3Jrc3BhY2UlMjBkZXNpZ258ZW58MXx8fHwxNzU5MjIwMTE1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["SaaS", "Next.js", "PostgreSQL"],
      timeline: "1 Month",
      results: "10K+ active users"
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
            <Card key={index} className="bg-gray-900/50 border-gray-800 hover:border-purple-500/50 transition-all duration-300 group overflow-hidden">
              <div className="relative overflow-hidden">
                <ImageWithFallback
                  src={caseStudy.image}
                  alt={caseStudy.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
                <div className="absolute top-4 right-4">
                  <Button size="sm" variant="secondary" className="bg-white/10 backdrop-blur-sm hover:bg-white/20">
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
                
                <Button variant="ghost" className="w-full mt-4 text-purple-400 hover:text-white hover:bg-purple-500/20 group">
                  View Case Study
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}