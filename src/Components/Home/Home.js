import React from 'react';
import axios from 'axios';
import { withAuth0 } from '@auth0/auth0-react';
import Row from 'react-bootstrap/Row';
import BookCards from './BookCards';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      catgories:[],
      show: true,
      loading: true,
      favourtie: []
    }
  }
  componentDidMount = () => {
    
    const { user } = this.props.auth0; 
    const email = user.email
    axios.get('http://localhost:3001/')
      .then((results) => {
       this.setState({
        catgories:results.data
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
  favourite= (title,img,author,status,pages,infoLink)=>{
    const { user } = this.props.auth0; 
    const email = user.email
    console.log(email);
    let postArr= {
      title:title,
      img:img,
      author:author,
      status:status,
      email:email,
      pages:pages,
      infoLink:infoLink
    }
    
    // console.log(postArr);
    // change the route link in order to get the data i put att the deafult add 
    axios
    .post(`http://localhost:3001/add`,postArr)
    .then((response) => {
      console.log(response.data);
    })
    .catch((err) => {
      console.log(err.response);
    })
  }

  render() {

    // console.log(this.state.catgories)
    return (
      <>
       <Row xs={2} md={4} lg={6}>
      {this.state.catgories.map((item) => {
        return  <BookCards favourite={this.favourite} item= {item}></BookCards>
      })}
</Row>
     </>
    );
  }
}

export default withAuth0(Home);