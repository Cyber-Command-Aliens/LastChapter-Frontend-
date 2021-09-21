import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.css';
import './aboutus.scss'
import img1 from './img/rami.jpg';
import img2 from './img/farouk.png';
import img3 from './img/omer.jpg';
import img4 from './img/aseel.jpg';
import img5 from './img/yousef.jpg';



class AboutUs extends React.Component {

    render() {
        return (
            <>
           <h1>About Us</h1>
            <div id='div1' >
                <h1>Our Wep Site</h1>
                <p>It is a site that helps users to find their favorite books in various fields of science and entertainment. Our site is a non-profit site that encourages reading by seeing other people's reviews of books in addition to a description of each book</p>
            </div>
                <div  id='div2' style={{ display: 'block', width: 540,  }}>
                    <h1>Our Team</h1>
                    <p> Aliens Cyber Command is a team of five web developers</p>
                    <Carousel>
                        <Carousel.Item interval={1500}>
                            <img
                                className="d-block w-100"
                                src={img1} width='300' height='500'
                                alt="rami"
                            />
                            <Carousel.Caption>
                                <h3>Rami Zaitoun</h3>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item interval={1500}>
                            <img
                                className="d-block w-100"
                                src={img2} width='300' height='500'
                                alt="farouk"
                            />
                            <Carousel.Caption>
                                <h3>Farouk Ibrahim</h3>

                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item interval={1500}>
                            <img
                                className="d-block w-100"
                                src={img3} width='300' height='500'
                                alt="omer"
                            />
                            <Carousel.Caption>
                                <h3>Omar Humamah </h3>

                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item interval={1500}>
                            <img
                                className="d-block w-100"
                                src={img4} width='300' height='500'
                                alt="aseel"
                            />
                            <Carousel.Caption>
                                <h3>Aseel Alasaad</h3>

                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item interval={1500}>
                            <img
                                className="d-block w-100"
                                src={img5} width='300' height='500'
                                alt="yousef"
                            />
                            <Carousel.Caption>
                                <h3>Yousef Mando</h3>

                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </div>
            </>
        )
    }
}
export default (AboutUs);