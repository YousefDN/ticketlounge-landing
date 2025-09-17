import { AnimatedSection } from "../../../../components/ui/animated-section";
import { Card, CardContent } from "../../../../components/ui/card";

export const FeaturesSection = (): JSX.Element => {
  const features = [
    {
      title: "AI-Powered Discovery",
      description:
        "Endless scrolling is over. Ticket Lounge's AI concierge finds you the perfect seat, plans your night, and makes event discovery effortless.",
    },
    {
      title: "Beyond the Ticket",
      description: "We plan your night: rides, food, everything.",
    },
    {
      title: "Smarter Every Time",
      description: "Learns from user behavior to improve suggestions.",
    },
  ];

  const floatingIcons = [
    {
      src: "/search-icon.svg",
      alt: "Search icon",
      containerClasses: "absolute top-14 left-9 w-90 h-74",
      iconClasses: "w-90 h-74 text-[#00ffbe]",
    },
    {
      src: "/map-pin-icon.svg",
      alt: "Map pin icon",
      containerClasses:
        "absolute top-25 left-12 transform -translate-y-1/2 w-90 h-74",
      iconClasses: "w-90 h-74 text-[#544aff]",
    },
    {
      src: "/message-icon.svg",
      alt: "Message icon",
      containerClasses: "absolute top-[7rem] right-10 w-90 h-74",
      iconClasses: "w-90 h-74 text-[#544aff]",
    },
  ];

  return (
    <section
      id="why-section"
      className="flex items-stretch w-full min-h-[70vh] max-lg:flex-col max-lg:min-h-0"
    >
      <div className="flex-1 w-1/2 max-lg:w-full bg-stone-50 py-16 max-lg:py-8 px-4 sm:px-6 lg:px-8 xl:px-12 flex items-center justify-center">
        <div className="relative w-full max-w-[400px] h-[500px] max-lg:h-[400px] max-md:h-[320px] flex items-center justify-center">
          {/* Phone Frame with Robot */}
          <AnimatedSection animation="fade-in" delay={200}>
            <div className="relative w-[200px] h-[400px] max-lg:w-[180px] max-lg:h-[360px] max-md:w-[160px] max-md:h-[320px] mx-auto">
              <img
                className="w-full h-full object-contain animate-float"
                alt="iPhone frame"
                src="/frame.svg"
              />
              {/* Robot graphic inside the phone screen */}
              <div className="absolute top-[15%] left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                <img
                  className="w-full h-auto max-h-full object-contain animate-float"
                  alt="AI Robot"
                  src="/robot.svg"
                  style={{ animationDelay: "0.5s" }}
                />
              </div>
            </div>
          </AnimatedSection>

          {/* Floating Icons around the phone */}
          {floatingIcons.map((icon, index) => (
            <AnimatedSection
              key={index}
              animation="scale-in"
              delay={600 + index * 200}
              className={`${icon.containerClasses} max-lg:hidden`}
            >
              <img className={icon.iconClasses} alt={icon.alt} src={icon.src} />
            </AnimatedSection>
          ))}
        </div>
      </div>

      <div className="flex-1 w-1/2 max-lg:w-full bg-white py-16 max-lg:py-8 px-4 sm:px-6 lg:px-8 xl:px-12 flex items-center justify-center">
        <div className="flex flex-col w-full max-w-[600px] items-start gap-8">
          <AnimatedSection animation="fade-up" delay={100}>
            <h2 className="w-fit mt-[-1.00px] font-[number:var(--headings-2-font-weight)] text-[#544aff] text-[length:var(--headings-2-font-size)] leading-[var(--headings-2-line-height)] whitespace-nowrap font-headings-2 tracking-[var(--headings-2-letter-spacing)] [font-style:var(--headings-2-font-style)] max-md:text-3xl">
              Why Ticket Lounge?
            </h2>
          </AnimatedSection>

          {features.map((feature, index) => (
            <AnimatedSection
              key={index}
              animation="fade-up"
              delay={300 + index * 200}
            >
              <Card className="flex flex-col items-start gap-[9px] w-full border-none shadow-none bg-transparent hover:bg-gray-50/50 p-4 rounded-lg transition-colors duration-300">
                <CardContent className="p-0 w-full">
                  <h3 className="mt-[-1.00px] font-headings-4 font-[number:var(--headings-4-font-weight)] text-[#9696ff] text-[length:var(--headings-4-font-size)] tracking-[var(--headings-4-letter-spacing)] leading-[var(--headings-4-line-height)] [font-style:var(--headings-4-font-style)] mb-[9px] max-md:text-lg">
                    {feature.title}
                  </h3>
                  <p className="font-[number:var(--body-1-font-weight)] text-[length:var(--body-1-font-size)] leading-[var(--body-1-line-height)] font-body-1 text-[#2b3674] tracking-[var(--body-1-letter-spacing)] [font-style:var(--body-1-font-style)] max-md:text-sm">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};
