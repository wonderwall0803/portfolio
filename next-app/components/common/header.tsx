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
            <button onClick={() => setIsModalOpen(true)}>About</button>
          </li>
          <li>
            <Link href="/#skill">Skill</Link>
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
  ${media.pc} {
    width: 100px;
    height: 100px;
    display: block;
  }
  ${media.sp} {
    width: ${vw(70)};
    height: ${vw(70)};
    display: block;
    img {
      display: block;
    }
  }
`

const wrap = css`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  z-index: 5;
  ${media.pc} {
    padding: 20px 30px;
    align-items: flex-start;
    box-sizing: border-box;
  }
  ${media.sp} {
    padding: ${vw(10)};
    align-items: center;
    backdrop-filter: blur(10px);
    box-sizing: border-box;
  }
`

const menu = css`
  ${media.pc} {
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
          transition: transform 0.3s ease;
        }
        &:hover {
          &:before {
            transform: translateX(7px) translateY(-50%);
          }
        }
      }
      &:nth-of-type(n+2) {
        margin-top: 10px;
      }
    }
  }
  ${media.sp} {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-end;
    gap: ${vw(10)};
    width: calc(100% - ${vw(70)});
    li {
      a, button {
        color: #283130;
        position: relative;
        display: inline-block;
        padding-left: ${vw(20)};
        font-size: ${vw(16)};
        font-weight: 500;
        &:before {
          content: "";
          width: ${vw(13)};
          height: ${vw(13)};
          background-color: #FF4F4F;
          border-radius: 50%;
          position: absolute;
          top: 50%;
          left: 0;
          transform: translateY(-50%);
          transition: transform 0.3s ease;
        }
      }
    }
  }
`

export default Header