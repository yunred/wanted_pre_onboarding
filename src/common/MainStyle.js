import styled, { css } from 'styled-components';
import { imgItems } from '../common/ImgArray';

export const MainBlock = styled.main`
  button {
    border: none;
  }
  .topBanner {
    position: relative;
    overflow: hidden;
  }

  .img_slider {
    position: relative;
    display: block;
    box-sizing: border-box;
  }
  .img_list {
    position: relative;
    padding: 0px 40px; //고정
    display: block;
    overflow: hidden;
  }

  .img_track {
    position: relative;
    left: 0;
    top: 0;
    display: block;
    opacity: 1;
    ${props =>
      props.isSideImg === true
        ? css`
            transition: 0ms;
          `
        : css`
            transition: transform 500ms ease;
          `}
    transform: translate3d(
      calc((${props => props.size.width}px - 80px) * (-${props =>
      props.count})),
      0px,
      0px
    );
    width: calc((${props => props.size.width}px - 80px) * ${imgItems.length});
  }

  .img_track::before {
    content: '';
    display: table;
  }
  .img_content {
    display: table;
    width: calc(${props => props.size.width}px - 80px);
    float: left;
  }
  .img_content > div {
    margin: 20px 10px;
  }
  .img_info_content {
    width: 100%;
    display: inline-block;
  }

  /*최대 최소 높이를 같게*/
  .img_style {
    img {
      display: inline-block;
      height: 100%;
      width: 100%;
      max-height: 183px;
      min-height: 183px;
      border-radius: 4px;
      object-fit: cover;
    }
  }
  /*배너 이미지 정보*/
  .img_info {
    text-align: center;
    overflow: hidden;
    h2 {
      margin-top: 20px;
      font-size: 18px;
      line-height: 1;
      font-weight: 700;
      color: #333;
    }
    h3 {
      margin-top: 6px;
      font-size: 13px;
      font-weight: 500;
      line-height: 1.15;
      color: #666;
    }
    hr {
      display: none;
      height: 1px;
    }
    .info_button {
      position: relative;
      justify-content: center;
      vertical-align: middle;

      padding: 6px 8px;
      margin: 8px 0;
      font-size: 14px;
      font-weight: 700;
      line-height: 1;
      a {
        color: #36f;
        text-decoration: none;
      }

      span {
        width: 100%;
        font-size: inherit;
        font-weight: inherit;
      }
    }
    .info_button_text {
      margin-right: 2px;
      margin-top: 4px;
      margin-bottom: 4px;
    }
    .arrow_icon {
      margin-top: -2px;
      margin-right: -1px;
      margin-left: -1px;
    }
    .arrow_icon_root_svg {
      object-fit: contain;
      width: 1em;
      height: 1em;
      user-select: none;
      display: inline-block;
      fill: #36f;
    }
  }
  /*배너 슬라이드 버튼*/
  .topBanner_arrow_button {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 120px;
    width: 30px;
    height: 60px;
    opacity: 0.5;
    border-radius: 15px;
    background-color: #fff;
    font-size: 16px;
  }
  .left_button {
    left: calc((100% - 1210px) / 2);
  }
  .right_button {
    right: calc((100% - 1200px) / 2);
  }
  .slide_button_root {
    width: 100%;
    display: flex;
    justify-content: inherit;
    align-items: inherit;
  }
  .slide_button_root_svg {
    user-select: none;
    width: 1em;
    height: 1em;
    fill: currentColor;
    font-size: inherit;
  }
  /*배너 활성화 스타일*/
  .notActive {
    filter: brightness(0.5);
    .img_info {
      display: none;
    }
  }
  @media screen and (min-width: 1200px) {
    .topBanner {
      height: auto;
    }
    .img_content {
      position: relative;
      width: 1060px;
      z-index: auto;
    }
    .img_track {
      opacity: 1;
      transform: translate3d(calc(-${props => props.count}*1060px), 0px, 0px);
      transform: translateX(${props => props.moveX});
      width: calc(1060px * ${imgItems.length});
    }
    .img_list {
      /*이미지 슬라이드 시작점의 padding을 반응형으로 조절해서 중앙배치*/
      padding: 0px calc((100% - 1060px) / 2);
    }
    .img_style {
      img {
        max-height: 300px;
        min-height: 300px;
        width: 100%;
      }
      hr {
        display: block;
      }
    }
    .slick-slider .img_content .topBanner {
      padding: 0 12px;
      box-sizing: content-box;
    }
    .img_info {
      position: absolute;
      z-index: 1;
      bottom: 48px;
      left: 34px;
      height: 146px;
      width: 330px;
      border-radius: 4px;
      background-color: #fff;
      opacity: 1;
      text-align: left;
      h2 {
        margin: 20px 20px 0 20px;
        font-size: 20px;
        line-height: 1.5;
      }
      h3 {
        margin: 0 20px;
        height: 44px;
        font-size: 14px;
        line-height: 1.64;
        color: #333;
      }
      hr {
        display: block;
        border: none;
        background-color: #ececec;
      }
      .info_button {
        margin: 6px 0 0 13px;
      }
    }
  }
`;
