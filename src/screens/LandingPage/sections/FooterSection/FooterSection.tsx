import {
  InstagramIcon,
  LinkedinIcon,
  TwitterIcon,
} from 'lucide-react';

const socialIcons = [
  {
    icon: InstagramIcon,
    alt: "Instagram",
    className: "w-10 h-10 text-white",
  },
  {
    icon: null,
    alt: "Iconoir tiktok",
    src: "/iconoir-tiktok.svg",
    className: "w-10 h-10",
  },
  {
    icon: TwitterIcon,
    alt: "Twitter",
    className: "w-10 h-10 text-white",
  },
  {
    icon: LinkedinIcon,
    alt: "LinkedIn",
    className: "w-10 h-10 text-white",
  },
];

export const FooterSection = (): JSX.Element => {
  return (
    <footer className="flex items-center justify-between px-4 sm:px-6 lg:px-8 xl:px-[308px] py-8 w-full bg-[#544aff] max-lg:flex-col max-lg:gap-8">
      <div className="inline-flex items-center gap-2 p-1 max-lg:order-2">
        <img className="w-[52.77px] h-[43.87px]" alt="Logo" src="/logo.png" />

        <div className="font-body-caption font-[number:var(--body-caption-font-weight)] text-white text-[length:var(--body-caption-font-size)] tracking-[var(--body-caption-letter-spacing)] leading-[var(--body-caption-line-height)] [font-style:var(--body-caption-font-style)]">
          Ticket Lounge
          <br />
          Events, reinvented.
        </div>
      </div>

      <div className="inline-flex items-center justify-center gap-2.5 px-2.5 py-4 max-lg:order-3">
        <div className="font-body-2 font-[number:var(--body-2-font-weight)] text-white text-[length:var(--body-2-font-size)] tracking-[var(--body-2-letter-spacing)] leading-[var(--body-2-line-height)] whitespace-nowrap [font-style:var(--body-2-font-style)]">
          © 2025 Ticket Lounge
        </div>
      </div>

      <div className="inline-flex items-center justify-end gap-4 max-lg:order-1 max-lg:justify-center flex-wrap">
        {socialIcons.map((social, index) => (
          <div
            key={index}
            className="hover:scale-110 hover:rotate-12 transition-all duration-300 cursor-pointer group"
          >
            {social.icon ? (
              <social.icon
                className={`${social.className} group-hover:animate-wiggle`}
              />
            ) : (
              <img
                className={`${social.className} group-hover:animate-wiggle`}
                alt={social.alt}
                src={social.src}
              />
            )}
          </div>
        ))}
      </div>
    </footer>
  );
};
