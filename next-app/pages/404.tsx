import type { NextPageWithLayout } from 'pages/_app';
import Link from 'next/link';
import Head from 'next/head'
import { media, vw, vwTb, rem } from 'utils/style-helper';
import { css } from "@emotion/react";

const Index: NextPageWithLayout = () => {
  return (
    <>
      <main>
        <div className='contents'>
          <div css={notfound}>
            <h1>404 Not Found</h1>
            <p>ページが見つかりません</p>
            <Link href="/">トップページへ</Link>
          </div>
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

const notfound = css`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  ${media.pc} {
    h1 {
      font-size: ${rem(40)};
      margin-bottom: 30px;
    }
    p {
      font-size: ${rem(28)};
      margin-bottom: 20px;
    }
  }
  ${media.sp} {
    h1 {
      font-size: ${vw(40)};
      margin-bottom: ${vw(30)};
    }
    p {
      font-size: ${vw(28)};
      margin-bottom: ${vw(20)};
    }
  }
`

export default Index
