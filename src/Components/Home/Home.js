import React from 'react';
import axios from 'axios';
import { withAuth0 } from '@auth0/auth0-react';
import Row from 'react-bootstrap/Row';
import BookCards from './BookCards';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      adventure: [],
      classics: [],
      comics: [],
      mystery: [],
      historical: [],
      horror: [],
      Love: [],
      show: true,
      loading: true
    }
  }
  componentDidMount = () => {
    // const { user } = this.props.auth0; this is for the auth
    axios.get('http://localhost:3001/')
      .then((results) => {
        this.setState({
          adventure: results.data.Adventure,
          classics: results.data.Classics,
          comics: results.data.Comics,
          mystery: results.data.Mystery,
          historical: results.data.Historical,
          horror: results.data.Horror,
          Love: results.data.Love,
          vlaue: false

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
  favourite= ()=>{
    
  }

  render() {

    console.log(this.state.adventure)
    return (
      <>
      
     </>
    );
  }
}

export default withAuth0(Home);