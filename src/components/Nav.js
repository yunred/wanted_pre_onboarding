import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Navigation from '../common/Navigation.js';
import useMedia from '../common/useMediaQuery';
import Aside from '../common/Aside.js';

const NavBlock = styled.nav`
  display: flex;
  flex-direction: column;
  margin: 0 auto;

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
    height: 60px;
    width: 100%;
    padding: 15px 0px;
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
    max-heigth: inherit;

    img {
      object-fit: contain;
      margin-left: -70.62px;
      margin-top: -4px;
      max-heigth: 20px;
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
    heigth: 100%;
  }

  li {
    position: relative;
    heigth: inherit;
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
        pointer-event: none;
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
    padding: 0;
    font-weight: normal;
    font-size: 13px;
    line-height: 30px;
  }
  @media screen and (max-width: 767px) {
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

  @media screen and (min-width: 992px) {
    height: 50px;
    width: 90%;
    .MainBar {
      padding: 0;
      height: 50px;
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
      padding: 0;
      height: 30px;
    }
    .noneLgDisplay {
      display: none;
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
        <div className="MainBar">
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
              <Aside pos="top" />
            </>
          ) : (
            <Aside />
          )}
        </div>
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
