import styled from "styled-components";
export const MainStyle = styled.div`
.outlet{
  display: flex;
  @media(max-width:680px){
    margin-top: 70px;
  }
}

`;
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
  @media (max-width: 1380px) {
    height: 115px;
  }
  @media (max-width: 880px) {
    height: 75px;
  }
  @media (max-width: 680px) {
    display: none;
  }
`;
export const MenuMobile = styled.div`
display:flex;
cursor: pointer;
.menu-button {
  width: 40px;
  height: 30px;
  position: relative;
  display: none;
  scale: 0.8;
  @media(max-width:680px){
    display: block;
  }
  /* additional styles */
}


.menu-line {
  width: 100%;
  height: 3px;
  background-color: #fff;
  margin: 5px 0;
  position: relative;
  transition: all 0.2s ease-in-out;
  top: 33.33%;
}

.menu-button:before {
  content: "";
  position: absolute;
  width: 100%;
  height: 3px;
  background-color: #fff;
  top: 0%;
  left: 0%;

  transition: all 0.2s ease-in-out;

}

.menu-button:after {
  content: "";
  position: absolute;
  width: 100%;
  height: 3px;
  background-color: #fff;
  top:100%;
  left: 0%;
  
  transition: all 0.2s ease-in-out;
}


  .a-menu-button:before {
  transform: translateX(0%) rotate(45deg);
  top: 50%;
  transition: all 0.2s ease-in-out;
  
}

.a-menu-button > .menu-line {
  transform: translateX(0%) rotate(45deg);
  top: 50%;
  transition: all 0.2s ease-in-out;
  opacity: 0;
  
}
.a-menu-button:after {
  transform: translateX(0%) rotate(-45deg);
  top: 50%;
  transition: all 0.2s ease-in-out;
  
}

