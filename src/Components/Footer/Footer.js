import React from 'react';
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
} from "./FooterStyle";
  
const Footer = () => {
  return (
    <Box>
      <h1 style={{ color: "whitesmoke", 
                   textAlign: "center", 
                   marginTop: "-50px" }}>
                       
      </h1>
      <Container className>
        <Row>
          <Column>
            <Heading>Contact Us</Heading>
            <FooterLink href="#"><i class="bi bi-facebook">Uttar Pradesh</i></FooterLink>
            <FooterLink href="#">Ahemdabad</FooterLink>
            <FooterLink href="#">Indore</FooterLink>
            <FooterLink href="#">Mumbai</FooterLink>
          </Column>
        </Row>
      </Container>
    </Box>
  );
};
export default Footer;