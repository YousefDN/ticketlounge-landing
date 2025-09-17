import {
  CallToActionSection,
} from './sections/CallToActionSection/CallToActionSection';
import {
  EarlyAccessSection,
} from './sections/EarlyAccessSection/EarlyAccessSection';
import {
  EventHighlightsSection,
} from './sections/EventHighlightsSection/EventHighlightsSection';
import { FeaturesSection } from './sections/FeaturesSection/FeaturesSection';
import { FooterSection } from './sections/FooterSection/FooterSection';
import { HeroSection } from './sections/HeroSection/HeroSection';
import {
  MainContentSection,
} from './sections/MainContentSection/MainContentSection';
import {
  TestimonialsSection,
} from './sections/TestimonialsSection/TestimonialsSection';

export const LandingPage = (): JSX.Element => {
  return (
    <main className="flex flex-col w-full relative bg-white">
      <HeroSection />
      <FeaturesSection />
      <TestimonialsSection />
      <EarlyAccessSection />
      <CallToActionSection />
      <EventHighlightsSection />
      <MainContentSection />
      <FooterSection />
    </main>
  );
};
