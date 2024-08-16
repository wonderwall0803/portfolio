import type { NextPageWithLayout } from 'pages/_app';
import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head'
import {row, fig, desc, btn} from 'styles/works-detail';

const Index: NextPageWithLayout = (props: any) => {

  return (
    <>
      <main>
        <div className='contents-detail'>
          <div css={row}>
            <figure css={fig}>
              <Image src="/images/index/national-center-img.jpg" alt="国立アートリサーチセンター" width={300} height={300} />
              <figcaption>
                <blockquote>
                  <p><cite>出典：<a href="https://ncar.artmuseums.go.jp/" target="_blank" rel="noreferrer" className='link-text'>国立アートリサーチセンター</a></cite></p>
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
                  アートに関する情報を発信するとともに、アート振興の新たな拠点としての活動内容をまとめたサイトです。<br />
                  CMS(movable type)で構築しており、記事更新はCMSから行えるように実装しております。
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
                  どのようなユーザーに対しても使いやすくなるようWebアクセシビリティに準拠した作りとなっております。<br />
                  サイト全体の雰囲気に合わせて、柔らかな印象を与える演出を随所に施しております。
                </dd>
              </dl>
              <dl>
                <dt>
                  URL
                </dt>
                <dd>
                  <a href="https://ncar.artmuseums.go.jp/" target="_blank" rel="noreferrer" className='link-alpha'>https://ncar.artmuseums.go.jp/</a>
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
