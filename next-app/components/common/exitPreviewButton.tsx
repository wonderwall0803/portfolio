import React from 'react';
import { useRouter } from 'next/router';
import { media, vw, rem } from 'utils/style-helper';
import { css } from "@emotion/react";

const ExitPreviewButton = () => {
  const router = useRouter();
  const exitPreviewMode = async () => {
    const res = await fetch('/api/exit-preview');
    if (res.ok) {
      router.push('/');
    }
  };
  return (
    <button onClick={exitPreviewMode} css={btn}>
      プレビューモードを終了
    </button>
  );
}

const btn = css`
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 10;
  background-color: #333;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  font-size: ${rem(16)};
  cursor: pointer;
`

export default ExitPreviewButton