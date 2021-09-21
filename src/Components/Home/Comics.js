import React from 'react';    
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import {Link} from 'react-router-dom'
import '../Home/BookCards.scss';
import { Container, Card , Col } from 'react-bootstrap';




class FilterComics extends React.Component {

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
        <h4 className="float-left color">Comics</h4>
       
      </div>
        
      <Slider {...settings}  >
        
          {this.props.catgories.map((item) => {
            console.log(item.catgory);
            if (item.catgory == 'Comics') {
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

    






    )
  }
}

export default FilterComics;