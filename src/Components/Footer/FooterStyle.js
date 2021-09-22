import styled from 'styled-components';

export const Box = styled.div`
  padding: 80px 60px;
  background: orange;
  position: absolute;
  background: #6a3093;  
  background: -webkit-linear-gradient(to right, #a044ff, #6a3093); 
  background: linear-gradient(to right, #a044ff, #6a3093); 

  color: #fff;
  transition: all 0.3s, ease;
  width: 100%;
  font-size: 12px;
   
  @media (max-width: 1000px) {
    padding: 70px 30px;
  }
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
   
    max-width: 1000px;

    /* background: red; */
`

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-left: 60px;
  
`;

export const Row = styled.div`
  display: grid;
  
  grid-template-columns: repeat(auto-fill, 
                         minmax(185px, 1fr));
  grid-gap: 20px;
   
  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, 
                           minmax(200px, 1fr));
  }
`;

export const FooterLink = styled.a`
  color: #fff;
  margin-bottom: 20px;
  font-size: 30px !important;
  text-decoration: none;
   
  &:hover {
      color: #ffc107;
      transition: 200ms ease-in;
  }
`;

export const Heading = styled.p`
  font-size: 60px;
  color: #fff;
  margin-bottom: 40px;
  font-weight: bold;

`;

export const p = styled.p`

`