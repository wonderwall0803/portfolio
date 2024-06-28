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
              <Image src="/images/index/national-center-img.jpg" alt="国立アートリサーチセンター" width={300} height={300} />
              <figcaption>
                <blockquote>
                  <p><cite>出典：<a href="https://ncar.artmuseums.go.jp/" target="_blank" rel="noreferrer">国立アートリサーチセンター</a></cite></p>
                </blockquote>
              </figcaption>
            </figure>
            <div css={desc}>
              <h2>国立アートリサーチセンター</h2>
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

export default Index
