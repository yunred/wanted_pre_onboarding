import React from 'react';
import styled from 'styled-components';
import ImgRender from '../common/ImgRender';
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
    /*
    transform: translate3d(calc(-${props => props.size.width}*0.9px), 0px, 0px);
    */
    width: calc(${props => props.size.width}*${imgItems.length}px);
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
  //let size = useWindowSize();

  return (
    <>
      <MainBlock size={size}>
        <span>{size.width}</span>
        <div className="topBanner">
          <div className="img_slider">
            <div className="img_list">
              <div className="img_track">
                <ImgRender imgItems={imgItems} />
              </div>
            </div>
          </div>
        </div>
      </MainBlock>
    </>
  );
}

export default Main;
