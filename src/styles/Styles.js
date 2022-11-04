import styled from "styled-components";

export const HeaderS = styled.div`
  width: 100%;
  height: 191px;
  background: url("/assets/img/Pepsa_Imagen_Portada.png");
  background-repeat: no-repeat;
  background-size: 101%;
  background-position: -1px 0px;
  margin: 0;
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
        color: #fff;
        text-decoration: none;
        text-transform: uppercase;
        font-size: 2em;
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
width:100%;
position: relative;

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
  opacity:${props => props.loaded ? "0":"1"} ;
`;