`;
export const MenuS = styled.div`
  width: 100%;
  display: flex;
  background: #005399;

  @media(max-width:680px){
    min-height: 70px;
    align-items: center;
    position: fixed;
    z-index: 99;
    top: 0;
    box-shadow: rgba(0, 0, 0, 0.3) 0px 1px 2px 0px;
  }
  .logo-mobile {
    width: 50px;
    background: #fff;
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .menu-container-mobile {
    display: none;
    ul{
      @media(max-width:680px){
        display: flex;
        flex-direction: column;
        width: 50%;
        position: absolute;
        width: 100%;
        left: 100%;
        top: 70px;
        margin: 0 0;
        background: #005399;
        gap: 25px;
        padding: 10px 0;
        box-shadow: rgba(0, 0, 0, 0.3) 0px 1px 2px 0px;
        
      }
        }
    li {
      list-style: none;

      a {
        color: #999;
        text-decoration: none;
        text-transform: uppercase;
        font-size: 2em;
        font-family: "CD";
        transition: all 0.3s;
        @media(max-width:1380px){ 
          font-size: 1.5em;
        }
        @media(max-width:980px){ 
          font-size: 1em;
        }
        &:hover {
          transition: all 0.3s;
          color: #fff;
        }
      }
      .active {
        color: #fff;
      }
    }
    @media(max-width:680px){
      display: flex;
      width: 90%;
      justify-content: space-between;
      margin: 0 auto;
      align-items: center;
    }
  }
  .menu-container {
    width: 100%;
    @media(max-width:680px){
      display:none;
      
    }
    li {
      list-style: none;

      a {
        color: #999;
        text-decoration: none;
        text-transform: uppercase;
        font-size: 2em;
        font-family: "CD";
        transition: all 0.3s;
        @media(max-width:1380px){ 
          font-size: 1.5em;
        }
        @media(max-width:980px){ 
          font-size: 1em;
        }
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
    @media(max-width: 880px) {
      gap: 60px;
    }
    
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
    @media(max-width:1580px){
      height:200px;
    }
    @media(max-width:1080px){
      max-width:100%;
    }
    @media(max-width:980px){
      height:auto;
      flex-wrap: wrap;
      padding: 10px 0;
      padding-bottom: 20px;
    }
  }
  .footer-item {
    width: auto;
    display: flex;
    flex-direction: column;
    @media(max-width:1580px){
      box-sizing: border-box;
      padding: 0 25px;
      font-size: 0.8em;
    }
    @media(max-width:1180px){
      font-size: 0.7em;
    }
    @media(max-width:980px){
      width: 50%;
    }
    @media(max-width:580px){
      font-size: 0.6em;
    }
    @media(max-width:480px){
      font-size: 0.7em;
      width: 100%;
    }
  }
  .item-link {
    display: flex;
    flex-direction: column;
    transition: all 0.3s;
    cursor: pointer;
    &:hover{
      *{

        transition: all 0.3s;
        color: #dbdbdb;
      }
    }
    a {
      text-decoration: none;
      color: #fff;
    }
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
      @media(max-width:1580px){
        font-size: 1.1em;
      }
    }
    p {
      display: flex;
      flex-direction: row;
      justify-content: start;
      align-items: center;
      height: 37px;
      gap: 6px;
      @media(max-width:980px){
        height: auto;
        gap: 14px;
      }
    }
  }
  p.fb {
    width: 100%;
    transition: all 0.3s;
    cursor: pointer;
    &:hover{
      transition: all 0.3s;
      color: #dbdbdb;
    }
  }
  p.ig {
    text-transform: uppercase;
    transition: all 0.3s;
    cursor: pointer;
    &:hover{
      transition: all 0.3s;
      color: #dbdbdb;
    }
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
    @media(max-width:680px){
      margin: 0px 0;
      padding: 25px 0;
      //margin-bottom: 15px;
    }
  }
  .s1 {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    @media(max-width:1580px){
      width: 90%;
      margin: 0 auto;
    }
    @media(max-width:680px){
      gap: 5px;
    }
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
    margin: 30px 0;
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
    @media(max-width:1024px){
      text-align:left;
    }
  }

  .s1-img {
    width: 50%;
    height: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
    @media(max-width:680px){
        width: 100%;
        height: auto;
    }
    img {
      display: block;
      object-fit: contain;
      object-position: center top;
      width: 50%;
      @media(max-width:1380px){
        width: 70%;
      }
      @media(max-width:680px){
        width: 70%;
      }
    }
  }
  .s1-txt {
    width: 50%;
    flex-direction: column;
    align-content: center;
    text-align: center;
    max-width: 50%;
    font-size: 1.2em;
    height: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
    @media(max-width:1580px){
      font-size: 1em;
    }
    @media(max-width:1180px){
      font-size: 0.8em;
    }
    @media(max-width:880px){
      font-size: 0.7em;
    }
    @media(max-width:680px){
      font-size: 0.6em;
      width: 100%;
      max-width: 100%;
      align-items: start;
      height:auto;
    }
    @media(max-width:480px){
      font-size: 0.6em;
    }
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
    font-size: 1.2em;
    white-space: pre-line;
    @media(max-width:1580px){
      font-size: 1em;
    }
    @media(max-width:1180px){
      font-size: 0.8em;
    }
    @media(max-width:880px){
      font-size: 0.7em;
    }
    @media(max-width:680px){
      font-size: 0.6em;
    }
    @media(max-width:480px){
      font-size: 0.6em;
    }
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
      font-size: 2.5em !important;
      color: #005399;
      position: relative;
      margin: 0;
      @media(max-width:1380px){
        font-size: 2em !important;
      }
      @media(max-width:1180px){
        font-size: 1.7em !important;
      }
      @media(max-width:980px){
        font-size: 1.4em !important;
      }
      @media(max-width:680px){
        font-size: 1.2em !important;
      }
      @media(max-width:480px){
    //    font-size: 1.2em !important;
      }
    }
  }
  .s3-txt {
    width: 100%;
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    max-width: 1200px;
    font-size: 1.2em;
    margin-bottom: 10px;
    @media(max-width:1180px){
      font-size: 1em;
    }
    @media(max-width:980px){
      font-size: 0.8em;
      width: 90%;
    }
    @media(max-width:680px){
      font-size: 0.7em;
    }
    @media(max-width:480px){
      font-size: 0.6em;
    }
  }
  .s3-img {
    width: 90%;
    display: flex;
    margin: 0 auto;
    justify-content: center;
    img {
      display: block;
      object-fit: cover;
      object-position: center top;
      width: 80%;
    }
  }
  .s2-items-container {
    display: flex;
    flex-wrap: wrap;
    background: #005399;
    justify-content: space-evenly;
    width: 80%;
    margin: 0 auto;
    @media(max-width:1180px){
      width: 100%;
    }
  }
  .item2-img {
    max-width: 20.33%;
    width: 100%;
    @media(max-width:680px){
      //max-width: 50%;
    }
    @media(max-width:480px){
      max-width: 35%;
    }
   
  }
  .s2 {
  width: 100%;
  display: flex;
  box-sizing: border-box;
  padding: 0 100px;
  background: #005399;
  @media(max-width:680px){
    padding: 0 0;
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
    @media(max-width:580px){  
      padding-bottom: 30px;
    } 
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
    font-size: 1.5em;
    white-space: pre-line;
    max-width: 60%;
    @media(max-width: 1380px){
      font-size: 1.2em;
    }
    @media(max-width: 1180px){
      font-size: 1em;
    }
    @media(max-width: 880px){
      font-size: 0.9em;
    }
    @media(max-width: 780px){
      font-size: 0.8em;
    }
    @media(max-width: 680px){
      font-size: 0.7em;
    }
    @media(max-width: 580px){
      max-width: 100%;
      margin: 0 auto;
    }
    
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
    @media(max-width:580px){
        display: none;
    }
    img {
      width: 100%;
      @media(max-width:1580px){
        width:80%;
      }
      @media(max-width:680px){
        width:100%;
      }
    }
  }
  .container-2 {
    width: 100%;
    display: flex;
    flex-direction: column;
    overflow-x: hidden;
  }
  .items-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
  }
  .item2-img {
    width: auto;
    margin: 5px 0;
    transition: all 0.3s;
    &:hover{
      transition: all 0.3s;
      filter: sepia();
    }
    @media(max-width:1580px){
      
      max-width: 24.33%;
    }
    @media(max-width:780px){
      
      max-width: 31.33%;
    }
    @media(max-width:580px){
      
      max-width: 48.33%;
    }
    img{
      @media(max-width:1580px){
        height: 100%;
        width: 100%;
      }
      @media(max-width:1280px){
        display: block;
        object-fit: contain;
        object-position: center center;
        height: 100%;
      }
    }
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
    font-size: 28.63px;
    //font-family: Poppins-SemiBold, Poppins;
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
  flex-wrap: wrap;
  .item-txt {
    font-size: 1.5em;
    width: 50%;
    margin: 0 auto;
    @media(max-width:1280px){
      font-size: 1.2em;
    }
    @media(max-width:1180px){
      font-size: 1em;
    }
    @media(max-width:780px){
      width: 60%;
      font-size: 0.9em;
    }
    @media(max-width:680px){
      width: 70%;
    }
    @media(max-width:480px){
      
      font-size: 0.8em;
    }
    @media(max-width:380px){
      
      font-size: 0.7em;
      width: 90%;
    }
    h1,
    p {
      margin: 0;
      padding: 0;
    }
    p {
      font-size: 1.3em;
    }
  }
  .item-imgs {
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
    width: 90%;
    margin: 0 auto;
  }
`;
export const ImgS = styled.div`
  width: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 16px auto;
  min-height: 330px;
  height: 100%;
  min-width: 313px;
  box-sizing: border-box;
  padding: 0 10px;
  @media(max-width:1280px){
    width:31.33%;
    min-height: 180px;

  }
  @media(max-width:980px){
    min-width: 31.11%;

  }
  @media(max-width:580px){
    min-width: 45%;
    border: 1px solid #005399;
    border-top:0;
    border-left:0;
    border-right:0;
    border-radius: 0px;

  }
  @media(max-width:380px){
      min-width: 80%;
  }
  img {
    display: block;
    object-fit: contain;
    object-position: center top;
    max-width: 333px;
    width: auto;
    height: 100%;
    transition: all 0.3s;
    cursor: pointer;
    @media(max-width:1280px){
      max-width: 180px;
    }
    @media(max-width:580px){
      max-width: 140px;
    }
    &:hover {
      scale: 1.1;
      transition: all 0.3s;
    }
  }
`;
export const StyledP = styled.div`
  height: 75vh;
  overflow: auto;
  margin: auto;
  width: 95%;
  @media(max-width:1380px) {
    font-size: 0.9em;
  }
  @media(max-width:1280px) {
    font-size: 0.8em;
  }
  @media(max-width:1080px) {
    font-size: 0.7em;
  }
  @media(max-width:880px) {
    font-size: 0.6em;
  }
  @media(max-width:780px) {
    font-size: 0.5em;
  }
  @media(max-width:680px) {
    font-size: 0.4em;
  }
  @media(max-width:380px) {
    font-size: 0.3em;
  }
`;
export const Modal = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 9;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #0000002e;
  @media(max-width:680px) {
    height: calc(100% - 70px);
  }
  .container {
    width: 90%;
    margin: 0 auto;
    background: #005399;
    height: 90%;
    color: #fff;
    box-sizing: border-box;
    font-size: 2em;
    white-space: pre-line;
    display: flex;
    position: relative;
  }
  .closeModal {
    position: absolute;
    right: 15px;
    top: 15px;
    border: 2px solid #fff;
    border-radius: 100%;
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 0.7em;
    box-sizing: border-box;
    cursor: pointer;
    color: #005399;
    background: #fff;
  }
`;
export const ContactoS = styled.div`
  display: flex;
  position: relative;
  height: 100vh;
  padding-top: 15px;
  flex-wrap: wrap;
  width: 100%;
  @media(max-width:880px){
    height: auto;
  }
  @media(max-width:780px){
    margin-top: 40px;
  }
  * {
    color: #005399;
  }
  .contacto-footer {
    width: 100%;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    height: 300px;
    background: #005399;
    justify-content: center;
    align-items: center;
    @media(max-width:1380px){
        height: 200px;
    }
    @media(max-width:880px){
        height: 170px;
    }
    h1 {
      color: #fff;
      box-shadow: unset;
      font-size: 3em;
      @media(max-width:1580px){
        font-size: 2.7em;
      }
      @media(max-width:1380px){
        font-size: 2.4em;
      }
      @media(max-width:1080px){
        font-size: 1.7em;
      }
      @media(max-width:880px){
        font-size: 1.4em;
      }
      @media(max-width:780px){
        font-size: 1.2em;
      }
      @media(max-width:580px){
        font-size: 1em;
      }
      @media(max-width:480px){
        font-size: 0.8em;
      }
      @media(max-width:380px){
        font-size: 0.7em;
      }
      @media(max-width:320px){
        font-size: 0.6em;
      }
    }
  }
  .item-title {
    display: flex;
    h1 {
      font-size: 1em;
      text-transform: uppercase;
      border-bottom: 5px solid;
      width: auto;
      min-width: 300px;
      @media(max-width:380px){
        min-width: 150px;
      }
    }
  }
`;
export const CcS = styled.div`
  width: 100%;
  position: relative;
  max-width: 1700px;
  margin: 0 auto;
  display: flex;
  @media(max-width:1680px){
    max-width: 1500px;
  }
  @media(max-width:1480px){
    max-width: 1400px;
  }
  @media(max-width:1380px){
    max-width: 1300px;
  }
  @media(max-width:1280px){
    max-width: 1200px;
  }
  @media(max-width:1180px){
    max-width: unset;
    margin: 0 25px;
  }
  @media(max-width:320px){
    max-width: unset;
    margin: 0 2px;
  }
  .container {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    @media(max-width:1580px){
      font-size: 0.8em;
    }
    @media(max-width:1380px){
      font-size: 0.7em;
    }
    @media(max-width:1280px){
      font-size: 0.65em;
    }
    @media(max-width:1080px){
      font-size: 0.6em;
    }
    @media(max-width:880px){
      font-size: 0.55em;
    }
    @media(max-width:780px){
      font-size: 0.4em;
    }
  }
  .item {
    font-size: 2.5em;
    display: flex;
    flex-direction: column;
    width: 100%;
    //max-width: 100%;
    word-break: break-all;
    margin-bottom: 27px;
  }
  .item-txt {
    display: flex;
    gap: 15px;
    align-items: center;
  }
  .item-txt-data {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    white-space: pre-line;
  }
  .img-c {
    position: relative;
    top: 0;
    //height: 100vh;
    right: 0;
    display: flex;
    align-items: end;
    @media(max-width:580px){
        display: none;
    }
    img {
      height: 130vh;
      width: auto;
      @media(max-width:1380px){
        height: 100vh;
      }
      @media(max-width:1080px){
        height: 85vh;
      }
      @media(max-width:880px){
        height: 60vh;
      }
      @media(max-width:780px){
        height: 50vh;
      }
    }
  }

  a {
    text-decoration: none;
  }
  /*background: url('/assets/img/cc.png');
background-position:center;
height:100vh ;*/
  .item-title h1 {
    font-size: 1em;
    text-transform: uppercase;
  }
  .fb,
  .ig {
    display: flex;
    gap: 15px;
    align-items: center;
   
  }
  i {
    color: #005399;
  }
`;

export const Modal2S = styled.div`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  display: flex;
  background: #00000047;
  color: #fff;
  @media(max-width:680px) {
    height: calc(100% - 70px);
  }
  .container {
    width: 90%;
    margin: 0 auto;
    background: #005399;
    height: 90%;
    color: #fff;
    box-sizing: border-box;
    font-size: 2em;
    white-space: pre-line;
    display: flex;
    position: relative;
    @media(max-width:580px) {
      //height: ;
    }
  }
  .closeModal {
    position: absolute;
    right: 15px;
    top: 15px;
    border: 2px solid #fff;
    border-radius: 100%;
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 0.7em;
    box-sizing: border-box;
    cursor: pointer;
    color: #005399;
    background: #fff;
  }
  .Logo {
    width: 400px;
    height: 400px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 50px auto;
    border-radius: 100%;
    background: #fff;
    img {
      width: 65% !important;
      @media(max-width:680px){
        width: 50% !important;
      }
    }
    @media(max-width:1380px){
      width: 300px;
      height: 300px;
    }
    @media(max-width:880px){
      width: 250px;
      height: 250px;
    }
    @media(max-width:680px){
      width: 200px;
      height: 200px;
    }
    @media(max-width:480px){
      width: 150px;
      height: 150px;
    }
  }
`;
