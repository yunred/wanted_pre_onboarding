import React, { useState } from 'react';
import styled from 'styled-components';
import { imgItems } from '../common/ImgArray';
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
    opacity: 1;
    transform: translate3d(
      calc(-${props => props.size.width}*${props => props.count}*0.9px),
      0px,
      0px
    );
    transform: translateX(${props => props.moveXw});
    width: calc(${props => props.size.width}*${imgItems.length}*0.9px);
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
      text-decoration: none;
      padding: 6px 8px;
      margin: 8px 0;
      font-size: 14px;
      font-weight: 700;
      line-height: 1;
      a {
        color: #36f;
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
`;

function Main({ size }) {
  //let count = 0;
  let [count, setCount] = useState(0);
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
      if (count === 0) setCount(imgItems.length - 1);
      else setCount(count - 1);
    } else if (diffX < 0 && Math.abs(diffX) > size.width * 0.2) {
      console.log(count);
      //count = count === imgItems.length - 1 ? 0 : count + 1;
      if (count === imgItems.length - 1) setCount(0);
      else setCount(count + 1);
    }
  };
  const preventEvent = e => {
    e.preventDefault();
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
                            <a href="/" className="" onClick={preventEvent}>
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
        </div>
      </MainBlock>
    </>
  );
}

export default Main;
