import React, { useEffect, useRef, useCallback } from "react";
import { useInView } from "react-intersection-observer";
import gsap from "gsap";

/**
例)
<FadeIn>
  <div>フェードインさせる要素</div>
</FadeIn>
*/

type Props = {
  children: React.ReactNode;
};

const Parallax: React.FC<Props> = ({children}) => {
  const ref = useRef(null);
  const { ref: inViewRef, inView } = useInView({
    rootMargin: "20px ",
    triggerOnce: true,
  });

  useEffect(() => {
    if (!inView) {
      gsap.set(ref.current, { opacity: 0, y: 50 });
    }
  }, []);

  useEffect(() => {
    if (inView) {
      gsap.to(ref.current, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power4.out",
      });
    }
  }, [ref, inView]);

  const setRefs = useCallback((node: any) => {
    ref.current = node;
    inViewRef(node);
  },[inViewRef]);

  return (
    <div ref={setRefs}>
      {children}
    </div>
  );
}

export default Parallax;