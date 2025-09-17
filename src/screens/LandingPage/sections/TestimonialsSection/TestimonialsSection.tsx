import { AnimatedSection } from "../../../../components/ui/animated-section";

export const TestimonialsSection = (): JSX.Element => {
  const features = [
    "50M+ tickets across sports, concerts, comedy, and theatre.",
    "Premium inventory for major events.",
    "Integrated travel, rides, and more.",
    "Skip the line food & merch pre-orders.",
  ];

  return (
    <section
      id="what-section"
      className="flex items-stretch w-full min-h-[70vh] max-lg:flex-col max-lg:min-h-0"
    >
      <div className="flex-1 w-1/2 max-lg:w-full bg-white py-16 max-lg:py-8 px-4 sm:px-6 lg:px-8 xl:px-12 flex items-center justify-center">
        <div className="flex flex-col items-start gap-8 w-full max-w-[600px]">
          <AnimatedSection animation="fade-up" delay={100}>
            <h2 className="font-[number:var(--headings-2-font-weight)] text-[#544aff] text-[length:var(--headings-2-font-size)] leading-[var(--headings-2-line-height)] font-headings-2 tracking-[var(--headings-2-letter-spacing)] [font-style:var(--headings-2-font-style)] max-md:text-3xl">
              What You'll Get
            </h2>
          </AnimatedSection>

          <div className="flex flex-col items-start gap-6 w-full">
            {features.map((feature, index) => (
              <AnimatedSection
                key={index}
                animation="fade-up"
                delay={300 + index * 150}
                className="flex flex-col items-start gap-2 w-full p-4 hover:bg-gray-50/50 rounded-lg transition-colors duration-300"
              >
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#544aff] rounded-full mt-3 flex-shrink-0"></div>
                  <p className="font-[number:var(--headings-4-font-weight)] text-[length:var(--headings-4-font-size)] leading-[var(--headings-4-line-height)] font-headings-4 text-[#2b3674] tracking-[var(--headings-4-letter-spacing)] [font-style:var(--headings-4-font-style)] max-md:text-base">
                    {feature}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>

      <div className="flex-1 w-1/2 max-lg:w-full bg-stone-50 py-16 max-lg:py-8 px-4 sm:px-6 lg:px-8 xl:px-12 flex items-center justify-center max-lg:order-first">
        <AnimatedSection
          animation="slide-left"
          delay={200}
          className="w-full max-w-[400px]"
        >
          <div className="relative w-full h-[500px] max-lg:h-[400px] max-md:h-[320px] flex items-center justify-center">
            {/* Phone Frame */}
            <div className="relative w-[200px] h-[400px] max-lg:w-[180px] max-lg:h-[360px] max-md:w-[160px] max-md:h-[320px]">
              <img
                className="w-full h-full object-contain animate-float"
                alt="iPhone frame"
                src="/frame.svg"
              />
              <div className="absolute top-[8rem] -left-8 w-202 h-117 flex items-center justify-center">
                <img
                  className="w-full h-full object-contain animate-float"
                  alt="What you'll get"
                  src="/explore.svg"
                  style={{
                    animationDelay: "0.7s",
                    transform: "rotate(-15deg)",
                  }}
                />
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};
