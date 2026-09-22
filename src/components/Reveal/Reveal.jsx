import { motion } from "motion/react";

// Reusable scroll-reveal wrapper: fades + slides content into view once.
export default function Reveal({
  children,
  className,
  delay = 0,
  y = 0,
  as = "div",
  ...rest
}) {
  const MotionTag = motion[as] || motion.div;
  const initial = y ? { opacity: 0, y } : { opacity: 0 };
  const visible = y ? { opacity: 1, y: 0 } : { opacity: 1 };

  return (
    <MotionTag
      className={className}
      initial={initial}
      whileInView={visible}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      {...rest}
    >
      {children}
    </MotionTag>
  );
}
