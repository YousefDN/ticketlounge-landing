import { useEffect, useState } from "react";

import { AnimatedSection } from "../../../../components/ui/animated-section";
import { Button } from "../../../../components/ui/button";
import { useScrollTo } from "../../../../hooks/useScrollTo";

const navigationItems = [
  { label: "Why", sectionId: "why-section" },
  { label: "What", sectionId: "what-section" },
  { label: "How", sectionId: "how-section" },
  { label: "Early Access", sectionId: "early-access-section" },
];

export const HeroSection = (): JSX.Element => {
  const { scrollToSection } = useScrollTo();
  const [isOverWhiteSection, setIsOverWhiteSection] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const viewportHeight = window.innerHeight;

      // Only hero section and event highlights section have dark backgrounds
      // Everything else (features, testimonials, early access, CTA) has light backgrounds
      const darkSectionRanges = [
        { start: 0, end: viewportHeight * 0.7 }, // Hero section
        // Add EventHighlightsSection range when it exists
        // { start: viewportHeight * X, end: viewportHeight * Y }, // EventHighlightsSection
      ];

      const isOverDarkBackground = darkSectionRanges.some(
        (range) => scrollY >= range.start && scrollY <= range.end
      );

      setIsOverWhiteSection(!isOverDarkBackground); // Inverted logic - true means we need dark nav
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative w-full min-h-screen max-lg:min-h-[100svh] bg-[#544aff] overflow-hidden">
      <div className="relative h-screen max-lg:h-[100svh] bg-[url(/hero-background.png)] w-full bg-cover bg-center bg-no-repeat">
        {/* Purple overlay mask */}
        <div className="absolute inset-0 bg-[#544aff] bg-opacity-60 z-10"></div>

        <header className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-4xl px-4">
          <nav
            className={`flex items-center justify-between gap-4 p-4 rounded-[20px] backdrop-blur-[20px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(20px)_brightness(100%)] shadow-blur-style border transition-all duration-300 ${
              isOverWhiteSection
                ? "bg-black/20 border-black/20 shadow-lg"
                : "bg-[#ffffff14] border-white/10"
            }`}
          >
            <img
              className="w-[47.28px] flex-shrink-0"
              alt="Ticket lounge logo"
              src="/ticket-lounge-logo.svg"
            />

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-3">
              {navigationItems.map((item, index) => (
                <button
                  key={index}
                  onClick={() => scrollToSection(item.sectionId)}
                  className={`flex items-center gap-2.5 px-4 py-2 rounded-lg hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer group ${
                    isOverWhiteSection
                      ? "hover:bg-white/25 hover:shadow-md"
                      : "hover:bg-white/10"
                  }`}
                >
                  <div
                    className={`font-headings-6 font-[number:var(--headings-6-font-weight)] text-[length:var(--headings-6-font-size)] tracking-[var(--headings-6-letter-spacing)] leading-[var(--headings-6-line-height)] whitespace-nowrap [font-style:var(--headings-6-font-style)] group-hover:animate-pulse transition-colors duration-200 ${
                      isOverWhiteSection
                        ? "text-white font-semibold drop-shadow-sm"
                        : "text-white"
                    }`}
                  >
                    {item.label}
                  </div>
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden flex flex-col gap-1 p-2 relative"
            >
              <div
                className={`w-5 h-0.5 bg-white rounded-full transition-transform duration-200 ${
                  isMobileMenuOpen ? "rotate-45 translate-y-1.5" : ""
                }`}
              ></div>
              <div
                className={`w-5 h-0.5 bg-white rounded-full transition-opacity duration-200 ${
                  isMobileMenuOpen ? "opacity-0" : ""
                }`}
              ></div>
              <div
                className={`w-5 h-0.5 bg-white rounded-full transition-transform duration-200 ${
                  isMobileMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
                }`}
              ></div>
            </button>
          </nav>

          {/* Mobile Menu Dropdown */}
          {isMobileMenuOpen && (
            <div
              className={`md:hidden mt-2 p-4 rounded-[20px] backdrop-blur-[20px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(20px)_brightness(100%)] shadow-blur-style border transition-all duration-300 ${
                isOverWhiteSection
                  ? "bg-black/20 border-black/20 shadow-lg"
                  : "bg-[#ffffff14] border-white/10"
              }`}
            >
              <div className="flex flex-col gap-2">
                {navigationItems.map((item, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      scrollToSection(item.sectionId);
                      setIsMobileMenuOpen(false);
                    }}
                    className={`flex items-center gap-2.5 px-4 py-3 rounded-lg hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer group w-full text-left ${
                      isOverWhiteSection
                        ? "hover:bg-white/25 hover:shadow-md"
                        : "hover:bg-white/10"
                    }`}
                  >
                    <div
                      className={`font-headings-6 font-[number:var(--headings-6-font-weight)] text-[length:var(--headings-6-font-size)] tracking-[var(--headings-6-letter-spacing)] leading-[var(--headings-6-line-height)] [font-style:var(--headings-6-font-style)] group-hover:animate-pulse transition-colors duration-200 ${
                        isOverWhiteSection
                          ? "text-white font-semibold drop-shadow-sm"
                          : "text-white"
                      }`}
                    >
                      {item.label}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}
        </header>

        <div className="flex items-center justify-center w-full h-full absolute inset-0 z-20 px-4 sm:px-6 lg:px-8 pt-20 max-lg:pt-24 pb-8">
          <div className="flex items-center justify-between w-full max-w-7xl gap-8 max-lg:flex-col max-lg:text-center max-lg:gap-8 max-lg:h-full max-lg:justify-center">
            {/* Content Section */}
            <div className="flex flex-col items-start gap-6 flex-1 max-w-2xl max-lg:items-center max-lg:gap-4 max-lg:flex-shrink-0">
              <AnimatedSection animation="fade-up" delay={300}>
                <h1 className="font-headings-1 font-[number:var(--headings-1-font-weight)] text-white text-[length:var(--headings-1-font-size)] tracking-[var(--headings-1-letter-spacing)] leading-[var(--headings-1-line-height)] [font-style:var(--headings-1-font-style)] text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[60px] text-center lg:text-left max-lg:leading-tight">
                  The Future of Live Events <br className="max-sm:hidden" />
                  <span className="sm:hidden">Curated Just for You.</span>
                  <span className="max-sm:hidden">Curated Just for You.</span>
                </h1>
              </AnimatedSection>

              <AnimatedSection animation="fade-up" delay={600}>
                <p className="font-headings-6 font-[number:var(--headings-6-font-weight)] text-[#f4f7fe] text-[length:var(--headings-6-font-size)] tracking-[var(--headings-6-letter-spacing)] leading-[var(--headings-6-line-height)] [font-style:var(--headings-6-font-style)] text-sm sm:text-base lg:text-[16px] text-center lg:text-left max-lg:text-sm max-lg:leading-relaxed">
                  Endless scrolling is over. Ticket Lounge&apos;s AI concierge
                  finds you the perfect seat, plans your night, and makes event
                  discovery effortless.
                </p>
              </AnimatedSection>

              <AnimatedSection animation="bounce-in" delay={900}>
                <Button className="h-auto flex items-center justify-center gap-2 px-8 py-4 bg-[#00eb83] rounded-[24px] shadow-[0_4px_14px_0_rgba(0,235,131,0.39)] hover:bg-[#00d474] hover:shadow-[0_6px_20px_0_rgba(0,235,131,0.5)] transform hover:scale-105 active:scale-95 transition-all duration-300 ease-out animate-pulse-glow hover:animate-none group">
                  <div className="font-button-medium font-semibold text-[#544aff] text-[length:var(--button-medium-font-size)] tracking-[var(--button-medium-letter-spacing)] leading-[var(--button-medium-line-height)] [font-style:var(--button-medium-font-style)] group-hover:animate-wiggle">
                    Join the Waitlist
                  </div>
                </Button>
              </AnimatedSection>
            </div>

            {/* Illustration Section */}
            <AnimatedSection
              animation="slide-left"
              delay={1200}
              className="flex-shrink-0 max-lg:order-first max-lg:flex-shrink"
            >
              <div className="w-[300px] xl:w-[437px] h-auto max-lg:w-[250px] max-md:w-[200px] max-sm:w-[180px]">
                <img
                  className="w-full h-auto object-contain max-h-[70vh] max-lg:max-h-[40vh] max-md:max-h-[35vh] max-sm:max-h-[30vh] animate-float"
                  alt="Iphone pro x"
                  src="/iphone-11-pro-x.png"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
};
