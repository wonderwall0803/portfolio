import type { NextPageWithLayout } from 'pages/_app';
import type { GetStaticProps } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head'
import { useState, useEffect } from "react";
import { media, vw, vwTb, rem } from 'utils/style-helper';
import { css } from "@emotion/react";

type User = {
  name: string;
}

type SSGResponse = {
  data: User[];
}

export const getStaticProps: GetStaticProps<SSGResponse> = async(context) => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  return {
    props: {
      data: await response.json()
    }
  }
}

const Index: NextPageWithLayout = (props: any) => {
  const { data } = props;

  return (
    <>
      <Head>
        <title>セカンドページ</title>
        <meta name="description" content="セカンドページのディスクリプション" />
      </Head>
      <main>
        <h1>セカンドページ</h1>
        <p>セカンドページテキストセカンドページテキストセカンドページテキストセカンドページテキスト</p>
        <figure css={fig}>
          <Image src="/images/common/sample.jpg" alt="サンプル画像" width={300} height={300} />
        </figure>
        <Link href="/" scroll={false}>トップページへ</Link>
        <h2>APIデータ</h2>
        <ul>
        {
          data && data.map((item: any, index: number) => {
            return (
              <li key={index}>{item.name}</li>
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
      {page}
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
