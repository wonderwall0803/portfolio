import React from 'react';
import { media, vw, rem } from 'utils/style-helper';
import { css } from "@emotion/react";

const Footer = (props: any) => {
  return (
    <footer css={wrap}>
      <div className='contents'>
        <p>&copy; Tatsuhiko Mashiyama</p>
      </div>
    </footer>
  )
}

const wrap = css`
  width: 100%;
  border-top: 1px #dadada solid;
  box-sizing: border-box;
  .contents {
    padding: 0;
  }
  ${media.pc} {
    padding: 20px 0;
    h2 {
      font-size: ${rem(18)};
    }
  }
  ${media.sp} {
    padding: ${vw(14)} ${vw(20)};
    h2 {
      font-size: ${vw(18)};
    }
  }
`

export default Footer