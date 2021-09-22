import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link } from 'react-router-dom';
import '../Home/BookCards.scss';
import { Container, Card, Col, Button, Modal } from 'react-bootstrap';
import "./Modal.css"
import Alert from 'react-bootstrap/Alert'
//TODO Create the alret for bookmark 
//TODO Edit the Footer Style
//TODO 



class FilterClassics extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      show: false
    }
  }
  setShow = () => {
    this.setState({
      show: false
    })
  }
  setclose = () => {
    this.setState({
      show: true
    })
  }
  render() {
    var settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <>
        <Container>

          <div className="clearfix mt-5 mb-2">
            <h4 className="float-left color ">Classics</h4>

          </div>

          <Slider {...settings} style={{ width: '70rem' }} >
            {this.props.catgories.map((item) => {

              if (item.catgory == 'Classics') {
                return (
                  <React.Fragment>
                    <Col md="11">
                      <Card  >
                        <Card.Img onClick={() => this.props.handleShow(item.title, item.img, item.author, item.status, item.pages, item.infoLink, item.catgory)} variant="top" src={item.img} alt="Card image" style={{ height: '30rem' }}></Card.Img>
                        <Card.Body>
                          <Button className="cardButton" onClick={() => this.props.favourite(item.title, item.img, item.author, item.status, item.pages, item.infoLink)} variant="warning">
                            <i class="bi bi-bookmark-heart"> BookMark</i>

                          </Button>
                        </Card.Body>
                      </Card>
                    </Col>


                  </React.Fragment>


                );


              }


            })}
          </Slider>
        </Container>
       
      </>

    )
  }
}

export default FilterClassics;