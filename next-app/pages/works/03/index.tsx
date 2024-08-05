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
              <Image src="/images/index/edua-img.jpg" alt="朝日新聞EduA（エデュア）" width={300} height={300} />
              <figcaption>
                <blockquote>
                  <p><cite>出典：<a href="https://www.asahi.com/edua/" target="_blank" rel="noreferrer">朝日新聞EduA（エデュア）</a></cite></p>
                </blockquote>
              </figcaption>
            </figure>
            <div css={desc}>
              <h2>朝日新聞EduA（エデュア）</h2>
              <dl>
                <dt>
                  サイト概要
                </dt>
                <dd>
                  子供を持つ保護者向けの、学習や教育に関する情報を発信するメディアサイトです。
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
                  記事のレイアウトパターンが多かったので、長文/短文のテキスト、大/小の画像、どのようなパターンでもレイアウトが崩れないよう注意してスタイルを調整しました。
                </dd>
              </dl>
              <dl>
                <dt>
                  URL
                </dt>
                <dd>
                  <a href="https://www.asahi.com/edua/" target="_blank" rel="noreferrer">https://www.asahi.com/edua/</a>
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
