import React, { useState } from 'react';
import { media, vw, rem } from 'utils/style-helper';
import { css } from "@emotion/react";
import Image from 'next/image';

const Mv = (props: any) => {
  return (
    <>
      <section css={mv}>
        <h2 css={copy}>
          <Image src="/images/index/catchphrase.svg" alt="Don't Stop Evolution" width={200} height={300} />
        </h2>
        <div css={desc}>
          <p>
            Web制作の技術は常日頃目まぐるしく変化しています。<br />
            その時々で最適なアーキテクチャを選択することができるか？その判断力が制作のクオリティを大きく左右します。<br />
            必ずしも最新技術が最適とは限りませんが、最新技術によって実現できることは確実に増えてきています。<br />
            進化を止めず常に最善策を考える。日々それを心がけてWeb制作に取り組んでおります。
          </p>
        </div>
      </section>
    </>
  )
}

const mv = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
`
const copy = css`
  width: 100%;
  img {
    width: 100%;
  }
  ${media.pc} {
    margin-bottom: 50px;
    padding-top: 100px;
  }
`
const desc = css`
  p {
    ${media.pc} {
      font-size: ${rem(18)};
    }
    ${media.sp} {
      font-size: ${vw(18)};
    }
  
  }
`

export default Mv