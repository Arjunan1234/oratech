import { useRef } from "react";
import { useInView, motion as m } from "framer-motion";

const FadeUp = ({ children, delay = 0 }) => {
  const containerRef = useRef(null);
  const containerInView = useInView(containerRef, { amount: 0.6, once: true });

  return (
    <m.span
      ref={containerRef}
      style={{
        opacity: containerInView ? 1 : 0,
        transform: containerInView ? "translateY(0) " : "translateY(24px)",
        transitionDuration: "0.3s",
        transitionDelay: containerInView ? `${delay}s` : "0s",
        height: "fit-content",
        display: "block",
      }}
    >
      {children}
    </m.span>
  );
};

export default FadeUp;
