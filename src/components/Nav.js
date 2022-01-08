import React from 'react';
import styled from 'styled-components';

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
    padding: 15px 20px;
  }

  .MainBar_MainBar_nav_top_logo {
    display: flex;
    align-items: center;
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
    heigth: 20px;

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
  }

  li {
    position: relative;
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

  @media screen and (max-width: 767px) {
    .mdDisplay {
      display: none;
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
  }

  @media screen and (min-width: 992px) {
    width: 90%;
    .smDisplay {
      display: none;
    }
    .mdDisplay {
      display: none;
    }
  }
`;

function Nav() {
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
          <button className="signupLogin" type="button">
            회원가입하기
          </button>
        </div>
        <div className="SubBar">
          <ul>
            <li className="smDisplay">
              <a className="home" href="/">
                홈
              </a>
            </li>
            <li>
              <a href="/">채용</a>
            </li>
            <li>
              <a href="/">이벤트</a>
            </li>
            <li className="mdDisplay">
              <a href="/">직군별 연봉</a>
            </li>
            <li className="mdDisplay">
              <a href="/">이력서</a>
            </li>
            <li className="mdDisplay">
              <a href="/">
                커뮤니티
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="11"
                    viewBox="0 0 18 11"
                  >
                    <g
                      fill="none"
                      fill-rule="evenodd"
                      font-family="AppleSDGothicNeo-SemiBold, Apple SD Gothic Neo"
                      font-size="9"
                      font-weight="500"
                    >
                      <g fill="#36F">
                        <g>
                          <g>
                            <g>
                              <g>
                                <g>
                                  <g>
                                    <text transform="translate(-931.000000, -13.000000) translate(224.000000, 7.000000) translate(210.000000, 6.000000) translate(350.000000, 0.000000) translate(147.000000, 0.000000)">
                                      <tspan x="0" y="8">
                                        New
                                      </tspan>
                                    </text>
                                  </g>
                                </g>
                              </g>
                            </g>
                          </g>
                        </g>
                      </g>
                    </g>
                  </svg>
                </span>
              </a>
            </li>
            <li className="mdDisplay">
              <a href="/">프리랜서</a>
            </li>
            <li className="mdDisplay">
              <a href="/">
                AI 합격예측
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="11"
                    viewBox="0 0 18 11"
                  >
                    <g
                      fill="none"
                      fill-rule="evenodd"
                      font-family="AppleSDGothicNeo-SemiBold, Apple SD Gothic Neo"
                      font-size="9"
                      font-weight="500"
                    >
                      <g fill="#36F">
                        <g>
                          <g>
                            <g>
                              <g>
                                <g>
                                  <g>
                                    <text transform="translate(-931.000000, -13.000000) translate(224.000000, 7.000000) translate(210.000000, 6.000000) translate(350.000000, 0.000000) translate(147.000000, 0.000000)">
                                      <tspan x="0" y="8">
                                        Beta
                                      </tspan>
                                    </text>
                                  </g>
                                </g>
                              </g>
                            </g>
                          </g>
                        </g>
                      </g>
                    </g>
                  </svg>
                </span>
              </a>
            </li>
          </ul>
          <aside>
            <ul>
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
              <li>
                <button className="menuButton">
                  <svg
                    width="18"
                    height="18"
                    xmlns="http://www.w3.org/2000/svg"
                  >
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
            </ul>
          </aside>
        </div>
      </NavBlock>
    </>
  );
}
export default Nav;
