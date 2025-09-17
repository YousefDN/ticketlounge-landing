import React, {
  useEffect,
  useRef,
  useState,
} from 'react';

import { cn } from '../../lib/utils';

interface AnimatedSectionProps {
  children: React.ReactNode;
  animation?:
    | "fade-up"
    | "fade-in"
    | "slide-left"
    | "slide-right"
    | "scale-in"
    | "bounce-in"
    | "rotate-in";
  delay?: number;
  className?: string;
  duration?: number;
}

export const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  animation = "fade-up",
  delay = 0,
  className = "",
  duration = 600,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [delay]);

  const getAnimationClass = () => {
    if (!isVisible) {
      switch (animation) {
        case "fade-up":
          return "opacity-0 translate-y-8";
        case "fade-in":
          return "opacity-0";
        case "slide-left":
          return "opacity-0 -translate-x-8";
        case "slide-right":
          return "opacity-0 translate-x-8";
        case "scale-in":
          return "opacity-0 scale-95";
        case "bounce-in":
          return "opacity-0 scale-95";
        case "rotate-in":
          return "opacity-0 rotate-3 scale-95";
        default:
          return "opacity-0 translate-y-8";
      }
    }

    switch (animation) {
      case "fade-up":
        return "opacity-100 translate-y-0";
      case "fade-in":
        return "opacity-100";
      case "slide-left":
        return "opacity-100 translate-x-0";
      case "slide-right":
        return "opacity-100 translate-x-0";
      case "scale-in":
        return "opacity-100 scale-100";
      case "bounce-in":
        return "opacity-100 scale-100";
      case "rotate-in":
        return "opacity-100 rotate-0 scale-100";
      default:
        return "opacity-100 translate-y-0";
    }
  };

  const getTransitionClass = () => {
    switch (animation) {
      case "bounce-in":
        return "transition-all ease-out";
      case "rotate-in":
        return "transition-all ease-out";
      default:
        return "transition-all ease-out";
    }
  };

  return (
    <div
      ref={ref}
      className={cn(getTransitionClass(), getAnimationClass(), className)}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: isVisible ? `${delay}ms` : "0ms",
      }}
    >
      {children}
    </div>
  );
};
