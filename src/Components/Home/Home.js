import React from "react";
import Card from 'react-bootstrap/Card'
import { withAuth0 } from "@auth0/auth0-react";
import { Container, Row , Col} from "react-bootstrap/";
import BookCards from "./BookCards";
import {HomeWrapper} from './BookCardStyle';
import FilterClassics from './Classics';
import FilterComics from './Comics';
import FilterMystery from './Mystery';
import FilterLove from './Love';
import FilterHorror from './Horror';
import './Home.scss'

// i should render the catagory in a single page i will do it later 
class Home extends React.Component {
  render() {
    let CardsArr = [
      {
        title: 'Featured Pre-Orders',
        img: 'https://static.thriftbooks.com/general/Sep13-2xNR-DT-L2_0e3e2e49.jpg',
        desc: 'Get 2x points on all books by our featured authors'
      },
      {
        title: 'The Wish Giveaway & Double Points',
        img: 'https://static.thriftbooks.com/general/DT-M--544x144_a605f0a8.jpg',
        desc: 'Pre-order for a chance to win, and get 2x points!'
      },
      // {
      //   title: 'Summer Look Back',
      //   img: 'https://static.thriftbooks.com/general/DT-S-_264x144_e24e6407.jpg'
      // },
      // {
      //   title: 'qwe',
      //   img: 'https://static.thriftbooks.com/general/DT-S-_264x144_83787454.jpg'
      // },
  
    ]
    return (
      <>
      <Container>
     <Row xs={2} md={2} className="g-3">
  {CardsArr.map((item) => (
    <Col>
      <Card style ={{ marginTop:'40px'}} className="Cards">
        <Card.Img variant="top" src={item.img} />
        <Card.Body>
          <Card.Title>  
            <a style={{textDecoration:'none', color:'Black'}} href="">{item.title} </a><br></br>
            <a style={{textDecoration:'none', color:'#008575'}} href="">{item.desc} </a>
            </Card.Title>
       
         
         
        </Card.Body>
      </Card>
    </Col>
  ))}
</Row>

</Container>
 
      <HomeWrapper>

      <BookCards favourite={this.favourite}  catgories={this.props.catgories} ></BookCards>
      <FilterClassics favourite={this.favourite}  catgories={this.props.catgories}></FilterClassics>
      <FilterComics favourite={this.favourite}  catgories={this.props.catgories}></FilterComics>
      <FilterMystery favourite={this.favourite}  catgories={this.props.catgories}></FilterMystery>
      <FilterHorror favourite={this.favourite}  catgories={this.props.catgories}></FilterHorror>
      <FilterLove favourite={this.favourite}  catgories={this.props.catgories}></FilterLove>
      </HomeWrapper>
      
        
      </>
    );
  }
}

export default withAuth0(Home);
