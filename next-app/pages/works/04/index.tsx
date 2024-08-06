import type { NextPageWithLayout } from 'pages/_app';
import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head'
import {row, fig, desc, btn} from 'styles/works-detail';

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
              <Image src="/images/index/matel-games-img.jpg" alt="Mattel Games マテル ゲーム" width={300} height={300} />
              <figcaption>
                <blockquote>
                  <p><cite>出典：<a href="https://mattel.co.jp/toys/mattel_games/" target="_blank" rel="noreferrer" className='link-text'>Mattel Games マテル ゲーム</a></cite></p>
                </blockquote>
              </figcaption>
            </figure>
            <div css={desc}>
              <h2>Mattel Games マテル ゲーム</h2>
              <dl>
                <dt>
                  サイト概要
                </dt>
                <dd>
                  マテルゲームの商品紹介サイトです。メインビジュアルや商品、お知らせはCMS（Word Press）と連動した作りとなっております。
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
                  お馴染みのカードゲームということで、メインビジュアルには重なったカードが切り替わるような演出を施してみました。こちらは演出のイメージに合ったライブラリがなかったため自作で実装しました。
                </dd>
              </dl>
              <dl>
                <dt>
                  URL
                </dt>
                <dd>
                  <a href="https://mattel.co.jp/toys/mattel_games/" target="_blank" rel="noreferrer" className='link-alpha'>https://mattel.co.jp/toys/mattel_games/</a>
                </dd>
              </dl>
            </div>
          </div>
          <Link href="/" scroll={false} css={btn} className='link-alpha'>トップページへ</Link>
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

export default Index
