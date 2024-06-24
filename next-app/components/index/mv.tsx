import { media, vw, rem } from 'utils/style-helper';
import { css } from "@emotion/react";
import Image from 'next/image';
import SlideIn from 'components/common/slideIn';

const Mv = (props: any) => {
  return (
    <>
      <section css={mv}>
        <h2 css={copy}>
          <SlideIn type="block">
            <Image src="/images/index/catchphrase.svg" alt="Don't Stop Evolution" width={200} height={300} />
          </SlideIn>
        </h2>
        <div css={desc}>
          <SlideIn type="inline">
            Web制作の技術は常日頃目まぐるしく変化しています。
          </SlideIn>
          <SlideIn type="inline">
            その時々で最適なアーキテクチャを選択することができるか？その判断力が制作のクオリティを大きく左右します。
          </SlideIn>
          <SlideIn type="inline">
            必ずしも最新技術が最適とは限りませんが、最新技術によって実現できることは確実に増えてきています。
          </SlideIn>
          <SlideIn type="inline">
            進化を止めず常に最善策を考える。日々それを心がけてWeb制作に取り組んでおります。
          </SlideIn>
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
    margin: 100px 0 50px;
  }
`
const desc = css`
  font-weight: 500;
  line-height: 2;
  ${media.pc} {
    font-size: ${rem(18)};
  }
  ${media.sp} {
    font-size: ${vw(18)};
  }
`

export default Mv