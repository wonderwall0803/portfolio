import { css } from "@emotion/react";
import { media, vw, rem } from 'utils/style-helper';

export const normalize = css`
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: 'Noto Sans JP', sans-serif;
    font-weight: 400;
    letter-spacing: 0.08em;
    color: #283130;
    overflow-x: clip;
  }
  html {
    scroll-behavior: smooth;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }

  html,
  body,
  div,
  span,
  applet,
  object,
  iframe,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  a,
  abbr,
  acronym,
  address,
  big,
  cite,
  code,
  del,
  dfn,
  em,
  img,
  ins,
  kbd,
  q,
  s,
  samp,
  small,
  strike,
  strong,
  sub,
  sup,
  tt,
  var,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td {
    margin: 0;
    padding: 0;
    border: 0;
    outline: 0;
    vertical-align: baseline;
  }

  ol,
  ul {
    list-style: none;
  }

  table {
    border-collapse: separate;
    border-spacing: 0;
    vertical-align: middle;
  }

  caption,
  th,
  td {
    text-align: left;
    font-weight: normal;
    vertical-align: middle;
  }

  img {
    vertical-align: middle;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  div,
  p,
  ul,
  ol,
  li,
  dl,
  dt,
  dd,
  img,
  nav {
    margin: 0;
    padding: 0;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    line-height: 1;
  }

  .clearfix:after {
    content: '';
    display: block;
    clear: both;
  }

  main {
    display: block;
  }

  figure {
    display: block;
    margin: 0;
    padding: 0;
  }

  img {
    width: 100%;
    height: auto;
  }

  input,
  button,
  select,
  textarea {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    background: transparent;
    border: none;
    border-radius: 0;
    font: inherit;
    outline: none;
  }

  textarea {
    resize: vertical;
  }

  input[type='checkbox'],
  input[type='radio'] {
    display: none;
  }

  input[type='submit'],
  input[type='button'],
  label,
  button,
  select {
    cursor: pointer;
  }

  select::-ms-expand {
    display: none;
  }
`

export const style = css`
  ${media.pc} {
    .only-sp {
      display: none;
    }
    .contents {
      width: 80%;
      max-width: 1200px;
      margin: 0 auto;
      padding-bottom: 100px;
    }
    .contents-detail {
      width: 80%;
      max-width: 1000px;
      margin: 130px auto 50px;
    }
    .link-text {
      cursor: pointer;
      position: relative;
      &:before {
        content: '';
        display: block;
        height: 1px;
        width: 100%;
        background-color: currentColor;
        position: absolute;
        left: 0;
        bottom: 0;
        transform-origin: right center;
        transform: scale(0, 1);
        transition: transform 0.3s ease;
      }
      &:hover {
        &:before {
          transform-origin: left center;
          transform: scale(1, 1);
        }
      }
    }
    .link-alpha {
      cursor: pointer;
      transition: opacity 0.3s ease;
      &:hover {
        opacity: 0.6;
      }
    }
  }
  ${media.sp} {
    html {
      scroll-padding-top: ${vw(90)};
    }
    .only-pc {
      display: none;
    }
    .contents {
      width: 90%;
      margin: 0 auto;
      padding-bottom: ${vw(100)};
    }
    .contents-detail {
      width: 90%;
      margin: ${vw(130)} auto ${vw(50)};
    }
  }
`