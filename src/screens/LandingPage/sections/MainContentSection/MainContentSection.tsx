import { AnimatedSection } from "../../../../components/ui/animated-section";
import { Button } from "../../../../components/ui/button";

export const MainContentSection = (): JSX.Element => {
  return (
    <section className="flex flex-col items-center justify-center w-full relative py-16 max-lg:py-8 px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-center relative w-full">
        <div className="flex items-center gap-16 p-2.5 relative w-full max-w-6xl max-lg:flex-col max-lg:gap-12">
          <div className="flex flex-col items-start gap-6 relative flex-1">
            <AnimatedSection animation="fade-up" delay={200}>
              <h1 className="relative font-headings-1 font-[number:var(--headings-1-font-weight)] text-[#544aff] text-[length:var(--headings-1-font-size)] tracking-[var(--headings-1-letter-spacing)] leading-[var(--headings-1-line-height)] [font-style:var(--headings-1-font-style)] text-3xl sm:text-4xl lg:text-5xl xl:text-[60px]">
                Ready for your best night out?
              </h1>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={400}>
              <p className="relative font-headings-6 font-[number:var(--headings-6-font-weight)] text-[#2b3674] text-[length:var(--headings-6-font-size)] tracking-[var(--headings-6-letter-spacing)] leading-[var(--headings-6-line-height)] [font-style:var(--headings-6-font-style)] max-md:text-sm">
                Sign up for exclusive early access.
              </p>
            </AnimatedSection>

            <AnimatedSection animation="scale-in" delay={600}>
              <Button className="h-auto bg-[#00eb83] hover:bg-[#00d474] hover:shadow-[0_6px_20px_0_rgba(0,235,131,0.5)] transform hover:scale-105 active:scale-95 transition-all duration-300 ease-out text-[#544aff] rounded-[24px] shadow-[0_4px_14px_0_rgba(0,235,131,0.39)] px-8 py-4 font-button-medium text-[length:var(--button-medium-font-size)] tracking-[var(--button-medium-letter-spacing)] leading-[var(--button-medium-line-height)] [font-style:var(--button-medium-font-style)] font-semibold group">
                <span className="group-hover:animate-wiggle">
                  Join the Waitlist
                </span>
              </Button>
            </AnimatedSection>
          </div>

          <AnimatedSection
            animation="slide-left"
            delay={300}
            className="flex-shrink-0"
          >
            <img
              className="w-full max-w-[305px] h-auto object-contain mx-auto"
              alt="Illustration"
              src="/illustration-container.png"
            />
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};
