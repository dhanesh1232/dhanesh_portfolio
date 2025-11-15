export const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.6 } },
};

export const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

export const hoverScale = {
  whileHover: { scale: 1.03 },
  transition: { type: "spring", stiffness: 300, damping: 20 },
};

export const hoverLift = {
  whileHover: { y: -5 },
  transition: { type: "spring", stiffness: 300 },
};

export const progressBar = {
  initial: { width: 0 },
  animate: { width: "100%" },
};

export const skillItem = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

export const cardStagger = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const slideUp = {
  initial: { y: 30, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  transition: { duration: 0.6, ease: "easeOut" },
};
