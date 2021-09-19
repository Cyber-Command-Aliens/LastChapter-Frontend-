import React from 'react';
import axios from 'axios';
import { withAuth0 } from '@auth0/auth0-react';
import Row from 'react-bootstrap/Row';
import BookCards from './BookCards';
import Profile from '../Profile/Profile'
import Review from '../Review /Review';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route
// } from "react-router-dom";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      catgories: [],
      show: true,
      loading: true,
      favourtie: [],
    }
  }
  componentDidMount = () => {

    const { user } = this.props.auth0;
    const email = user.email
    axios.get('http://localhost:3001/')
      .then((results) => {
        this.setState({
          catgories: results.data
        })

      })
      .catch(err => {
        console.log('error');
      })



  }
  handleShow = () => {
    this.setState({
      show: false
    })
  }
  favourite = (title, img, author, status, pages, infoLink) => {
    const { user } = this.props.auth0;
    const email = user.email
    console.log(email);
    let postArr = {
      title: title,
      img: img,
      author: author,
      status: status,
      email: email,
      pages: pages,
      infoLink: infoLink
    }

    // console.log(postArr);
    // change the route link in order to get the data i put att the deafult add 
    axios
      .post(`http://localhost:3001/add`, postArr)
      .then((response) => {
        console.log(response.data);
        this.setState({
          favourtie: response.data
        })
        console.log(this.state.favourtie);
      })
      .catch((err) => {
        console.log(err.response);
      })
  }

getFavData=()=>{
  const { user } = this.props.auth0;
  const email = user.email
  axios.get(`http://localhost:3001/profile?email=${email}`)
    .then((results) => {
      console.log('hi');
      this.setState({
          favourtie: results.data
      })
      console.log(this.state.favourtie);

    })
    .catch(err => {
      console.log('error');
    })
}


  deleteBook = (id) => {
    const { user } = this.props.auth0;
    const email = user.email;
    axios
      .delete(`http://localhost:3001/delete/${id}?email=${email}`)
      .then(result => {
        this.setState({
          favourtie: result.data
        })
        
      })
      .catch(err => {
        console.log('error in deleting book');
      })
  }

  render() {

    // console.log(this.state.catgories)
    return (
      <>
        {/* <Router>
          <Switch> */}
            {/* <Route exact path="/"> */}
              <Row xs={2} md={4} lg={6}>
                {this.state.catgories.map((item) => {
                  return <BookCards favourite={this.favourite} item={item}></BookCards>
                })}
              </Row>
            {/* </Route>
            <Route exact path="/profile"> */}
              <Profile
                favourtie={this.state.favourtie}
                deleteBook={this.deleteBook}
                getFavData={this.getFavData}
              />
              <Review favBooks={this.state.favourtie}/>
            {/* </Route> */}
          {/* </Switch>
        </Router> */}
      </>
    );
  }
}

export default withAuth0(Home);