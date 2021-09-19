//Imports Here =) 
import React from 'react';
import Home from './Components/Home/Home';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import { withAuth0 } from '@auth0/auth0-react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Review from './Components/Review /Review';
import Login from './Components/Login/Login';
import axios from 'axios';
import Row from 'react-bootstrap/Row';
import Profile from './Components/Profile/Profile';


import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

//Render The Components Between the Header and The footer 
class app extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      user: null,
      catgories: [],
      show: true,
      loading: true,
      favourtie: [],
    }
  }
  loginHandler = (user) => {
    this.setState({
      user,
    })
  }

  logoutHandler = () => {
    this.setState({
      user: null,
    })
  }
  componentDidMount = () => {

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

  getFavData = () => {
    const { user } = this.props.auth0;
    const email = user.email
    axios.get(`http://localhost:3001/profile?email=${email}`)
      .then((results) => {
        this.setState({
          favourtie: results.data
        })
        console.log('hi');

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
    const { isAuthenticated } = this.props.auth0;
    const { user } = this.props.auth0;
    return (
      <>
          {!isAuthenticated &&
            <Login></Login>

          }

<Router>
          {isAuthenticated &&
            <Header user={this.state.user} onLogout={this.logoutHandler}></Header>
          }
           {isAuthenticated &&
           <Route exact path = "/">
            <Home 
            catgories={this.state.catgories} 
            favourite={this.favourite}
            />
            </Route>
          }
          
         
            {isAuthenticated &&     
            <Route exact path = "/Profile"> 

            {/* component = { ()=> <Profile favourtie={this.state.favourtie} deleteBook={this.deleteBook} getFavData= {this.getFavData}
            />}> */}
            <Profile
            favourtie={this.state.favourtie} 
            deleteBook={this.deleteBook} 
            getFavData= {this.getFavData}
            />
            </Route>
          }
          
          {isAuthenticated &&

           <Route exact path = "/Review">
             <Review favBooks={this.state.favourtie}/>
           </Route> 
          }

          
       
        </Router>

         
            <Footer></Footer>
          
      </>

    );
  }
}

export default withAuth0(app);
