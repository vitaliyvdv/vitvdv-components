import { createGlobalStyle } from "styled-components"

import RoobertRegularOTF from "src/static/fonts/roobert/Roobert-Regular.otf"
import RoobertRegularEOT from "src/static/fonts/roobert/Roobert-Regular.eot"
import RoobertRegularWOFF2 from "src/static/fonts/roobert/Roobert-Regular.woff2"
import RoobertRegularWOFF from "src/static/fonts/roobert/Roobert-Regular.woff"

import RoobertSemiBoldOTF from "src/static/fonts/roobert/Roobert-SemiBold.otf"
import RoobertSemiBoldEOT from "src/static/fonts/roobert/Roobert-SemiBold.eot"
import RoobertSemiBoldWOFF2 from "src/static/fonts/roobert/Roobert-SemiBold.woff2"
import RoobertSemiBoldWOFF from "src/static/fonts/roobert/Roobert-SemiBold.woff"

const AppGlobalStyles = createGlobalStyle`



  @font-face {
    font-family: "Roobert";
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url("${RoobertRegularOTF}");
    src: url("${RoobertRegularEOT}");
    src:
      url("${RoobertRegularWOFF2}") format("woff2"),
      url("${RoobertRegularWOFF}") format("woff");
  }

  @font-face {
    font-family: "Roobert";
    font-style: normal;
    font-weight: 600;
    font-display: swap;
    src: url("${RoobertSemiBoldOTF}");
    src: url("${RoobertSemiBoldEOT}");
    src:
      url("${RoobertSemiBoldWOFF2}") format("woff2"),
      url("${RoobertSemiBoldWOFF}") format("woff");
  }

  html,
  body {
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: "Roobert";
    font-weight: 400;
    line-height: 1.5;
  }
`

export default AppGlobalStyles
