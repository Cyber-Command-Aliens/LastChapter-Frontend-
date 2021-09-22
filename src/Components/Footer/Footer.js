import React from 'react';
import './Footer.scss'
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
      <img src="https://i.pinimg.com/originals/5f/fb/de/5ffbdeceb84323decd76084b2efca958.png" alt="Girl in a jacket" width="200" height="300" style={{marginRight:"40rem" ,
    opacity:"0.5",float:"right"}}></img>
      <Container className="Footer-text">
      
            <Heading >Contact Us</Heading>
            <FooterLink href="#"><i class="bi bi-facebook"> Facebook</i></FooterLink>
            <FooterLink href="https://github.com/Cyber-Command-Aliens"><i class="bi bi-github"> Github</i></FooterLink>
            <FooterLink href="#Slack"><i class="bi bi-slack"> Slack</i></FooterLink>
      
            <FooterLink href="#linkedin"><i class="bi bi-linkedin"> linkedin</i></FooterLink>
    
      </Container>

      <Container>


      </Container>
    
    </Box>
  );
};
export default Footer;