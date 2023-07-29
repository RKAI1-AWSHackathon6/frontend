import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: var(--text-font);
    font-size: 62.5%;
  }

  #root {
    height: 100%;
    width: 100%;
    display: flex;
    background: var(--color-background);
  }

  * {
    box-sizing: border-box;
    user-select: none;
    font-family: 'DM Sans';
  }

  .ant-select-dropdown {
    background: var(--color-background-light);
    color: var(--color-text);

    .ant-select-item-option-active:not(.ant-select-item-option-disabled),
    .ant-select-item-option-selected:not(.ant-select-item-option-disabled) {
      background: var(--color-background-dark);
    }
  }

  /* thay đổi màu mặc định khi kéo chọn vùng chữ của trình duyệt */
  ::selection {
    background: var(--color-primary) !important;
  }

  ::-moz-selection { /* Code for Firefox */
    background: var(--color-primary) !important;
  }

  :root {
    --text-font: 'Inter', sans-serif;
    --color-text: #E0DDFA;
    --color-text-secondary: #9696AC;
    --color-text-gray: #E1E1E1;
    --color-text-light: #827f95;
    --color-primary: #634BFF;
    --color-primary-gradient: linear-gradient(45deg, #9E4FD8 0%, #6D4CF8 100%);
    --color-primary-opacity: #5EF2E033;
    --color-primary-light: #867ae9;
    --color-positive: #7CB305;
    --color-negative: #CF1322;
    --color-neutral: #D4B106;
    --color-blue: #2A85FF;
    --color-gray: #BCBCBC;
    --color-light-gray: #32343E;
    --color-border: #545454;
    --color-border-primary: rgba(94, 242, 224, 0.3);
    --color-background: #151419;
    --color-background-white: #FEFDFF;
    --color-background-light: #22262F;
    --color-background-gray: #22262F;
    --color-background-dark: #1A1C20;
    --color-background-frame: #1D262F;
    --color-background-primary: rgba(94, 242, 224, 0.2);
    --color-black: rgba(0,0,0,0.87);
    --box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.05);
    --border-radius: 0.8rem;
    --border-radius-small: 0.4rem;
    --border-radius-1: 1rem;
    --padding: 3rem 2.5rem;
    --padding-small: 1.5rem 1.5rem;
    --padding-page: 2rem 3rem;
    --margin-bottom: 1.5rem;
    --margin-bottom-small: 1rem;
    --margin-bottom-large: 2.5rem;
    --margin-right: 1.5rem;
    --margin-left: 1.5rem;
    --margin-left-large: 2rem;
    --margin-top: 1.5rem;
    --color-success: #7FC8A9;
    --color-error: #FF6767;
    --color-red: #FC3400;
    --background-primary: rgba(133,122,233,0.5);
    --background-error: rgba(255, 103, 103, 0.1);
    --background-input: rgba(255, 255, 255, 0.1);
    --background-white: rgba(255,255,255,0.7);
    --background-blue: rgba(42, 133, 255, 0.1);
    --subtitle-frame-background: #D4B5FF;
    --text-frame-background: #FFD154;
    --text-frame-color: #002795;
    --subtitle-frame-color: #002795;
    --audio-frame-color: #B5EEFF;
    --audio-frame-background: #163A45;
  }

  .primary-btn, .ant-btn-primary[disabled] {
    background-color: var(--color-primary);
    color: var(--color-text);
    font-size: 1.3rem;
    border-radius: 0.8rem;
    border: none;

    &:hover, &:active, &:focus {
      background-color: var(--color-primary);
      color: var(--color-text);
      opacity: 0.85;
    }
  }

  .ghost-btn {
    background-color: transparent;
    color: var(--color-text);
    font-size: 1.3rem;
    border-radius: 0.8rem;
    border: 1px solid var(--color-primary) !important;

    &:hover, &:active, &:focus {
      background-color: transparent;
      color: var(--color-primary);
      opacity: 0.85;
    }
  }

  .ant-form-item {
    margin-bottom: 1.5rem !important;
  }

  .ant-radio-inner {
    background-color: transparent;
  }

  .ant-radio-group {
    font-size: 1.4rem;
  }

  .ant-form-item-label > label {
    color: var(---color-primary) !important;
    font-size: 1.4rem;
    font-weight: 500;
  }

  .ant-slider-handle {
    border: none;
    width: 11px;
    height: 11px;

    &, &:hover {
      background-color: var(--color-primary);
    }
  }

  .ant-slider-vertical .ant-slider-handle {
    margin-left: -4px;
  }

  .ant-slider-rail {
    height: 3px;
  }

  .ant-slider-track {
    background-color: var(--color-primary);
    height: 3px;
  }

  .ant-slider-mark-text {
    color: var(--color-text-gray);
    font-size: 1rem;
  }

  .ant-switch-checked:focus {
    box-shadow: none;
  }

  .ant-form-item-label {
    color: var(--color-text-gray);
  }

  .ant-popover-arrow-content {
    --antd-arrow-background-color: var(--color-background-dark);
  }
  .ant-popover-message-title {
    color: var(--color-background-white);
  }

  .ant-popover-inner {
    background: var(--color-background-dark);

    .ant-popover-inner-content {
      padding: 1rem 0.5rem;
    }
  }


  .custom-input {
    max-width: 100%;
    height: auto;
    min-height: 32px;
    line-height: 1.5715;
    vertical-align: bottom;
    background-color: var(--background-input);
    box-sizing: border-box;
    outline: none!important;
    margin: 0;
    font-variant: tabular-nums;
    list-style: none;
    font-feature-settings: "tnum";
    position: relative;
    display: inline-block;
    width: 100%;
    min-width: 0;

    border-radius: 0.4rem;
    font-weight: 500;
    border: 1px solid transparent;
    box-shadow: none; 
    font-size: 1.3rem;
    padding: 0.5rem 1rem;
    color: var(--color-text-gray);
    border: 1px solid var(--color-border);

    input {
      background: transparent;
      font-weight: 500;
      font-size: 1.4rem;
    }

    &:hover, &:focus {
      border: 1px solid transparent;
      box-shadow: none;
    }
  }

  .custom-input-number {
    background-color: var(--color-background-gray);
    border-radius: 0.4rem;
    color: var(--color-text-gray);
    font-size: 1.3rem;
    border: 1px solid transparent;
    box-shadow: none;

    &:hover, &:focus {
      border: 1px solid transparent;
    }

    .ant-input-number-group-addon {
      background-color: var(--color-background-gray);
      background-color: transparent;
      border: 1px solid transparent;
      color: var(--color-text-gray);
      font-size: 2rem;
    }

    .ant-input-number-handler-wrap {
      visibility: hidden;
    }
  }

  .custom-select {
    width: 100%;
    font-size: 1.3rem;
    border: 1px solid var(--color-border);
    border-radius: 3px;

    & * {
      color: var(--color-text-gray) !important;
    }
    
    .ant-select-selector {
      border: 1px solid transparent !important;
      outline: none !important;
      border-radius: 0.4rem !important;
      box-shadow: none !important;
      background-color: transparent!important;
    }

    &.ant-select-disabled {
      background: var(--color-background-gray) !important;
      border-radius: 0.4rem !important;

      .ant-select-selector {
        background: transparent !important;
      }
    }
  }

  .custom-time-picker {
    background-color: var(--color-background-gray);
    border-radius: 0.4rem;
    color: var(--color-text-gray);
    border: 1px solid transparent;
    box-shadow: none;
    padding: 7px 11px;

    .ant-picker-input * {
      color: var(--color-text-gray);
      font-size: 1.2rem;
    }

    .ant-picker-separator, .ant-picker-suffix {
      color: var(--color-text-gray);
    }
  }

  .color-picker-popover {
    .ant-popover-inner-content {
      padding: 0;
    }

    .ant-popover-arrow-content {
      --antd-arrow-background-color: var(--color-background-gray);
    }

    .ant-popover-inner {
      background: transparent;
    }

    .sketch-picker  {
      background: var(--color-background-gray) !important;
      border-radius: 0.8rem !important;  
      padding: 1.5rem 1.5rem !important;
      width: 22rem !important;

      input {
        background: var(--color-background-gray) !important;
        color: var(--color-text-gray) !important;
        border: 0.5px solid var(--color-border) !important;
        font-size: 1rem !important; 
        border-radius: 0.3rem !important;
        box-shadow: none !important;

        &:focus-visible {
          outline: none !important;
        }
      }

      label {
        color: var(--color-text-gray) !important;
      }
    }
  }

  .custom-modal {
    color: white;

    .ant-modal-content {
      background-color: var(--color-background-dark);
    }

    .ant-modal-header {
      background-color: var(--color-background-dark);
      border-bottom: 1px solid var(--color-background-gray);
    }

    .ant-modal-title {
      color: white;
    }

    .ant-modal-close-icon {
      color: white;
    }
  }

  /* style for scrollbar */
  ::-webkit-scrollbar {
    width: 0.5rem;
  }

  ::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.17);
    border-radius: 1px;
  }

  ::-webkit-scrollbar-track {
    background: rgba(241, 241, 241, 0.1);
    border-radius: 1px;
  }

  ::-webkit-scrollbar:horizontal {
    height: 0.5rem;
  }

  ::-webkit-scrollbar-thumb:horizontal {
    border-radius: 1px;
  }


  ::-webkit-scrollbar-corner {
    background-color: rgba(241, 241, 241, 0.1) !important;
  }
  .accountWrap {
    background: #FAFAFA;
    min-height: 100vh;
    display: inline-table;
    width: 100%;
  }
  .scroll-custom {
    &::-webkit-scrollbar {
      width: 6px !important;
    }
    &::-webkit-scrollbar-track {
      background: #E7E7E7;
    }
    &::-webkit-scrollbar-thumb {
      background: #B1B1B1;
      border-radius: 5px;
    }
  }

  .apero-notification-snackbar{
    .ant-notification-notice-message{
      margin-bottom: 0px;
      padding-right: 0px;
    }
  }
  .ant-popover-arrow{
   display: none !important;
  }
  .ant-popover-inner{
    background: white !important;
    // width: 525px;
    border-radius: 8px;
    border: 1px solid #E7E7E7;
  }
  
  .modal-social{
    .ant-modal-content {
      border-radius: 12px;
      /* background: red; */
    }
    .ant-modal-header{
      border-radius: 12px;
      border: none;
    }
    .ant-modal-footer{
      border: none;
    }
    &__header{
      display: flex;
      flex-direction: column;
      text-align: center;
      align-items: center;
      img{
        width: 60px;
        height: 60px;
        margin-bottom: 16px;
      }
      span{
        font-family: 'Inter';
        font-style: normal;
        font-weight: 600;
        font-size: 20px;
        line-height: 30px;
        text-align: center;
        color: #313335;
      }
    }
    &__content{
      margin-top: 38px;
      display: flex;
      align-items: start;
      flex-direction: column;
      &__title{
        font-family: 'Inter';
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 20px;
        color: #737373;
        margin-bottom: 12px;
      }
      &__select{
        width: 100%;
        border: 1px solid #EAEAEA;
        border-radius: 4px;
      }
    }
    .back{
      width: 118px;
      height: 44px;
      background: #FFFFFF;
      border: 1px solid #EAEAEA;
      border-radius: 8px;
    }
    .submit{
      width: 118px;
      height: 44px;
      background: #FE2C55;
      border:  1px solid #FE2C55;
      border-radius: 8px;
    }
  }
  .modal_project{
    .ant-modal-content{
      border-radius: 12px;
    }
    .ant-modal-footer{
      display: none;
    }
    .ant-modal-close{
      width: 36px;
      height: 36px;
      background: #E7E7E7;
      border-radius: 100px;
      right: -18px;
      top: -18px;
      .ant-modal-close-x{
        width: 36px;
        height: 36px;
        font-size: 22px;
        line-height: 38px;
      }
    }
    .upload{
      &__file{
        width: 500px;
        height: 300px;
        margin: 16px auto;
        label {
          background: #f7f7f7;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          flex-direction: column;
          text-align: center;
          p {
            font-weight: 600;
            font-size: 14px;
            line-height: 20px;
            color: #62666a;
            margin-top: 20px;
          }
        }
        .ant-spin-nested-loading,
        .ant-spin-container {
          height: 100%;
        }
        img {
          width: 100%;
          height: 100%;
        }
        label {
          height: 100%;
          img {
            width: auto;
            height: auto;
          }
        }
      }
      &__myproject{
        margin-top: 24px;
        height: 300px;
        position: relative;
        h3{
          font-family: 'Inter';
          font-style: normal;
          font-weight: 600;
          font-size: 16px;
          line-height: 24px;
          color: #313335;
        }
        &__content{
          overflow-y: auto;
          white-space: nowrap;
          
          /* transform:rotate(-90deg)  translateY(-245px); */

          display: flex;
          gap: 16px;
          flex-direction: row;
          /* width: 248px;
          max-height: 950px;        
          position: absolute;
          display: block;
          left: 0px; */
          /* transform-origin: right top; */
          .item{
    
            /* transform: rotate(90deg); */
            &__content{
              position: relative;
              width: 128px;
              height: 228px;
              img{
                width: 128px;
                height: 228px;
                border-radius: 3.61538px;
              }
              .duration{
                display: flex;
                flex-direction: row;
                justify-content: center;
                align-items: center;
                padding: 2px 8px;
                position: absolute;
                width: 52px;
                height: 20px;
                background: #32343E;
                border-radius: 4px;
                color: white;
                font-size: 12px;
                position: absolute;
                bottom: 4px;
                left: 4px;
              }
              .plus{
                width: 20px;
                height: 20px;
                position: absolute;
                bottom: 4px;
                right: 4px;
              }
            }
          
          }
        }
        &__content::-webkit-scrollbar-thumb {
          height: 1px;
          overflow: visible;
          background-color: #bcbcbc;
          width: 2px;
          border-radius: 10px;
        }
      }
    }
   
  }
  .ant-popover-message-title{
      color: #333333 !important;
    }
    .select_account_modal{
      .ant-modal-content{
        border-radius: 12px;
      }
      .ant-modal-header{
        border-radius: 12px;
      }
      &__header{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin-bottom: 20px;
      }
      .ant-modal-footer{
        border: none;
      }
      &__bottom{
        .btn{
          width: 171px;
          height: 48px;
          border-radius: 8px;
        }
        .btn-cancel{
          background: #FAFAFA;
        }
        .btn-save{
          background: #FE2C55;
          color: white;
        }
      }
    }

    .detail-calendar{
      top: 32px;
      right: 25px;
      margin: 0px;
      height: calc(100vh - 50px);
      float: right;
      .cursor{
        cursor: pointer;
      }
      .close{
        position: absolute;
        top: -15px;
        right: -15px;
        cursor: pointer;
      }
      .ant-modal-content{
        height: calc(100vh - 50px);
        border-radius: 8px;

        .ant-modal-body{
          border-radius: 8px;
          height: calc(100vh - 50px);
          padding: 0px;
        }
      }
      &__header{
        height: 104px;
        background: #FE2C55;
        border-radius: 8px 8px 0px 0px;
        margin: 0 auto;
        justify-content: space-between;
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 12px;
        span{
          font-family: 'Inter';
          font-style: normal;
          font-weight: 600;
          font-size: 22px;
          line-height: 33px;
          /* identical to box height, or 150% */

          display: flex;
          align-items: center;

          /* Dashboard/Text on Accent */

          color: #FFFFFF;

        }
        img{
          padding-left: 12px;
        }
      }
      &__body{
        height: calc(100vh - 160px);
        overflow: scroll;
        padding: 12px;
        .border-ouline{
          border: 1px solid #E7E7E7;
          border-radius: 8px;
          margin-bottom: 11px;
          .gmfYjR {
            border-radius: 8px;
          }
      }
    }
  }
`;

export { GlobalStyle };
