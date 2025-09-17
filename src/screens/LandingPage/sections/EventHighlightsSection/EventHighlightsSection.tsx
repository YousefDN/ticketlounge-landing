import { AnimatedSection } from '../../../../components/ui/animated-section';

export const EventHighlightsSection = (): JSX.Element => {
  return (
    <section className="relative w-full bg-[#544aff] min-h-[600px] py-20">
      <div className="absolute inset-0 w-full h-full bg-[url(/background-image.png)] bg-cover bg-center bg-no-repeat"></div>
      {/* Purple overlay mask */}
      <div className="absolute inset-0 bg-[#544aff] bg-opacity-70 z-10"></div>

      <div className="container mx-auto px-4 relative z-20 h-full">
        <div className="flex flex-col items-center justify-center gap-16 max-w-5xl mx-auto min-h-[560px]">
          <AnimatedSection animation="fade-up" delay={200}>
            <div className="flex flex-col items-start gap-3 w-full">
              <h2 className="w-full font-headings-2 font-[number:var(--headings-2-font-weight)] text-[#fbfbfb] text-[length:var(--headings-2-font-size)] tracking-[var(--headings-2-letter-spacing)] leading-[var(--headings-2-line-height)] [font-style:var(--headings-2-font-style)] max-md:text-3xl text-center">
                Events aren&apos;t just about tickets. They&apos;re about
                experiences.
              </h2>

              <div className="flex flex-col items-center justify-center gap-2 w-full">
                <div className="flex flex-col items-start gap-4 w-full">
                  <p className="w-full font-body-1 font-[number:var(--body-1-font-weight)] text-[length:var(--body-1-font-size)] tracking-[var(--body-1-letter-spacing)] leading-[var(--body-1-line-height)] [font-style:var(--body-1-font-style)] text-center max-md:text-sm">
                    <span className="font-[number:var(--body-1-font-weight)] text-[#00ffbe] leading-[var(--body-1-line-height)] font-body-1 [font-style:var(--body-1-font-style)] tracking-[var(--body-1-letter-spacing)] text-[length:var(--body-1-font-size)]">
                      Ticket Lounge
                    </span>
                    <span className="text-[#fbfbfb] leading-[var(--body-1-line-height)] font-body-1 [font-style:var(--body-1-font-style)] font-[number:var(--body-1-font-weight)] tracking-[var(--body-1-letter-spacing)] text-[length:var(--body-1-font-size)]">
                      {" "}
                      makes sure yours starts the moment you say I&apos;m in.
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="fade-up" delay={600}>
            <img
              className="w-full max-w-full max-lg:max-w-md max-lg:mx-auto"
              alt="Logo container"
              src="/logo-container.svg"
            />
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};
