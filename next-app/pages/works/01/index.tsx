import type { NextPageWithLayout } from 'pages/_app';
import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head'
import { media, vw, vwTb, rem } from 'utils/style-helper';
import { css } from "@emotion/react";

const Index: NextPageWithLayout = (props: any) => {

  return (
    <>
      <Head>
        <title>セカンドページ</title>
        <meta name="description" content="セカンドページのディスクリプション" />
      </Head>
      <main>
        <div className='contents-detail'>
          <div css={row}>
            <figure css={fig}>
              <Image src="/images/index/questionnaire-site-img.jpg" alt="アンケート調査サイト" width={300} height={300} />
              <figcaption>
                <blockquote>
                  <p><cite>出典：<a href="https://www.nhk.or.jp/bunken/yoron-isiki/tyuko/" target="_blank" rel="noreferrer">中学生・高校生の生活と意識調査｜NHK放送文化研究所</a></cite></p>
                </blockquote>
              </figcaption>
            </figure>
            <div css={desc}>
              <h2>アンケート調査サイト</h2>
              <dl>
                <dt>
                  サイト概要
                </dt>
                <dd>
                  中学生・高校生の生活と意識調査についての世論調査結果をカテゴリごとに分類し、グラフを用いて分かりやすくまとめたサイトです。
                </dd>
              </dl>
              <dl>
                <dt>
                  担当
                </dt>
                <dd>
                  フロントコーディング（HTML / CSS / JavaScript）
                </dd>
              </dl>
              <dl>
                <dt>
                  ポイント
                </dt>
                <dd>
                  本案件では、膨大なデータを処理してグラフ化する必要がありましたので、グラフ描画処理にReactを使用して高速で描画できるように実装しました。
                </dd>
              </dl>
              <dl>
                <dt>
                  URL
                </dt>
                <dd>
                  <a href="https://www.nhk.or.jp/bunken/yoron-isiki/tyuko/" target="_blank" rel="noreferrer">https://www.nhk.or.jp/bunken/yoron-isiki/tyuko/</a>
                </dd>
              </dl>
            </div>
          </div>
          <Link href="/" scroll={false} css={btn}>トップページへ</Link>
        </div>
      </main>
    </>
  )
}

Index.getLayout = function getLayout(page) {
  return (
    <>
      {page}
    </>
  )
}

const row = css`
  ${media.pc} {
    display: flex;
    justify-content: center;
    align-items: flex-start;
  }
`
const fig = css`
  ${media.pc} {
    width: 400px;
    border-radius: 30px 0 30px 0;
    overflow: hidden;
    figcaption {
      margin-top: 10px;
      font-size: ${rem(12)};
    }
  }
  ${media.sp} {
    width: ${vw(300)};
  }
  ${media.tb} {
    width: ${vwTb(300)};
  }
`
const desc = css`
  ${media.pc} {
    width: calc(100% - 400px);
    padding-left: 30px;
    h2 {
      font-size: ${rem(28)};
      margin-bottom: 30px;
    }
    dl {
      dt {
        font-size: ${rem(18)};
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
        font-size: ${rem(16)};
        margin-bottom: 20px;
        a {
          text-decoration: underline;
        }
      }
    }
  }
`
const btn = css`
  ${media.pc} {
    width: 280px;
    height: 60px;
    font-size: ${rem(18)};
    font-weight: bold;
    color: #fff;
    background-color: #283130;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 50px auto 0;
    border-radius: 10px;
    position: relative;
    &:after {
      content: "";
      width: 8px;
      height: 8px;
      border-right: 2px #fff solid;
      border-bottom: 2px #fff solid;
      position: absolute;
      top: 50%;
      right: 20px;
      transform: translateY(-50%) rotate(-45deg);
    }
  }
`

export default Index
