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
      <Head>
        <title>ページタイトル</title>
        <meta name="description" content="ページのディスクリプション" />
      </Head>
      <main>
        <div className='contents'>
          <Mv />
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
      font-size: ${rem(48)};
      text-align: center;
    }
  }
`
const worksList = css`
  display: grid;
  gap: 20px;
  ${media.pc} {
    margin-top: 50px;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;
  }
  ${media.sp} {
    margin-top: ${vw(30)};
    grid-template-columns: repeat(2, 1fr);
    gap: ${vw(20)};
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
    }
  }
`
const worksDesc = css`
  ${media.pc} {
    margin-top: 20px;
  }
  ${media.sp} {
    margin-top: ${vw(20)};
  }
  h3 {
    ${media.pc} {
      font-size: ${rem(24)};
      margin-bottom: 10px;
    }
    ${media.sp} {
      font-size: ${vw(24)};
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

export default Home
