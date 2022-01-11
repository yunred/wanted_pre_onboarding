import React from 'react';
import styled from 'styled-components';
import Navigation from '../common/Navigation.js';
import useMedia from '../common/useMediaQuery';
import Aside from '../common/Aside.js';

const NavBlock = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;

  *:before,
  *:after {
    box-sizing: border-box;
  }

  ::after {
    display: block;
    height: 0.3px;
    /*부모width에 상관없이 width 100%*/
    width: 100vw;
    margin-left: calc(-50vw + 50%);
    content: '';
    background-color: #e1e2e3;
  }
  button {
    margin: 0;
    padding: 0;
    border: none;
    width: auto;
    background: none;
    cursor: pointer;
  }

  .MainBar {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .MainBar_MainBar_nav_top_logo {
    display: flex;
    align-items: center;
    height: inherit;
  }
  .MainBar_hamberger {
    margin-top: -2px;
    margin-right: 15px;

    img {
      width: 17px;

      object-fit: contain;
    }
  }
  .logo_new {
    width: 100px;
    overflow: hidden;

    img {
      object-fit: contain;
      margin-left: -70.62px;
    }
  }
  .signupLogin {
    color: rgb(51, 102, 255);
    font-size: 14px;
    line-height: 32px;
    height: 34px;
    border: 1px solid rgb(51, 102, 255);
    border-radius: 17px;
    padding: 0px 14px;
  }

  .SubBar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: inherit;
  }

  ul {
    display: flex;
    list-style: none;
    height: 100%;
  }

  li {
    display: flex;
    position: relative;
    height: inherit;
    a {
      cursor: point;
      text-decoration: none;
      color: rgb(68, 68, 68);
      padding: 11px 10px 19px;
      font-weight: 600;
      display: inline-block;
      span {
        position: absolute;
        top: 5px;
        right: -7px;
        pointer-events: none;
      }
    }
    .home {
      padding-left: 20px;
    }
  }

  .searchButton {
    padding: 0 5px;
  }

  .menuButton {
    padding: 0 5px 0 10px;
    margin-right: 10px;
  }

  .asideUL {
    line-height: 30px;
  }
  .dashboardButton {
    font-weight: 400;
    font-size: 13px;
    line-height: 30px;
    height: 30px;
    border: 1px solid #e1e2e3;
    border-radius: 15px;
    color: #666;
    padding: 0 10px;
    margin-left: 15px;
  }
  .dashboard_left_divison::before {
    display: block;
    width: 1px;
    height: 10px;
    content: '';
    margin: auto 10px;
    background-color: #e1e2e3;
  }

  @media screen and (max-width: 767px) {
    .MainBar {
      height: 60px;
      width: 100%;
      padding: 15px 0px;
    }
    .mdDisplay {
      display: none;
    }
    .lgDisplay {
      display: none;
    }
    .MainBar {
      padding: 15px 0px;
    }
  }

  @media screen and (min-width: 768px) and (max-width: 991px) {
    width: 90%;
    .MainBar {
      height: 60px;
      width: 100%;
      padding: 15px 0px;
    }
    .smDisplay {
      display: none;
    }
    .mdDisplay {
      display: block;
    }
    .lgDisplay {
      display: none;
    }
  }

  @media screen and (min-width: 992px) and (max-width: 1199px) {
    width: 90%;
    height: 50px;
    .MainBar {
      padding: 0;
      height: inherit;
    }
    .smDisplay {
      display: none;
    }
    .lgDisplay {
      display: block;
    }
    .signupLogin {
      color: rgb(68, 68, 68);
      border: none;
      padding: 0 10px;
      height: 30px;
      margin-right: 6px;
      font-size: 14px;
      line-height: 1;
      font-weight: 600;
    }
    .noneLgDisplay {
      display: none;
    }
    .nav_ul > li > a {
      padding: 15px 0px;
    }
    .nav_ul {
      display: flex;
      justify-content: space-evenly;
      flex: 1;
    }
  }
  @media screen and (min-width: 1200px) {
    width: 90%;
    .nav_ul li a {
      padding: 15px;
    }
    .signupLogin {
      color: rgb(68, 68, 68);
      border: none;
      padding: 0 10px;
      height: 30px;
      margin-right: 6px;
      font-size: 14px;
      line-height: 1;
      font-weight: 600;
    }
  }
`;

function Nav() {
  let sm = useMedia('(max-width: 767px)');
  let md = useMedia('(min-width: 768px) and (max-width: 991px)');
  let lg = useMedia('(min-width: 992px)');

  return (
    <>
      <NavBlock>
        <nav className="MainBar">
          <div className="MainBar_MainBar_nav_top_logo">
            <button type="button" className="MainBar_hamberger">
              <img
                src={'https://static.wanted.co.kr/images/icon-menu.png'}
                alt="hamberger menu"
              />
            </button>
            <button type="button" href="/" className="logo_new">
              <img
                src={
                  'https://s3.ap-northeast-2.amazonaws.com/static.wanted.co.kr/images/logo_wanted_black.png'
                }
                alt="main logo"
              />
            </button>
          </div>
          {lg ? (
            <>
              <Navigation />
              <Aside />
            </>
          ) : (
            <Aside />
          )}
        </nav>
        {lg ? null : (
          <>
            <div className="SubBar">
              <Navigation />
              <Aside pos="bottom" />
            </div>
          </>
        )}
      </NavBlock>
    </>
  );
}
export default Nav;
