import {
  animate,
  motion,
  useInView,
  useMotionValue,
  useTransform,
} from "framer-motion";
import { useEffect, useRef } from "react";

const AnimatedCounter = ({
  from,
  to,
  duration,
  fontFamily,
  fontSize,
  color,
}) => {
  const count = useMotionValue(from);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const ref = useRef(null);
  const inView = useInView(ref);

  // while in view animate the count
  useEffect(() => {
    if (inView) {
      animate(count, to, { duration });
    }
  }, [count, inView, to, duration]);

  return (
    <motion.span ref={ref} style={{ fontFamily, color }}>
      {rounded}
    </motion.span>
  );
};

AnimatedCounter.defaultProps = {
  from: 0,
  to: 15,
  duration: 2.5,
  fontFamily: "Arial",
  color: "#000000",
};

export default AnimatedCounter;
