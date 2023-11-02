import { transition1 } from "./transition";

export const FadeUp = {
  initial: "hidden",
  whileInView: "visible",
  viewport: { once: true, amount: 0.1 },
  transition: transition1,
  variants: {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0 },
  },
};

export const scaleDown = {
  initial: { opacity: 0, scale: "2%" },
  animate: { opacity: 1, scale: 1 },
  transition: transition1,
};

export const slideRight = {
  initial: { opacity: 0, x: "-60%" },
  animate: { opacity: 1, x: 0 },
  transition: transition1,
};

export const slideLeft = {
  initial: { opacity: 0, x: "60%" },
  animate: { opacity: 1, x: 0 },
  transition: transition1,
};
