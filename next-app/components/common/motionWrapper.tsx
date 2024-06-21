import React from "react";
import { AnimatePresence, motion, cubicBezier } from 'framer-motion';
import { css } from "@emotion/react";

type Props = {
  router: any;
  children: React.ReactNode;
};

const MotionWrapper: React.FC<Props> = ({children, router}) => {
  const easing = cubicBezier(0.87, 0, 0.13, 1);
  const containerArrive = {
    show: {
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1
      }
    }
  }
  const childArrive = {
    hidden: { width: '100%' },
    show: {
      width: 0,
      transition: {
        duration: 0.8,
        ease: easing
      }
    }
  }
  const containerLeave = {
    leave: {
      transition: {
        staggerChildren: 0.1
      }
    }
  }
  const childLeave = {
    hidden: { width: 0 },
    leave: {
      width: '100%',
      transition: {
        duration: 0.8,
        ease: easing
      }
    }
  }
  return (
    <AnimatePresence
      mode='wait'
      onExitComplete={() => window.scrollTo(0, 0)}
    > 
      <motion.ul
        key={router.route + 'arrive'}
        variants={containerArrive}
        initial="hidden"
        animate="show"
      >
        <motion.li
          variants={childArrive}
          css={[Bg, Bg1, arrive]}
        />
        <motion.li
          variants={childArrive}
          css={[Bg, Bg2, arrive]}
        />
        <motion.li
          variants={childArrive}
          css={[Bg, Bg3, arrive]}
        />
      </motion.ul>
      <motion.ul
        key={router.route + 'leave'}
        variants={containerLeave}
        initial="hidden"
        exit="leave"
      >
        <motion.li
          variants={childLeave}
          css={[Bg, Bg1, leave]}
        />
        <motion.li
          variants={childLeave}
          css={[Bg, Bg2, leave]}
        />
        <motion.li
          variants={childLeave}
          css={[Bg, Bg3, leave]}
        />
      </motion.ul>
      {children}
    </AnimatePresence>
  );
}

const Bg = css`
  position: fixed;
  width: 100%;
  height: calc(100vh / 3);
  background-color: #FF4F4F;
  z-index: 100;
`
const arrive = css`
  transform-origin: right;
  right: 0;
`
const leave = css`
  transform-origin: left;
  left: 0;
`
const Bg1 = css`
  top: 0;
`
const Bg2 = css`
  top: calc(100vh / 3);
`
const Bg3 = css`
  bottom: 0;
`

export default MotionWrapper;