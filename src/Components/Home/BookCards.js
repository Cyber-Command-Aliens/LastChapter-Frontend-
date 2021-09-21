import React from 'react';    
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import {Link} from 'react-router-dom'
import '../Home/BookCards.scss';
import { Container, Card , Col } from 'react-bootstrap';




class BookCards extends React.Component {

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
      <Container>
        
        <div className="clearfix mt-5 mb-2">
        <h4 className="float-left">Adventure</h4>
       
      </div>
        
      <Slider {...settings}  >
        
          {this.props.catgories.map((item) => {
            console.log(item.catgory);
            if (item.catgory == 'Adventure') {
              return (
                <React.Fragment>
                  <Col md="11">
                  <Card >
                   <Card.Img variant ="top" src = {item.img} alt="Card image" style={{height: '30rem'}}></Card.Img>
                   <Card.Body>
                {item.title}
                   </Card.Body>
                  </Card>
                  </Col>
                  </React.Fragment>

              );
            

            }


          })}
        </Slider>
        </Container>

      // <Carousel.Item>
      //   <img
      //     className="d-block w-100"
      //     src={this.props.item.img}
      //     alt="First slide"
      //   />
      //   <Carousel.Caption>
      //     <h3>{this.props.item.title}</h3>
      //     <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      //   </Carousel.Caption>
      // </Carousel.Item>

      //   {/* <Card style={{ width: '18rem', marginTop: '50px' }} onClick={this.show}>
      //               <Card.Img variant="top" src={this.props.item.img} />
      //               <Card.Body>
      //                   <Card.Title>Title: {this.props.item.title}</Card.Title>

      //               </Card.Body>
      //               <ListGroup className="list-group-flush">
      //                   <ListGroupItem style={{ color: 'white', background: '#292b2c' }}><strong>cat:</strong> {this.props.item.catgory}</ListGroupItem>
      //                   <ListGroupItem style={{ color: 'white', background: '#292b2c' }}><strong>Author:</strong> {this.props.item.author}</ListGroupItem>
      //                   <ListGroupItem style={{ color: 'white', background: '#292b2c' }}><strong>Type:</strong> {this.props.item.status}</ListGroupItem>
      //                   <ListGroupItem style={{ color: 'white', background: '#292b2c' }}><strong>Pages:</strong>{this.props.item.pages}</ListGroupItem>
      //                   <ListGroupItem style={{ color: 'white', background: '#292b2c' }}>
      //                       <Row xs={2} md={4} lg={6}>
      //                           <Col><Button type="submit" onClick ={()=> this.props.favourite(this.props.item.title,this.props.item.img,this.props.item.author,this.props.item.status,this.props.item.pages ,this.props.item.infoLink)} style={{ marginLeft: '180px' }} variant="outline-info">💟</Button></Col>

      //                       </Row>
      //                       <Col><a className="font-weight-bold text-warning mt-5" href={this.props.item.infoLink}>Read More</a></Col>

      //                   </ListGroupItem>
      //               </ListGroup>
      //           </Card>
      //  */}






    )
  }
}

export default BookCards;