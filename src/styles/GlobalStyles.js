import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    body {
        /*margin: 0;
        padding: 0;
        background: teal;
        font-family: Open-Sans, Helvetica, Sans-Serif;*/
        //overflow-y: ${(props) => (props.isModal ? "hidden" : "")};
        overflow-x: hidden;
        //overflow-y: ${(props) => (props.isModal ? "hidden" : "")};
        
    }
    html{
      //  overflow-y: ${(props) => (props.isModal ? "hidden" : "auto")};
    }
    @font-face {
        font-family: 'AB';
        src:url(/assets/fonts/Pepsa_Poppins_Bold.ttf);
    }
    @font-face {
        font-family: 'CD';
        src:url(/assets/fonts/Pepsa_Poppins_Medium.ttf);
    }
    *{
        font-family: 'CD';
    }
    h1{
        font-family: 'AB';
        color:#005399;
    }
    img{
        display: block;
        object-fit: cover;
        object-position: center top;
        width: 100%;
    }
    
`;

export default GlobalStyle;
