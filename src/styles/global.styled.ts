import { css } from '@emotion/react';
import normalize from 'emotion-normalize';

const global = css`
  ${normalize};

  html {
    position: relative;
    width: 100vw;
    height: 100vh;
  }

  &:root {
  
  }
`

export default global;