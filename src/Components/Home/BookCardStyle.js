import styled from "styled-components";

export const HomeWrapper = styled.div`
  .slick-arrow {
      
    width: 0;
    height: 0;
    border-left: 0 solid transparent;
    border-right: 15px solid #131313;
    border-top: 10px solid transparent;
    border-bottom: 10px solid transparent;
   
   
  }
  .slick-prev:before, .slick-next:before {
      color: #131313;
      font-size: 0;
      
  }
  .slick-next{
    width: 0;
    height: 0;
   
    left: 1106px;
  border-right: 0 solid transparent;
  border-left: 15px solid  #131313;
  border-top: 10px solid transparent;
  border-bottom: 10px solid transparent;
  }

`;