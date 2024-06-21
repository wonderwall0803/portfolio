import React, { useState } from 'react';
import { media, vw, rem } from 'utils/style-helper';
import { css } from "@emotion/react";
import Image from 'next/image';
import { usePageContext } from 'context/pageContext';
import Link from 'next/link';

const Header = (props: any) => {
  const pageContext = usePageContext();
  const {setIsModalOpen} = pageContext;
  return (
    <>
      <header css={wrap}>
        <Link css={circle} href="/">
          <Image src="/images/common/mashiyama-logo.svg" alt="ロゴ" width={100} height={100} />
        </Link>
        <ul css={menu}>
          <li>
            <Link href="/">Top</Link>
          </li>
          <li>
            <button onClick={() => setIsModalOpen(true)} >About</button>
          </li>
          <li>
            <Link href="/#works">Works</Link>
          </li>
        </ul>
      </header>
    </>
  )
}

const circle = css`
  width: 100px;
  height: 100px;
`

const wrap = css`
  position: fixed;
  top: 0;
  left: 0;
  box-sizing: border-box;
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  ${media.pc} {
    padding: 20px 30px;
  }
  ${media.sp} {
    padding: ${vw(20)} ${vw(30)};
  }
`

const menu = css`
  li {
    a, button {
      color: #283130;
      position: relative;
      display: inline-block;
      padding-left: 25px;
      font-size: ${rem(20)};
      font-weight: 500;
      &:before {
        content: "";
        width: 13px;
        height: 13px;
        background-color: #FF4F4F;
        border-radius: 50%;
        position: absolute;
        top: 50%;
        left: 0;
        transform: translateY(-50%);
      }
    }
    &:nth-of-type(n+2) {
      margin-top: 10px;
    }
  }
`

export default Header