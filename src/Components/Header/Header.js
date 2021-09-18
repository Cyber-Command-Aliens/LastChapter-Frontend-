import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import './Header.scss';

class Header extends React.Component {
    render() {
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
                            <Navbar.Collapse className="justify-content-end">
                                <Navbar.Text>
                                    Signed in as: <a href="#login">Mark Otto</a>
                                </Navbar.Text>
                            </Navbar.Collapse>
                        </Nav>
                    </Container>
                </Navbar>
            </>

        );
    }
}

export default Header;