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
  .img_info_box {
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
                        <div className="img_info_box">
                          <div className="img_style">
                            <a href="/" className="" onClick={preventEvent}>
                              <img src={item.src} alt={item.alt} />
                            </a>
                          </div>
                          <div className="img_info">
                            <h1>설명</h1>
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
