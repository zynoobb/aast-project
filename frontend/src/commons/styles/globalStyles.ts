import { css } from "@emotion/react";
const mq = `@media (max-width : 576px)`;
const tq = `@media (min-width: 577px) and (max-width: 1024px)`;
const mmq = `@media (max-width : 400px)`;

export const globalStyles = css`
  * {
    margin: 0px;
    box-sizing: border-box;
    font-family: "Batang_Regular";
    line-height: 1.5;
  }

  @font-face {
    font-family: "Batang_Regular";
    src: url("/fonts/Batang_Regular.woff");
  }

  input:focus {
    outline: none;
  }

  .ant-radio-button-wrapper-checked:not(
      .ant-radio-button-wrapper-disabled
    )::before {
    background: #ffffff !important;
  }

  .ant-radio-button-wrapper-checked:not(.ant-radio-button-wrapper-disabled) {
    border: 1px solid #ffffff !important;
    background: #7a7a7a !important;
    /* color: #ffffff !important; */
  }

  .ant-radio-group {
    width: 90% !important;
    display: flex;
    justify-content: center;
    text-align: center;

    ${mq} {
      width: 100% !important;
    }
    ${tq} {
      height: 50px;
      width: 100% !important;
    }
  }

  .css-dev-only-do-not-override-12upa3x {
    padding: 0;
    ${mq} {
      font-size: 12px !important;
    }

    ${tq} {
      font-size: 11px !important;
      width: 100%;
    }

    ${mmq} {
      margin: 0;
      font-size: 10px !important;
    }
  }
`;
