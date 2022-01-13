import React, { useState, useEffect, useRef } from 'react';
import { imgItems } from '../common/ImgArray';
import useMedia from '../common/useMediaQuery';
import { MainBlock } from '../common/MainStyle';

function Main({ size }) {
  let mainLg = useMedia('(min-width: 1200px)');

  let [count, setCount] = useState(1);
  const [isDrag, setIsDrag] = useState(false);
  const [startX, setStartX] = useState();
  const [isStop, setIsStop] = useState(false);
  const [isSideImg, setIsSideImg] = useState(false);

  /*스와이프 이벤트*/
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
      moveX = e.clientX;
    }
  };
  const onImgDragEnd = e => {
    e.preventDefault();
    setIsDrag(false);
    endX = e.pageX;
    let diffX = endX - startX;
    console.log(size.width);
    if (diffX > 0 && Math.abs(diffX) > size.width * 0.2) {
      onLeftClick();
    } else if (diffX < 0 && Math.abs(diffX) > size.width * 0.2) {
      onRightClick();
    }
  };
  const preventEvent = e => {
    e.preventDefault();
  };

  /*슬라이드 이벤트 및 무한 루프 슬라이드*/
  const onLeftClick = () => {
    if (count === 1) {
      //두 번째 실행
      setTimeout(() => {
        setIsSideImg(true);
        setCount(imgItems.length - 2);
      }, 300);
      //첫 번째 실행
      setIsSideImg(false);
      setCount(count - 1);
    } else {
      setIsSideImg(false);
      setCount(count - 1);
    }
  };
  const onRightClick = () => {
    if (count === imgItems.length - 2) {
      setTimeout(() => {
        setIsSideImg(true);
        setCount(1);
      }, 300);
      setIsSideImg(false);
      setCount(count + 1);
    } else {
      setIsSideImg(false);
      setCount(count + 1);
    }
  };

  /*자동 슬라이드 마우스 오버시 일시정지 */
  const onImgDragStop = () => {
    setIsStop(true);
  };
  const onImgDragReStart = () => {
    setIsStop(false);
  };

  /*자동 슬라이드 구현*/
  useInterval(
    () => {
      onRightClick();
    },
    isStop ? null : 5000
  );

  function useInterval(callback, delay) {
    const savedCallback = useRef();
    useEffect(() => {
      savedCallback.current = callback; //onRightClick
    });
    useEffect(() => {
      function tick() {
        savedCallback.current();
      }
      if (delay !== null) {
        let id = setInterval(tick, delay); //onRightClick 실행
        return () => clearInterval(id);
      }
    }, [delay]); //delay로 setInterval 처럼 구현
  }

  return (
    <>
      <MainBlock size={size} count={count} moveX={moveX} isSideImg={isSideImg}>
        <div className="topBanner">
          <div className="img_slider">
            <div className="img_list">
              <div
                className="img_track"
                onMouseDown={onImgDragStart}
                onMouseUp={onImgDragEnd}
                onMouseMove={onImgDragMove}
                onMouseOver={onImgDragStop}
                onMouseOut={onImgDragReStart}
              >
                {imgItems.map((item, index) => {
                  return (
                    <div
                      className={`img_content ${
                        index === count ? null : 'notActive'
                      }`}
                      key={index}
                    >
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
                  <svg className="slide_button_root_svg" viewBox="0 0 18 18">
                    <path d="m6.045 9 5.978-5.977a.563.563 0 1 0-.796-.796L4.852 8.602a.562.562 0 0 0 0 .796l6.375 6.375a.563.563 0 0 0 .796-.796L6.045 9z"></path>
                  </svg>
                </span>
              </button>
              <button
                className="topBanner_arrow_button right_button"
                onClick={onRightClick}
              >
                <span className="slide_button_root">
                  <svg className="slide_button_root_svg" viewBox="0 0 18 18">
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
