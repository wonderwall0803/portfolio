import type { NextPageWithLayout } from 'pages/_app';
import type { GetStaticProps } from 'next';
import Link from 'next/link';
import Head from 'next/head'
import { media, vw, vwTb, rem } from 'utils/style-helper';
import { css } from "@emotion/react";
import Header from 'components/common/header';
import Footer from 'components/common/footer';
import { client } from 'libs/client';


export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: "categories"});
  const paths = data.contents.map((content: any) => `/category/${content.id}`);
  return {
    paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async(context) => {
  const id = context.params?.id;
  const data = await client.get({ 
    endpoint: "news", 
    queries: { filters: `category[equals]${id}` }
  });
  return {
    props: {
      news: data.contents,
    }
  }
}

const CategoryId: NextPageWithLayout = (props: any) => {
  const { news } = props;
  if (news.length === 0) {
    return <div>ブログコンテンツがありません</div>
  }
  return (
    <>
      <Head>
        <title>カテゴリー</title>
        <meta name="description" content="お知らせ詳細ページのディスクリプション" />
      </Head>
      <main>
        <h1>{news[0].category.name}</h1>
        <ul>
          {
            news.map((item: any) => {
              return (
                <li key={item.id}>
                  <Link href={`/news/${item.id}`}>{item.title}</Link>
                </li>
              )
            })
          }
        </ul>
        <Link href="/news/">ニュース一覧へ</Link>
      </main>
    </>
  )
}

CategoryId.getLayout = function getLayout(page) {
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

export default CategoryId