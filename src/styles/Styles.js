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
  display: none;
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
    margin-bottom:50px ;
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
