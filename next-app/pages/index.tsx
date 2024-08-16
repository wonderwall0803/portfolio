import type { NextPageWithLayout } from 'pages/_app';
import Link from 'next/link';
import Head from 'next/head'
import { media, vw, vwTb, rem } from 'utils/style-helper';
import { css } from "@emotion/react";
import { useState, useEffect } from "react";
import Image from 'next/image';
import Mv from 'components/index/mv';

const Home: NextPageWithLayout = () => {
  useEffect(() => {
    console.log('レンダリング後実行');
  },[]);

  return (
    <>
      <main>
        <div className='contents'>
          <Mv />
          <section css={skill} id="skill">
            <h2>SKILL</h2>
            <div className="skill-area">
              <dl className="skill-block">
                <dt>言語</dt>
                <dd>JavaScript / HTML / CSS / PHP / Java</dd>
              </dl>
              <dl className="skill-block">
                <dt>フレームワーク・ライブラリ</dt>
                <dd>React / Next.js / Astro / jQuery / Pixi.js / CakePHP3</dd>
              </dl>
              <dl className="skill-block">
                <dt>開発環境</dt>
                <dd>VScode / WebPack / Sass / postCSS / Emotion</dd>
              </dl>
              <dl className="skill-block">
                <dt>その他</dt>
                <dd>Git / Vercel / microCMS</dd>
              </dl>
            </div>
          </section>
          <section css={works} id="works">
            <h2>WORKS</h2>
            <ul css={worksList}>
              <li>
                <Link href="/works/01" scroll={false}>
                  <figure>
                    <Image src="/images/index/questionnaire-site-img.jpg" alt="アンケート調査サイト" width={300} height={300} />
                  </figure>
                  <div css={worksDesc}>
                    <h3>アンケート調査サイト</h3>
                  </div>
                </Link>
              </li>
              <li>
                <Link href="/works/02" scroll={false}>
                  <figure>
                    <Image src="/images/index/national-center-img.jpg" alt="国立アートリサーチセンター" width={300} height={300} />
                  </figure>
                  <div css={worksDesc}>
                    <h3>国立アートリサーチセンター</h3>
                  </div>
                </Link>
              </li>
              <li>
                <Link href="/works/03" scroll={false}>
                  <figure>
                    <Image src="/images/index/edua-img.jpg" alt="朝日新聞EduA" width={300} height={300} />
                  </figure>
                  <div css={worksDesc}>
                    <h3>朝日新聞EduA</h3>
                  </div>
                </Link>
              </li>
              <li>
                <Link href="/works/04" scroll={false}>
                  <figure>
                    <Image src="/images/index/matel-games-img.jpg" alt="Mattel Games" width={300} height={300} />
                  </figure>
                  <div css={worksDesc}>
                    <h3>Mattel Games</h3>
                  </div>
                </Link>
              </li>
            </ul>
          </section>
        </div>
      </main>
    </>
  )
}

Home.getLayout = function getLayout(page) {
  return (
    <>
      {page}
    </>
  )
}


const works = css`
  ${media.pc} {
    padding-top: 80px;
    h2 {
      font-size: ${rem(58)};
      letter-spacing: 0.08em;
      text-align: center;
    }
  }
  ${media.sp} {
    padding-top: ${vw(70)};
    h2 {
      font-size: ${vw(40)};
      letter-spacing: 0.08em;
      text-align: center;
    }
  }
`
const worksList = css`
  ${media.pc} {
    display: grid;
    gap: 20px;
    margin-top: 50px;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;
    li a {
      &:hover img {
        transform: scale(1.1);
      }
    }
    figure {
      width: 100%;
      height: 200px;
      border-radius: 30px 0 30px 0;
      border: 1px solid #ccc;
      overflow: hidden;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 0.3s ease;
      }
    }
  }
  ${media.sp} {
    margin-top: ${vw(40)};
    grid-template-columns: repeat(2, 1fr);
    gap: ${vw(20)};
    display: grid;
    figure {
      width: 100%;
      height: ${vw(110)};
      border-radius: ${vw(30)} 0 ${vw(30)} 0;
      border: 1px solid #ccc;
      overflow: hidden;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 0.3s ease;
      }
    }
  }
  
`
const worksDesc = css`
  ${media.pc} {
    margin-top: 20px;
  }
  ${media.sp} {
    margin-top: ${vw(10)};
  }
  h3 {
    ${media.pc} {
      font-size: ${rem(24)};
      margin-bottom: 10px;
    }
    ${media.sp} {
      font-size: ${vw(18)};
      line-height: 1.6;
      margin-bottom: ${vw(10)};
    }
  }
  p {
    ${media.pc} {
      font-size: ${rem(16)};
    }
    ${media.sp} {
      font-size: ${vw(16)};
    }
  }
`
const skill = css`
  ${media.pc} {
    padding-top: 80px;
    h2 {
      font-size: ${rem(58)};
      letter-spacing: 0.08em;
      text-align: center;
    }
    .skill-area {
      margin-top: 50px;
    }
    .skill-block {
      margin-bottom: 40px;
      dt {
        font-size: ${rem(24)};
        font-weight: bold;
        margin-bottom: 10px;
        position: relative;
        padding-left: 15px;
        &:before {
          content: "";
          width: 5px;
          height: 20px;
          background-color: #FF4F4F;
          position: absolute;
          top: 50%;
          left: 0;
          transform: translateY(-50%);
        }
      }
      dd {
        font-size: ${rem(20)};
      }
    }
  }
  ${media.sp} {
    padding-top: ${vw(70)};
    h2 {
      font-size: ${vw(40)};
      letter-spacing: 0.08em;
      text-align: center;
    }
    .skill-area {
      margin-top: ${vw(40)};
    }
    .skill-block {
      margin-bottom: ${vw(40)};
      dt {
        font-size: ${vw(22)};
        font-weight: bold;
        margin-bottom: ${vw(10)};
        position: relative;
        padding-left: ${vw(15)};
        &:before {
          content: "";
          width: ${vw(5)};
          height: ${vw(20)};
          background-color: #FF4F4F;
          position: absolute;
          top: 50%;
          left: 0;
          transform: translateY(-50%);
        }
      }
      dd {
        font-size: ${vw(18)};
        line-height: 1.8;
      }
    }
  }
`

export default Home
