import type { NextPageWithLayout } from 'pages/_app';
import Head from 'next/head'
import { media, vw, rem } from 'utils/style-helper';
import { css } from "@emotion/react";
import { useReducer } from "react";
import Header from 'components/common/header';
import Footer from 'components/common/footer';

const ReducerTest: NextPageWithLayout = () => {

  const reducer = (state: any, action: any) => {
    console.log('action : ' + action.type);
    console.log('state : ' + state);
    return action.content
  };
  const [state, dispatch] = useReducer(reducer, '初期値');

  return (
    <>
      <Head>
        <title>ページタイトル</title>
        <meta name="description" content="ページのディスクリプション" />
      </Head>
      <main>
        <p>reducer sample</p>
        <button
          onClick={() => dispatch({type: "ACTION_TYPE", content: "なんかのデータ"})}
        >
          ボタン
        </button>
        <p>stateの値：{state}</p>
      </main>
    </>
  )
}

ReducerTest.getLayout = function getLayout(page) {
  return (
    <>
      <Header />
      {page}
      <Footer />
    </>
  )
}

const sample = css`
  ${media.pc} {
    
  }
  ${media.sp} {

  }
`

export default ReducerTest
