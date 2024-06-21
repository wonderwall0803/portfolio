import type { NextPageWithLayout } from 'pages/_app';
import type { GetStaticProps } from 'next';
import Link from 'next/link';
import Head from 'next/head'
import { media, vw, vwTb, rem } from 'utils/style-helper';
import { css } from "@emotion/react";
import Header from 'components/common/header';
import Footer from 'components/common/footer';
import { client } from 'libs/client';
import ExitPreviewButton from 'components/common/exitPreviewButton';

export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: "news"});
  const paths = data.contents.map((content: any) => `/news/${content.id}`);
  return {
    paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async(context) => {
  const id = context.params?.id;

  if (context.preview) {
    const isDraft = (item: any) : item is { draftKey: string } =>
      !!(item?.draftKey && typeof item.draftKey === "string");
    const draftKey = isDraft(context.previewData) ? context.previewData.draftKey : undefined;
    const data = await client.get({
      endpoint: "news",
      contentId: id as string,
      queries: { draftKey: draftKey }
    });
    return {
      props: {
        news: data,
        isPreview: true
      }
    }
  } else {
    const data = await client.get({ endpoint: "news", contentId: id as string});
    return {
      props: {
        news: data,
        isPreview: false
      }
    }
  }
}

const NewsId: NextPageWithLayout = (props: any) => {
  const { news, isPreview } = props;
  return (
    <>
      {isPreview && <ExitPreviewButton />}
      <Head>
        <title>お知らせ詳細</title>
        <meta name="description" content="お知らせ詳細ページのディスクリプション" />
      </Head>
      <main>
        <h1>{news.title}</h1>
        <h2>{news.category && news.category.name}</h2>
        <div 
          dangerouslySetInnerHTML={{
            __html: `${news.body}`
          }}
        />
        <Link href="/news/">ニュース一覧へ</Link>
      </main>
    </>
  )
}

NewsId.getLayout = function getLayout(page) {
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

export default NewsId