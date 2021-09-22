import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link } from 'react-router-dom';
import '../Home/BookCards.scss';
import { Container, Card, Col, Button, Modal } from 'react-bootstrap';
import Alert from 'react-bootstrap/Alert'
//TODO Create the alret for bookmark 
//TODO Edit the Footer Style
//TODO 



class FilterMystery extends React.Component {
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
            <h4 className="float-left color ">Mystery</h4>

          </div>

          <Slider {...settings} style={{ width: '70rem' }} >
            {this.props.catgories.map((item) => {

              if (item.catgory == 'Mystery') {
                return (
                  <React.Fragment>
                    <Col md="11">
                      <Card  >
                        <Card.Img onClick={() => this.props.handleShow(item.title, item.img, item.author, item.status, item.pages, item.infoLink, item.catgory)} variant="top" src={item.img} alt="Card image" style={{ height: '30rem' }}></Card.Img>
                        <Card.Body>
                          <Button onClick={() => this.props.favourite(item.title, item.img, item.author, item.status, item.pages, item.infoLink)} variant="warning">
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
        <Modal
          aria-labelledby="contained-modal-title-vcenter"
          dialogClassName="modal-90w public-profile-modal-class"
          centered
          show={this.props.show}
          onHide={this.props.handleClose}
          backdrop="static"
          keyboard={false}
          className="my-modal reveal-modal-bg"

        >


          <Modal.Body>
            <img className="img-fluid" src={this.props.img} alt={this.props.title} style={{ height: "400px", width: "200px" }} />
          </Modal.Body>
          <Modal.Body className="modal-content">


            <p className="modal-content"> Book Name: {this.props.title}</p>
            <p className="modal-content">Author: {this.props.author}</p>
            <p className="modal-content">Pages: {this.props.pages}</p>
            <p className="modal-content">Catagroy: {this.props.catgory}</p>
            <p className="modal-content">Type: {this.props.status}</p>
            <Button style={{ marginRight: "24rem" }} variant="outline-info">
              <i class="bi bi-info-square"></i>
              <a style={{ textDecoration: "none" }} href={this.props.infoLink}> Info</a>

            </Button>
          </Modal.Body>
          <Button style={{ display: "inline-block" }} variant="outline-danger" onClick={this.props.handleClose}>
            <i class="bi bi-x-lg"></i>  Close
          </Button>



        </Modal>
      </>

    )
  }
}

export default FilterMystery;