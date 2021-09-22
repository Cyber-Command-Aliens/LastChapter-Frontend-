import React from "react";
import Card from 'react-bootstrap/Card'
import { withAuth0 } from "@auth0/auth0-react";
import { Container, Row, Col } from "react-bootstrap/";
import BookCards from "./BookCards";
import { HomeWrapper } from './BookCardStyle';
import FilterClassics from './Classics';
import FilterComics from './Comics';
import FilterMystery from './Mystery';
import FilterLove from './Love';
import FilterHorror from './Horror';
import './Home.scss'

// i should render the catagory in a single page i will do it later 
class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      show: false,
      title: '',
      img: '',
      author: '',
      status: '',
      pages: '',
      infoLink: ''
    }
  }
  handleShow = (title, img, author, status, pages, infoLink, catgory) => {
    this.setState({
      show: true,
      title: title,
      img: img,
      author: author,
      status: status,
      pages: pages,
      infoLink: infoLink,
      catgory: catgory
    })
    console.log(title);
  }
  handleClose = () => {
    this.setState({
      show: false
    })
  }
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
                <Card style={{ marginTop: '40px' }} className="Cards">
                  <Card.Img variant="top" src={item.img} />
                  <Card.Body>
                    <Card.Title>
                      <a style={{ textDecoration: 'none', color: 'Black' }} href="">{item.title} </a><br></br>
                      <a style={{ textDecoration: 'none', color: '#008575' }} href="">{item.desc} </a>
                    </Card.Title>



                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>

        </Container>

        <HomeWrapper>

          <BookCards
            catgory={this.state.catgory}
            infoLink={this.state.infoLink}
            pages={this.state.pages}
            status={this.state.status}
            author={this.state.author}
            img={this.state.img}
            title={this.state.title}
            handleShow={this.handleShow}
            show={this.state.show}
            handleClose={this.handleClose}
            favourite={this.props.favourite}
            catgories={this.props.catgories} >

          </BookCards>
          <FilterClassics
            catgory={this.state.catgory}
            infoLink={this.state.infoLink}
            pages={this.state.pages}
            status={this.state.status}
            author={this.state.author}
            img={this.state.img}
            title={this.state.title}
            handleShow={this.handleShow}
            show={this.state.show}
            handleClose={this.handleClose}
            favourite={this.props.favourite}
            catgories={this.props.catgories}>

          </FilterClassics>
          <FilterComics
            catgory={this.state.catgory}
            infoLink={this.state.infoLink}
            pages={this.state.pages}
            status={this.state.status}
            author={this.state.author}
            img={this.state.img}
            title={this.state.title}
            handleShow={this.handleShow}
            show={this.state.show}
            handleClose={this.handleClose}
            favourite={this.props.favourite}
            catgories={this.props.catgories}>

          </FilterComics>
          <FilterMystery
            catgory={this.state.catgory}
            infoLink={this.state.infoLink}
            pages={this.state.pages}
            status={this.state.status}
            author={this.state.author}
            img={this.state.img}
            title={this.state.title}
            handleShow={this.handleShow}
            show={this.state.show}
            handleClose={this.handleClose}
            favourite={this.props.favourite}
            catgories={this.props.catgories}>

          </FilterMystery>
          <FilterHorror catgory={this.state.catgory}
            infoLink={this.state.infoLink}
            pages={this.state.pages}
            status={this.state.status}
            author={this.state.author}
            img={this.state.img}
            title={this.state.title}
            handleShow={this.handleShow}
            show={this.state.show}
            handleClose={this.handleClose}
            favourite={this.props.favourite}
            catgories={this.props.catgories}
          >

          </FilterHorror>
          <FilterLove
            catgory={this.state.catgory}
            infoLink={this.state.infoLink}
            pages={this.state.pages}
            status={this.state.status}
            author={this.state.author}
            img={this.state.img}
            title={this.state.title}
            handleShow={this.handleShow}
            show={this.state.show}
            handleClose={this.handleClose}
            favourite={this.props.favourite}
            catgories={this.props.catgories}>

          </FilterLove>
        </HomeWrapper>


      </>
    );
  }
}

export default withAuth0(Home);
