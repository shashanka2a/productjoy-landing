import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import { DeliveryPlans } from "./components/DeliveryPlans";
import { ProcessTimeline } from "./components/ProcessTimeline";
import { CaseStudies } from "./components/CaseStudies";
import { FAQ } from "./components/FAQ";
import { FinalCTA } from "./components/FinalCTA";

export default function App() {
  return (
    <div className="min-h-screen bg-black dark">
      <Navigation />
      <Hero />
      <Services />
      <DeliveryPlans />
      <ProcessTimeline />
      <CaseStudies />
      <FAQ />
      <FinalCTA />
    </div>
  );
}