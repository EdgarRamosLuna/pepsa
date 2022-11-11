import styled from "styled-components";

export const HeaderS = styled.div`
  width: 100%;
  height: 191px;
  background: url("/assets/img/Pepsa_Imagen_Portada.png");
  background-repeat: no-repeat;
  background-size: 101%;
  background-position: -1px 0px;
  margin: 0;
  background-color: #005399;
  @media (max-width: 1580px) {
    background-size: cover;
    background-position: center;
  }
`;
export const MenuS = styled.div`
  width: 100%;
  display: flex;
  background: #005399;
  .menu-container {
    width: 100%;
    li {
      list-style: none;

      a {
        color: #999;
        text-decoration: none;
        text-transform: uppercase;
        font-size: 2em;
        font-family: "CD";
        transition: all 0.3s;
        &:hover {
          transition: all 0.3s;
          color: #fff;
        }
      }
      .active {
        color: #fff;
      }
    }
  }

  ul {
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 120px;
    align-items: center;
    margin: 6px 0;
    padding: 0;
  }
`;

export const FooterS = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  background: #005399;
  color: #fff;
  .footer-container {
    width: 100%;
    display: flex;
    justify-content: space-between;
    max-width: 90%;
    margin: 0 auto;
    height: 300px;
  }
  .footer-item {
    width: auto;
    display: flex;
    flex-direction: column;
  }
  .item-title {
    width: 100%;
    display: flex;
    justify-content: start;
    align-items: center;
    text-transform: uppercase;
    h3 {
      margin-bottom: 0;
      border-bottom: 4px solid #fff;
      padding-bottom: 10px;
      font-size: 2em;
      width: 100%;
    }
  }
  .footer-item:nth-child(1) .item-data {
    gap: 0;
  }
  .item-data {
    padding-top: 15px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 15px;
    * {
      margin: 0;
      padding: 0;
      list-style: none;
      font-size: 1.2em;
      margin-block-start: 0;
      margin-block-end: 0;
      margin-inline-start: 0px;
      margin-inline-end: 0px;
    }
    p {
      display: flex;
      flex-direction: row;
      justify-content: start;
      align-items: center;
      height: 37px;
      gap: 6px;
    }
  }
  p.fb {
    width: 100%;
  }
  p.ig {
    text-transform: uppercase;
  }

  //display: none;
`;
export const LoadingS = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  z-index: 99;
  background: #fff;
  justify-content: center;
  align-items: center;
  display: flex;
  transition: all 0.3s;
  opacity: ${(props) => (props.loaded ? "0" : "1")};
`;

export const NosotroS = styled.div`
  width: 100%;
  img {
    display: block;
    object-fit: cover;
    object-position: center top;
    width: 100%;
  }
  .abaout-us-containter {
    width: 100%;
    max-width: 1500px;
    margin: 40px auto;
  }
  .s1 {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    h1 {
      font-size: 2.5em !important;
      color: #005399;
      position: relative;
      &:before {
        content: "¿Quienes Somos?";
        position: absolute;
        width: 100%;
        white-space: nowrap;
        top: 7px;
        z-index: -1;
        color: #eaeaea;
        left: 0;
        font-size: 1em;
      }
    }
  }
  .s3 {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 50px;
    h1 {
      font-size: 2.5em !important;
      color: #005399;
      position: relative;
      margin: 0;
      &:before {
        content: "Nuestra filosofía";
        position: absolute;
        width: 100%;
        white-space: nowrap;
        top: 7px;
        z-index: -1;
        color: #eaeaea;
        left: 0;
        font-size: 1em;
      }
    }
  }
  .s1-txt h2,
  .s1-txt2 h2 {
    text-shadow: 5px 4px 1px #eaeaea;
  }

  .s1-img {
    width: 50%;
    height: 500px;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      display: block;
      object-fit: cover;
      object-position: center top;
      width: 100%;
    }
  }
  .s1-txt {
    width: 50%;
    flex-direction: column;
    align-content: center;
    text-align: center;
    max-width: 50%;
    font-size: 1.6em;
    height: 500px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .s1-txt h1,
  h2 {
    margin: 0;
  }
  .s1-txt2 {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-size: 1.6em;
    white-space: pre-line;
  }
  .s3-container {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .s3-title {
    h1 {
      font-size: 4.5em !important;
      color: #005399;
      position: relative;
      margin: 0;
    }
  }
  .s3-txt {
    width: 100%;
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    max-width: 1200px;
    font-size: 2em;
    margin-bottom: 10px;
  }
  .s3-img {
    width: 90%;
    display: flex;
    margin: 0 auto;
    img {
      display: block;
      object-fit: cover;
      object-position: center top;
      width: 100%;
    }
  }
`;

export const ServiciosS = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  flex-wrap: wrap;
  margin-bottom: 30px;
  .container-1 {
    width: 100%;
    display: flex;
    padding: 30px 0;
    padding-bottom: 55px;
  }
  .item-txt-container {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
  }
  .item-txt {
    width: 100%;
    text-align: center;
    margin: 0 auto;
    font-size: 2.2em;
    white-space: pre-line;
    max-width: 60%;
    h1,
    p {
      margin: 0;
      padding: 0;
    }
    p {
      font-size: 1.3em;
      max-width: 70%;
      margin: 0 auto;
    }
  }
  .item-img {
    width: 40%;
    box-sizing: border-box;
    padding-right: 25px;
    img {
      width: 100%;
    }
  }
  .container-2 {
    width: 100%;
    display: flex;
    flex-direction: column;
    overflow-x: hidden;
  }
`;
export const Svg = styled.div`
  .cls-1 {
    fill: #005399;
  }
  .cls-2,
  .cls-3 {
    fill: #fff;
  }
  .cls-3 {
    font-size: 29.63px;
    font-family: Poppins-SemiBold, Poppins;
    font-weight: 600;
  }
  .cls-4,
  .cls-5 {
    fill: none;
    stroke: #fff;
    stroke-miterlimit: 10;
  }
  .cls-4 {
    stroke-width: 13.47px;
  }
  .cls-5 {
    stroke-width: 12.75px;
  }
  #_001,
  #_002,
  #_003,
  #_004,
  #_005,
  #_006,
  #_007,
  #_008,
  #_009,
  #_0010,
  #_0011,
  #_0012 {
    transition: all 0.3s;
    &:hover {
      transition: all 0.3s;
      cursor: pointer;
    }
  }
  g#_008 {
    transform: translateY(-4px);
  }
  g#_007 {
    transform: translateY(-4px);
  }
`;

export const PortafolioS = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 50px 0;
  .item-txt {
    font-size: 2.2em;
    width: 50%;
    margin: 0 auto;
      h1, p {
      margin: 0;
      padding: 0;
    }
    p {
      font-size: 1.3em;
    }
  }
`;
