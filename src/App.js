//Imports Here =) 
import React from 'react';
import Home from './Components/Home/Home';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import { withAuth0 } from '@auth0/auth0-react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Review from './Components/Review /Review';
import Login from './Components/Login/Login';
import Profile from './Components/Profile/Profile';
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
    const { user } = this.props.auth0;
    
    return (
      <>
     
       {!isAuthenticated &&
                <Login></Login>

              }
              {isAuthenticated && 
        <Header user={this.state.user} onLogout={this.logoutHandler}></Header>
              }
        {isAuthenticated &&
      <Home></Home>
      }
      
      {isAuthenticated &&
      <Review/>
      }

        {isAuthenticated &&
        <Footer></Footer>
        }
      </>
    );
  }
}

export default withAuth0(app);
