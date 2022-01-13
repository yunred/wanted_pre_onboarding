import React from 'react';
import Navigation from '../common/Navigation.js';
import useMedia from '../common/useMediaQuery';
import Aside from '../common/Aside.js';
import { NavBlock } from '../common/NavStyle.js';

function Nav() {
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
          ) : null}
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
