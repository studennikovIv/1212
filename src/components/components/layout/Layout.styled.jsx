import styled from '@emotion/styled';

export const FIXED_DIV = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
 
  z-index: 9999;
  &::before{
    content:'';
    position:absolute;
    inset:0;
    z-index:-1;
     background-color: #fffc;
  backdrop-filter: blur(10px);
  }
`;

export const HEADER_SECTION = styled.section`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  max-width: 1520px;
  margin: 0 auto;
  padding: 0 50px 0 50px;
  height: 80px;
`;

export const IMG = styled.img`
  width: 60px;
`;

export const MENU_NAV = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0 0 0 50px;
  width: 740px;
  height: 100%;
   @media (max-width: 1024px) {
   flex-direction:column;
   gap:20px;
   padding:0px 15px;
    margin: 0 auto;
    width:100%;
    }
`;

export const A_DIV = styled.div`
  display: flex;
  padding-bottom: 10px;
  align-items: center;
  justify-content: center;
  margin: 0 0 0 10px;
  width: 100%;
  height: 100%;
  transition: all 0.5s ease;

  &:hover {
     @media (min-width: 1024px) {
      box-shadow: inset 0 -1px 0 black;

    }
    a {
      color: #40c3ba;
    }
  }

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    transition: all 0.5s ease;
    // color: #cbcac5;
    color: black;
    font-size: 18px;
    font-weight: 400;
    line-height: 21.6px;
    font-family: Manrope;
 @media (max-width: 1024px) {
  font-size:22px;
    }

  }
  img {
    width: 22px;
    height: 8px;
    padding: 0 0 0 5px;
  }
`;
export const PHONE_DIV = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  margin-left: auto;
  height: 100%;
   @media (max-width: 1024px) {
    margin: 15px auto 0 ;
    
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
