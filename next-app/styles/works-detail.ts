import { css } from "@emotion/react";
import { media, vw, rem, vwTb } from 'utils/style-helper';

export const row = css`
  ${media.pc} {
    display: flex;
    justify-content: center;
    align-items: flex-start;
  }
`
export const fig = css`
  ${media.pc} {
    width: 400px;
    figcaption {
      margin-top: 10px;
      font-size: ${rem(12)};
    }
    img {
      border-radius: 30px 0 30px 0;
      overflow: hidden;
      border: 1px solid #ccc;
    }
  }
  ${media.sp} {
    width: 100%;
    figcaption {
      margin-top: ${vw(10)};
      font-size: ${vw(13)};
    }
    img {
      border-radius: ${vw(30)} 0 ${vw(30)} 0;
      overflow: hidden;
      border: 1px solid #ccc;
    }
  }
`
export const desc = css`
  ${media.pc} {
    width: calc(100% - 400px);
    padding-left: 30px;
    h2 {
      font-size: ${rem(28)};
      margin-bottom: 30px;
    }
    dl {
      dt {
        font-size: ${rem(18)};
        font-weight: bold;
        margin-bottom: 10px;
        position: relative;
        padding-left: 15px;
        &:before {
          content: "";
          width: 5px;
          height: 20px;
          background-color: #FF4F4F;
          position: absolute;
          top: 50%;
          left: 0;
          transform: translateY(-50%);
        }
      }
      dd {
        font-size: ${rem(16)};
        margin-bottom: 20px;
        a {
          text-decoration: underline;
        }
      }
    }
  }
  ${media.sp} {
    width: 100%;
    margin-top: ${vw(30)};
    h2 {
      font-size: ${vw(26)};
      margin-bottom: 30px;
    }
    dl {
      dt {
        font-size: ${vw(18)};
        font-weight: bold;
        margin-bottom: 10px;
        position: relative;
        padding-left: 15px;
        &:before {
          content: "";
          width: ${vw(5)};
          height: ${vw(20)};
          background-color: #FF4F4F;
          position: absolute;
          top: 50%;
          left: 0;
          transform: translateY(-50%);
        }
      }
      dd {
        font-size: ${vw(16)};
        margin-bottom: ${vw(20)};
        line-height: 1.8;
        a {
          text-decoration: underline;
        }
      }
    }
  }
`
export const btn = css`
  ${media.pc} {
    width: 230px;
    height: 60px;
    font-size: ${rem(18)};
    font-weight: bold;
    color: #283130;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 50px 0 0 auto;
    border-radius: 10px;
    position: relative;
    &:after {
      content: "";
      width: 8px;
      height: 8px;
      border-right: 2px #283130 solid;
      border-bottom: 2px #283130 solid;
      position: absolute;
      top: 50%;
      right: 0;
      transform: translateY(-50%) rotate(-45deg);
    }
  }
  ${media.sp} {
    width: ${vw(230)};
    height: ${vw(30)};
    font-size: ${vw(18)};
    font-weight: bold;
    color: #283130;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: ${vw(50)} 0 0 auto;
    border-radius: ${vw(10)};
    position: relative;
    &:after {
      content: "";
      width: ${vw(8)};
      height: ${vw(8)};
      border-right: 2px #283130 solid;
      border-bottom: 2px #283130 solid;
      position: absolute;
      top: 50%;
      right: 0;
      transform: translateY(-50%) rotate(-45deg);
    }
  }
`