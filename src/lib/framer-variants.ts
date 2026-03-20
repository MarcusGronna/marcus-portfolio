import { type Variants } from "framer-motion";

// Motion variants for Framer Motion.
// The CSS layer in globals.css enforces prefers-reduced-motion at the browser level.
// These variants keep y-offset modest so the CSS override produces no visible shift.

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: "easeOut" },
  },
};

export const staggerContainer: Variants = {
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};
