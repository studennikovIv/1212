import styled from '@emotion/styled';

export const TITLE_SECTION = styled.section`
  max-width: 1520px;
  padding: 0 50px 0 50px;
  margin: 140px auto 0;
  @media (max-width: 768px) {
    width:100%;
  }
`;
export const ABOUT_ME_DIV = styled.div`
  h3 {
    font-family: Noto Serif;
    font-size: 30px;
    font-weight: 500;
    line-height: 41px;
    letter-spacing: 0em;
    text-align: center;
    position: relative;
    
  }
  
  h3::after,
  h3::before {
    content: '';
    position: absolute;
    top: 50%;
    bottom: 0;
    width: 160px; /* Ширина полосы сбоку от заголовка */
    height: 1px;
    background-color: #333; /* Цвет полосы */
    @media (max-width: 768px) {
      width: 60px;
     }
  }
  h3::after {
    left: 27%;
    top: 50%;
    @media (max-width: 768px) {
     left:5%; 
    }
  }
  h3::before {
    right: 27%;
    top: 50%;
    @media (max-width: 768px) {
      right:5%; 
     }
  }
`;
export const TOP_ABOUT_ME_DIV = styled.div`
@media (max-width: 768px) {
flex-direction: column;
align-items: center
 }
  margin-top: 65px;
  display: flex;
  p {
    width: 490px;
    font-family: Noto Serif;
    font-size: 16px;
    font-weight: 400;
    line-height: 22px;
    letter-spacing: 0em;
    text-align: left;
    span {
      color: #40c3ba;
    }
    @media (max-width: 768px) {
      line-height: 40px;
      width:100%;
       }
  }
  img {
    width: 460px;
    height: 517px;
    margin-left: 50px;
    @media (max-width: 768px) {
      margin-left: 0px;
      margin-top: 50px;
       }
  }
`;
export const RIGHT_TEXT_DIV = styled.div`
  padding-left: 50px;
  position: relative;
  width: 380px;
  @media (max-width: 768px) {
    padding-left: 0px;
    width: 100%;
     }
  h4 {
    font-family: Noto Serif;
    font-size: 20px;
    font-weight: 400;
    line-height: 27px;
    letter-spacing: 0em;
    text-align: left;
    @media (max-width: 768px) {
      margin-top: 20px;
       }
  }
  ul {
    margin-top: 65px;
  }
  ul li + li {
    margin-top: 17px;
  }
  button {
    position: absolute;
    bottom: 0;
    right: 0;
    width: 110px;
    height: 110px;
    border-radius: 50%;
    border: 1px solid #f47500;
    color: #fff;
    background-color: #ff9f47;
    font-family: Noto Serif;
    font-size: 13px;
    font-weight: 600;
    line-height: 22px;
    letter-spacing: 0em;
    text-align: center;
    transition: 0.5s all;
    :hover {
      background-color: #f47500;
      border: none;
      color: #fff;
    }
    @media (max-width: 768px) {
      bottom: 245px;
      right: 5px
       }
  }
`;
export const BOT_ABOUT_ME_DIV = styled.div`
  margin-top: 120px;
  @media (max-width: 768px) {
    margin-top: 60px;
     }
  h4 {
    font-family: Noto Serif;
    font-size: 30px;
    font-weight: 500;
    line-height: 41px;
    letter-spacing: 0em;
    text-align: left;
    position: relative;
    margin-left: 110px;
    :after,
    :before {
      content: '';
      position: absolute;
      top: 50%;
      bottom: 0;
      width: 100px; /* Ширина полосы сбоку от заголовка */
      height: 1px;
      background-color: #333; /* Цвет полосы */
    }
    :after {
      left: -12%;
      top: 50%;
      @media (max-width: 768px) {
        left: -60%;
         }
    }
    :before {
      right: 63%;
      top: 50%;
      @media (max-width: 768px) {
        right: -15%;
         }
    }
  }
`;
export const BOT2_ABOUT_ME_DIV = styled.div`
  display: flex;
  margin-top: 65px;
  @media (max-width: 768px) {
    flex-direction: column;
     }
  h5 {
    font-family: Noto Serif;
    font-size: 20px;
    font-weight: 400;
    line-height: 27px;
    letter-spacing: 0em;
    text-align: left;
    @media (max-width: 768px) {
      margin-top: 50px;
       }
  }
  p {
    margin-top: 20px;
    font-family: Noto Serif;
    font-size: 16px;
    font-weight: 400;
    line-height: margin-left: 50px;;
    letter-spacing: 0em;
    text-align: left;
  }
  ul {
    margin-top: 20px;
    list-style-type: disc;
    margin-left: 17px;
    li {
      font-family: Noto Serif;
      font-size: 18px;
      line-height: 32px;
      letter-spacing: 0em;
      text-align: left;
    }
  }
`;
// export const SHORT_DESCRITTION_P = styled.p`
//   margin-top: 20px;
// font-family: Noto Serif;
// font-size: 16px;
// font-weight: 400;
// line-height: 22px;
// letter-spacing: 0em;
// text-align: left;
// `;
export const LEFT_CONTENT_BOT_DIV = styled.div`
  padding-right: 15%;
  border-right: 2px solid #000;
  @media (max-width: 768px) {
    border: none;
    padding-right: 0%;
     }
`;
export const RIGHT_CONTENT_BOT_DIV = styled.div`
  padding-left: 15%;
  @media (max-width: 768px) {
    border: none;
    padding-left: 0;
     }
`;
