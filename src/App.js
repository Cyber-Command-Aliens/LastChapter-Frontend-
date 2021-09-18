//Imports Here =) 
import React from 'react';
import Home from './Components/Home/Home';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import { withAuth0 } from '@auth0/auth0-react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Review from './Components/Review /Review';
//Render The Components Between the Header and The footer 
class app extends React.Component {
  constructor(props){
    super(props)
    this.state={
      user: null 
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
  
  render()
   {
    const { isAuthenticated } = this.props.auth0;
    return (
      <>
        <Header user={this.state.user} onLogout={this.logoutHandler} ></Header>
        {isAuthenticated &&
        <Header></Header>
      }
      <Review/>
      <Home></Home>


        <Footer></Footer>
      </>
    );
  }
}

export default withAuth0(app);
