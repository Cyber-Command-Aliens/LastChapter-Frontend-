import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import './Header.scss';
import Button from 'react-bootstrap/Button';
import { withAuth0 } from '@auth0/auth0-react';

class Header extends React.Component {
    render() {
        // const { loginWithRedirect } = this.props.auth0;
        const { isAuthenticated,logout } = this.props.auth0;
        const { user } = this.props.auth0;
        
        
        return (
            <>
         
            
                <Navbar bg="light" variant="light">
                
                    <Container>
                        
                        <Navbar.Brand href="#home">
                            <h6 style={{ fontFamily: 'Italianno', fontSize: '50px' }}>LastChapter</h6>
                        </Navbar.Brand>
                        <Navbar.Brand href="#home">
                            <img
                                src="https://i.pinimg.com/originals/5f/fb/de/5ffbdeceb84323decd76084b2efca958.png"
                                width="80"
                                height="60"
                                className="d-inline-block align-top"
                                alt="React Bootstrap logo"
                            />
                        </Navbar.Brand>
                        
                        <Nav className="me-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#features">Profile</Nav.Link>
                            <Nav.Link href="#pricing">Review</Nav.Link>
                            <Nav.Link href="#pricing">About Us</Nav.Link>
                            
                        
                        </Nav>
                        <Navbar.Collapse className="justify-content-end">
                                <Navbar.Text>
                                    Signed in as: <a href="#login">{user.name}</a>
                                </Navbar.Text>
                                {isAuthenticated &&
                               
                                <Button onClick={() => {
                                    logout({ returnTo: window.location.origin });
                                  }}  style={{margin:'20px'}}variant="outline-info">🚪</Button>
                                }
                            </Navbar.Collapse>
                    </Container>
                </Navbar>
            </>

        );
    }
}

export default withAuth0(Header);