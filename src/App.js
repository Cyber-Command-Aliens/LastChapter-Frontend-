//Imports Here =) 
import React from 'react';
import Home from './Components/Home/Home';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import Review from './Components/Review /Review';
//Render The Components Between the Header and The footer 
class app extends React.Component {
  render() {
    return (
      <>
        <Header></Header>
        <Review/>
        <Home></Home>






        <Footer></Footer>
      </>
    );
  }
}

export default app;
