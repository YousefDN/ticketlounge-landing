import { AnimatedSection } from "../../../../components/ui/animated-section";

const steps = [
  {
    title: "Tell Us What You Want",
    description: "Take me to the best Drake concert seats under $300.",
  },
  {
    title: "Get Curated Options",
    description: "AI shows seats, prices, perks.",
  },
  {
    title: "Enjoy the Experience",
    description: "From tickets to travel.",
  },
];

export const EarlyAccessSection = (): JSX.Element => {
  return (
    <section
      id="how-section"
      className="flex items-stretch w-full min-h-[70vh] max-lg:flex-col max-lg:min-h-0"
    >
      <div className="flex-1 w-1/2 max-lg:w-full bg-stone-50 py-16 max-lg:py-8 px-4 sm:px-6 lg:px-8 xl:px-12 flex items-center justify-center">
        <AnimatedSection
          animation="slide-right"
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
              <div className="absolute top-[20%] left-[5.5rem] transform -translate-x-1/2 w-[200px] h-[275px] flex items-center justify-center">
                <img
                  className="w-full h-full object-contain animate-float"
                  alt="How it works"
                  src="/magic.svg"
                  style={{ animationDelay: "0.8s" }}
                />
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>

      <div className="flex-1 w-1/2 max-lg:w-full bg-white py-16 max-lg:py-8 px-4 sm:px-6 lg:px-8 xl:px-12 flex items-center justify-center">
        <div className="flex flex-col items-start gap-8 w-full max-w-[600px]">
          <AnimatedSection animation="fade-up" delay={100}>
            <header className="flex flex-col items-start gap-[9px] w-full">
              <div className="flex flex-col items-start gap-4 w-full">
                <h2 className="font-[number:var(--headings-2-font-weight)] text-[#544aff] text-[length:var(--headings-2-font-size)] leading-[var(--headings-2-line-height)] font-headings-2 tracking-[var(--headings-2-letter-spacing)] [font-style:var(--headings-2-font-style)] max-md:text-3xl">
                  How It Works
                </h2>

                <p className="font-[number:var(--body-1-font-weight)] text-[#2b3674] text-[length:var(--body-1-font-size)] leading-[var(--body-1-line-height)] font-body-1 tracking-[var(--body-1-letter-spacing)] [font-style:var(--body-1-font-style)] max-md:text-sm">
                  Use a 3-step visual timeline or vertical scroll animation:
                </p>
              </div>
            </header>
          </AnimatedSection>

          {steps.map((step, index) => (
            <AnimatedSection
              key={index}
              animation="fade-up"
              delay={300 + index * 200}
              className="flex flex-col items-start gap-[9px] w-full p-4 hover:bg-gray-50/50 rounded-lg transition-colors duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center w-8 h-8 bg-[#9696ff] text-white rounded-full font-semibold text-sm flex-shrink-0 mt-1">
                  {index + 1}
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="font-headings-4 font-[number:var(--headings-4-font-weight)] text-[#9696ff] text-[length:var(--headings-4-font-size)] tracking-[var(--headings-4-letter-spacing)] leading-[var(--headings-4-line-height)] [font-style:var(--headings-4-font-style)] max-md:text-lg">
                    {step.title}
                  </h3>

                  <p className="font-[number:var(--body-1-font-weight)] text-[length:var(--body-1-font-size)] leading-[var(--body-1-line-height)] font-body-1 text-[#2b3674] tracking-[var(--body-1-letter-spacing)] [font-style:var(--body-1-font-style)] max-md:text-sm">
                    {step.description}
                  </p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};
