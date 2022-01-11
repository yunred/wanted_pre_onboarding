import React, { useState } from 'react';
import styled from 'styled-components';
import { imgItems } from '../common/ImgArray';
import useMedia from '../common/useMediaQuery';

const MainBlock = styled.main`
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
    padding: 0px 40px;
    display: block;
    overflow: hidden;
  }

  .img_track {
    position: relative;
    left: 0;
    top: 0;
    display: block;
    opacity: 1;
    transform: translate3d(
      calc(-${props => props.size.width}*${props => props.count}*0.9px),
      0px,
      0px
    );
    transform: translateX(${props => props.moveXw});
    width: calc(${props => props.size.width}*${imgItems.length}*0.9px);
  }

  .img_track::before {
    content: '';
    display: table;
  }
  .img_content {
    display: table;
    width: calc(${props => props.size.width}*0.9px);

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
  .img_info {
    text-align: center;
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
  @media screen and (min-width: 1200px) {
    .topBanner {
      height: auto;
    }
    .img_content {
      width: 1060px;
    }
    .img_track {
      opacity: 1;
      transform: translate3d(calc(-${props => props.count}*1060px), 0px, 0px);
      /* transform: translate3d(
        calc(
          -${props => props.count}*1060px + (
              ${props => props.size.width}-1200px
            ) / 2
        ), */
        0px,
        0px
      );
      transform: translateX(${props => props.moveX});
      width: calc(1060px * ${imgItems.length});
    }
    .img_list {
      padding: 0px 50px;
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
  }
`;

function Main({ size }) {
  let mainLg = useMedia('(min-width: 1200px)');

  let [count, setCount] = useState(1);
  const [isDrag, setIsDrag] = useState(false);
  const [startX, setStartX] = useState();
  let endX, moveX;
  const onImgDragStart = e => {
    e.preventDefault();
    setIsDrag(true);
    setStartX(e.pageX);
    return startX;
  };
  const onImgDragMove = e => {
    e.preventDefault();
    if (isDrag) {
      moveX = parseInt(e.clientX);
    }
  };
  const onImgDragEnd = e => {
    e.preventDefault();
    setIsDrag(false);
    endX = e.pageX;
    let diffX = endX - startX;
    console.log(size.width);
    if (diffX > 0 && Math.abs(diffX) > size.width * 0.2) {
      console.log(count);
      //count = count === 0 ? imgItems.length - 1 : count - 1;
      //count는 0 부터 length-1 까지
      if (count === 1) setCount(imgItems.length - 2);
      else setCount(count - 1);
    } else if (diffX < 0 && Math.abs(diffX) > size.width * 0.2) {
      console.log(count);
      //count = count === imgItems.length - 1 ? 0 : count + 1;
      if (count === imgItems.length - 2) setCount(1);
      else setCount(count + 1);
    }
  };
  const preventEvent = e => {
    e.preventDefault();
  };
  const onLeftClick = () => {
    if (count === 1) setCount(imgItems.length - 2);
    else setCount(count - 1);
  };
  const onRightClick = () => {
    if (count === imgItems.length - 2) setCount(1);
    else setCount(count + 1);
  };

  return (
    <>
      <MainBlock size={size} count={count} moveX={moveX}>
        <span>{size.width}</span>
        <div className="topBanner">
          <div className="img_slider">
            <div className="img_list">
              <div
                className="img_track"
                onMouseDown={onImgDragStart}
                onMouseUp={onImgDragEnd}
                onMouseMove={onImgDragMove}
              >
                {imgItems.map((item, index) => {
                  return (
                    <div className="img_content" key={index}>
                      <div>
                        <div className="img_info_content">
                          <div className="img_style">
                            <a href="/" onClick={preventEvent}>
                              <img src={item.src} alt={item.alt} />
                            </a>
                          </div>
                          <div className="img_info">
                            <h2>{item.h2}</h2>
                            <h3>{item.h3}</h3>
                            <hr />
                            <div className="info_button">
                              <a href="/">
                                <span className="info_button_text">
                                  바로가기
                                </span>
                                <span className="arrow_icon">
                                  <span className="arrow_icon_root">
                                    <svg
                                      className="arrow_icon_root_svg"
                                      viewBox="0 0 18 18"
                                    >
                                      <path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z"></path>
                                    </svg>
                                  </span>
                                </span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          {mainLg ? (
            <>
              <button
                className="topBanner_arrow_button left_button"
                onClick={onLeftClick}
              >
                <span className="slide_button_root">
                  <svg className="arrow_icon_root_svg" viewBox="0 0 18 18">
                    <path d="m6.045 9 5.978-5.977a.563.563 0 1 0-.796-.796L4.852 8.602a.562.562 0 0 0 0 .796l6.375 6.375a.563.563 0 0 0 .796-.796L6.045 9z"></path>
                  </svg>
                </span>
              </button>
              <button
                className="topBanner_arrow_button right_button"
                onClick={onRightClick}
              >
                <span className="slide_button_root">
                  <svg className="arrow_icon_root_svg" viewBox="0 0 18 18">
                    <path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z"></path>
                  </svg>
                </span>
              </button>
            </>
          ) : null}
        </div>
      </MainBlock>
    </>
  );
}

export default Main;
