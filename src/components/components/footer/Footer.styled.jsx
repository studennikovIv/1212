import styled from '@emotion/styled';

export const BG_DIV = styled.div`
background-color: #fffc;
backdrop-filter: blur(10px);`

export const FOOTER_SECTION = styled.section`
  max-width: 1520px;
  margin: 0 auto;
  padding: 0 50px 0 50px;
`;
export const FOOTER_DIV = styled.div`
  margin-top: 80px;
  padding-top: 40px;
  padding-bottom: 40px;
`;
export const FOOTER_TOP_DIV = styled.div`
  display: flex;
  flex-wrap:wrap;
`;
export const LOGO_IMG = styled.img`
  width: 40px;
  height: 40px;
`;
export const LIST_DIV = styled.div`
  margin-left: 100px;
   @media (max-width: 768px) {
  margin-left: auto;
    
   }
  ul {
    display: flex;
  }
  ul li {
    margin-left: 40px;
  }
  ul li a {
    width: 40px;
    height: 40px;
    background-color: #cbcac4;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.5s all;
  }
`;
export const TELEGRAM_A = styled.a`
  :hover {
    background-color: #40c3ba;
    border-radius: 50%;
  }
`;
export const VK_A = styled.a`
  :hover {
    background-color: #306aff;
    border-radius: 50%;
  }
`;
export const WA_A = styled.a`
  :hover {
    background-color: #30ff5d;
    border-radius: 50%;
  }
`;
export const LIST_UL = styled.ul`
  li {
    margin-top: 40px;
  }
`;
export const SMS_A = styled.a`
  :hover {
    background-color: #000;
    border-radius: 50%;
  }
`;
export const EMAIL_A = styled.a`
  :hover {
    background-color: #000;
    border-radius: 50%;
  }
`;
export const SKYPE_A = styled.a`
  :hover {
    background-color: #2eb5ef;
    border-radius: 50%;
  }
`;
export const TEXT_DIV = styled.div`
  width: 380px;
  margin-left: 558px;
  margin-top: 50px;
  @media (max-width: 1500px) {
  margin-left: 0px;

  }

  h4 {
    font-family: Noto Serif;
    font-size: 20px;
    font-weight: 400;
    line-height: 27px;
    letter-spacing: 0em;
    text-align: left;
  }
  p {
    font-family: Manrope;
    font-size: 16px;
    font-weight: 400;
    line-height: 22px;
    letter-spacing: 0em;
    text-align: left;
  }
`;
export const FOOTER_BOTTOM_DIV = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 38px;
    @media (max-width: 768px) {
      flex-wrap:wrap;
      gap: 20px;
    }
`;
export const COPIRATE_P = styled.p`
  position: relative;
  :before {
    content: ' \00a9';
}


`;
export const FORM_DIV = styled.div`
  display: flex;
    @media (max-width: 768px) {
    flex-grow:1;
    }
  input {
    width: 380px;
    height: 62px;
    padding: 20px;
    border: 1px solid #cbcac5;
    transition: 0.5s all;
    :focus {
      border-color: #40c3ba;
      outline: none;
      color: #000;
    }
       @media (max-width: 768px) {
       width:100%;
    }
  }
  button {
  flex-shrink:0;
    margin-left: 38px;
    background-color: #40c3ba;
    width: 62px;
    height: 62px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.5s all;
    :hover {
      border-radius: 50%;
      background-color: #cbcac5;
    }
  }
`;
