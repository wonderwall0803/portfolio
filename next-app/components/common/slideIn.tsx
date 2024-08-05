import React, { useEffect, useRef } from "react";
import { css } from "@emotion/react";
import gsap from "gsap";

type Props = {
  type: string;
  children: React.ReactNode;
};

const SlideIn: React.FC<Props> = ({children, type}) => {
  const maskRef = useRef(null);
  const txtRef = useRef(null);
  useEffect(() => {
    const tl = gsap.timeline({ delay: 1.5});
    tl.to(maskRef.current, {
      width: "110%",
      duration: 0.5,
      ease: "power4.out",
    });
    tl.to(txtRef.current, {
      autoAlpha: 1,
      duration: 0,
    });
    tl.to(maskRef.current, {
      left: "auto",
      right: "-5%",
      duration: 0,
    }, "<");
    tl.to(maskRef.current, {
      width: 0,
      duration: 1,
      ease: "power4.out",
    });
  }, []);

  return (
    <span css={type === "block" ? wrapBlock: wrapInline}>
      <div css={mask} ref={maskRef} />
      <span ref={txtRef} css={txt}>
        {children}
      </span>
    </span>
  );
}
const wrapInline = css`
  display: inline-block;
  position: relative;
`
const wrapBlock = css`
  display: block;
  position: relative;
`
const mask = css`
  position: absolute;
  top: 0;
  left: -5%;
  width: 0;
  height: 100%;
  /* background: #FF4F4F; */
  background: #283130;
  transform: skew(-20deg, 0);
  z-index: 1;
`
const txt = css`
  opacity: 0;
`

export default SlideIn;