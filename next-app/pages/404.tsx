import type { NextPageWithLayout } from 'pages/_app';
import Link from 'next/link';
import Head from 'next/head'
import { media, vw, vwTb, rem } from 'utils/style-helper';
import { css } from "@emotion/react";
import Header from 'components/common/header';
import Footer from 'components/common/footer';

const Index: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>404 Not Found</title>
        <meta name="description" content="404 Not Found" />
      </Head>
      <main>
        <h1>404 Not Found</h1>
        <p>ページが見つかりません</p>
        <Link href="/">トップページへ</Link>
      </main>
    </>
  )
}

Index.getLayout = function getLayout(page) {
  return (
    <>
      <Header />
      {page}
      <Footer />
    </>
  )
}

const fig = css`
  ${media.pc} {
    width: 300px;
    margin: 30px auto;
  }
  ${media.sp} {
    width: ${vw(300)};
    margin: ${vw(30)} auto;
  }
  ${media.tb} {
    width: ${vwTb(300)};
    margin: ${vwTb(30)} auto;
  }
`

export default Index
