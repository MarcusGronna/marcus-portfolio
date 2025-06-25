// Exportera const fadeUp = { hidden:{opacity:0, y:40}, visible:{opacity:1,y:0,transition:{duration:0.5}} }; // Exportera staggerContainer.

export const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export const staggerContainer = {
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};
