import ActionCallSection from "./components/ActionCallSection";
import FooterSection from "./components/FooterSection";
import HeroSection from "./components/HeroSection";
import InnovationSection from "./components/InnovationSection";
import IntroSection from "./components/IntroSection";
import TestimonialsSection from "./components/TestimonialsSection";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center">
      <HeroSection/>
      <IntroSection/>
      <InnovationSection/>
      <TestimonialsSection/>
      <ActionCallSection/>
      <FooterSection />
    </div>
  );
}
