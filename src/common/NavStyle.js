import styled from 'styled-components';

export const NavBlock = styled.div`
  display: flex;
  width: 100%;
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
      border-bottom: 2px solid rgb(51, 102, 255);
    }
  }

  /*Aside.js*/
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
  .hasNewNotificationAlarm {
    position: relative;
    vertical-align: middle;
  }
  .hasNewNotificationAlarm_button {
    position: relative;
    padding: 0, 5px;
  }

  .newBadge {
    position: absolute;
    top: -4px;
    left: 16px;
    background-color: rgb(51, 102, 255);
    color: #fff;
    font-weight: bold;
    font-size: 5px;
    width: 13px;
    height: 13px;
    line-height: normal;
    padding-left: 2px;
    border-radius: 5px;
  }
  .avatarImage {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    border: 1px solid #e1e2e3;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 28px;
      height: 28px;
      border-radius: 50%;
      background-size: cover;
    }
  }
  .newBadge_avatar {
    top: -2px;
    left: 22px;
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
      padding: 15px 20px;
    }
    .mdDisplay {
      display: none;
    }
    .lgDisplay {
      display: none;
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
    .noneLgDisplay {
      display: none;
    }
    .nav_ul {
      display: flex;
      justify-content: space-evenly;
      flex: 1;
    }
    .nav_ul > li > a {
      padding: 15px 0px;
    }
    .nav_ul li a > span {
      right: -20px;
    }
    .hasNewNotificationAlarm_button {
      margin: 5px 10px 0 0;
      padding: 0 10px;
    }

    .newBadge {
      top: -4px;
      left: 24px;
    }
  }
  @media screen and (min-width: 1200px) {
    width: 100%;
    .smDisplay {
      display: none;
    }
    .MainBar {
      margin: 0 auto;
      height: 50px;
      width: 1060px;
      position: relative;
    }
    .nav_ul li a {
      padding: 15px;
    }
    .asideUL button {
      padding: 0 10px;
    }
    .hasNewNotificationAlarm_button {
      margin: 5px 10px 0 0;
      padding: 0 10px;
    }

    .newBadge {
      top: -4px;
      left: 24px;
    }
    .newBadge_avatar {
      top: -1px;
      left: 32px;
    }
  }
`;

export const AsideBlock = styled.aside`
  display: flex;
  padding: 9px 0px;
  height: 100%;
  ul {
    display: flex;
    align-items: center;
  }
`;
