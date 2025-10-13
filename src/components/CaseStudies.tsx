"use client";

import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ExternalLink, ArrowRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { AnimatedSection } from "./AnimatedSection";

export function CaseStudies() {
  const cases = [
    {
      title: "evolvii",
      description: "Turn climate anxiety into unstoppable action. Connect. Create. Evolve. A new funnel: doom → action → change.",
      image: "/e.png",
      tags: ["Climate Action", "Community", "Activism"],
      timeline: "2 Weeks",
      results: "100% action, 100% style",
      link: "https://www.evolvii.world/"
    },
    {
      title: "PayFlow",
      description: "Seamless global finance with zero hidden fees, instant settlements, and enterprise‑grade security.",
      image: "/p.png",
      tags: ["Fintech", "Payments", "Global"],
      timeline: "3 Weeks",
      results: "190+ countries",
      link: "https://www.payflow.cash/"
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
    <section id="work" className="py-16 sm:py-20 px-4 sm:px-6 bg-gray-950/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
            Recent work
          </h2>
          <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto px-4">
            Real projects, real results. See how we&apos;ve helped businesses transform their ideas into successful products.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          {cases.map((caseStudy, index) => (
            <AnimatedSection key={index} delay={index * 200} direction="up">
              <Card className="bg-gray-900/50 border-gray-800 hover:border-purple-500/50 transition-all duration-300 ease-out group overflow-hidden">
              <div className="relative overflow-hidden">
                <ImageWithFallback
                  src={caseStudy.image}
                  alt={caseStudy.title}
                  width={400}
                  height={192}
                  className="w-full h-40 sm:h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
                <div className="absolute top-3 sm:top-4 right-3 sm:right-4">
                  <Button 
                    size="sm" 
                    variant="secondary" 
                    className="bg-white/10 backdrop-blur-sm hover:bg-white/20 h-8 w-8 p-0"
                    onClick={() => window.open(caseStudy.link, '_blank')}
                  >
                    <ExternalLink className="h-3 w-3 sm:h-4 sm:w-4" />
                  </Button>
                </div>
              </div>
              
              <CardContent className="p-4 sm:p-6">
                <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3">
                  {caseStudy.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="secondary" className="bg-purple-500/20 text-purple-300 border-purple-500/30 text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
                
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-3">
                  {caseStudy.title}
                </h3>
                
                <p className="text-sm sm:text-base text-gray-300 mb-4 leading-relaxed">
                  {caseStudy.description}
                </p>
                
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center text-xs sm:text-sm gap-2 sm:gap-0">
                  <span className="text-gray-400">Timeline: {caseStudy.timeline}</span>
                  <span className="text-green-400 font-medium">{caseStudy.results}</span>
                </div>
                
                <Button 
                  variant="ghost" 
                  className="w-full mt-4 text-purple-400 hover:text-white hover:bg-purple-500/20 group text-sm sm:text-base"
                  onClick={() => window.open(caseStudy.link, '_blank')}
                >
                  View Live Project
                  <ArrowRight className="ml-2 h-3 w-3 sm:h-4 sm:w-4 group-hover:translate-x-1 transition-transform" />
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