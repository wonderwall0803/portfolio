import React, { useEffect, useRef } from 'react';
import { media, vw, rem } from 'utils/style-helper';
import { css } from "@emotion/react";
import gsap from 'gsap';
import Image from 'next/image';
import { usePageContext } from 'context/pageContext';

const Modal = () => {
  const pageContext = usePageContext();
  const {isModalOpen, setIsModalOpen} = pageContext;
  const refBg = useRef(null);
  const refContents = useRef(null);
  useEffect(() => {
    if (isModalOpen) {
      gsap.to(refBg.current, {
        autoAlpha: 1,
        duration: 0.5
      });
      gsap.to(refContents.current, {
        autoAlpha: 1,
        duration: 0.5
      });
    } else {
      gsap.to(refBg.current, {
        autoAlpha: 0,
        duration: 0.5
      });
      gsap.to(refContents.current, {
        autoAlpha: 0,
        duration: 0.5
      });
    }
  }, [isModalOpen]);

  return (
    <div>
      <div ref={refBg} css={bg} className='modalBg' onClick={() => setIsModalOpen(false)} />
      <div ref={refContents} css={content} className='modalContent'>
        <div css={contentInner}>
          <button css={btn} onClick={() => setIsModalOpen(false)} />
          <figure>
            <Image src="/images/common/mashiyama-img.jpg" alt="本人画像" width={300} height={300} />
          </figure>
          <div css={desc}>
            <h2>増山 達彦 / Mashiyama Tatsuhiko</h2>
            <p>
              情報系大学で情報処理を学んだ後、都内の独立系SIer企業にて6年間SEとして様々な常駐先で開発業務に従事。
              その間に上流工程から下流工程までを経験。主に改修要件の設計及び実装を担当。<br />
              2019年から現在まで栃木県のWeb制作会社であるカテル株式会社にてWeb制作業務に従事。
              主にフロントエンドエンジニアとして、HTMLのコーディング及びJavaScriptによるアニメーション演出の実装業務を担当。<br />
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
  backdrop-filter: blur(15px);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
`
const content = css`
  width: 80%;
  max-width: 900px;
  background-color: #fff;
  border-radius: 5px;
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
  align-items: flex-start;
  justify-content: center;
`
const btn = css`
  width: 40px;
  height: 40px;
  position: absolute;
  top: -50px;
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
    margin-bottom: 40px;
    font-style: italic;
  }
  p {
    font-size: ${rem(16)};
    line-height: 1.8;
  }

`

export default Modal;