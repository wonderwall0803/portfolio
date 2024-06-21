import type { NextPageWithLayout } from 'pages/_app';
import type { GetStaticProps } from 'next';
import Link from 'next/link';
import Head from 'next/head'
import { media, vw, vwTb, rem } from 'utils/style-helper';
import { css } from "@emotion/react";
import Header from 'components/common/header';
import Footer from 'components/common/footer';
import { getNews, getCategory } from 'libs/client';

type News = {
  id: string;
  title: string;
  body: string;
}

type SSGResponse = {
  contents: News[];
}

export const getStaticProps: GetStaticProps<SSGResponse> = async(context) => {
  const response = await getNews();
  const categoryData = await getCategory();
  return {
    props: {
      contents: response.contents,
      category: categoryData.contents
    }
  }
}

const Index: NextPageWithLayout = (props: any) => {
  const { contents, category } = props;
  return (
    <>
      <Head>
        <title>お知らせ一覧</title>
        <meta name="description" content="お知らせページのディスクリプション" />
      </Head>
      <main>
        <h1>お知らせ一覧</h1>
        <Link href="/">トップページへ</Link>
        <h2>カテゴリー一覧</h2>
        <ul>
          {
            category && category.map((category: any) => {
              return (
                <li key={category.id}>
                  <Link href={`/category/${category.id}`}>
                    {category.name}
                  </Link>
                </li>
              )
            })
          }
        </ul>
        <h2>microCMSお知らせAPIデータ</h2>
        <ul>
        {
          contents && contents.map((item: any) => {
            return (
              <li key={item.id}>
                <Link href={`/news/${item.id}`}>{item.title}</Link>
              </li>
            )
          })
        }
        </ul>
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
