import React from 'react';
import styled from 'styled-components';
import ImgRender from '../common/ImgRender';

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
    /**/
    width: calc(${props => props.size.width}*20px);
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
                <ImgRender />
              </div>
            </div>
          </div>
        </div>
      </MainBlock>
    </>
  );
}

export default Main;
