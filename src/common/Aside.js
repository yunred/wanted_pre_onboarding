import React from 'react';
import useMedia from '../common/useMediaQuery';
import styled from 'styled-components';

const AsideBlock = styled.aside`
  padding: 10px 0px;
  height: 50px;
  ul {
    display: flex;
    align-items: center;
  }

  .dashboardButton {
    :before {
      content: '|';
    }
  }
`;

function Aside(props) {
  let lg = useMedia('(min-width: 992px)');
  return (
    <>
      <AsideBlock>
        <ul className="asideUL">
          {!lg && !props.pos ? null : (
            <li>
              <button className="searchButton">
                <svg
                  xmlns="https://www.w3.org/2000/svg"
                  xmlnsXlink="https://www.w3.org/1999/xlink"
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                >
                  <defs>
                    <path
                      id="qt2dnsql4a"
                      d="M15.727 17.273a.563.563 0 10.796-.796l-4.875-4.875-.19-.165a.563.563 0 00-.764.028 5.063 5.063 0 111.261-2.068.562.562 0 101.073.338 6.188 6.188 0 10-1.943 2.894l4.642 4.644z"
                    ></path>
                  </defs>
                  <g fill="none" fill-rule="evenodd">
                    <use
                      fill="#333"
                      fill-rule="nonzero"
                      stroke="#333"
                      stroke-width=".3"
                      xlinkHref="#qt2dnsql4a"
                    ></use>
                  </g>
                </svg>
              </button>
            </li>
          )}
          {props.pos ? null : (
            <>
              <li>
                <button className="signupLogin" type="button">
                  {lg ? '회원가입/로그인' : '회원가입하기'}
                </button>
              </li>
            </>
          )}
          {props.pos === 'bottom' ? (
            <li>
              <button className="menuButton noneLgDisplay">
                <svg width="18" height="18" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <path
                      d="M9 7.5a1.5 1.5 0 1 1-.001 3.001A1.5 1.5 0 0 1 9 7.5zm5.05 0a1.5 1.5 0 1 1-.001 3.001A1.5 1.5 0 0 1 14.05 7.5zM4 7.5a1.5 1.5 0 1 1-.001 3.001A1.5 1.5 0 0 1 4 7.5z"
                      id="a"
                    ></path>
                  </defs>
                  <g fill="none" fill-rule="evenodd">
                    <mask id="b" fill="#fff">
                      <use xlinkHref="#a"></use>
                    </mask>
                    <use fill="#333" xlinkHref="#a"></use>
                    <g mask="url(#b)" fill="#333">
                      <path d="M0 0h18v18H0z"></path>
                    </g>
                  </g>
                </svg>
              </button>
            </li>
          ) : null}
          {lg ? (
            <li>
              <a className="dashboardButton" href="/">
                기업서비스
              </a>
            </li>
          ) : null}
        </ul>
      </AsideBlock>
    </>
  );
}

export default Aside;
