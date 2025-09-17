import { AnimatedSection } from "../../../../components/ui/animated-section";

const features = [
  {
    title: "Referral Rewards",
    description: "Invite friends, earn credits + 15% discount for them.",
  },
  {
    title: "UGC Perks",
    description: "Share your experience to win free tickets and features.",
  },
];

export const CallToActionSection = (): JSX.Element => {
  return (
    <section
      id="early-access-section"
      className="flex items-stretch w-full min-h-[70vh] max-lg:flex-col max-lg:min-h-0"
    >
      <div className="flex-1 w-1/2 max-lg:w-full bg-white py-16 max-lg:py-8 px-4 sm:px-6 lg:px-8 xl:px-12 flex items-center justify-center">
        <div className="flex flex-col items-start gap-8 w-full max-w-[600px]">
          <AnimatedSection animation="fade-up" delay={100}>
            <div className="flex flex-col items-start gap-[9px] w-full">
              <div className="flex flex-col items-start gap-4 w-full">
                <h2 className="font-[number:var(--headings-2-font-weight)] text-[#544aff] text-[length:var(--headings-2-font-size)] leading-[var(--headings-2-line-height)] font-headings-2 tracking-[var(--headings-2-letter-spacing)] [font-style:var(--headings-2-font-style)] text-2xl sm:text-3xl lg:text-[48px]">
                  Early Access
                </h2>

                <p className="w-full font-body-1 font-[number:var(--body-1-font-weight)] text-[#2b3674] text-[length:var(--body-1-font-size)] tracking-[var(--body-1-letter-spacing)] leading-[var(--body-1-line-height)] [font-style:var(--body-1-font-style)] max-md:text-sm">
                  Split layout or horizontal cards:
                </p>
              </div>
            </div>
          </AnimatedSection>

          {features.map((feature, index) => (
            <AnimatedSection
              key={index}
              animation="fade-up"
              delay={300 + index * 200}
              className="flex flex-col items-start gap-[9px] w-full p-4 hover:bg-gray-50/50 rounded-lg transition-colors duration-300"
            >
              <h3 className="w-full font-headings-4 font-[number:var(--headings-4-font-weight)] text-[#9696ff] text-[length:var(--headings-4-font-size)] tracking-[var(--headings-4-letter-spacing)] leading-[var(--headings-4-line-height)] [font-style:var(--headings-4-font-style)] max-md:text-lg">
                {feature.title}
              </h3>

              <p className="font-[number:var(--body-1-font-weight)] text-[length:var(--body-1-font-size)] leading-[var(--body-1-line-height)] w-full font-body-1 text-[#2b3674] tracking-[var(--body-1-letter-spacing)] [font-style:var(--body-1-font-style)] max-md:text-sm">
                {feature.description}
              </p>
            </AnimatedSection>
          ))}
        </div>
      </div>

      <div className="flex-1 w-1/2 max-lg:w-full bg-stone-50 py-16 max-lg:py-8 px-4 sm:px-6 lg:px-8 xl:px-12 flex items-center justify-center">
        <AnimatedSection
          animation="slide-left"
          delay={200}
          className="w-full max-w-[400px]"
        >
          <div className="relative w-full h-[500px] max-lg:h-[400px] max-md:h-[320px] flex items-center justify-center">
            {/* Phone Frame */}
            <div className="relative w-[200px] h-[400px] max-lg:w-[200px] max-lg:h-[360px] max-md:w-[160px] max-md:h-[320px]">
              <img
                className="w-full h-full object-contain animate-float"
                alt="iPhone frame"
                src="/frame.svg"
              />
              {/* Lock graphic positioned over the phone */}
              <div className="absolute top-[7rem] right-[-0.5rem] w-[225px] h-[200px] flex items-center justify-center">
                <img
                  className="w-full h-full object-contain animate-float"
                  alt="Early access lock"
                  src="/lock.svg"
                  style={{
                    animationDelay: "0.6s",
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
