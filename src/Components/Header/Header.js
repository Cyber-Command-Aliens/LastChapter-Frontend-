import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import './Header.scss';
import Button from 'react-bootstrap/Button';
import { withAuth0 } from '@auth0/auth0-react';


class Header extends React.Component {
    constructor(props){
        super(props)
       
    }
    componentDidMount() {
        window.addEventListener("scroll", this.handleScroll);
      }
    
      componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScroll);
      }
    
      handleScroll = () => {
        if (window.scrollY > 20) {
          document.querySelector(".navbar").className = "navbar navbar-expand scroll"
         
        } else {
          document.querySelector(".navbar").className = "navbar navbar-expand navbar-ligh ";
        }
      };

    render() {
        window.addEventListener('scroll', this.changeColor)
        // const { loginWithRedirect } = this.props.auth0;
        const { isAuthenticated,logout } = this.props.auth0;
        const { user } = this.props.auth0;
        let pic = user.picture 

        
        return (
            <>
        
                       
            
                <Navbar  variant="light" className=''>
                
                    <Container>
                      
                        <Navbar.Brand href="#home">
                            <img
                                src="https://i.pinimg.com/originals/5f/fb/de/5ffbdeceb84323decd76084b2efca958.png"
                                width="50"
                                height="70"
                                className="d-inline-block align-top"
                                alt="LasCHapter"
                         
                            />
                        </Navbar.Brand>
                        <Navbar.Brand href="#home">
                          
                          <h6 style={{ fontSize:'30px' }} className="navbar-brand">Last<span className ="navspan">Chapter</span></h6>

                      
                      </Navbar.Brand>
                        
                        <Nav className="me-auto">
                            <Nav.Link  id="nav-text-size" href="/">Home</Nav.Link>
                          
                            <Nav.Link id="nav-text-size" href="/Profile">Profile</Nav.Link>
                            
                            <Nav.Link id="nav-text-size"  href="/Review">Review</Nav.Link>
                            <Nav.Link id="nav-text-size" href="/AboutUs">About Us</Nav.Link>
                            
                        
                        </Nav>
                        <Navbar.Collapse className="justify-content-end">
                                <Navbar.Text>
                                Hi <a className="welcome" style={{textDecoration:'none' , color:' rgb(92, 80, 78)'}} href="/Profile">{user.name}</a>
                             
                                </Navbar.Text>
                                {isAuthenticated &&
                               
                                <Button  onClick={() => {
                                    logout({ returnTo: window.location.origin });
                                  }}  style={{margin:'20px'}}variant="outline-warning">
                                    <i style={{marginLeft:"3px"}} class="bi bi-box-arrow-left"> Logout</i>
                                  </Button>
                                }
                            </Navbar.Collapse>
                    </Container>
                </Navbar>
            </>

        );
    }
}

export default withAuth0(Header);



//    {/* <img  id ="rounded" src= {pic}></img> */ //TODO: add pic to nav bar} 