import React, { useEffect, useRef } from 'react';
import { media, vw, rem } from 'utils/style-helper';
import { css } from "@emotion/react";
import gsap from 'gsap';

const Menu = (props: any) => {
  const {isOpen} = props;
  const navRef = useRef(null);
  useEffect(() => {
    if (isOpen) {
      gsap.to(navRef.current, {
        x: '-100%',
        duration: 0.5
      });
    } else {
      gsap.to(navRef.current, {
        x: '100%',
        duration: 0.5
      });
    }
  }, [isOpen]);

  return (
    <nav css={wrap} ref={navRef}>
      <ul>
        <li>menu1</li>
        <li>menu2</li>
        <li>menu3</li>
        <li>menu4</li>
      </ul>
    </nav>
  )
}

const wrap = css`
  box-sizing: border-box;
  width: 100%;
  height: 100vh;
  background-color: #fff;
  position: fixed;
  left: 100%;
  z-index: 10;
  ${media.pc} {
    padding: 50px;
    top: 58px;
    li {
      font-size: ${rem(30)};
    }
  }
  ${media.sp} {
    padding: ${vw(50)};
    li {
      font-size: ${vw(40)};
    }
  }
`
export default Menu;