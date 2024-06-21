import React, { useEffect, useRef } from 'react';
import { media, vw, rem } from 'utils/style-helper';
import { css } from "@emotion/react";
import gsap from 'gsap';
import Image from 'next/image';
import { usePageContext } from 'context/pageContext';

const Modal = () => {
  const pageContext = usePageContext();
  const {isModalOpen, setIsModalOpen} = pageContext;
  const ref = useRef(null);
  useEffect(() => {
    if (isModalOpen) {
      gsap.to(ref.current, {
        autoAlpha: 1,
        duration: 0.5
      });
    } else {
      gsap.to(ref.current, {
        autoAlpha: 0,
        duration: 0.5
      });
    }
  }, [isModalOpen]);

  return (
    <div ref={ref}>
      <div css={bg} className='modalBg' onClick={() => setIsModalOpen(false)} />
      <div css={content} className='modalContent'>
        <div css={contentInner}>
          <button css={btn} onClick={() => setIsModalOpen(false)} />
          <figure>
            <Image src="/images/common/sample.jpg" alt="サンプル画像" width={300} height={300} />
          </figure>
          <div css={desc}>
            <h2>名前name</h2>
            <p>
              サンプルテキストサンプルテキストサンプルテキストサンプルテキスト<br />
              サンプルテキストサンプルテキスト<br />
              サンプルテキストサンプルテキストテキスト<br />
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

const bg = css`
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(10px);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
`
const content = css`
  width: 80%;
  max-width: 800px;
  background-color: #fff;
  border-radius: 20px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 20;
  figure {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`
const contentInner = css`
  padding: 60px 40px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`
const btn = css`
  width: 40px;
  height: 40px;
  position: absolute;
  top: -40px;
  right: 0;
  cursor: pointer;
  &:before,
  &:after {
    content: '';
    width: 100%;
    height: 1px;
    background-color: #fff;
    position: absolute;
    top: 50%;
    left: 0;
  }
  &:before {
    transform: rotate(45deg);
  }
  &:after {
    transform: rotate(-45deg);
  }
`
const desc = css`
  width: calc(100% - 200px);
  padding-left: 30px;
  box-sizing: border-box;
  h2 {
    font-size: ${rem(30)};
    font-weight: 700;
    margin-bottom: 20px;
  }
  p {
    font-size: ${rem(16)};
    line-height: 1.8;
  }

`

export default Modal;